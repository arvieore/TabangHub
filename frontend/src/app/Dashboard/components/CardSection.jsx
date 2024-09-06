import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import Link from 'next/link';

export default function Cards() {
  return (
    <div className="py-12 h-fit bg-gray-100 flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-items-center m-3">

        {/* Card 1 - Cleaning */}
        <Card 
          sx={{ maxWidth: 345, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}
          className="shadow-lg rounded-lg"
        >
          <CardMedia
            component="img"
            height="140"
            image="./Cleaning.jpg"
            alt="Cleaning Campaign"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Clean with us.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Join our Clean with Us campaign to help keep our environment pristine. Participate in local cleanup events and contribute to a healthier, cleaner community for everyone.
            </Typography>
            <Button
              component={Link}
              href="/details"
              variant="contained"
              sx={{ backgroundColor: '#00df9a', mt: 2, '&:hover': { backgroundColor: '#33f2b7' } }}
            >
              View Details
            </Button>
          </CardContent>
        </Card>

        {/* Card 2 - Donation */}
        <Card 
          sx={{ maxWidth: 345, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}
          className="shadow-lg rounded-lg"
        >
          <CardMedia
            component="img"
            height="140"
            image="./Donation.jpg"
            alt="Donation Campaign"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Donation
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Support those in need by contributing to our donation program. Your generous gifts help provide essential resources and improve the lives of individuals and families in our community.
            </Typography>
            <Button
              component={Link}
              href="/details"
              variant="contained"
              sx={{ backgroundColor: '#00df9a', mt: 2, '&:hover': { backgroundColor: '#33f2b7' } }}
            >
              View Details
            </Button>
          </CardContent>
        </Card>

        {/* Card 3 - Planting */}
        <Card 
          sx={{ maxWidth: 345, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}
          className="shadow-lg rounded-lg"
        >
          <CardMedia
            component="img"
            height="140"
            image="./Planting.jpg"
            alt="Planting Campaign"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Plant for our mother earth.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Be a part of our Plant for Our Mother Earth initiative by planting trees and greenery. Your efforts will help combat climate change, enhance biodiversity, and create a more sustainable future for our planet.
            </Typography>
            <Button
              component={Link}
              href="/details"
              variant="contained"
              sx={{ backgroundColor: '#00df9a', mt: 2, '&:hover': { backgroundColor: '#33f2b7' } }}
            >
              View Details
            </Button>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
