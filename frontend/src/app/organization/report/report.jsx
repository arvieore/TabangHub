import React from 'react';
import { Box, Typography, Paper, Accordion, AccordionSummary, AccordionDetails, Grid, Chip, Avatar } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GroupsIcon from '@mui/icons-material/Groups';
import PaidIcon from '@mui/icons-material/Paid';

const events = [
    {
        title: "Tree Planting Activity",
        description: "A community-based event aimed at reforesting local areas by planting over 1000 trees.",
        location: "Mountain View, Eco Park",
        date: "Sep 20-21, 2024",
        volunteers: 150,
        donations: 50000,
        skills: ["Planting", "Logistics", "Team Coordination"]
    },
    {
        title: "Beach Cleanup Drive",
        description: "A collective effort to clean up coastal areas and promote environmental awareness.",
        location: "Sunny Beach",
        date: "Aug 15, 2024",
        volunteers: 120,
        donations: 30000,
        skills: ["Waste Management", "Logistics", "Community Engagement"]
    },
];

export default function MultiEventReport() {
    return (
        <Box sx={{ padding: '40px', backgroundColor: '#f4f6f8', borderRadius: '15px', marginBottom: '1%', minHeight: '100vh' }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '30px' }}>
                Event Reports
            </Typography>

            {events.map((event, index) => (
                <Accordion key={index} sx={{ marginBottom: '20px' }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', flexBasis: '33.33%', flexShrink: 0 }}>
                            {event.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {event.date} - {event.location}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container spacing={4}>
                            {/* Description */}
                            <Grid item xs={12}>
                                <Typography variant="body1" sx={{ color: '#424242', fontStyle: 'italic' }}>
                                    {event.description}
                                </Typography>
                            </Grid>

                            {/* Location and Date */}
                            <Grid item xs={6}>
                                <Chip
                                    icon={<LocationOnIcon />}
                                    label={event.location}
                                    sx={{ backgroundColor: '#e0f2f1', fontWeight: 'bold', fontSize: '16px' }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Chip
                                    icon={<CalendarMonthIcon />}
                                    label={event.date}
                                    sx={{ backgroundColor: '#e3f2fd', fontWeight: 'bold', fontSize: '16px' }}
                                />
                            </Grid>

                            {/* Volunteers */}
                            <Grid item xs={6}>
                                <Chip
                                    icon={<GroupsIcon />}
                                    label={`${event.volunteers} Volunteers`}
                                    sx={{ backgroundColor: '#f3e5f5', fontWeight: 'bold', fontSize: '16px' }}
                                />
                            </Grid>

                            {/* Donations */}
                            <Grid item xs={6}>
                                <Chip
                                    icon={<PaidIcon />}
                                    label={`₱${event.donations.toLocaleString()} Donations Raised`}
                                    sx={{ backgroundColor: '#fff3e0', fontWeight: 'bold', fontSize: '16px' }}
                                />
                            </Grid>

                            {/* Skills Involved */}
                            <Grid item xs={12}>
                                <Typography variant="body1" sx={{ fontWeight: 'bold', marginTop: '20px', color: '#2e7d32' }}>
                                    Skills Involved:
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#424242' }}>
                                    {event.skills.join(", ")}
                                </Typography>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    );
}
