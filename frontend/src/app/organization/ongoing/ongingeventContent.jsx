import { Box, Typography, Card, CardContent, Grid, CardMedia, Chip, LinearProgress, IconButton } from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EditIcon from '@mui/icons-material/Edit';

const ongoingEvents = [
    {
        title: "Tree Planting Initiative",
        description: "Assisted in planting over 100 trees as part of an environmental conservation effort.",
        location: "Greenfield Park, Lapu-Lapu City, Cebu",
        startDate: "5/4/2024 1:00:00 PM",
        endDate: "5/15/2024 11:59:00 PM",
        progress: 40,
        skills: ["Planting", "Team Building"],
        image: "/images/Planting.jpg"
    },
    {
        title: "Community Donation Drive",
        description: "Organized a donation drive to collect essential supplies for families in need.",
        location: "Community Hall, Lapu-Lapu City, Cebu",
        startDate: "7/15/2024 9:00:00 AM",
        endDate: "7/18/2024 5:00:00 PM",
        progress: 80,
        skills: ["Logistics", "Team Coordination"],
        image: "/images/Donation.jpg"
    }
];

export default function OngoingEventContent() {
    return (
        <Box sx={{ padding: '20px' }}>
            <Typography variant="h5" sx={{ textAlign: 'left', marginBottom: '20px' }}>
                Ongoing Events
            </Typography>
            
            <Grid container spacing={3}>
                {ongoingEvents.map((event, index) => (
                    <Grid item xs={12} key={index}>
                        <Card sx={{ display: 'flex', boxShadow: 3, position: 'relative' }}>
                            {/* Edit Button */}
                            <IconButton 
                                sx={{ position: 'absolute', top: 8, right: 8 }} 
                                aria-label="edit"
                            >
                                <EditIcon />
                            </IconButton>

                            {/* Image Section */}
                            <CardMedia
                                component="img"
                                sx={{ width: 160 }}
                                image={event.image}
                                alt={event.title}
                            />
                            
                            {/* Event Details */}
                            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                <CardContent>
                                    <Typography variant="h6">
                                        {event.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                        <LocationOnIcon fontSize="small" /> {event.location}
                                    </Typography>
                                    <Typography variant="body2">
                                        {event.description}
                                    </Typography>

                                    {/* Event Timing */}
                                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                        <AccessTimeIcon fontSize="small" />
                                        <Typography variant="caption" sx={{ ml: 1 }}>
                                            <strong>Start Date:</strong> {event.startDate}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                        <AccessTimeIcon fontSize="small" />
                                        <Typography variant="caption" sx={{ ml: 1 }}>
                                            <strong>End Date:</strong> {event.endDate}
                                        </Typography>
                                    </Box>
                                    
                                    {/* Progress Bar */}
                                    <Box sx={{ mt: 2 }}>
                                        <LinearProgress
                                            variant="determinate"
                                            value={event.progress}
                                            sx={{
                                                backgroundColor: 'lightgray',
                                                '& .MuiLinearProgress-bar': {
                                                backgroundColor: '#34e7b5',
                                                },
                                            }}
                                            />
                                        <Typography variant="caption" sx={{ mt: 1 }}>
                                            {event.progress}% Completed
                                        </Typography>
                                    </Box>

                                    {/* Skills Utilized */}
                                    <Box sx={{ display: 'flex', gap: 1, marginTop: '10px' }}>
                                        {event.skills.map((skill, idx) => (
                                            <Chip key={idx} label={skill} variant="filled" className="shadow shadow-slate-400 bg-[#8ff2d6]" />
                                        ))}
                                    </Box>
                                </CardContent>
                            </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
