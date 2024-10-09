import React from "react";
import { Grid, Typography, Link, IconButton, Divider, List, ListItem } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import logo from '../../../assets/DortexAiWhite.png';

const LabFootr = () => {
    // Array of important links
    const importantLinks = [
        { href: "/dortexailab/training-development", label: "Training & Development" },
        { href: "/dortexailab/research-development", label: "Research & Development" },
        { href: "/dortexailab/models", label: "Models" },
        { href: "/dortexailab/about", label: "About Us" },
        { href: "/dortexailab/career", label: "Career" },
        { href: "/dortexailab/contact", label: "Contact Us" },
    ];

    // Array of services
    const services = [
        { href: "/services/ai-solutions", label: "Fine Tuning" },
        { href: "/services/application-development", label: "Chatbot Development" },
        { href: "/services/web-development", label: "Inference" },
        { href: "/services/digital-marketing", label: "Custom Machine Learing Model" }
    ];

    return (
        <div style={{ padding: '2rem',backgroundColor:'black' }}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                    <img src={logo} alt="Dortex AI Logo" style={{ width: '6rem' }} />
                    <Typography variant="body2" style={{ marginTop: '1rem' }}>
                        Challenging Ai Solutions to increase the growth in business.
                    </Typography>
                    <div style={{ paddingTop: '1.5rem' }}>
                        {["https://x.com/dortex_ai", "https://www.facebook.com/profile.php?id=61561315643620", 
                        "https://www.linkedin.com/company/dortex-ai/", "https://www.instagram.com/dortex_ai/?hl=en"].map((url, index) => (
                            <IconButton 
                                component={Link} 
                                href={url} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                size="small" 
                                key={index}
                            >
                                <i className={`fab fa-${url.split('/')[2].split('.')[1]}`} style={{ color: 'white' }}></i>

                            </IconButton>
                        ))}
                    </div>
                </Grid>
                <Grid item xs={6} md={2}>
                    <Typography variant="h6" fontWeight="bold">Important Links</Typography>
                    <div style={{ marginTop: '1rem' }}>
                        {importantLinks.map((link, index) => (
                            <Link 
                                key={index} 
                                href={link.href} 
                                color="inherit" 
                                underline="none" 
                                display="block" 
                                sx={{ marginBottom: '0.5rem' }}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </Grid>
                <Grid item xs={6} md={2}>
                    <Typography variant="h6" fontWeight="bold">Services</Typography>
                    <List style={{ marginTop: '1rem', paddingLeft: '0' }}>
                        {services.map((service, index) => (
                            <ListItem key={index} style={{ padding: '0', margin: '0' }}>
                                <Link 
                                    href={service.href} 
                                    color="inherit" 
                                    underline="none" 
                                    style={{ flexGrow: 1 }}
                                    sx={{ marginBottom: '0.5rem' }}
                                >
                                    {service.label}
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h6" fontWeight="bold">Get in Touch</Typography>
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
                        <LocationOnIcon sx={{ color: '#', marginRight: '0.5rem' }} />
                        <Typography variant="body2">AI Research Lab, Chandigarh Group of College, Landran Mohali Punjab</Typography>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '0.5rem' }}>
                        <EmailIcon sx={{ color: '', marginRight: '0.5rem' }} />
                        <Typography variant="body2">info@dortexai.com</Typography>
                    </div>
                </Grid>
            </Grid>
            <Divider style={{ margin: '2rem 0', backgroundColor: 'white' }} />
            <Typography variant="body2" align="center" fontWeight="medium">
                Copyright © 2024 DortexAI Pvt Ltd, All Rights Reserved.
            </Typography>
        </div>
    );
}

export default LabFootr;
