import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/system';

const CustomButton = styled(Button)({
  backgroundColor: '#ADD8E6', // Light blue color
  color: '#000', // Text color black
  transition: 'background-color 0.3s ease, transform 0.3s ease', // Smooth transition
  '&:hover': {
    backgroundColor: '#fff', // White color on hover
    transform: 'scale(1.05)', // Slight scale on hover for extra effect
  },
});

const CustomButtonComponent = ({ children, ...props }) => {
  return (
    <CustomButton variant="contained" {...props}>
      {children}
    </CustomButton>
  );
};

export default CustomButtonComponent;
