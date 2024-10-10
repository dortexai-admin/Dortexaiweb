import React from 'react';
import { Container, Grid, Card, Typography, CardMedia } from '@mui/material';
import OpenAI from '../../../../public/Openai.png';  // Replace with the correct paths
import Gemini from '../../../../public/Gemini.png';
import Vision from '../../../../public/vision.png';

const Modal = [
  { name: 'OpenAI', logo: OpenAI },
  { name: 'Geminii', logo: Gemini },
  { name: 'Vision', logo: Vision },
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
                boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.5)',  // Shadow for card
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
                height: '150px',  // Fixed height for uniformity
              }}
            >
              <CardMedia
                component="img"
                src={partner.logo}
                alt={partner.name}
                sx={{ 
                  width: '100px',  // Fixed width for all images
                  height: 'auto', // Fixed height for all images
                  objectFit: 'fill',  // Stretch to fit the container without preserving aspect ratio
                }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
      
    </Container>
  );
};

export default LabModals;
