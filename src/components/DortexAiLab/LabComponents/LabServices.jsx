import React from 'react';
import { Container, Grid, Box, Typography, Card, CardContent, CardActionArea, IconButton } from '@mui/material';
import { CheckBox, Chat, BarChart, Memory } from '@mui/icons-material';
import MyButtonComponent from './CusButton';

const Labservices = [
  {
    title: 'Fine Tuning',
    description: 'Customizing pre-trained models to suit specific tasks and datasets for improved performance.',
    icon: <CheckBox fontSize="large" />,
  },
  {
    title: 'Chatbot Development',
    description: 'Building intelligent chatbots powered by NLP to automate customer interactions.',
    icon: <Chat fontSize="large" />,
  },
  {
    title: 'Inference',
    description: 'Real-time and batch inference for ML models, ensuring fast and accurate predictions.',
    icon: <BarChart fontSize="large" />,
  },
  {
    title: 'Custom Machine Learning Models',
    description: 'Design and deploy custom ML models tailored to your unique business needs.',
    icon: <Memory fontSize="large" />,
  },
];

const LabServices = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8, backgroundColor: 'white' }}>
      <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold', color: 'black', mb: 5 }}>
        Our Services
      </Typography>

      <Typography align="center" paragraph sx={{ color: '#5a5a5a', mb: 5 }}>
        We offer cutting-edge AI services to accelerate your business transformation.
      </Typography>

      <Grid container spacing={4}>
        {Labservices.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                boxShadow: '10px 10px 12px rgba(0, 0, 0, 0.3)', // Adding a soft shadow
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'translateY(-10px)', // Hover effect
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)', // Stronger shadow on hover
                },
                position: 'relative',
                backgroundColor: 'white',
              }}
            >
              <CardActionArea>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    p: 4,
                  }}
                >
                  <IconButton
                    sx={{
                      bgcolor: 'linear-gradient(135deg, #80d0c7 0%, #13547a 100%)',
                      color: '#13547a',
                      fontSize: '2rem',
                      mb: 2,
                      borderRadius: '50%',
                      p: 1.5,
                    }}
                  >
                    {service.icon}
                  </IconButton>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'black', mb: 2 }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#5a5a5a' }}>
                      {service.description}
                    </Typography>
                  </CardContent>
                </Box>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default LabServices;
