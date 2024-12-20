import React, { useState } from 'react';
import {
  Paper,
  Button,
  Modal,
  Typography,
  Box,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Card,
  CardMedia,
  Grid,
  Container,
  IconButton,
  Divider,
  TextField,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PeopleIcon from '@mui/icons-material/People';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const EventsPage = () => {
  const eventsData = [
    {
      id: 1,
      organizationName: 'Health Aid Organization',
      title: 'Medical Support',
      description: 'Providing medical supplies to communities in need.',
      img: '/images/medical_support.jpg',
      location: 'ICM Lapu-Lapu City',
      dateStart: '2024-12-10 10:00 AM',
      dateEnd: '2024-12-15 05:00 PM',
      volunteerJoined: 15,
      maxVolunteers: 50,
      status: 'Ongoing',
    },
    {
      id: 2,
      organizationName: 'Eco Warriors',
      title: 'Environmental Cleanup',
      description: 'A beach cleanup activity.',
      img: '/images/cleanup.jpg',
      location: 'Mactan Beach',
      dateStart: '2024-12-20 07:00 AM',
      dateEnd: '2024-12-20 01:00 PM',
      volunteerJoined: 30,
      maxVolunteers: 100,
      status: 'Upcoming',
    },
    {
      id: 3,
      organizationName: 'Food for All',
      title: 'Food Drive',
      description: 'Distributing food packages to underprivileged families.',
      img: '/images/food_drive.jpg',
      location: 'Cebu City Central School',
      dateStart: '2024-12-18 09:00 AM',
      dateEnd: '2024-12-18 02:00 PM',
      volunteerJoined: 40,
      maxVolunteers: 70,
      status: 'Ongoing',
    },
    {
      id: 4,
      organizationName: 'Green Earth Foundation',
      title: 'Tree Planting',
      description: 'Planting trees in deforested areas to promote reforestation.',
      img: '/images/tree_planting.jpg',
      location: 'Busay Hills',
      dateStart: '2024-12-22 08:00 AM',
      dateEnd: '2024-12-22 03:00 PM',
      volunteerJoined: 20,
      maxVolunteers: 50,
      status: 'Upcoming',
    },
    {
      id: 5,
      organizationName: 'Red Cross Society',
      title: 'Blood Donation Drive',
      description: 'Encouraging people to donate blood to save lives.',
      img: '/images/blood_donation.jpg',
      location: 'Red Cross Center, Cebu City',
      dateStart: '2024-12-14 09:00 AM',
      dateEnd: '2024-12-14 05:00 PM',
      volunteerJoined: 25,
      maxVolunteers: 100,
      status: 'Ongoing',
    },
    {
      id: 6,
      organizationName: 'Community Builders',
      title: 'Community Cleanup',
      description: 'Cleaning and beautifying local parks and streets.',
      img: '/images/community_cleanup.jpg',
      location: 'Downtown Cebu',
      dateStart: '2024-12-25 07:00 AM',
      dateEnd: '2024-12-25 11:00 AM',
      volunteerJoined: 10,
      maxVolunteers: 30,
      status: 'Upcoming',
    },
    {
      id: 7,
      organizationName: 'Youth Advocates',
      title: 'Education Drive',
      description: 'Providing educational resources to remote schools.',
      img: '/images/education_drive.jpg',
      location: 'Mountain Barangay, Cebu',
      dateStart: '2024-12-19 08:00 AM',
      dateEnd: '2024-12-19 05:00 PM',
      volunteerJoined: 18,
      maxVolunteers: 40,
      status: 'Ongoing',
    },
    {
      id: 8,
      organizationName: 'Animal Lovers League',
      title: 'Pet Adoption Drive',
      description: 'Helping stray animals find their forever homes.',
      img: '/images/pet_adoption.jpg',
      location: 'Ayala Center Cebu',
      dateStart: '2024-12-16 10:00 AM',
      dateEnd: '2024-12-16 06:00 PM',
      volunteerJoined: 12,
      maxVolunteers: 20,
      status: 'Ongoing',
    },
    {
      id: 9,
      organizationName: 'Disaster Relief Network',
      title: 'Relief Goods Distribution',
      description: 'Distributing relief goods to families affected by floods.',
      img: '/images/relief_goods.jpg',
      location: 'Talamban Gymnasium',
      dateStart: '2024-12-12 09:00 AM',
      dateEnd: '2024-12-12 03:00 PM',
      volunteerJoined: 35,
      maxVolunteers: 50,
      status: 'Ongoing',
    },
    {
      id: 10,
      organizationName: 'Clean Water Initiative',
      title: 'Water Filter Installation',
      description: 'Installing water filters in rural communities.',
      img: '/images/water_filter.jpg',
      location: 'North Cebu',
      dateStart: '2024-12-28 08:00 AM',
      dateEnd: '2024-12-28 04:00 PM',
      volunteerJoined: 22,
      maxVolunteers: 50,
      status: 'Upcoming',
    },
  ];
  
  const [filteredEvents, setFilteredEvents] = useState(eventsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = (event) => {
    setSelectedEvent(event);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
    setModalOpen(false);
  };

  const getStatusColor = (status) => {
    return {
      Ongoing: 'success',
      Upcoming: 'warning',
    }[status] || 'default';
  };

  const handleSearchChange = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    setFilteredEvents(
      eventsData.filter(
        (event) =>
          event.title.toLowerCase().includes(term) ||
          event.description.toLowerCase().includes(term)
      )
    );
  };

  return (
    <Box sx={{ bgcolor: '#d9f2ff', minHeight: '100vh', py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h1"
          sx={{
            mb: 6,
            fontWeight: 700,
            textAlign: 'center',
            color: 'text.primary',
          }}
        >
          Events
        </Typography>

        <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
          <TextField
            label="Search events"
            variant="outlined"
            value={searchTerm}
            onChange={handleSearchChange}
            fullWidth
            sx={{ maxWidth: 600, bgcolor: 'white' }}
          />
        </Box>

        <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 3 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: 'grey.100' }}>
                <TableCell sx={{ fontWeight: 600 }}>Event Title</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Description</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredEvents.map((event) => (
                <TableRow
                  key={event.id}
                  sx={{ '&:hover': { bgcolor: 'grey.50' } }}
                >
                  <TableCell>{event.title}</TableCell>
                  <TableCell>{event.description}</TableCell>
                  <TableCell>
                    <Chip
                      label={event.status}
                      color={getStatusColor(event.status)}
                      sx={{ fontWeight: 500 }}
                    />
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      startIcon={<VisibilityIcon />}
                      onClick={() => handleOpenModal(event)}
                      sx={{ textTransform: 'none' }}
                    >
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Modal
          open={modalOpen}
          onClose={handleCloseModal}
          aria-labelledby="event-modal-title"
        >
          <Card
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '90%',
              maxWidth: 600,
              maxHeight: '90vh',
              overflow: 'auto',
              borderRadius: 2,
              p: 3,
            }}
          >
            {selectedEvent && (
              <>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 2,
                  }}
                >
                  <Typography variant="h5" component="h2" fontWeight={700}>
                    {selectedEvent.title}
                  </Typography>
                  <IconButton onClick={handleCloseModal} size="small">
                    <CloseIcon />
                  </IconButton>
                </Box>

                <CardMedia
                  component="img"
                  image={selectedEvent.img}
                  alt={selectedEvent.title}
                  sx={{
                    height: 250,
                    borderRadius: 1,
                    objectFit: 'cover',
                    mb: 3,
                  }}
                />

                {/* Additional event details */}
              </>
            )}
          </Card>
        </Modal>
      </Container>
    </Box>
  );
};

export default EventsPage;
