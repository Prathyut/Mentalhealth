import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import doctor1 from '../assests/images/doctor1.jpg';
import doctor2 from '../assests/images/doctor2.jpg';
import doctor3 from '../assests/images/doctor3.jpg';
import {
  Container,
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  Grid,
} from '@mui/material';
import '../App.css'; // Import the enhanced CSS file

// Example data for doctors
const doctors = [
  {
    name: 'Dr. Emily Johnson',
    image: doctor1,
    description:
      'Dr. Emily Johnson is a licensed psychologist with over 10 years of experience in cognitive behavioral therapy, focusing on providing a holistic approach to mental health.',
    therapyPage: '/therapy/Emily-Johnson',
  },
  {
    name: 'Dr. Maya',
    image: doctor2,
    description:
      'Dr. Maya specializes in anxiety disorders and has been practicing for over 8 years, helping patients develop coping strategies.',
    therapyPage: '/therapy/maya',
  },
  {
    name: 'Dr. Sameera',
    image: doctor3,
    description:
      'Dr. Sameera is a psychiatrist who offers a comprehensive approach to mental health, including therapy and medication management.',
    therapyPage: '/therapy/sameera',
  },
];

const Doctors = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleCardClick = (therapyPage) => {
    navigate(therapyPage); // Navigate to the corresponding therapy page
  };

  return (
    <Container maxWidth="md" className="container">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" className="header">
          Meet Our Mental Health Specialists
        </Typography>
        <Grid container spacing={4}>
          {doctors.map((doctor, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                onClick={() => handleCardClick(doctor.therapyPage)}
                className="card"
              >
                <CardMedia
                  component="img"
                  className="card-img"
                  image={doctor.image}
                  alt={doctor.name}
                  sx={{ height: 200 }}
                />
                <CardContent className="card-content">
                  <Typography variant="h5" component="div" className="card-title">
                    {doctor.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="card-description"
                  >
                    {doctor.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Doctors;
