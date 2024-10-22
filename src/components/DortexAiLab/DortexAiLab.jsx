import React from 'react';
import LabNav from './LabComponents/LabNav';
import LabBanner from './LabComponents/LabBanner';
import { Box } from '@mui/material';
import LabFootr from '../Footer/Footer';
import TrainingDevelopmentCard from './LabComponents/TrainingDevelopment';
import LabServices from './LabComponents/LabServices';
import LabProjects from './LabComponents/LabProjects';
import LabModals from './LabComponents/LabModals';
import LabEndSection from './LabComponents/LabEndSection';

function DortexAiLab() {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      {/* Blue background section */}
      <Box sx={{ backgroundColor: 'lightblue' }}>
        <LabNav />
        <LabBanner />
      </Box>
      {/* White background section */}
      <Box sx={{ backgroundColor: 'white' }}>
        <TrainingDevelopmentCard />
        <LabServices />
        <LabProjects/>
        <LabModals/>
        <LabEndSection/>
        <LabFootr />
      </Box>
    </Box>
  );
}

export default DortexAiLab;
