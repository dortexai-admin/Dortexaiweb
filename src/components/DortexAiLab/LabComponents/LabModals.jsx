import React from 'react';
import { Container, Grid, Card, Typography, CardMedia, Box } from '@mui/material';
import OpenAI from '../../../../public/Openai.png';  // Replace with the correct paths
import Adept from '../../../assets/DortexAi.png';
import Meta from '../../../assets/DortexAi.png';

const Modal = [
  { name: 'OpenAI', logo: OpenAI },
  { name: 'Adept', logo: Adept },
  { name: 'Meta', logo: Meta },
];

const LabModals = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8, backgroundColor: 'white' }}>
      <Typography 
        variant="h6" 
        align="center" 
        sx={{ textTransform: 'uppercase', letterSpacing: '0.1em', color: '#5a5a5a', mb: 5 }}
      >
        Generative AI Providers We Partner With:
      </Typography>
      
      <Grid container spacing={4} justifyContent="center">
        {Modal.map((partner, index) => (
          <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
            <Card
              sx={{
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',  // Shadow for card
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',  // Scale effect on hover
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',  // Stronger shadow on hover
                },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                p: 2,
                borderRadius: 2,
                backgroundColor: 'white',
              }}
            >
              <CardMedia
                component="img"
                src={partner.logo}
                alt={partner.name}
                sx={{ maxWidth: '100px', height: 'auto',objectFit:'fill' }}  // Adjust logo size
              />
            </Card>
          </Grid>
        ))}
      </Grid>
      
    </Container>
  );
};

export default LabModals;
