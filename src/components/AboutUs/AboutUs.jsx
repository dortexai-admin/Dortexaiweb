import React, { useEffect } from "react";
import Navbar from '../Navbar'
import Footr from '../Footer/Footer'
import { Typography, Container, Box } from "@mui/material";





  
  

export default function AboutUs() {
    return (
        <Box sx={{ minHeight: '100vh' }}>
            <Box>
                <Navbar />
            </Box>
            <Box sx={{ pt: 20 }}>
                <Container maxWidth="md">
                    <Typography  variant="h2" component="h2" fontWeight="bold" sx={{ color: "#12141d",mb:4 }} gutterBottom>
                        ABOUT US
                    </Typography>
                    <Typography variant="h5" sx={{ mb: 2 ,color: "#12141d" }}>
                        Company History
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#5a5a5a', lineHeight: 1.7 }}>
                        Idea Entity boasts a distinguished history of providing innovative workflow automation solutions
                        to a diverse range of industries such as defense, government, and the private sector. With its
                        cutting-edge change management platform, RhyBus, the company has skillfully transformed traditional
                        organizational workplaces into efficient, streamlined workflows. By consistently demonstrating its
                        expertise and commitment to excellence, Idea Entity has established itself as a trusted and reputable
                        partner for businesses seeking to enhance their operational efficiency.
                    </Typography>
                </Container>
            </Box>

            <Box sx={{ py:5}}>
                <Container maxWidth="md">
                    <Typography  variant="h5" sx={{ mb: 2 ,color: "#12141d" }} gutterBottom>
                        Our Mission
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#5a5a5a', lineHeight: 1.7 }}>
                    Our mission is to be a leading provider of IT solutions that transform businesses and drive sustainable growth. We strive to deliver exceptional value to our clients by leveraging the latest technologies, fostering a culture of continuous learning, and maintaining the highest standards of integrity and professionalism. Contact us today to explore how we can empower your business with transformative IT solutions.
                    </Typography>
                </Container>
            </Box>
            <Footr />
        </Box>
    )
}
