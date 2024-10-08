import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import Tilt from 'react-parallax-tilt';
import easyjob from '../../../public/EasyJob.png';
import abacus from '../../assets/projects/Abacus.jpg';
import pp from '../../assets/projects/PpBlack.png';
import homebuddy from '../../assets/projects/HomeBuddy.png';
import localkonnect from '../../assets/projects/LocalKonnect.jpg';

const projects = [
    {
        image: easyjob,
        title: "EASY JOB",
        description: "Easy Job is an AI-powered app that helps job seekers of all backgrounds find employment including unskilled, freshers and experienced candidates at one platform.",
        link: "/android"
    },
    {
        image: abacus,
        title: "ABACUS CLOUD",
        description: "Abacus Cloud a storage platform where users can store their data files and many more things with premium features...",
        link: "/react"
    },
    {
        image: pp,
        title: "Perfect Propertys",
        description: "Perfect Propertys is a real estate platform designed to connect builders, brokers, and clients looking for properties, PG (Paying Guest accommodations), and rentals...",
        link: "/laravel"
    },
    {
        image: homebuddy,
        title: "HOMBEBUDDY",
        description: "HomeBuddy is a platform that connects users with their ideal home and property services...",
        link: "/laravel"
    },
    {
        image: localkonnect,
        title: "LocalKonnect",
        description: "LocalKonnect helps users find local services and businesses in their area.",
        link: "/laravel"
    },
    {
        image: pp,
        title: "Perfect Propertys",
        description: "Perfect Propertys is a real estate platform designed to connect builders, brokers, and clients looking for properties, PG (Paying Guest accommodations), and rentals...",
        link: "/laravel"
    }
];

const Projects = () => {
    return (
        <Box sx={{ padding: '2rem', textAlign: 'center',color:'#12141d',paddingInline:'5rem' }}>
            <Typography variant="h4" component="h2" sx={{ marginBottom: '2rem', fontWeight: 'bold' }}>
                Our Projects
            </Typography>
            <Grid container spacing={4}>
                {projects.map((project, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Tilt tiltMaxAngleX={20} tiltMaxAngleY={20} glareEnable={true} glareMaxOpacity={0.8} glareColor="lightblue" glarePosition="all">
                            <Paper 
                                elevation={3} 
                                sx={{ 
                                    display: 'flex', 
                                    flexDirection: 'column', 
                                    alignItems: 'center', 
                                    height: '400px', // Fixed height for all cards
                                    padding: '1rem', 
                                    borderRadius: '8px',
                                    border: '2px solid lightgray', // Border styling to match original
                                    position: 'relative', // To keep tilt effect
                                    transition: 'transform 0.2s', // Smooth transition for tilt
                                    '&:hover': {
                                        transform: 'scale(1.05)', // Scale effect on hover
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
        </Box>
    );
};

export default Projects;