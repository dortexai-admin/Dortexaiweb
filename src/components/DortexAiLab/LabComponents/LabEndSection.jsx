import React from 'react';
import { Box, Typography } from '@mui/material';
import CustomButtonComponent from './CusButton';

const LabEndSection = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        padding: '2rem',
        backgroundColor: '#ffffff',
        marginY: '5rem',
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: '#000', // Black text color for the main heading
          fontWeight: 'bold',
        }}
      >
        The future of your industry{' '}
        <span
          style={{
            background: 'linear-gradient(90deg, #7077ff, black)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block',
          }}
        >
          starts here.
        </span>
      </Typography>

      <Box sx={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
        {/* Book a Demo Button */}
        <CustomButtonComponent
          sx={{
            backgroundColor: 'linear-gradient(90deg, #7077ff, black)',
            color: '#000', // Black text
            borderRadius: '20px',
            padding: '0.75rem 2rem',
            fontSize: '1rem',
            fontWeight: 'bold',
            border: '1px solid #a5e9ff',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              backgroundColor: '#fff',
              transform: 'scale(1.05)', // Scale effect
              border: '1px solid #a5e9ff', // Optional border change
            },
          }}
        >
          Book a Demo →
        </CustomButtonComponent>
      </Box>
    </Box>
  );
};

export default LabEndSection;
