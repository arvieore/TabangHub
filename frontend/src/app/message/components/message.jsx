'use client';

import React, { useState } from 'react';
import Navbar from '../../dashboard/components/Navbar';
import { Box, List, ListItem, ListItemAvatar, ListItemText, Typography, TextField, Button, Paper, Avatar } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export default function Message() {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [message, setMessage] = useState('');

  const groupChats = {
    'Community Clean-Up': [
      { text: 'Hi everyone! Is everyone set for the community clean-up event tomorrow?', sender: 'Event Organizer', time: 'Thursday 11:44am', avatar: '/path/to/organizer-avatar.png' },
      { text: 'Yes! I’ve got all my materials ready.', sender: 'Alice', time: 'Thursday 11:46am', avatar: '/path/to/alice-avatar.png' },
      { text: 'I’ve already informed a few more volunteers.', sender: 'Bob', time: 'Thursday 11:50am', avatar: '/path/to/bob-avatar.png' },
      { text: 'Thanks, that will help a lot!', sender: 'Charlie', time: 'Thursday 11:52am', avatar: '/path/to/charlie-avatar.png' },
      { text: 'See yah then.', sender: 'Alice', time: 'Just now', avatar: '/path/to/alice-avatar.png' },
      { text: 'I’ll be bringing extra gloves and trash bags for anyone who needs them.', sender: 'You', time: 'Just now' }
    ],
    'Feeding Program': [
      { text: 'Do we have enough volunteers for the feeding program this weekend?', sender: 'Event Organizer', time: 'Today 10:00am', avatar: '/path/to/organizer-avatar.png' },
      { text: 'We still need a few more cooks, but we’re almost there!', sender: 'Volunteer 2', time: 'Today 10:02am', avatar: '/path/to/volunteer2-avatar.png' },
      { text: 'I can help with cooking! I’ll be there early.', sender: 'You', time: 'Today 10:05am' },
      { text: 'I’ll bring the utensils and disposable containers.', sender: 'Dana', time: 'Today 10:06am', avatar: '/path/to/dana-avatar.png' },
      { text: 'Great! I’ll handle the transport for the food.', sender: 'Edward', time: 'Today 10:08am', avatar: '/path/to/edward-avatar.png' }
    ],
  };

  const groups = Object.keys(groupChats);

  const handleGroupClick = (group) => {
    setSelectedGroup(group);
  };

  return (
    <>
      <Box sx={{ display: 'flex', height: '90vh', marginTop: '60px' }}>
        {/* Sidebar: List of Group Chats */}
        <Box sx={{ width: '25%', borderRight: '1px solid #ddd', bgcolor: '#0d1117', color: '#fff' }}>
          <Typography variant="h6" sx={{ padding: 2 }}>Event Groups</Typography>
          <List>
            {groups.map((group) => (
              <ListItem
                button
                key={group}
                onClick={() => handleGroupClick(group)}
                selected={selectedGroup === group}
                sx={{
                  bgcolor: selectedGroup === group ? '#4A5568' : 'transparent',
                  '&:hover': { bgcolor: '#4A5568' },
                  color: '#fff',
                  padding: '10px 20px'
                }}
              >
                <ListItemAvatar>
                  <Avatar alt={group} src={`/path/to/${group.toLowerCase().replace(/\s/g, '-')}-avatar.png`} />
                </ListItemAvatar>
                <ListItemText primary={group} />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Chat conversation */}
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', bgcolor: '#EDF2F7' }}>
          {/* Title section */}
          <Box sx={{ padding: 2, bgcolor: '#f8f9fa', borderBottom: '1px solid #ddd' }}>
            {selectedGroup ? (
              <Typography variant="h6">{selectedGroup}</Typography>
            ) : (
              <Typography variant="h6" sx={{ textAlign: 'center', marginTop: 5 }}>
                Select a group to view the conversation
              </Typography>
            )}
          </Box>

          {/* chatbox section */}
          <Box sx={{ flexGrow: 1, padding: 2, overflowY: 'auto', bgcolor: '#f1f3f5' }}>
            {selectedGroup && groupChats[selectedGroup].map((msg, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  flexDirection: msg.sender === 'You' ? 'row-reverse' : 'row',
                  alignItems: 'flex-start',
                  mb: 1
                }}
              >
                {/* Show avatar only for other participants, not for "You" */}
                {msg.sender !== 'You' && (
                  <Avatar
                    alt={msg.sender}
                    src={msg.avatar}
                    sx={{
                      width: 40,
                      height: 40,
                      marginRight: 2
                    }}
                  />
                )}

                {/* Message content */}
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: msg.sender === 'You' ? 'flex-end' : 'flex-start' }}>
                  <Typography variant="caption" sx={{ color: '#1e2226', mb: 0.5 }}>
                    {msg.sender} • {msg.time}
                  </Typography>
                  <Paper
                    sx={{
                      padding: 1.5,
                      maxWidth: '70%',                //You         Others
                      bgcolor: msg.sender === 'You' ? '#3182CE' : '#7b92a6', 
                      color: '#fff',
                      borderRadius: '10px'
                    }}
                  >
                    <Typography variant="body1">{msg.text}</Typography>
                  </Paper>
                </Box>
              </Box>
            ))}
          </Box>

          {/* Message input box */}
          {selectedGroup && (
            <Box sx={{ display: 'flex', padding: 2, borderTop: '1px solid #ddd', bgcolor: '#fff' }}>
              <TextField
                fullWidth
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={`Type a message...`}
                variant="outlined"
              />
              <Button
                variant="contained"
                sx={{ marginLeft: 2 }}
                endIcon={<SendIcon />}
                >
                Send
            </Button>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
}
