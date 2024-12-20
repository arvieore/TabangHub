import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import EventIcon from '@mui/icons-material/Event';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
export default function SummaryCards() {
  const summaryData = [
    { title: 'Organizations', count: 25, icon: <GroupIcon style={{ fontSize: 60, color: '#4caf50' }} /> },
    { title: 'Volunteers', count: 120, icon: <VolunteerActivismIcon style={{ fontSize: 60, color: '#2196f3' }} /> },
    { title: 'Events', count: 15, icon: <EventIcon style={{ fontSize: 60, color: '#ff9800' }} /> },
    { title: 'Skills Available', count: 50, icon: <EmojiObjectsIcon style={{ fontSize: 60, color: '#9c27b0' }} /> },
  ];
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#d9f2ff]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
        {summaryData.map((data, index) => (
          <Card
            key={index}
            className="shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
            style={{ padding: '20px', minWidth: '200px', textAlign: 'center' }}
          >
            <CardContent className="flex flex-col items-center space-y-4">
              <div>{data.icon}</div>
              <div>
                <Typography variant="h4" className="font-bold text-gray">
                  {data.count}
                </Typography>
                <Typography variant="h6" className="text-gray-400">
                  {data.title}
                </Typography>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};