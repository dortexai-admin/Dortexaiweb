import React from 'react'
import Navbar from '../Navbar'
import LabNav from './LabComponents/LabNav'
import LabBanner from './LabComponents/LabBanner'
import { Box } from '@mui/material';
import LabFootr from './LabComponents/LabFooter';
import TrainingDevelopmentCard from './LabComponents/TrainingDevelopment';
import LabServices from './LabComponents/LabServices';

function DortexAiLab() {
  return (
    <Box sx={{ backgroundColor: 'lightblue', minHeight: '100vh' }}>
    <LabNav />
    <LabBanner />
    <TrainingDevelopmentCard/>
    <LabServices/>
    <LabFootr/>
  </Box>
  )
}

export default DortexAiLab
