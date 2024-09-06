'use client';

import React, { useState } from 'react';
import { TextField, Button, Chip, MenuItem, Select, Box, Typography } from '@mui/material';

export default function AboutMe() {
  const [aboutMe, setAboutMe] = useState('I am Juan D. Tamad...');
  const [skills, setSkills] = useState(['Gardening', 'Carpentry', 'Storytelling', 'Cooking', 'First aid']);
  const [newSkill, setNewSkill] = useState('');

  const availableSkills = ['Painting', 'Teaching', 'Event planning', 'Community organizer'];

  const handleSkillDelete = (skillToDelete) => {
    setSkills((currentSkills) => currentSkills.filter((skill) => skill !== skillToDelete));
  };

  const handleAddSkill = (event) => {
    if (event.target.value && !skills.includes(event.target.value)) {
      setSkills((currentSkills) => [...currentSkills, event.target.value]);
      setNewSkill('');
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: 3,
        borderRadius: 2,
        boxShadow: 3,
        maxWidth: 600,
        mx: "auto",
        my: 8,
      }}
    >
      <Typography variant="h6" mb={3}>
        About Me & Skills
      </Typography>

      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" gutterBottom>About Me</Typography>
        <TextField
          multiline
          fullWidth
          rows={5}
          value={aboutMe}
          onChange={(e) => setAboutMe(e.target.value)}
          variant="outlined"
        />
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>Skills</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {skills.map((skill, index) => (
            <Chip
              key={index}
              label={skill}
              onDelete={() => handleSkillDelete(skill)}
              sx={{ margin: '2px' }}
            />
          ))}
        </Box>

        <Select
          value={newSkill}
          onChange={handleAddSkill}
          displayEmpty
          fullWidth
          variant="outlined"
          sx={{ marginTop: 2 }}
        >
          <MenuItem value="" disabled>
            Select a skill
          </MenuItem>
          {availableSkills.map((skill, index) => (
            <MenuItem key={index} value={skill}>
              {skill}
            </MenuItem>
          ))}
        </Select>
      </Box>

      <Box display="flex" justifyContent="flex-end" mt={3}>
        <Button variant="outlined" className='mr-3 text-[#00df9a] border-[#00df9a] hover:text-[white] hover:bg-[#33f2b7] hover:border-[#33f2b7] hover:shadow-2xl '>
          Cancel
        </Button>
        <Button type="submit" variant="contained" className='bg-[#00df9a] hover:bg-[#33f2b7]'>
          Save
        </Button>
      </Box>
    </Box>
  );
}
