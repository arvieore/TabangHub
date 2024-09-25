import React from 'react';
import { Card, CardContent, CardActions, Typography, CircularProgress, Box } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const cardData = [
  { color: '#1976d2', label: 'Event', value: 'No. of events:' },
  { color: '#d32f2f', label: 'History', value: 'Event history' },
  { color: '#388e3c', label: 'Donation', value: 'Total donation:' },
  { color: '#f57c00', label: 'Volunteer', value: 'No. of volunteers:' },
];

const numberData = [
  { value: '26' },
  { value: '' },
  { value: '₱ 22,100' },
  { value: '99' },
];

export default function Cards() {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center', margin: '3%' }}>
      {cardData.map((data, index) => {
        // Access numberData based on the same index as cardData
        const numberValue = numberData[index]?.value; // Fallback to 'No data' if index out of bounds

        return (
          <Card key={index} sx={{ 
            backgroundColor: data.color, 
            color: 'white', 
            borderRadius: 2, 
            width: '100%', 
            maxWidth: 400, 
            cursor: 'pointer',
            boxShadow: 7,
            }}>
            <CardContent sx={{ 
                display: 'flex',
                alignItems: 'center' 
                }}>
              <Box sx={{ position: 'relative', display: 'inline-flex', marginRight: 2 }}>
                <CircularProgress
                  variant="determinate"
                  value={20}
                  size={60}
                  sx={{ color: 'rgba(255, 255, 255, 0.5)' }}
                />
                <Box
                  sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <ArrowUpwardIcon fontSize="large" />
                </Box>
              </Box>
              <Box>
                <Typography variant="body1">{data.label}</Typography>
                <Typography variant="h5">{data.value}</Typography>
                <Typography variant="h4">{numberValue}</Typography>
              </Box>
            </CardContent>
          </Card>
        );
      })}
    </Box>
  );
}
