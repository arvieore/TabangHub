"use client";

import Navbar from '../../dashboard/components/Navbar';
import { useState } from "react";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Box,
  IconButton,
  Avatar,
  Grid,
  Typography,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

export default function Profile() {
    const [profile, setProfile] = useState({
        firstName: "Juan",
        lastName: "Tamad",
        address: "Looc Mandaue",
        email: "juantamad@gmail.com",
        availability: "Full time",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Profile submitted:", profile);
    };

    return (
        <>
            {/* Profile Form */}
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                backgroundColor: "white",
                padding: 3,
                borderRadius: 2,
                maxWidth: 600,
                mx: "auto",
                my: 8,
                mt: 12,
              }}
            >
              <Typography variant="h6" mb={3}>
                Personal Info
              </Typography>
              
              <Grid container spacing={2}>
                <Grid item xs={12} sm={3}>
                  <Avatar
                    src="/broken-image.jpg" // Replace with the image URL
                    sx={{ width: 80, height: 80 }}
                  />
                  <IconButton color="primary" aria-label="upload picture" component="label">
                    <input hidden accept="image/*" type="file" />
                    <PhotoCamera />
                  </IconButton>
                </Grid>
                <Grid item xs={12} sm={9}>
                  <TextField
                    label="First Name"
                    name="firstName"
                    value={profile.firstName}
                    onChange={handleChange}
                    fullWidth
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    label="Last Name"
                    name="lastName"
                    value={profile.lastName}
                    onChange={handleChange}
                    fullWidth
                    sx={{ mb: 2 }}
                  />
                </Grid>
              </Grid>

              <TextField
                label="Address"
                name="address"
                value={profile.address}
                onChange={handleChange}
                fullWidth
                sx={{ mb: 2 }}
              />
              <TextField
                label="Email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                fullWidth
                type="email"
                sx={{ mb: 2 }}
              />
              
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Availability</InputLabel>
                <Select
                  name="availability"
                  value={profile.availability}
                  onChange={handleChange}
                  fullWidth
                >
                  <MenuItem value="Full time">Full time</MenuItem>
                  <MenuItem value="Part time">Part time</MenuItem>
                </Select>
              </FormControl>

              <Box display="flex" justifyContent="flex-end" mt={3}>
                <Button variant="outlined" className='mr-3 text-[#00df9a] border-[#00df9a] hover:text-[white] hover:bg-[#33f2b7] hover:border-[#33f2b7] hover:shadow-2xl '>
                  Cancel
                </Button>
                <Button type="submit" variant="contained" className='bg-[#00df9a] hover:bg-[#33f2b7]'>
                  Save
                </Button>
              </Box>
            </Box>
        </>
    );
}
