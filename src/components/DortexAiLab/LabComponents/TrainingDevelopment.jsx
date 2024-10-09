import React from 'react';
import { Grid, Box, Typography, Button, Container, CardMedia } from '@mui/material';
import Tilt from "react-parallax-tilt";

const TrainingAndDevelopmentSection = () => {
  const handleApplyNowClick = () => {
    window.open('https://forms.gle/YOUR_GOOGLE_FORM_LINK', '_blank');
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Section Title */}
      <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 5,color:'black' }}>
        Training and Development
      </Typography>

      {/* Grid for first card: Image left, content right */}
      <Grid container spacing={4} alignItems="center">
        {/* Image (left side) */}
        
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: 'relative',
              '&:hover .overlay': {
                opacity: 1,
              },
            }}
          >
            <CardMedia
              component="img"
              image="https://via.placeholder.com/500x300"
              alt="Training 1"
              sx={{ borderRadius: 2, boxShadow: 3 }}
            />

            {/* Hover overlay */}
            <Box
              className="overlay"
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                bgcolor: 'rgba(0, 0, 0, 0.6)',
                color: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                opacity: 0,
                transition: 'opacity 0.3s ease',
                borderRadius: 2,
              }}
            >
              <Button variant="contained" color="primary" onClick={handleApplyNowClick}>
                Apply Now
              </Button>
            </Box>
          </Box>
        </Grid>

        {/* Content (right side) */}
        <Grid item xs={12} md={6}>
          <Box sx={{color:'black'}}>
            <Typography variant="h4" gutterBottom sx={{fontWeight:600}}>
              45 Days
            </Typography>
            <Typography variant="body1" paragraph sx={{color:'#5a5a5a'}}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, iure, molestiae. This is a placeholder for the training details, which can be replaced with actual content.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Grid for second card: Content left, image right */}
      <Grid container spacing={4} alignItems="center" sx={{ mt: 6 }}>
        {/* Content (left side) */}
        <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
          <Box sx={{color:'black'}}>
            <Typography variant="h4" gutterBottom sx={{fontWeight:600}}>
              Training Program 2
            </Typography>
            <Typography variant="body1" paragraph sx={{color:'#5a5a5a'}}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, iure, molestiae. This is a placeholder for the training details, which can be replaced with actual content.
            </Typography>
          </Box>
        </Grid>

        {/* Image (right side) */}
        <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
          <Box
            sx={{
              position: 'relative',
              '&:hover .overlay': {
                opacity: 1,
              },
            }}
          >
            <CardMedia
              component="img"
              image="https://via.placeholder.com/500x300"
              alt="Training 2"
              sx={{ borderRadius: 2, boxShadow: 3 }}
            />

            {/* Hover overlay */}
            <Box
              className="overlay"
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                bgcolor: 'rgba(0, 0, 0, 0.6)',
                color: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                opacity: 0,
                transition: 'opacity 0.3s ease',
                borderRadius: 2,
              }}
            >
              <Button variant="contained" color="primary" onClick={handleApplyNowClick}>
                Apply Now
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TrainingAndDevelopmentSection;
