import React from 'react'
import Navbar from '../Navbar'
import LabNav from './LabComponents/LabNav'
import LabBanner from './LabComponents/LabBanner'
import { Box } from '@mui/material';
import LabFootr from './LabComponents/LabFooter';

function DortexAiLab() {
  return (
    <Box sx={{ backgroundColor: 'lightblue', minHeight: '100vh' }}>
    <LabNav />
    <LabBanner />
    <LabFootr/>
  </Box>
  )
}

export default DortexAiLab
