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
  Tabs,
  Tab,
  Avatar,
} from '@mui/material';

// Mock data for organizations
const organizationsData = [
  {
    id: 1,
    name: 'Green Earth Foundation',
    description: 'Dedicated to environmental conservation and sustainability initiatives across the Philippines.',
    validIdImage: '/images/validid.png',
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
    validIdImage: '/images/validid.png',
    contactNumber: '+63 923 456 7890',
    socialMedia: {
      facebook: 'https://facebook.com/youthempowerment',
      instagram: 'https://instagram.com/youthempowerment',
    },
    dateRegistered: '2023-12-01',
    status: 'Pending',
  },
  {
    id: 3,
    name: 'Health for All PH',
    description: 'Providing accessible healthcare services and medical education to underserved communities in the Philippines.',
    validIdImage: '/images/validid.png',
    contactNumber: '+63 934 567 8901',
    socialMedia: {
      facebook: 'https://facebook.com/healthforallph',
      twitter: 'https://twitter.com/healthforallph',
    },
    dateRegistered: '2024-01-05',
    status: 'Active',
  },
];

// Mock data for volunteers
const volunteersData = [
  {
    id: 1,
    name: 'Maria Santos',
    gmail: 'maria.santos@gmail.com',
    profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&q=80',
    skills: ['Teaching', 'First Aid', 'Event Planning'],
    dateRegistered: '2023-10-20',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Juan Dela Cruz',
    gmail: 'juan.delacruz@gmail.com',
    profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80',
    skills: ['Web Development', 'Graphic Design', 'Social Media Management'],
    dateRegistered: '2023-11-05',
    status: 'Inactive',
  },
  {
    id: 3,
    name: 'Ana Reyes',
    gmail: 'ana.reyes@gmail.com',
    profileImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&q=80',
    skills: ['Environmental Science', 'Public Speaking', 'Project Management'],
    dateRegistered: '2024-01-10',
    status: 'Active',
  },
];

