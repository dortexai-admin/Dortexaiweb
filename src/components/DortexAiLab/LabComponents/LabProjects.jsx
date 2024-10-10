import React from "react";
import { Box, Typography, Grid, Paper, Container } from "@mui/material";
import Tilt from 'react-parallax-tilt';
import hcareai from '../../../../public/HealthCareAi.png';
import abacus from '../../../assets/projects/Abacus.jpg';
import pp from '../../../assets/projects/PpBlack.png';

const Labproject = [
    {
        image: hcareai,
        title: "Health Care AI",
        description: "Easy Job is an AI-powered app that helps job seekers of all backgrounds find employment including unskilled, freshers and experienced candidates at one platform.",
        link: "/android"
    },
    {
        image: abacus,
        title: "ABACUS CLOUD",
        description: "Query Mate is your intelligent chatbot companion that seamlessly connects businesses with their customers by providing instant solutions to queries. With Query Mate, you can effortlessly inquire about any aspect of a company, from product details and support inquiries to general information...",
        link: "/react"
    },
    {
        image: pp,
        title: "Perfect Propertys",
        description: "Perfect Propertys is a real estate platform designed to connect builders, brokers, and clients looking for properties, PG (Paying Guest accommodations), and rentals...",
        link: "/laravel"
    },
];

const LabProjects = () => {
    return (
        <Container maxWidth="lg" sx={{ padding: '2rem', textAlign: 'center', color: '#12141d' }}>
            <Typography variant="h4" component="h2" sx={{ marginBottom: '2rem', fontWeight: 'bold' }}>
                Our Projects
            </Typography>
            <Grid container spacing={4}>
                {Labproject.map((project, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Tilt
                            tiltMaxAngleX={30}
                            tiltMaxAngleY={20}
                            glareEnable={true}
                            glareMaxOpacity={0.8}
                            glareColor="lightblue"
                            glarePosition="all"
                        >
                            <Paper 
                                elevation={3} 
                                sx={{ 
                                    display: 'flex', 
                                    flexDirection: 'column', 
                                    alignItems: 'center', 
                                    height: { xs: 'auto', md: '400px' }, // Responsive height
                                    padding: '1rem', 
                                    borderRadius: '8px',
                                    border: '2px solid lightgray',
                                    transition: 'transform 0.2s', 
                                    '&:hover': {
                                        transform: 'scale(1.05)', 
                                    }
                                }}
                            >
                                <img src={project.image} alt={project.title} style={{ borderRadius: '8px', width: '10rem', height: 'auto', maxHeight: '200px' }} />
                                <Box sx={{ textAlign: 'center', marginTop: '1rem' }}>
                                    <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
                                        {project.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ marginTop: '0.5rem' }}>
                                        {project.description}
                                    </Typography>
                                    <Typography 
                                        variant="body2" 
                                        color="blue" 
                                        sx={{ marginTop: '1rem', cursor: 'pointer' }} 
                                        component="a"
                                        href={project.link}
                                    >
                                        Show More ➔
                                    </Typography>
                                </Box>
                            </Paper>
                        </Tilt>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default LabProjects;
