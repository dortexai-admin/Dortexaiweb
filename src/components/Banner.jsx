import React, { useState, useEffect } from "react";
import { Button, Grid, Box, Typography, Container } from "@mui/material";
import robot from "../assets/profile.png";

const Banner = () => {
    const skills = [
        "Innovative AI Solutions",
        "Web Designing",
        "Web Development",
        "Application Development",
        "Quality Assurance",
        "UX/UI Designing",
        "Digital Marketing",
        "Remote Hiring",
        "Recruitment Services",
    ];

    const [currentSkill, setCurrentSkill] = useState("");
    const [skillIndex, setSkillIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    // Typewriter effect logic
    useEffect(() => {
        if (charIndex < skills[skillIndex].length) {
            const timeout = setTimeout(() => {
                setCurrentSkill((prev) => prev + skills[skillIndex].charAt(charIndex));
                setCharIndex((prev) => prev + 1);
            }, 100); // Adjust the speed by changing the timeout duration
            return () => clearTimeout(timeout);
        } else if (charIndex === skills[skillIndex].length) {
            setTimeout(() => {
                setCharIndex(0);
                setCurrentSkill("");
                setSkillIndex((prev) => (prev + 1) % skills.length);
            }, 1500); // Pause before typing the next skill
        }
    }, [charIndex, skillIndex, skills]);

    return (
        <Container maxWidth="lg" sx={{ py: 5, mt: "8rem" }}>
            <Grid container spacing={4} alignItems="center">
                {/* Left Section */}
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            gap: "0.5rem",
                        }}
                    >
                        <Typography variant="h3" component="h3" sx={{ fontSize: { xs: "2rem", md: "2.5rem" } }}>
                            We Are
                        </Typography>
                        <Typography
                            variant="h1"
                            component="h1"
                            sx={{
                                fontSize: { xs: "2.5rem", md: "4rem" },
                                fontWeight: "bold",
                                textAlign: "left",
                                textShadow: "7px 7px 6px rgba(0, 0, 0, 0.7)",
                                margin: 0,
                            }}
                        >
                            Building robust strategies to build brands.
                        </Typography>
                        <Box sx={{ fontSize: { xs: "1.5rem", md: "2rem" }, display: "flex" }}>
                            {currentSkill}
                            <Typography
                                component="span"
                                sx={{
                                    fontWeight: "bold",
                                    fontSize: "2rem",
                                    ml: 1,
                                    animation: "blink 0.7s step-end infinite",
                                }}
                            >
                                |
                            </Typography>
                        </Box>
                        <Button
                            variant="contained"
                            href="#myservices"
                            sx={{
                                padding: "0.75rem 1.5rem",
                                fontSize: "1rem",
                                fontWeight: 600,
                                backgroundColor: "#0b0b08",
                                boxShadow: 3,
                                "&:hover": {
                                    backgroundColor: "rgb(26, 219, 254)",
                                },
                                mt: 3,
                            }}
                        >
                            Explore our Services
                        </Button>
                    </Box>
                </Grid>

                {/* Right Section with Image */}
                <Grid item xs={12} md={6}>
                    {/* <Box display="flex" justifyContent="center" alignItems="center" sx={{ overflow: 'hidden' }}>
                        <img src={robot} alt="robot" style={{ maxWidth: '100%', height: 'auto' }} />
                    </Box> */}
                </Grid>
            </Grid>

            {/* CSS for blinking cursor effect */}
            <style>
                {`
                    @keyframes blink {
                        0%, 100% {
                            color: transparent;
                        }
                        50% {
                            color: black;
                        }
                    }
                `}
            </style>
        </Container>
    );
};

export default Banner;
