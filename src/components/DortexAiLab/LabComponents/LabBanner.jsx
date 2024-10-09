import React from 'react';
import { Button, Grid, Box, Typography, Container } from '@mui/material';
import dortexlogo from '../../../assets/DortexAi.png';

const LabBanner = () => {
  return (
    <Container
      maxWidth={false} // This allows the container to take full width
      sx={{
        py: 5,
        backgroundColor: 'lightblue', // Change background color to light blue
        width: '100%', // Ensure full width
        position: 'relative', // This can help with positioning child elements if needed
      }}
    >
      <Grid
        container
        maxWidth="lg" // Set maximum width to 'lg'
        spacing={4}
        alignItems="center"
        justifyContent="center"
        sx={{ mt: '8rem', mx: 'auto' }} // 'mx: auto' to center the grid
      >
        {/* Left Section */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '0.5rem',
            }}
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 'bold',
                textAlign: 'left',
                margin: 0,
                color: 'black',
                mt: '8rem',
              }}
            >
              AI Transformation Begins With Us.
            </Typography>
          </Box>
        </Grid>

        {/* Right Section with Image */}
        <Grid item xs={12} md={6}>
          <Box display="flex" justifyContent="flex-end" sx={{ overflow: 'hidden' }}>
            <img src={dortexlogo} alt="robot" style={{ maxWidth: '80rem', height: 'auto' }} />
          </Box>
        </Grid>
      </Grid>

      {/* CSS for blinking cursor effect */}
      <style>
        {`
            @keyframes blink {
                0%, 100% {
                    color: transparent;
                }
                50% {
                    color: black;
                }
            }
        `}
      </style>
    </Container>
  );
};

export default LabBanner;
