import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Container,
  CardMedia,
} from "@mui/material";
import Footr from "../Footer/Footer"; // Ensure Footer component is imported correctly
import Navbar from "../Navbar"; // Ensure Navbar component is imported correctly

import webDevelopmentImage from '../../../public/webdev.jpg';
import backenddevelopmentImage from '../../../public/Backend.jpg';
import fullstackdevelopmentImage from '../../../public/fullstack.png';
import uiuxdevelopmentImage from '../../../public/uiux.jpg';
import hrImage from '../../../public/hr.jpeg';
import digitalImages from '../../../public/digital.jpg';
import appdevelopmentImages from '../../../public/Mobileapp.jpg'

const InternshipAndTraining = () => {
  const [expanded, setExpanded] = useState(false);

  const handleApplyNowClick = () => {
    // navigate to google
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSde8pOWCPDInH1PtRS_Mm67aDXTO4uVf8cqKLqrJHas5_KbXQ/viewform?usp=sf_link", "_blank");
  };

  // Define the internship data in an array for easy mapping
  const internshipData = [
    {
      title: "Web Development",
      description: "Immerse yourself in the exciting world of web development with an internship at DortexAi Pvt. Ltd. We offer hands-on experience with cutting-edge projects, under the mentorship of industry experts. As an intern, you'll develop your skills in HTML, CSS, JavaScript, React, and modern frameworks, contributing to real-world projects. We're looking for motivated individuals passionate about web development, eager to learn, and ready to make an impact. Join our dynamic team and take the first step towards a successful career in tech. Apply today and be a part of our innovative journey.",
      image: webDevelopmentImage,
    },
    {
      title: "Back End Development",
      description: "Our backend development internship program offers aspiring developers the opportunity to gain hands-on experience in building and maintaining robust server-side applications. Interns will work with Node.js and Express.js to design APIs, manage databases, and implement secure authentication methods. They will collaborate with seasoned professionals to learn best practices in coding, debugging, and deployment while contributing to real projects. This internship aims to enhance technical skills and understanding of backend architecture, preparing participants for a successful career in software development. Join us to kickstart your journey in the dynamic field of backend development.",
      image: backenddevelopmentImage,
    },
    {
      title: "Full Stack Development",
      description: "Are you ready to dive into the world of full stack development? Our Full Stack Development internship offers a unique opportunity to work on real, impactful projects while mastering both front-end and back-end technologies. You'll collaborate with experienced developers, build intuitive user interfaces, and integrate powerful APIs using tools like React and Node.js. This is more than just an internship—it’s your chance to grow, innovate, and become a versatile developer. If you're eager to enhance your skills and make a difference, apply now and take the first step towards an exciting tech career.",
      image: fullstackdevelopmentImage,
    },
    {
      title: "UI/UX Design",
      description: "Elevate your design career with our UI/UX Design internship, where you'll gain invaluable experience working on real-world projects that transform user experiences. You'll master essential design methodologies such as design thinking, user research, and prototyping, all while collaborating with expert designers on cutting-edge projects. This internship is tailored to nurture your creativity and technical proficiency, empowering you to craft visually compelling and user-centric interfaces. If you're driven by innovation and ready to make a lasting impact in the world of digital design, apply now to join our team and shape the future of user experience.",
      image: uiuxdevelopmentImage,
    },
    {
      title: "HR Recruiter",
      description: "Unlock your potential in talent acquisition with our dynamic HR Recruiter internship. This program offers you a front-row seat to the entire recruitment process—from screening resumes and conducting interviews to engaging with top candidates. You'll collaborate with our experienced HR team, gaining practical, real-world skills in talent sourcing and selection. This is more than just an internship; it's a gateway to mastering the art of recruitment and understanding strategic hiring practices. If you're eager to shape the future of talent acquisition and build a strong foundation in HR, apply now and take the first step toward a rewarding career!",
      image: hrImage,
    },
    {
      title: "Digital Marketing",
      description: "Immerse yourself in the fast-paced world of online marketing with our Digital Marketing internship. This opportunity allows you to explore key aspects of digital marketing, including SEO, content marketing, social media strategies, and performance analytics. You’ll work alongside our marketing experts, gaining hands-on experience in crafting campaigns that boost brand visibility and engagement. By the end of the internship, you'll have developed the skills needed to promote brands effectively, connect with target audiences, and drive results in the digital landscape. If you're passionate about marketing and eager to make an impact, apply now and start your journey.",
      image: digitalImages,
    },
    {
      title: "App Development",
      description: "Take your passion for mobile technology to the next level with our App Development internship. You'll have the chance to work with cutting-edge tools and frameworks, creating innovative mobile applications from concept to deployment. Collaborating with experienced developers, you'll hone your skills in app design, coding, and optimization, gaining real-world experience that will set you apart in the fast-evolving tech industry. Whether it's iOS or Android, this internship is your gateway to mastering mobile development and launching a successful career. If you're driven to create impactful mobile solutions, apply now and be part of our visionary team!",
      image: appdevelopmentImages,
    },
  ];

  return (
    <Box sx={{ minHeight: "100vh", pt: 15 }}>
      <Navbar /> {/* Navbar at the top */}
      <Container maxWidth="lg" sx={{ pb: 10 }}>
        <Typography
          variant="h2"
          component="h2"
          fontWeight="bold"
          sx={{ mb: 4, color: "#12141d" }}
        >
          Internship and Training.
        </Typography>

        <Typography variant="h5" sx={{ mb: 2, color: "#000000", fontWeight:"bold" }}>
          Looking For Internship.
        </Typography>
        <Typography variant="h6" sx={{ color: "#5a5a5a", mb: 4 }}>
          Kick-Start Your Career with Dortex AI Pvt. Ltd. Are you ready to
          embark on an exciting journey that will shape your future and unlock
          your potential? If you're seeking a dynamic environment where you can
          gain hands-on experience and grow in your field of interest, look no
          further. Dortex AI Pvt. Ltd. is offering exclusive internship
          opportunities designed to help you build a solid foundation for your
          career and become a future leader in your industry. At Dortex AI, we
          believe in empowering talented individuals like you by providing the
          resources, mentorship, and real-world challenges you need to thrive.
          Our internships are not just about learning the basics; they are
          designed to provide immersive, project-based experiences that allow
          you to apply your knowledge, develop new skills, and contribute to
          innovative solutions.
        </Typography>

        <Typography variant="h5" sx={{ mb: 2, color: "#12141d", fontWeight: "bold" }}>
          Current Internship Opportunities.
        </Typography>

        <Grid container spacing={4} alignItems="center">
          {internshipData.map((internship, index) => (
            <React.Fragment key={internship.title}>
              {index % 2 === 0 ? (
                <>
                  {/* Image on left, text on right for even indices */}
                  <Grid item xs={12} md={6}>
                    <Box
                      sx={{
                        position: "relative",
                        "&:hover .overlay": {
                          opacity: 1,
                        },
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={internship.image}
                        alt={internship.title}
                        sx={{ borderRadius: 2, boxShadow: 3 }}
                      />

                      {/* Hover overlay */}
                      <Box
                        className="overlay"
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          bgcolor: "rgba(0, 0, 0, 0.6)",
                          color: "white",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          textAlign: "center",
                          opacity: 0,
                          transition: "opacity 0.3s ease",
                          borderRadius: 2,
                        }}
                      >
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleApplyNowClick}
                        >
                          Apply Now
                        </Button>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box sx={{ color: "black" }}>
                      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
                        {internship.title}
                      </Typography>
                      <Typography variant="body1" paragraph sx={{ color: "#000000" }}>
                        {internship.description}
                      </Typography>
                    </Box>
                  </Grid>
                </>
              ) : (
                <>
                  {/* Text on left, image on right for odd indices */}
                  <Grid item xs={12} md={6}>
                    <Box sx={{ color: "black" }}>
                      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
                        {internship.title}
                      </Typography>
                      <Typography variant="body1" paragraph sx={{ color: "#000000" }}>
                        {internship.description}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box
                      sx={{
                        position: "relative",
                        "&:hover .overlay": {
                          opacity: 1,
                        },
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={internship.image}
                        alt={internship.title}
                        sx={{ borderRadius: 2, boxShadow: 3 }}
                      />

                      {/* Hover overlay */}
                      <Box
                        className="overlay"
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          bgcolor: "rgba(0, 0, 0, 0.6)",
                          color: "white",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          textAlign: "center",
                          opacity: 0,
                          transition: "opacity 0.3s ease",
                          borderRadius: 2,
                        }}
                      >
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleApplyNowClick}
                        >
                          Apply Now
                        </Button>
                      </Box>
                    </Box>
                  </Grid>
                </>
              )}
            </React.Fragment>
          ))}
        </Grid>
      </Container>
      <Footr /> {/* Footer at the bottom */}
    </Box>
  );
};

export default InternshipAndTraining;
