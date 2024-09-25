'use client'

import React, { useState } from 'react';
import { 
  Card, CardContent, Typography, List, ListItem, Button, Box, Divider, Stack, 
  Dialog, DialogTitle, DialogContent, DialogActions, IconButton 
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GroupIcon from '@mui/icons-material/Group';
import SkillsIcon from '@mui/icons-material/Build';
import DeleteIcon from '@mui/icons-material/Delete';

export default function EventList() {
  const initialEvents = [
    {
      title: "Tree Planting Initiative",
      description: "Assisted in planting over 100 trees as part of an environmental conservation effort.",
      location: "Greenfield Park, Lapu-Lapu City, Cebu",
      startDate: "5/4/2024 1:00:00 PM",
      endDate: "5/15/2024 11:59:00 PM",
      participants: 60,
      skills: ["Planting", "Team Building"],
      image: "/Planting.jpg"
    },
    {
      title: "Community Donation Drive",
      description: "Organized a donation drive to collect essential supplies for families in need.",
      location: "Community Hall, Lapu-Lapu City, Cebu",
      startDate: "7/15/2024 9:00:00 AM",
      endDate: "7/18/2024 5:00:00 PM",
      participants: 70,
      skills: ["Logistics", "Team Coordination"],
      image: "/Donation.jpg"
    },
    {
      title: "Community Cleaning Initiative",
      description: "Join our Clean with Us campaign to help keep our environment pristine. Participate in local cleanup events and contribute to a healthier, cleaner community for everyone.",
      location: "Central Plaza, Lapu-Lapu City, Cebu",
      startDate: "8/12/2024 7:00:00 AM",
      endDate: "8/12/2024 12:00:00 PM",
      participants: 50,
      skills: ["Waste Management", "Leadership"],
      image: "/Cleaning.jpg"
    }
  ];

  const [events, setEvents] = useState(initialEvents);
  const [open, setOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Function to handle opening the modal
  const handleOpenModal = (event) => {
    setSelectedEvent(event);
    setOpen(true);
  };

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setOpen(false);
    setSelectedEvent(null);
  };

  return (
    <Box 
      sx={{ 
        maxWidth: '100%',      // Maximize to full width
        width: '95%',          // Occupy 95% of available width
        margin: '20px auto',   // Center it horizontally
        padding: { xs: '10px', sm: '20px' } 
      }}
    >
      <Card sx={{ boxShadow: 4, borderRadius: 3 }}>
        <CardContent>
          {/* Header */}
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
            <Typography variant="h5" component="div" fontWeight="bold">
              Upcoming Events
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              startIcon={<AddIcon />} 
              sx={{ textTransform: 'none', borderRadius: 2 }}
            >
              Add Event
            </Button>
          </Box>

          <Divider sx={{ mb: 3 }} />

          {/* Event List */}
          <List>
            {events.map((event, index) => (
              <ListItem 
                key={index} 
                sx={{ 
                  mb: 2, 
                  padding: '15px', 
                  borderRadius: '12px',
                  '&:hover': { backgroundColor: '#f0f4ff', cursor: 'pointer' }, 
                  boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                  display: 'flex', // Align content side by side
                  gap: '20px',
                  alignItems: 'center',
                  justifyContent: 'space-between' // Added space between content and delete button
                }}
                onClick={() => handleOpenModal(event)}
              >
                <Stack direction="row" spacing={2} alignItems="center">
                  {/* Event Image */}
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    style={{
                      width: '100px', 
                      height: '100px', 
                      objectFit: 'cover', 
                      borderRadius: '10px'
                    }} 
                  />

                  {/* Event Details */}
                  <Stack direction="column" spacing={1} width="100%">
                    {/* Event Title */}
                    <Typography variant="h6" fontWeight="bold">
                      {event.title}
                    </Typography>

                    {/* Event Date and Location */}
                    <Stack direction="row" spacing={2} alignItems="center" color="gray">
                      <EventIcon fontSize="small" />
                      <Typography variant="body2">{event.startDate} - {event.endDate}</Typography>

                      <LocationOnIcon fontSize="small" />
                      <Typography variant="body2">{event.location}</Typography>
                    </Stack>
                  </Stack>
                </Stack>

                {/* Delete Button */}
                <IconButton color="error">
                  <DeleteIcon />
                </IconButton>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>

      {/* Modal Dialog */}
      <Dialog open={open} onClose={handleCloseModal} maxWidth="sm" fullWidth>
        <DialogTitle>{selectedEvent?.title}</DialogTitle>
        <DialogContent>
          {selectedEvent && (
            <Stack spacing={2}>
              {/* Event Image */}
              <img 
                src={selectedEvent.image} 
                alt={selectedEvent.title} 
                style={{
                  width: '100%', 
                  height: '200px', 
                  objectFit: 'cover', 
                  borderRadius: '8px' 
                }} 
              />

              {/* Description */}
              <Typography variant="body1" paragraph>
                {selectedEvent.description}
              </Typography>

              {/* Participants */}
              <Stack direction="row" alignItems="center" spacing={1}>
                <GroupIcon fontSize="small" />
                <Typography variant="body2">{selectedEvent.participants} participants</Typography>
              </Stack>

              {/* Skills */}
              <Stack direction="row" alignItems="center" spacing={1}>
                <SkillsIcon fontSize="small" />
                <Typography variant="body2">Skills: {selectedEvent.skills.join(', ')}</Typography>
              </Stack>

              {/* Date and Location */}
              <Stack direction="row" alignItems="center" spacing={1}>
                <EventIcon fontSize="small" />
                <Typography variant="body2">Date: {selectedEvent.startDate} - {selectedEvent.endDate}</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <LocationOnIcon fontSize="small" />
                <Typography variant="body2">Location: {selectedEvent.location}</Typography>
              </Stack>
            </Stack>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} variant="contained" color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
