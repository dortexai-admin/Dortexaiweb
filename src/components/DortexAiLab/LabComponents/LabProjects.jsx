import React from "react";
import { Box, Typography, Grid, Paper, Container } from "@mui/material";
import Tilt from "react-parallax-tilt";
import hcareai from "../../../../public/HealthCareAi.png";
import aitutor from "../../../../public/aitutor.png";
import business from "../../../../public/business.png";

const Labproject = [
    {
        image: hcareai,
        title: "Health Care AI",
        description:
            "Our AI-powered healthcare platform analyzes uploaded prescriptions and generates personalized video guidance. The virtual doctor explains medication, required tests, precautions, and follow-up visits in detail. Available in multiple languages, including Hindi and Punjabi...",
    },
    {
        image: aitutor,
        title: "AI Tutor",
        description:
            "AI Tutor is your intelligent chatbot companion that seamlessly connects businesses with their customers by providing instant solutions to queries. With Query Mate, you can effortlessly inquire about any aspect of a company, from product details and support inquiries to general information...",
    },
    {
        image: business,
        title: "Business Solutions",
        description:
            "The Business Solutions project focuses on providing tailored AI-driven solutions to enhance business growth. By leveraging advanced AI models, we help companies streamline operations, optimize decision-making, and unlock new opportunities. Our solutions...",
    },
];

const LabProjects = () => {
    return (
        <Container maxWidth="lg" sx={{ padding: "2rem", textAlign: "center", color: "#12141d" }}>
            <Typography variant="h4" component="h2" sx={{ marginBottom: "2rem", fontWeight: "bold" }}>
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
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    height: { xs: "auto", md: "400px" }, // Responsive height
                                    padding: "1rem",
                                    borderRadius: "8px",
                                    border: "2px solid lightgray",
                                    transition: "transform 0.2s",
                                    "&:hover": {
                                        transform: "scale(1.05)",
                                    },
                                }}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{ borderRadius: "8px", width: "10rem", height: "auto", maxHeight: "200px" }}
                                />
                                <Box sx={{ textAlign: "center", marginTop: "1rem" }}>
                                    <Typography variant="h6" component="h3" sx={{ fontWeight: "bold" }}>
                                        {project.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ marginTop: "0.5rem" }}>
                                        {project.description}
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
