import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { styled } from "@mui/system";
import aboutImage1 from "../../assets/about-1.jpg";
import aboutImage2 from "../../assets/about-2.jpg";

// Styled components using MUI's styled
const StyledBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6, 0),
  color: "black",
  display: "flex",
  justifyContent: "center",
}));

const YearsInfo = styled(Box)(({ theme }) => ({
  textAlign: "center",
  marginRight: theme.spacing(2),
}));

const LargeText = styled(Typography)(({ theme }) => ({
  fontSize: "10rem",
  fontWeight: "bold",
  margin: 0,
  color: "#12141d",
}));

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: "rgb(12, 18, 116)",
  color: "white",
  padding: theme.spacing(2, 6),
  fontWeight: 600,
  "&:hover": {
    backgroundColor: "#533aa7",
  },
}));

const About = () => {
  const [clients, setClients] = useState(0);
  const [projects, setProjects] = useState(0);

  const incrementCounter = (target, setFunction) => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        setFunction(target);
        clearInterval(counter);
      } else {
        setFunction(Math.ceil(start));
      }
    }, 16);
  };

  useEffect(() => {
    incrementCounter(149, setClients);
    incrementCounter(14, setProjects);
  }, []);

  return (
    <StyledBox>
      <Box sx={{ maxWidth: "1400px", width: "100%" }}>
        <Grid container spacing={5}>
          {/* Left Section */}
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 5 }}>
              <YearsInfo>
                <LargeText>01</LargeText>
                <Typography variant="h5" sx={{ letterSpacing: "1rem", fontWeight: 600, color: "#12141d" }}>
                  Years
                </Typography>
              </YearsInfo>
              <Typography variant="h3" sx={{ fontSize: "28px", fontWeight: 500, color: "#12141d" }}>
                years of building bespoke software, transforming businesses across industries.
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ color: "#5a5a5a", mb: 4 }}>
                We offer a wide range of services meeting your specific business needs.
              </Typography>
              <Typography sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <i className="far fa-check-circle text-primary me-3" />
                Affordable Prices
              </Typography>
              <Typography sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <i className="far fa-check-circle text-primary me-3" />
                High Quality Product
              </Typography>
              <Typography sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <i className="far fa-check-circle text-primary me-3" />
                On Time Project Delivery
              </Typography>
              <CustomButton href="#services">Read More</CustomButton>
            </Box>
          </Grid>

          {/* Right Section */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={3} sx={{ mb: 4 }}>
              <Grid item xs={6}>
                <Box component="img" src={aboutImage1} alt="About 1" sx={{ width: "100%", height: "19rem", objectFit: "contain", borderRadius: "1.5rem" }} />
              </Grid>
              <Grid item xs={6}>
                <Box component="img" src={aboutImage2} alt="About 2" sx={{ width: "100%", height: "19rem", objectFit: "contain", borderRadius: "1.5rem" }} />
              </Grid>
            </Grid>
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <Typography variant="h5" sx={{ borderRight: "2px solid #dee2e6", pr: 3, mr: 3, fontWeight: 600, color: "#12141d" }}>
                  Happy Clients
                </Typography>
                <Typography variant="h2" sx={{ color: "#011255", fontWeight: "bold", fontSize: "32px" }}>{clients}</Typography>
                <Typography variant="h2" sx={{ fontSize: "32px", ml: 1 }}>+</Typography>
              </Box>
              <Typography sx={{ color: "#5A5A5A", mb: 4 }}>
                With our vast experience of dealing with clients in various domains and industries, we are confident to deliver the best possible development services to businesses.
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <Typography variant="h5" sx={{ borderRight: "2px solid #dee2e6", pr: 3, mr: 3, fontWeight: 600, color: "#12141d" }}>
                  Projects Completed
                </Typography>
                <Typography variant="h2" sx={{ color: "#011255", fontWeight: "bold", fontSize: "32px" }}>{projects}</Typography>
                <Typography variant="h2" sx={{ fontSize: "32px", ml: 1 }}>+</Typography>
              </Box>
              <Typography sx={{ color: "#5A5A5A" }}>
                Our team moves heaven and earth to transform your ideas into reality.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </StyledBox>
  );
};

export default About;
