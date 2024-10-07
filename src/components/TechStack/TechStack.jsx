"use client";
import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Tilt from "react-parallax-tilt";
import { styled } from "@mui/system";
import Carousel from "react-material-ui-carousel"; // Import MUI Carousel
import reactIcon from "../../assets/techIcons/React.png";
import javaIcon from "../../assets/techIcons/Java.png";
import cSharpIcon from "../../assets/techIcons/CSharp.png";
import aws from "../../assets/techIcons/Aws.png";
import azure from "../../assets/techIcons/Azur.png";
import blender from "../../assets/techIcons/Blender.png";
import canva from "../../assets/techIcons/Canva.png";
import figma from "../../assets/techIcons/Figma.png";
import jira from "../../assets/techIcons/Jira.png";
import mysql from "../../assets/techIcons/Mysql.png";
import postman from "../../assets/techIcons/Postman.png";
import python from "../../assets/techIcons/Python.png";
import selenium from "../../assets/techIcons/Selenium.png";
import sql from "../../assets/techIcons/Sql.png";
import threejs from "../../assets/techIcons/Threejs.png";
import unity from "../../assets/techIcons/unity.png";
import xcode from "../../assets/techIcons/Xcode.png";
import adobe from "../../assets/techIcons/Adobe.png";
import javascript from "../../assets/techIcons/Javascript.png";
import html from "../../assets/techIcons/Html.png";
import css from "../../assets/techIcons/Css.png";
import node from "../../assets/techIcons/Node.png";
import mongodb from "../../assets/techIcons/Mongodb.png";
import photoshop from "../../assets/techIcons/Photoshop.png";
import linux from "../../assets/techIcons/Linux.png";
import ai from "../../assets/techIcons/Ai.png";
import express from "../../assets/techIcons/Express.png";
import apple from "../../assets/techIcons/Apple.png";
import android from "../../assets/techIcons/Android.png";
import services from "../../assets/services.svg";

// Tech data array
const TechData = [
  { name: "ReactJS", url: reactIcon },
  { name: "Java", url: javaIcon },
  { name: "C#", url: cSharpIcon },
  { name: "AWS", url: aws },
  { name: "Azure", url: azure },
  { name: "Blender", url: blender },
  { name: "Canva", url: canva },
  { name: "Figma", url: figma },
  { name: "Jira", url: jira },
  { name: "Mysql", url: mysql },
  { name: "Postman", url: postman },
  { name: "Python", url: python },
  { name: "Selenium", url: selenium },
  { name: "SQL", url: sql },
  { name: "ThreeJS", url: threejs },
  { name: "Unity", url: unity },
  { name: "Xcode", url: xcode },
  { name: "Adobe", url: adobe },
  { name: "JavaScript", url: javascript },
  { name: "HTML", url: html },
  { name: "CSS", url: css },
  { name: "NodeJS", url: node },
  { name: "MongoDB", url: mongodb },
  { name: "Photoshop", url: photoshop },
  { name: "Linux", url: linux },
  { name: "AI", url: ai },
  { name: "ExpressJS", url: express },
  { name: "Apple", url: apple },
  { name: "Android", url: android },
];

// Styled component for tech icons
const TechIconImage = styled("img")({
  height: "4rem",
  width: "4rem",
  padding: "0.5rem",
  objectFit: "contain",
  transition: "transform 0.3s ease",
});

// Main container styling
const TechContainer = styled(Box)({
  margin: "10px",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  height: "auto",
});

// Carousel slide item styling
const CarouselItem = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "1rem",
  textAlign: "center",
});

// Tech card grid layout
const TechGridWrapper = styled(Grid)({
  display: "flex",
  justifyContent: "center",
});

// Carousel Section component
const TechCarousel = () => {
  return (
    <Carousel
      autoPlay={true}
      animation="slide"
      timeout={500}
      indicators={false}
      navButtonsAlwaysVisible={true}
      interval={3000}
      cycleNavigation={true} // Enable looping
    >
      {/* Group tech data into sets of 4 per slide */}
      {Array.from({ length: Math.ceil(TechData.length / 4) }, (_, index) => (
        <TechGridWrapper container spacing={2} key={index}>
          {TechData.slice(index * 4, index * 4 + 4).map((tech, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                glareEnable={true}
                glareMaxOpacity={0.6}
                glareColor="lightblue"
                glarePosition="all"
              >
                <CarouselItem>
                  <TechIconImage src={tech.url} alt={tech.name} />
                  <Typography variant="h6" sx={{ mt: 1 }}>
                    {tech.name}
                  </Typography>
                </CarouselItem>
              </Tilt>
            </Grid>
          ))}
        </TechGridWrapper>
      ))}
    </Carousel>
  );
};

// Main Tech component with description and carousel
const Tech = () => {
  return (
    <TechContainer className="tech-container p-5">
      {/* Description Section */}
      <Box className="tech-discription" sx={{ display: "flex", mb: 4 }}>
        <Box sx={{ flex: 1.1 }}>
          <Typography variant="h1" sx={{ fontSize: "3rem", fontWeight: 700 }}>
            We Provide IT solutions that perform.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "1.1rem", mt: 2 }}>
            We believe that the right blend of these technologies empowers us to
            deliver top-notch solutions that exceed expectations. Our
            commitment to staying up-to-date with the latest technological
            advancements ensures that we consistently provide innovative and
            reliable services to our clients.
          </Typography>
        </Box>
        <Box className="empty" sx={{ flex: 1, textAlign: "right" }}>
          <img src={services} alt="Services" style={{ height: "22rem" }} />
        </Box>
      </Box>

      {/* Carousel Section */}
      <Box className="tech-icons" sx={{ mt: 4 }}>
        <Typography
          variant="h1"
          sx={{ fontSize: "2rem", fontWeight: 600, textAlign: "center", mb: 3 }}
        >
          Our Technologies
        </Typography>
        <TechCarousel />
      </Box>
    </TechContainer>
  );
};

export default Tech;