export default function ManageAccountPage() {
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [organizations, setOrganizations] = useState(organizationsData);
  const [volunteers, setVolunteers] = useState(volunteersData);
  const [tabValue, setTabValue] = useState(0);

  const handleOpenModal = (account) => {
    setSelectedAccount(account);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedAccount(null);
    setModalOpen(false);
  };

  const handleToggleStatus = (id, isOrganization) => {
    if (isOrganization) {
      setOrganizations(organizations.map((org) => {
        if (org.id === id) {
          const newStatus = org.status === 'Active' ? 'Inactive' : 'Active';
          return { ...org, status: newStatus };
        }
        return org;
      }));
    } else {
      setVolunteers(volunteers.map((vol) => {
        if (vol.id === id) {
          const newStatus = vol.status === 'Active' ? 'Inactive' : 'Active';
          return { ...vol, status: newStatus };
        }
        return vol;
      }));
    }
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

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ p: 6, bgcolor: '#d9f2ff', minHeight: '100vh' }}>
      <Typography variant="h4" sx={{ mb: 6, fontWeight: 'bold', textAlign: 'center', color: 'text.primary' }}>
        Manage Accounts
      </Typography>

      <Tabs value={tabValue} onChange={handleTabChange} centered sx={{ mb: 4 }}>
        <Tab label="Organizations" />
        <Tab label="Volunteers" />
      </Tabs>

      <Box sx={{ display: tabValue === 0 ? 'block' : 'none' }}>
        {organizations.map((org) => (
          <Paper key={org.id} sx={{ p: 3, mb: 3, '&:hover': { boxShadow: 6 }, transition: 'box-shadow 0.3s' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <Box sx={{ flex: 1, mr: 2, mb: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'text.primary' }}>{org.name}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                  Registered on: {org.dateRegistered}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.primary', mb: 2 }}>
                  {truncateText(org.description, 150)}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 1 }}>
                  {statusChip(org.status)}
                  <SocialMediaLinks socialMedia={org.socialMedia} />
                </Box>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Button
                  onClick={() => handleOpenModal(org)}
                  variant="outlined"
                  fullWidth
                >
                  View Details
                </Button>
                <Button
                  onClick={() => handleToggleStatus(org.id, true)}
                  variant="contained"
                  color={org.status === 'Active' ? 'error' : 'success'}
                  fullWidth
                >
                  {org.status === 'Active' ? 'Deactivate' : 'Activate'}
                </Button>
              </Box>
            </Box>
          </Paper>
        ))}
      </Box>

      <Box sx={{ display: tabValue === 1 ? 'block' : 'none' }}>
        {volunteers.map((vol) => (
          <Paper key={vol.id} sx={{ p: 3, mb: 3, '&:hover': { boxShadow: 6 }, transition: 'box-shadow 0.3s' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar src={vol.profileImage} alt={vol.name} sx={{ width: 60, height: 60, mr: 2 }} />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'text.primary' }}>{vol.name}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{vol.gmail}</Typography>
                </Box>
              </Box>
              <Box sx={{ flex: 1, mr: 2, mb: 2, textAlign: 'center' }}>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                  Registered on: {vol.dateRegistered}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.primary', mb: 2 }}>
                  Skills: {vol.skills.join(', ')}
                </Typography>
                {statusChip(vol.status)}
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Button
                  onClick={() => handleOpenModal(vol)}
                  variant="outlined"
                  fullWidth
                >
                  View Details
                </Button>
                <Button
                  onClick={() => handleToggleStatus(vol.id, false)}
                  variant="contained"
                  color={vol.status === 'Active' ? 'error' : 'success'}
                  fullWidth
                >
                  {vol.status === 'Active' ? 'Deactivate' : 'Activate'}
                </Button>
              </Box>
            </Box>
          </Paper>
        ))}
      </Box>

      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        aria-labelledby="account-modal-title"
        aria-describedby="account-modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          maxWidth: '90%',
          maxHeight: '90%',
          overflow: 'auto',
          width: 600,
        }}>
          {selectedAccount && (
            <>
              <Typography id="account-modal-title" variant="h5" component="h2" sx={{ mb: 2, fontWeight: 'bold', color: 'text.primary' }}>
                {selectedAccount.name}
              </Typography>
              <Divider sx={{ mb: 3 }} />
              <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3 }}>
                {'description' in selectedAccount ? (
                  // Organization specific fields
                  <>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'text.secondary', mb: 1 }}>Description:</Typography>
                      <Typography variant="body1" sx={{ color: 'text.primary' }}>{selectedAccount.description}</Typography>
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'text.secondary', mb: 1 }}>Valid ID:</Typography>
                      <Box sx={{ width: '100%', height: 150, borderRadius: 1, overflow: 'hidden' }}>
                        <img
                          src={selectedAccount.validIdImage}
                          alt="Valid ID"
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </Box>
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'text.secondary', mb: 1 }}>Contact Number:</Typography>
                      <Typography variant="body1" sx={{ color: 'text.primary' }}>{selectedAccount.contactNumber}</Typography>
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'text.secondary', mb: 1 }}>Social Media:</Typography>
                      <SocialMediaLinks socialMedia={selectedAccount.socialMedia} />
                    </Box>
                  </>
                ) : (
                  // Volunteer specific fields
                  <>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'text.secondary', mb: 1 }}>Email:</Typography>
                      <Typography variant="body1" sx={{ color: 'text.primary' }}>{selectedAccount.gmail}</Typography>
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'text.secondary', mb: 1 }}>Profile Image:</Typography>
                      <Avatar src={selectedAccount.profileImage} alt={selectedAccount.name} sx={{ width: 100, height: 100 }} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'text.secondary', mb: 1 }}>Skills:</Typography>
                      <Typography variant="body1" sx={{ color: 'text.primary' }}>{selectedAccount.skills.join(', ')}</Typography>
                    </Box>
                  </>
                )}
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'text.secondary', mb: 1 }}>Date Registered:</Typography>
                  <Typography variant="body1" sx={{ color: 'text.primary' }}>{selectedAccount.dateRegistered}</Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'text.secondary', mb: 1 }}>Status:</Typography>
                  {statusChip(selectedAccount.status)}
                </Box>
              </Box>
              <Divider sx={{ my: 3 }} />
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button onClick={handleCloseModal} variant="contained" color="primary">
                  Close
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
}

