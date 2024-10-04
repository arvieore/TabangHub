'use client'

import { useState } from 'react';
import { Box, TextField, Typography, Button, Grid, Chip, InputLabel, MenuItem, Select, FormControl, Checkbox, FormControlLabel } from '@mui/material';

export default function Event() {
    const [allowDonation, setAllowDonation] = useState(false); // Donation checkbox state

    return (
        <Box sx={{ padding: '20px', backgroundColor: '#f4f6f8', borderRadius: '15px', marginBottom: '1%' }}>
            <Typography variant="h5" sx={{ textAlign: 'left', marginBottom: '20px' }}>
                Add New Event
            </Typography>

            <Grid container spacing={3}>
                {/* Event Title */}
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Event Title"
                        variant="outlined"
                    />
                </Grid>

                {/* Event Description */}
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Event Description"
                        variant="outlined"
                        multiline
                        rows={4}
                    />
                </Grid>

                {/* Location Input */}
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Location"
                        variant="outlined"
                    />
                </Grid>

                {/* Start Date Input */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Start Date"
                        variant="outlined"
                        placeholder="MM/DD/YYYY"
                    />
                </Grid>

                {/* End Date Input */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="End Date"
                        variant="outlined"
                        placeholder="MM/DD/YYYY"
                    />
                </Grid>

                {/* Skills Dropdown */}
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel>Select Skills</InputLabel>
                        <Select
                            label="Select Skills"
                            multiple
                            value={[] /* Static empty value */}
                        >
                            <MenuItem value="Planting">Planting</MenuItem>
                            <MenuItem value="Logistics">Logistics</MenuItem>
                            <MenuItem value="Team Coordination">Team Coordination</MenuItem>
                            <MenuItem value="Event Planning">Event Planning</MenuItem>
                            <MenuItem value="Fundraising">Fundraising</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                {/* Number of Volunteers Input */}
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Number of Volunteers"
                        variant="outlined"
                        type="number"
                    />
                </Grid>

                {/* Allow Donation Checkbox */}
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox checked={allowDonation} onChange={(e) => setAllowDonation(e.target.checked)} />}
                        label="Allow Donations?"
                    />
                </Grid>

                {/* Donation Target Amount Input (conditionally displayed) */}
                {allowDonation && (
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Target Donation Amount"
                            variant="outlined"
                            type="number"
                            InputProps={{ startAdornment: '₱' }} // or any other currency symbol
                        />
                    </Grid>
                )}

                {/* Submit Button */}
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" fullWidth>
                        Add Event
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}
