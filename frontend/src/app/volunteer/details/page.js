import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import Image from 'next/image';
import Navbar from '../components/Navbar';

export default function CardDetails() {
    return (
        <>
            {/* <Navbar /> */}
            <Box 
                sx={{
                    borderRadius: '4rem 0 4rem 0',
                    backgroundColor: 'white',
                    mt: 18,
                    mx: 4,
                    p: 4,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: { xs: 'column', md: 'row' },
                    height: 'auto'
                }}
            >
                {/* Text Content */}
                <Box>
                    <Typography variant="h1" fontWeight="bold" gutterBottom sx={{ fontSize: { xs: '2rem', md: '3rem', lg: '4rem' } }}>
                        Empowering <span style={{ color: '#00df9a' }}>Community</span> Impact.
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, maxWidth: '1000px' }}>
                        Be a catalyst for change. Your skills are needed to make this event a success. Join us and leave a lasting impact on our community. Your contribution will help create positive change and strengthen our community bonds. Together, we can make a difference.
                    </Typography>
                    
                    {/* Buttons */}
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Button
                            variant="contained"
                            sx={{ backgroundColor: '#00df9a', color: 'white', '&:hover': { backgroundColor: '#33f2b7' } }}
                        >
                            About this Org.
                        </Button>
                        <Button
                            variant="outlined"
                            sx={{ borderColor: '#33f2b7', color: '#00df9a', '&:hover': { backgroundColor: '#33f2b7', color: 'white' } }}
                        >
                            View Event
                        </Button>
                    </Box>
                </Box>

                {/* Image Section */}
                <Box sx={{ display: { xs: 'none', md: 'block' }, ml: 'auto' }}>
                    <Image
                        src="/tabanghub3.png"
                        alt="Tabang Hub"
                        width={200}
                        height={300}
                        layout="responsive"
                    />
                </Box>
            </Box>
        </>
    );
}
