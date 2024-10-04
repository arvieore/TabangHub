import React from 'react';
import { Box, Typography, Avatar, Grid, Button, Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function OrgProfile() {
  return (
    <Box sx={{ p: 4, bgcolor: '#f5f5f5', borderRadius: '8px' }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Avatar 
            alt="Organization Logo" 
            src="/org.png" // Replace with your logo path
            sx={{ width: 150, height: 150, margin: '0 auto' }}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="h4" component="h1" gutterBottom>
            Community Catalyst
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
          Community Catalyst focuses on inspiring and enabling grassroots movements through education, mentorship, and networking opportunities. 
          We believe in the power of collective effort to create lasting positive change within our communities.
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Edit Profile
          </Button>
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" component="h2" gutterBottom>
        Contact Information
      </Typography>
      <Typography variant="body1" color="textSecondary">
        Email: comcatalyst@gmail.com
      </Typography>
      <Typography variant="body1" color="textSecondary">
        Phone: +123 456 7890
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" component="h2" gutterBottom>
        Social Media
      </Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button variant="outlined" color="primary" href="https://facebook.com" target="_blank" startIcon={<FacebookIcon />}>
          Facebook
        </Button>
        <Button variant="outlined" color="primary" href="https://twitter.com" target="_blank" startIcon={<TwitterIcon />}>
          Twitter
        </Button>
        <Button variant="outlined" color="primary" href="https://linkedin.com" target="_blank" startIcon={<LinkedInIcon />}>
          LinkedIn
        </Button>
      </Box>
    </Box>
  );
}
