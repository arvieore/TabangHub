import React from 'react';
import { Box, Typography, Chip, Divider, Button } from '@mui/material';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import CancelIcon from '@mui/icons-material/Cancel';

export default function DonationHistory() {
  const donationData = [
    {
      id: 1,
      event: "Community Food Drive",
      date: "7/18/2024",
      amount: "5000 PHP",
      description: "Donated to provide meals for underprivileged families.",
      status: "Completed",
    },
    {
      id: 2,
      event: "School Supplies Drive",
      date: "8/5/2024",
      amount: "3000 PHP",
      description: "Donated school supplies for students in need.",
      status: "Pending",
    },
    {
      id: 3,
      event: "Disaster Relief Fund",
      date: "9/2/2024",
      amount: "7000 PHP",
      description: "Provided financial assistance to families affected by the recent typhoon.",
      status: "Failed",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto mt-[100px] mb-6 p-4 bg-slate-100 rounded rounded-xl">
      <Typography variant="h4" className="text-center mb-6">
        Donation History
      </Typography>
      
      {/* Search Bar */}
      <Box className="mb-4 flex justify-between items-center">
        <input
          type="text"
          placeholder="Search donations..."
          className="border border-gray-300 p-2 rounded-lg w-full mr-2"
        />
        <Button variant="contained" color="primary">
          Search
        </Button>
      </Box>

      {/* Donation List */}
      {donationData.map((donation) => (
        <Box
          key={donation.id}
          className="bg-white rounded-lg shadow-md p-4 mb-4"
        >
          <Typography variant="h6" className="font-semibold">
            {donation.event}
          </Typography>

          <Box className="flex items-center mt-1 text-sm text-gray-500">
            <DateRangeIcon className="mr-1" />
            {donation.date}
          </Box>

          <Box className="flex items-center mt-2">
            <AttachMoneyIcon className="mr-1 text-gray-500" />
            <Typography variant="body2">
              Amount Donated: {donation.amount}
            </Typography>
          </Box>

          <Typography variant="body2" className="mt-2">
            {donation.description}
          </Typography>

          <Box className="flex items-center mt-4">
            {donation.status === "Completed" && (
              <Chip
                icon={<CheckCircleIcon />}
                label="Completed"
                color="success"
                className="mr-2"
              />
            )}
            {donation.status === "Pending" && (
              <Chip
                icon={<HourglassEmptyIcon />}
                label="Pending"
                color="warning"
                className="mr-2"
              />
            )}
            {donation.status === "Failed" && (
              <Chip
                icon={<CancelIcon />}
                label="Failed"
                color="error"
                className="mr-2"
              />
            )}
          </Box>
        </Box>
      ))}

      {/* Pagination */}
      <Box className="flex justify-center mt-6">
        <Button variant="outlined" color="primary" className="mr-2">
          Previous
        </Button>
        <Button variant="contained" color="primary">
          Next
        </Button>
      </Box>
    </div>
  );
}
