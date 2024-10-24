import React from "react";
import { Box, Typography, Grid, Button, Container } from "@mui/material";

// Import your custom icons
import webDevelopmentIcon from "../../assets/Icons/Web.png";
import recruitmentIcon from "../../assets/Icons/Recruitment.png";
import aiSolutionsIcon from "../../assets/Icons/AI.png";
import mobileAppIcon from "../../assets/Icons/App.png";
import digitalMarketingIcon from "../../assets/Icons/Digital-marketing.png";
import uiuxDesignIcon from "../../assets/Icons/UI-UX.png";



const Services = () => {
  const serviceData = [
    {
      icon: aiSolutionsIcon,
      title: "Innovative AI Solutions",
      description:
        "Empower your business with tailored AI services, delivering advanced AI solutions, including machine learning and automation.",
    },
    {
      icon: mobileAppIcon,
      title: "Mobile Application",
      description:
        "Elevate your business efficiency by introducing its app with us using any framework from Android Studio to React.",
    },
    {
      icon: webDevelopmentIcon,
      title: "Website Development",
      description:
        "We provide customized Web Development solutions for the satisfaction of our customers worldwide.",
    },
    {
      icon: digitalMarketingIcon,
      title: "Digital Marketing",
      description:
        "A robust online presence is essential for businesses, and we can help you navigate the digital marketing landscape.",
    },
    {
      icon: uiuxDesignIcon,
      title: "UI/UX Design",
      description:
        "Our team creates designs that reflect your tastes using tools like Adobe, Photoshop, and CorelDRAW.",
    },
    {
      icon: recruitmentIcon,
      title: "Recruitment Solutions",
      description:
        "Hiring developers and designers remotely can result in significant financial benefits and access to niche expertise.",
    },
  ];

  

  return (
    <Container maxWidth="lg">
      <Box display="flex" justifyContent="space-between" mb={4}>
        <Typography
          variant="h3"
          fontWeight="bold"
          color="text.primary"
          textAlign=""
          sx={{ flexGrow: 1 }}
        >
          Our Services
        </Typography>
        <Button
  variant="contained"
  href="#hire"
  sx={{
    display: { xs: "none", md: "inline-flex" },
    backgroundColor: '#011255',
    color: 'white',
    fontWeight: 600,
    padding: { xs: '12px 24px', sm: '16px 48px' }, // Adjust padding based on screen size
    "&:hover": {
      backgroundColor: "#533aa7", // Hover color
    },
  }}
  onClick={(e) => {
    e.preventDefault();
    window.open(
      "mailto:info@dortexai.com?subject=We want to hire you for a project"
    );
  }}
>
  Hire Us
</Button>

      </Box>

      <Grid container spacing={4}>
        {serviceData.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={2}
              border={3}
              p={2}
              borderRadius={2}
              borderColor={'#e5e7eb'}
            >
              <Box
                component="img"
                src={service.icon}
                alt={service.title}
                sx={{ width: "35%", aspectRatio: "1/1" }}
              />
              <Typography
                variant="h6"
                fontWeight="bold"
                textAlign="center"
                color="text.primary"
              >
                {service.title}
              </Typography>
              <Typography
                variant="body1"
                textAlign="center"
                color="text.secondary"
              >
                {service.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
