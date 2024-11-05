import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { styled } from "@mui/system";
import aboutImage1 from "../../assets/about-1.jpg";
import aboutImage2 from "../../assets/about-2.jpg";
import './About.css';
import Location from "../Location/Location";


// Styled components using MUI's styled
const StyledBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6, 0),
  color: "black",
  display: "flex",
  justifyContent: "center",
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(3, 0), // Adjust padding for mobile
  },
}));

const YearsInfo = styled(Box)(({ theme }) => ({
  textAlign: "center",
  marginRight: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    marginRight: 0, // Reset margin for mobile
    marginBottom: theme.spacing(2), // Add margin below in mobile view
  },
}));

const LargeText = styled(Typography)(({ theme }) => ({
  fontSize: "10rem", // Use rem for responsiveness
  fontWeight: "bold",
  margin: 0,
  color: "#12141d",
  [theme.breakpoints.down('sm')]: {
    fontSize: "5rem", // Smaller font for mobile
  },
}));

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: "rgb(12, 18, 116)",
  color: "white",
  padding: theme.spacing(2, 6),
  fontWeight: 600,
  "&:hover": {
    backgroundColor: "#533aa7",
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1.5, 4), // Adjust button padding for mobile
    width: "100%", // Full width on mobile
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
      <Box sx={{ maxWidth: "lg", width: "100%",
       paddingInline: {
        xs: "0.5rem", // padding for extra small devices (phones)
        sm: "0.5rem", // padding for small devices (tablets)
        md: "0.5rem", // padding for medium devices
        lg: "0",      // padding for large devices (1200px and above)
      },
    }}>
        <Grid container spacing={5} direction={{ xs: "column", md: "row" }}>
          {/* Left Section */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 5,
                flexDirection: { xs: "column", md: "row" }, // Stack items vertically on mobile
              }}
            >
              <YearsInfo>
                <LargeText>07</LargeText>
                <Typography variant="h5" sx={{ letterSpacing: "0.625rem", fontWeight: 600, color: "#12141d" }}>
                  Years
                </Typography>
              </YearsInfo>
              <Typography variant="h3" sx={{ fontSize: { xs: "1.5rem", md: "1.75rem" }, fontWeight: 500, color: "#12141d", textAlign: { xs: "center", md: "left" } }}>
                years of building bespoke software, transforming businesses across industries.
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ color: "#5a5a5a", mb: 4,fontSize:20, textAlign: { xs: "center", md: "left" } }}>
                We offer a wide range of services meeting your specific business needs.
              </Typography>
              <Typography sx={{ display: "flex", alignItems: "center", mb: 3,fontSize:22, fontWeight:"bold", justifyContent: { xs: "center", md: "left" } }}>
                <i className="far fa-check-circle text-primary me-3" />
                Affordable Prices
              </Typography>
              <Typography sx={{ display: "flex", alignItems: "center", mb: 3,fontWeight:"bold", fontSize:22, justifyContent: { xs: "center", md: "left" } }}>
                <i className="far fa-check-circle text-primary me-3" />
                High Quality Product
              </Typography>
              <Typography sx={{ display: "flex", alignItems: "center", mb: 3,fontWeight:"bold", fontSize:22, justifyContent: { xs: "center", md: "left" } }}>
                <i className="far fa-check-circle text-primary me-3" />
                On Time Project Delivery
              </Typography>
              <CustomButton href="/aboutus">Read More</CustomButton>
            </Box>
          </Grid>

          {/* Right Section */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={3} sx={{ mb: 4 }}>
              <Grid item xs={6}>
                <Box component="img" src={aboutImage1} alt="About 1" sx={{
                  width: "100%",
                  height: { xs: "10rem", md: "19rem" },
                  objectFit: "contain",
                  borderRadius: "1.5rem"
                }} />
              </Grid>
              <Grid item xs={6}>
                <Box component="img" src={aboutImage2} alt="About 2" sx={{
                  width: "100%",
                  height: { xs: "10rem", md: "19rem" },
                  objectFit: "contain",
                  borderRadius: "1.5rem"
                }} />
              </Grid>
            </Grid>
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 3, justifyContent: { xs: "center", md: "left" }, flexDirection: { xs: "column", md: "row" } }}>
                <Typography variant="h5" sx={{ borderRight: { md: "2px solid #dee2e6" }, pr: { md: 3 }, mr: { md: 3 }, fontWeight: 600, color: "#12141d", mb: { xs: 2, md: 0 }, textAlign: { xs: "center", md: "left" } }}>
                  Happy Clients
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography variant="h2" sx={{ color: "#011255", fontWeight: "bold", fontSize: { xs: "1.75rem", md: "2rem" } }}>{clients}</Typography>
                  <Typography variant="h2" sx={{ fontSize: { xs: "1.75rem", md: "2rem" }, ml: 1 }}>+</Typography>
                </Box>
              </Box>
              <Typography sx={{ color: "#5A5A5A", mb: 4, textAlign: { xs: "center", md: "left" } }}>
                With our vast experience of dealing with clients in various domains and industries, we are confident to deliver the best possible development services to businesses.
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mb: 3, justifyContent: { xs: "center", md: "left" }, flexDirection: { xs: "column", md: "row" } }}>
                <Typography variant="h5" sx={{ borderRight: { md: "2px solid #dee2e6" }, pr: { md: 3 }, mr: { md: 3 }, fontWeight: 600, color: "#12141d", mb: { xs: 2, md: 0 }, textAlign: { xs: "center", md: "left" } }}>
                  Projects Completed
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography variant="h2" sx={{ color: "#011255", fontWeight: "bold", fontSize: { xs: "1.75rem", md: "2rem" } }}>{projects}</Typography>
                  <Typography variant="h2" sx={{ fontSize: { xs: "1.75rem", md: "2rem" }, ml: 1 }}>+</Typography>
                </Box>
              </Box>
              <Typography sx={{ color: "#5A5A5A", textAlign: { xs: "center", md: "left" } }}>
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
