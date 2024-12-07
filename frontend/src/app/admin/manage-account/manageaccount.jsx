'use client';

import React, { useState } from 'react';
import {
  Paper,
  Button,
  Modal,
  Typography,
  Box,
  Chip,
  Divider,
} from '@mui/material';

// Mock data for organizations
const organizationsData = [
  {
    id: 1,
    name: 'Green Earth Foundation',
    description: 'Dedicated to environmental conservation and sustainability initiatives across the Philippines.',
    validIdImage: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=500&q=80',
    contactNumber: '+63 912 345 6789',
    socialMedia: {
      facebook: 'https://facebook.com/greenearth',
      twitter: 'https://twitter.com/greenearth',
      instagram: 'https://instagram.com/greenearth',
    },
    dateRegistered: '2023-11-15',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Youth Empowerment Network',
    description: 'Empowering Filipino youth through education, leadership training, and community engagement programs.',
    validIdImage: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=500&q=80',
    contactNumber: '+63 923 456 7890',
    socialMedia: {
      facebook: 'https://facebook.com/youthempowerment',
      instagram: 'https://instagram.com/youthempowerment',
      linkedin: 'https://linkedin.com/company/youthempowerment',
    },
    dateRegistered: '2023-12-01',
    status: 'Pending',
  },
  // Add more organizations as needed
];

export default function ManageAccountPage() {
  const [selectedOrg, setSelectedOrg] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [organizations, setOrganizations] = useState(organizationsData);

  const handleOpenModal = (org) => {
    setSelectedOrg(org);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedOrg(null);
    setModalOpen(false);
  };

  const handleToggleStatus = (id) => {
    setOrganizations(organizations.map((org) => {
      if (org.id === id) {
        const newStatus = org.status === 'Active' ? 'Inactive' : 'Active';
        return { ...org, status: newStatus };
      }
      return org;
    }));
  };

  const statusChip = (status) => {
    let color = 'default';
    switch (status) {
      case 'Active':
        color = 'success';
        break;
      case 'Pending':
        color = 'warning';
        break;
      case 'Inactive':
        color = 'error';
        break;
    }
    return <Chip label={status} color={color} size="small" />;
  };

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  const SocialMediaLinks = ({ socialMedia }) => {
    return (
      <div className="flex space-x-2">
        {Object.entries(socialMedia).map(([platform, url]) => (
          <a
            key={platform}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-sm capitalize"
          >
            {platform}
          </a>
        ))}
      </div>
    );
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <Typography variant="h4" className="mb-6 font-bold text-center text-gray-800">
        Manage Organizations
      </Typography>
      <div className="space-y-4">
        {organizations.map((org) => (
          <Paper key={org.id} className="p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="flex-grow">
                <Typography variant="h6" className="font-bold text-gray-800">{org.name}</Typography>
                <Typography variant="body2" className="text-gray-600 mb-2">
                  Registered on: {forg.dateRegistered}
                </Typography>
                <Typography variant="body2" className="text-gray-700 mb-2">
                  {truncateText(org.description, 150)}
                </Typography>
                <div className="flex items-center space-x-2">
                  {statusChip(org.status)}
                  <SocialMediaLinks socialMedia={org.socialMedia} />
                </div>
              </div>
              <div className="flex flex-col items-start md:items-end mt-4 md:mt-0">
                <Button
                  onClick={() => handleOpenModal(org)}
                  variant="outlined"
                  className="mb-2 w-full md:w-auto"
                >
                  View Details
                </Button>
                <Button
                  onClick={() => handleToggleStatus(org.id)}
                  variant="contained"
                  color={org.status === 'Active' ? 'error' : 'success'}
                  className="w-full md:w-auto"
                >
                  {org.status === 'Active' ? 'Deactivate' : 'Activate'}
                </Button>
              </div>
            </div>
          </Paper>
        ))}
      </div>

      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        aria-labelledby="org-modal-title"
        aria-describedby="org-modal-description"
      >
        <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-xl w-11/12 max-w-3xl">
          {selectedOrg && (
            <>
              <Typography id="org-modal-title" variant="h5" component="h2" className="mb-4 font-bold text-gray-800">
                {selectedOrg.name}
              </Typography>
              <Divider className="mb-4" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Typography variant="subtitle1" className="font-bold text-gray-700 mb-2">Description:</Typography>
                  <Typography variant="body1" className="text-gray-600">{selectedOrg.description}</Typography>
                </div>
                <div>
                  <Typography variant="subtitle1" className="font-bold text-gray-700 mb-2">Valid ID:</Typography>
                  <div className="relative w-full h-48 rounded-md overflow-hidden">
                    <img
                      src={selectedOrg.validIdImage}
                      alt="Valid ID"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <Typography variant="subtitle1" className="font-bold text-gray-700 mb-2">Contact Number:</Typography>
                  <Typography variant="body1" className="text-gray-600">{selectedOrg.contactNumber}</Typography>
                </div>
                <div>
                  <Typography variant="subtitle1" className="font-bold text-gray-700 mb-2">Social Media:</Typography>
                  <SocialMediaLinks socialMedia={selectedOrg.socialMedia} />
                </div>
                <div>
                  <Typography variant="subtitle1" className="font-bold text-gray-700 mb-2">Date Registered:</Typography>
                  <Typography variant="body1" className="text-gray-600">{selectedOrg.dateRegistered}</Typography>
                </div>
                <div>
                  <Typography variant="subtitle1" className="font-bold text-gray-700 mb-2">Status:</Typography>
                  {statusChip(selectedOrg.status)}
                </div>
              </div>
              <Divider className="my-4" />
              <div className="flex justify-end">
                <Button onClick={handleCloseModal} variant="contained" color="primary">
                  Close
                </Button>
              </div>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
}

