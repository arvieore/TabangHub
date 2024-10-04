import { Box, Typography, Card, CardContent, Grid, CardMedia, Chip,Button } from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DoneAllIcon from '@mui/icons-material/DoneAll'; // For completed status

const historyEvents = [
    {
        title: "Tree Planting Initiative",
        description: "Assisted in planting over 100 trees as part of an environmental conservation effort.",
        location: "Greenfield Park, Lapu-Lapu City, Cebu",
        startDate: "5/4/2024 1:00:00 PM",
        endDate: "5/15/2024 11:59:00 PM",
        participants: 60,  // Number of participants who joined
        skills: ["Planting", "Team Building"],
        image: "/images/Planting.jpg"
    },
    {
        title: "Community Donation Drive",
        description: "Organized a donation drive to collect essential supplies for families in need.",
        location: "Community Hall, Lapu-Lapu City, Cebu",
        startDate: "7/15/2024 9:00:00 AM",
        endDate: "7/18/2024 5:00:00 PM",
        participants: 70,
        skills: ["Logistics", "Team Coordination"],
        image: "/images/Donation.jpg"
    },
    {
        title: "Community Cleaning Initiative",
        description: "Join our Clean with Us campaign to help keep our environment pristine. Participate in local cleanup events and contribute to a healthier, cleaner community for everyone.",
        location: "Central Plaza, Lapu-Lapu City, Cebu",
        startDate: "8/12/2024 7:00:00 AM",
        endDate: "8/12/2024 12:00:00 PM",
        participants: 50,
        skills: ["Waste Management", "Leadership"],
        image: "/images/Cleaning.jpg"
    }
];

export default function EventHistory() {
    return (
        <Box sx={{ padding: '20px' }}>
            <Typography variant="h5" sx={{ textAlign: 'left', marginBottom: '20px' }}>
                Event History
            </Typography>
            
            <Grid container spacing={3}>
                {historyEvents.map((event, index) => (
                    <Grid item xs={12} key={index}>
                        <Card sx={{ display: 'flex', boxShadow: 3 }}>
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

                                    {/* Completed Indicator */}
                                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                                        <DoneAllIcon fontSize="small" color="success" />
                                        <Typography variant="caption" sx={{ ml: 1 }}>
                                            <strong>Event Completed</strong> with {event.participants} participants
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
                <Box className="flex justify-center mt-6 m-auto">
                <Button variant="outlined" color="primary" className="mr-2">
                    Previous
                </Button>
                <Button variant="contained" color="primary">
                    Next
                </Button>
      </Box>
            </Grid>
        </Box>
    );
}
