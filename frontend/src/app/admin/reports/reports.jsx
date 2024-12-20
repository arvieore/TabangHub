"use client";
import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Business as BusinessIcon,
  People as PeopleIcon,
  MonetizationOn as MonetizationOnIcon,
  Event as EventIcon,
  EmojiEvents as TrophyIcon,
} from '@mui/icons-material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Mock data
const monthlyEvents = [
  { month: 'Jan', events: 12 },
  { month: 'Feb', events: 15 },
  { month: 'Mar', events: 18 },
  { month: 'Apr', events: 14 },
  { month: 'May', events: 22 },
  { month: 'Jun', events: 25 },
  { month: 'Jul', events: 20 },
  { month: 'Aug', events: 28 },
  { month: 'Sep', events: 30 },
  { month: 'Oct', events: 24 },
  { month: 'Nov', events: 32 },
  { month: 'Dec', events: 35 },
];

const topDonors = [
  { id: 1, name: 'John Smith', totalDonated: 50000 },
  { id: 2, name: 'Maria Garcia', totalDonated: 45000 },
  { id: 3, name: 'Robert Chen', totalDonated: 40000 },
  { id: 4, name: 'Sarah Johnson', totalDonated: 35000 },
  { id: 5, name: 'Michael Lee', totalDonated: 30000 },
];

const summaryStats = {
  organizations: 125,
  volunteers: 1250,
  totalDonations: 2500000,
  totalEvents: 275
};

// Stats Card Component
const StatsCard = ({ title, value, icon: Icon, color }) => (
  <Card sx={{ height: '100%' }}>
    <CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Box
          sx={{
            backgroundColor: `${color}15`,
            borderRadius: '50%',
            p: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mr: 2
          }}
        >
          <Icon sx={{ color: color }} />
        </Box>
        <Typography variant="h6" component="div" sx={{ color: 'text.secondary' }}>
          {title}
        </Typography>
      </Box>
      <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
        {value}
      </Typography>
    </CardContent>
  </Card>
);

// Monthly Events Chart Component
const MonthlyEventsChart = ({ data }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Card sx={{ height: '100%', minHeight: 400 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Monthly Events
        </Typography>
        <Box sx={{ width: '100%', height: 350 }}>
          <ResponsiveContainer>
            <BarChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="month" 
                fontSize={12}
                angle={isMobile ? -45 : 0}
                textAnchor={isMobile ? 'end' : 'middle'}
                height={60}
              />
              <YAxis />
              <Tooltip />
              <Bar dataKey="events" fill={theme.palette.primary.main} />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

// Top Donors Component
const TopDonors = ({ donors }) => {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Top 5 Donors
        </Typography>
        <List sx={{ width: '100%' }}>
          {donors.map((donor, index) => (
            <ListItem
              key={donor.id}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                py: 1,
              }}
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: index === 0 ? 'warning.main' : 'primary.main' }}>
                  {getInitials(donor.name)}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={donor.name}
                secondary={formatCurrency(donor.totalDonated)}
                primaryTypographyProps={{ fontWeight: 500 }}
              />
              {index === 0 && (
                <TrophyIcon sx={{ color: 'warning.main' }} />
              )}
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

// Main Reports Dashboard Component
export default function ReportsDashboard() {
  const theme = useTheme();

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Box sx={{ bgcolor: '#d9f2ff', minHeight: '100vh', py: 8 }}>
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" sx={{ mb: 4, fontWeight: 'bold' }}>
        Reports Dashboard
      </Typography>

      <Grid container spacing={3}>
        {/* Summary Stats Cards */}
        <Grid item xs={12} sm={6} md={3}>
          <StatsCard
            title="Organizations"
            value={summaryStats.organizations}
            icon={BusinessIcon}
            color={theme.palette.primary.main}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatsCard
            title="Volunteers"
            value={summaryStats.volunteers}
            icon={PeopleIcon}
            color={theme.palette.success.main}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatsCard
            title="Total Events"
            value={summaryStats.totalEvents}
            icon={EventIcon}
            color={theme.palette.info.main}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatsCard
            title="Total Donations"
            value={formatCurrency(summaryStats.totalDonations)}
            icon={MonetizationOnIcon}
            color={theme.palette.warning.main}
          />
        </Grid>

        {/* Charts and Lists */}
        <Grid item xs={12} md={8}>
          <MonthlyEventsChart data={monthlyEvents} />
        </Grid>
        <Grid item xs={12} md={4}>
          <TopDonors donors={topDonors} />
        </Grid>
      </Grid>
    </Container>
    </Box>
  );
}

