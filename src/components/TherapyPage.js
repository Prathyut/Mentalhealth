import React from 'react';
import '../App.css';
import { useParams } from 'react-router-dom'; // Import useParams
import { Container, Typography, Box, Button, Grid } from '@mui/material';

const TherapyPage = () => {
  const { doctorName } = useParams(); // Extract doctorName from URL parameters

  // Example therapy information for each doctor
  const therapyInfo = {
    'emily-johnson': {
      title: 'Therapies Offered by Dr. Emily Johnson',
      description:
        'Dr. Emily Johnson provides a holistic approach to mental health, specializing in cognitive behavioral therapy (CBT) and mindfulness techniques. Her therapy sessions focus on enhancing emotional regulation, improving coping strategies, and fostering personal growth. Dr. Johnson believes in creating a safe and supportive environment where clients can explore their thoughts and feelings without judgment.',
      therapies: [
        'Cognitive Behavioral Therapy (CBT)',
        'Mindfulness-Based Therapy',
        'Dialectical Behavior Therapy (DBT)',
      ],
    },
    'maya': {
      title: 'Therapies Offered by Dr. Maya',
      description:
        'Dr. Maya specializes in a variety of therapies including Cognitive Behavioral Therapy (CBT) and Mindfulness-based Therapy. She uses evidence-based practices to help clients manage anxiety, depression, and other emotional challenges. Dr. Maya emphasizes the importance of the therapeutic relationship and works collaboratively with clients to develop personalized treatment plans.',
      therapies: [
        'Cognitive Behavioral Therapy (CBT)',
        'Mindfulness Practices',
        'Acceptance and Commitment Therapy (ACT)',
      ],
    },
    'sameera': {
      title: 'Therapies Offered by Dr. Sameera',
      description:
        'Dr. Sameera offers comprehensive psychiatric care, integrating therapy and medication management to provide holistic mental health support. With a focus on empathy and understanding, Dr. Sameera works with clients to identify their unique challenges and develop effective coping strategies. She specializes in treating mood disorders, anxiety disorders, and stress-related conditions.',
      therapies: [
        'Psychotherapy',
        'Medication Management',
        'Stress Management Techniques',
      ],
    },
    // Add more doctors as needed
  };

  const doctorInfo = therapyInfo[doctorName.toLowerCase()]; // Get doctor info based on the name

  if (!doctorInfo) {
    return (
      <Container>
        <Typography variant="h5" color="error">Doctor not found.</Typography>
      </Container>
    ); // Handle case where doctor is not found
  }

  return (
    <Container>
      <Box
        sx={{
          my: 4,
          p: 3,
          borderRadius: 2,
          backgroundColor: '#f5f5f5',
          boxShadow: 3,
          transition: '0.3s',
          '&:hover': {
            boxShadow: 6,
          },
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#2c3e50' }}>
          {doctorInfo.title}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 2, color: '#34495e' }}>
          {doctorInfo.description}
        </Typography>
        
        <Typography variant="h6" component="h2" sx={{ color: '#2980b9', marginTop: 2 }}>
          Therapies Offered:
        </Typography>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          {doctorInfo.therapies.map((therapy, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Button variant="outlined" sx={{ width: '100%', color: '#2980b9', borderColor: '#2980b9' }}>
                {therapy}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default TherapyPage;
