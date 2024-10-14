import React from 'react'
import Navbar from '../Navbar'
import Footr from '../Footer/Footer'
import { Box } from '@mui/material';

export default function AboutUs() {
    return (
        <Box sx={{ minHeight: '100vh' }}>
            <Box>
                <Navbar />
            </Box>

            <Footr />
        </Box>
    )
}
