import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import Tilt from 'react-parallax-tilt';
import easyjob from '../../../public/EasyJob.png';
import abacus from '../../assets/projects/Abacus.jpg';
import pp from '../../../public/pp.png';
import td from '../../../public/td.png';
import sh from '../../../public/sh.png';
import thc from '../../../public/thc.png';
import homebuddy from '../../../public/hb.png';
import localkonnect from '../../../public/Lk.jpg';

const projects = [
    {
        image: easyjob,
        title: "EASY JOB",
        description: "Easy Job is an AI-powered app that helps job seekers of all backgrounds find employment including unskilled, freshers and experienced candidates at one platform.",
        link: "https://r3f-easyjob.vercel.app/"
    },
    {
        image: abacus,
        title: "ABACUS CLOUD",
        description: "Abacus Cloud a storage platform where users can store their data files and many more things with premium features...",
        link: "https://www.behance.net/gallery/210505453/Abacus-Cloud"
    },
    {
        image: pp,
        title: "Perfect Propertys",
        description: "Perfect Propertys is a real estate platform designed to connect builders, brokers, and clients looking for properties, PG (Paying Guest accommodations), and rentals...",
        link: "https://www.behance.net/gallery/210507789/Perfect-Propertys"
    },
    {
        image: homebuddy,
        title: "HOMBEBUDDY",
        description: "HomeBuddy is a platform that connects users with their ideal home and property services...",
        link: "#"
    },
    {
        image: localkonnect,
        title: "LocalKonnect",
        description: "LocalKonnect helps users find local services and businesses in their area...",
        link: "https://localkonnect.com/"
    },
    {
        image: sh,
        title: "Skyway Holidays",
        description: "SkywayHoliday app revolutionizes the hotel booking experience for travelers visiting Pattaya. With just a few taps, users can easily book their stay...",
        link: "https://www.skywayholidays.in/"
    },
];

const Projects = () => {
    return (
        <Box sx={{
            textAlign: 'justify',
            color: '#12141d',
            display: { xs: 'flex', md: 'block' }, // Responsive display property
            flexDirection: { xs: 'column', md: 'initial' }, // Responsive flex direction
            alignItems: { xs: 'center', md: 'initial' }, // Responsive align items
            maxWidth:'165vh',
            paddingY:'2rem'
        }}>
            <Typography variant="h3" component="h3" sx={{ marginBottom: '2rem', fontWeight: 'bold' }}>
                Our Projects
            </Typography>
            <Grid container spacing={6} className=" px-3 md:px-0">
                {projects.map((project, index) => (
                    <Grid item xs={6} sm={6} md={4} key={index}>
                        <Tilt tiltMaxAngleX={30} tiltMaxAngleY={20} glareEnable={true} glareMaxOpacity={0.8} glareColor="lightblue" glarePosition="all">
                            <Paper
                                elevation={3}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    height: { xs: '250px', md: '370px' }, // Responsive height
                                    padding: {xs:'2.2rem',md:'1rem'},
                                    borderRadius: '8px',
                                    border: '2px solid lightgray',
                                    position: 'relative',
                                    transition: 'transform 0.2s',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                    }
                                }}
                            >
                                <img src={project.image} alt={project.title} style={{ borderRadius: '8px', width: '10rem', height: 'auto', maxHeight: '150px' }} />
                                <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', marginTop:{xs:'0.2rem',md:'1rem'}, textAlign: 'center',fontSize:{xs:'1rem',md:'1.3rem'} }}>
                                    {project.title}
                                </Typography>
                                <Box sx={{ textAlign: 'center', marginTop: '1rem', display: { xs: 'none', md: 'block' } }}>
                                    <Typography variant="body2" color="text.secondary" sx={{ marginTop: '0.5rem' }}>
                                        {project.description}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="blue"
                                        sx={{ marginTop: '1rem', cursor: 'pointer' }}
                                        component="a"
                                        href={project.link}
                                        target="_blank"
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
