import React, { useState } from 'react';
import {
  Paper,
  Button,
  Modal,
  Typography,
  Box,
  Chip,
} from '@mui/material';

const eventsData = [
  {
    id: 1,
    organizationName: 'Health Aid Organization',
    title: 'Medical Support',
    description: 'Providing medical supplies to communities in need.',
    img: '/placeholder.svg',
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
    img: '/placeholder.svg',
    location: 'Mactan Beach',
    dateStart: '2024-12-20 07:00 AM',
    dateEnd: '2024-12-20 01:00 PM',
    volunteerJoined: 30,
    maxVolunteers: 100,
    status: 'Upcoming',
  },
];

export default function EventsPage() {
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

  const statusChip = (status) => {
    const chipStyles = {
      backgroundColor: status === 'Ongoing' ? '#3bb041' : '#d26419',
      color: '#fff', // Ensures the text is readable
      textTransform: 'capitalize',
      fontWeight: 'bold', // Makes the text more prominent
      padding: '0 10px',
    };

    return (
      <Chip
        label={status}
        style={chipStyles}
      />
    );
  };

  return (
    <div className="p-6 bg-[#d9f2ff] min-h-screen">
      <Typography
        variant="h4"
        className="mb-4 font-bold text-center text-gray-800 mt-20"
      >
        Events
      </Typography>
      <Paper elevation={3} className="overflow-x-auto p-4">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 font-semibold text-left">Event Title</th>
              <th className="py-2 px-4 font-semibold text-left">Description</th>
              <th className="py-2 px-4 font-semibold text-left">Status</th>
              <th className="py-2 px-4 font-semibold text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {eventsData.map((event) => (
              <tr key={event.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b border-gray-200">{event.title}</td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {event.description}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {statusChip(event.status)}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={() => handleOpenModal(event)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Paper>

      {selectedEvent && (
        <Modal
          open={modalOpen}
          onClose={handleCloseModal}
          aria-labelledby="event-modal-title"
          aria-describedby="event-modal-description"
        >
          <Box
            className="bg-white p-6 rounded-md shadow-xl"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '90%',
              maxWidth: '500px',
            }}
          >
            <Typography
              id="event-modal-title"
              variant="h5"
              className="font-bold mb-4"
            >
              {selectedEvent.title}
            </Typography>
            {statusChip(selectedEvent.status)}
            <div className="mt-4 mb-4 relative w-full h-48">
              <img
                src={selectedEvent.img}
                alt={selectedEvent.title}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <Typography variant="body1" className="font-semibold">
                Organization:
              </Typography>
              <Typography variant="body1" className="text-right">
                {selectedEvent.organizationName}
              </Typography>
              <Typography variant="body1" className="font-semibold">
                Description:
              </Typography>
              <Typography variant="body1" className="text-right">
                {selectedEvent.description}
              </Typography>
              <Typography variant="body1" className="font-semibold">
                Location:
              </Typography>
              <Typography variant="body1" className="text-right">
                {selectedEvent.location}
              </Typography>
              <Typography variant="body1" className="font-semibold">
                Start Time:
              </Typography>
              <Typography variant="body1" className="text-right">
                {selectedEvent.dateStart}
              </Typography>
              <Typography variant="body1" className="font-semibold">
                End Time:
              </Typography>
              <Typography variant="body1" className="text-right">
                {selectedEvent.dateEnd}
              </Typography>
              <Typography variant="body1" className="font-semibold">
                Volunteers:
              </Typography>
              <Typography variant="body1" className="text-right">
                {selectedEvent.volunteerJoined}/{selectedEvent.maxVolunteers}
              </Typography>
            </div>
            <Button
              variant="contained"
              color="info"
              className="mt-4 capitalize"
              onClick={handleCloseModal}
            >
              Close
            </Button>
          </Box>
        </Modal>
      )}
    </div>
  );
}
