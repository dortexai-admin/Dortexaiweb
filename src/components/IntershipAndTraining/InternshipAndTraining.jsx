import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  List,
  ListItem,
  Container,
  CardMedia,
} from "@mui/material";
import Footr from "../Footer/Footer"; // Ensure Footer component is imported correctly
import Navbar from "../Navbar"; // Ensure Navbar component is imported correctly
import "./inter.css";

import webDevelopmentImage from "../../../public/webdev.jpg";
import backenddevelopmentImage from "../../../public/Backend.jpg";
import fullstackdevelopmentImage from "../../../public/fullstack.png";
import uiuxdevelopmentImage from "../../../public/uiux.jpg";
import hrImage from "../../../public/hr.jpeg";
import digitalImages from "../../../public/digital.jpg";
import appdevelopmentImages from "../../../public/Mobileapp.jpg";
import MyCarousel from "../carousel/Carousel";

const InternshipAndTraining = () => {
  const [expanded, setExpanded] = useState(false);
  const internshipList = [
    {
      title: "Full Stack Development Internship",
      desc: "We offer full stack development internships, teaching frontend (HTML, CSS, JavaScript) and backend (Node.js, Express.js, MongoDB/MySQL) technologies. Students gain a comprehensive understanding of web development, covering user interfaces, server-side logic, and databases, preparing them for real-world projects.",
      bgImage: "../../../public/blackbg.png", // Add appropriate image path
    },
    {
      title: "UI/UX Design Internship",
      desc: "Our UI/UX design internships teach design principles, including color theory, typography, wireframing, and usability testing. Using tools like Adobe XD and Figma, students create user-centered designs, ensuring their applications meet real-world needs, while gaining hands-on experience in industry-standard design processes.",
      bgImage: "../../../public/blackbg.png", // Add appropriate image path
    },
    {
      title: "App Development Internship",
      desc: "We provide app development internships focused on designing, building, and deploying mobile apps using React Native or Flutter. Students learn app architecture, UI design, data management, and API integration, ensuring they are skilled in creating optimized, fully functional mobile applications.",
      bgImage: "../../../public/blackbg.png", // Add appropriate image path
    },
    {
      title: "Backend Development Internship",
      desc: "Backend development internships focus on technologies like Node.js, Python, and databases (MySQL, PostgreSQL, MongoDB). Students master data handling, authentication, RESTful APIs, and cloud deployment, gaining the skills to manage server-side logic and ensure secure, scalable applications.",
      bgImage: "../../../public/blackbg.png", // Add appropriate image path
    },
    {
      title: "Web Development Internship",
      desc: "In our web development internship, students learn to build responsive websites using HTML, CSS, JavaScript, and React. They also cover SEO, performance, and accessibility, ensuring that their web projects perform well across devices and are optimized for search engines.",
      bgImage: "../../../public/blackbg.png", // Add appropriate image path
    },
    {
      title: "HR Recruitment Internship",
      desc: "Our HR recruitment internship teaches talent sourcing, candidate screening, interview techniques, and onboarding processes. Students gain experience with applicant tracking systems (ATS) and recruitment marketing tools, preparing them to build strong talent pipelines and manage the hiring process effectively.",
      bgImage: "../../../public/blackbg.png", // Add appropriate image path
    },
    {
      title: "Digital Marketing Internship",
      desc: "Digital marketing internships teach SEO, PPC, social media, and content marketing. Students gain practical experience with Google Ads, Facebook Ads, and analytics tools, learning to optimize campaigns and track ROI, ensuring they are prepared to create effective marketing strategies.",
      bgImage: "../../../public/blackbg.png", // Add appropriate image path
    },
    {
      title: "Hands-On Learning Approach",
      desc: "We teach students from scratch, ensuring they gain both theoretical knowledge and practical skills. With a hands-on, immersive approach, students work on live projects, gaining real-world experience in coding, design, or marketing, making them well-prepared for their future careers.",
      bgImage: "../../../public/blackbg.png", // Add appropriate image path
    },
    {
      title: "Live Project Experience",
      desc: "Interns work on live projects, gaining real-world experience that is highly valued by employers. This hands-on approach allows students to build professional portfolios, showcasing their skills and making them job-ready by the end of the internship.",
      bgImage: "../../../public/blackbg.png", // Add appropriate image path
    },
    {
      title: "Guaranteed Placement",
      desc: "We proudly offer 100% placement for our interns, with successful placements in top companies. Our industry connections and comprehensive training programs ensure that interns are job-ready, helping them transition smoothly into their professional careers as IT professionals.",
      bgImage: "../../../public/blackbg.png", // Add appropriate image path
    },
  ];

  const handleApplyNowClick = () => {
    // navigate to google
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSeaRsXmW0rZuI_ys_Dk89AfuvXF4WMtjANOkFziN8blAcy4TQ/viewform",
      "_blank"
    );
  };

  // const Registernow = () => {
  //   // navigate to google
  //   window.open(
  //     "https://docs.google.com/forms/d/e/1FAIpQLSeaRsXmW0rZuI_ys_Dk89AfuvXF4WMtjANOkFziN8blAcy4TQ/viewform",
  //     "_blank"
  //   );
  // };

  // Define the internship data in an array for easy mapping
  const internshipData = [
    {
      title: "Web Development",
      description:
        "Immerse yourself in the exciting world of web development with an internship at DortexAi Pvt. Ltd. We offer hands-on experience with cutting-edge projects, under the mentorship of industry experts. As an intern, you'll develop your skills in HTML, CSS, JavaScript, React, and modern frameworks, contributing to real-world projects. We're looking for motivated individuals passionate about web development, eager to learn, and ready to make an impact. Join our dynamic team and take the first step towards a successful career in tech. Apply today and be a part of our innovative journey.",
      image: webDevelopmentImage,
    },
    {
      title: "Back End Development",
      description:
        "Our backend development internship program offers aspiring developers the opportunity to gain hands-on experience in building and maintaining robust server-side applications. Interns will work with Node.js and Express.js to design APIs, manage databases, and implement secure authentication methods. They will collaborate with seasoned professionals to learn best practices in coding, debugging, and deployment while contributing to real projects. This internship aims to enhance technical skills and understanding of backend architecture, preparing participants for a successful career in software development. Join us to kickstart your journey in the dynamic field of backend development.",
      image: backenddevelopmentImage,
    },
    {
      title: "Full Stack Development",
      description:
        "Are you ready to dive into the world of full stack development? Our Full Stack Development internship offers a unique opportunity to work on real, impactful projects while mastering both front-end and back-end technologies. You'll collaborate with experienced developers, build intuitive user interfaces, and integrate powerful APIs using tools like React and Node.js. This is more than just an internship—it’s your chance to grow, innovate, and become a versatile developer. If you're eager to enhance your skills and make a difference, apply now and take the first step towards an exciting tech career.",
      image: fullstackdevelopmentImage,
    },
    {
      title: "UI/UX Design",
      description:
        "Elevate your design career with our UI/UX Design internship, where you'll gain invaluable experience working on real-world projects that transform user experiences. You'll master essential design methodologies such as design thinking, user research, and prototyping, all while collaborating with expert designers on cutting-edge projects. This internship is tailored to nurture your creativity and technical proficiency, empowering you to craft visually compelling and user-centric interfaces. If you're driven by innovation and ready to make a lasting impact in the world of digital design, apply now to join our team and shape the future of user experience.",
      image: uiuxdevelopmentImage,
    },
    {
      title: "HR Recruiter",
      description:
        "Unlock your potential in talent acquisition with our dynamic HR Recruiter internship. This program offers you a front-row seat to the entire recruitment process—from screening resumes and conducting interviews to engaging with top candidates. You'll collaborate with our experienced HR team, gaining practical, real-world skills in talent sourcing and selection. This is more than just an internship; it's a gateway to mastering the art of recruitment and understanding strategic hiring practices. If you're eager to shape the future of talent acquisition and build a strong foundation in HR, apply now and take the first step toward a rewarding career!",
      image: hrImage,
    },
    {
      title: "Digital Marketing",
      description:
        "Immerse yourself in the fast-paced world of online marketing with our Digital Marketing internship. This opportunity allows you to explore key aspects of digital marketing, including SEO, content marketing, social media strategies, and performance analytics. You’ll work alongside our marketing experts, gaining hands-on experience in crafting campaigns that boost brand visibility and engagement. By the end of the internship, you'll have developed the skills needed to promote brands effectively, connect with target audiences, and drive results in the digital landscape. If you're passionate about marketing and eager to make an impact, apply now and start your journey.",
      image: digitalImages,
    },
    {
      title: "App Development",
      description:
        "Take your passion for mobile technology to the next level with our App Development internship. You'll have the chance to work with cutting-edge tools and frameworks, creating innovative mobile applications from concept to deployment. Collaborating with experienced developers, you'll hone your skills in app design, coding, and optimization, gaining real-world experience that will set you apart in the fast-evolving tech industry. Whether it's iOS or Android, this internship is your gateway to mastering mobile development and launching a successful career. If you're driven to create impactful mobile solutions, apply now and be part of our visionary team!",
      image: appdevelopmentImages,
    },
  ];

  return (
    <Box sx={{ minHeight: "100vh", pt: 15 }}>
      <Navbar /> {/* Navbar at the top */}
      <Container style={{display:'flex', flexDirection:'column', gap:10, paddingBottom:5}} maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          fontWeight="bold"
          sx={{ mb: 4, color: "#12141d" }}
        >
          Internship and Training.
        </Typography>

        <Typography
          variant="h5"
          sx={{ mb: 2, color: "#000000", fontWeight: "bold", pb: 3 }} // Added paddingBottom here
        >
          Looking For Internship.
        </Typography>
        <Typography variant="h6" sx={{ color: "#5a5a5a", mb: 4, pb: 3 }}>
          {" "}
          {/* Added paddingBottom here */}
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

        <Typography
          variant="h5"
          sx={{ mb: 2, color: "#12141d", fontWeight: "bold", pb: 3 }} // Added paddingBottom here
        >
          Current Internship Opportunities.
        </Typography>

        <Grid container spacing={5} alignItems="center">
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
                    <Box sx={{ color: "black", pb: 3 }}>
                      {" "}
                      {/* Add paddingBottom here */}
                      <Typography
                        variant="h4"
                        gutterBottom
                        sx={{ fontWeight: 600, textAlign: "center", pb: 3 }} // Added paddingBottom here
                      >
                        {internship.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        paragraph
                        sx={{
                          color: "#000000",
                          textAlign: "justify",
                          pb: 3,
                          fontSize: 18,
                        }} // Added paddingBottom here
                      >
                        {internship.description}
                      </Typography>
                    </Box>
                  </Grid>
                </>
              ) : (
                <>
                  {/* Text on left, image on right for odd indices */}
                  <Grid item xs={12} md={6}>
                    <Box sx={{ color: "black", pb: 3 }}>
                      {" "}
                      {/* Add paddingBottom here */}
                      <Typography
                        variant="h4"
                        gutterBottom
                        sx={{
                          fontWeight: 600,
                          textAlign: "center",
                          pb: 1,
                          marginTop: 10,
                        }} // Added paddingBottom here
                      >
                        {internship.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        paragraph
                        sx={{
                          color: "#000000",
                          textAlign: "justify",
                          pb: 1,
                          marginTop: 1,
                          fontSize: 18,
                        }} // Added paddingBottom here
                      >
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
        {/*Add description here at the end of the code*/}
        <Typography
          variant="h4"
          sx={{
            mt: 1,
            textAlign: "left",
            color: "#000000",
            fontWeight: "Bold",
          }}
        >
          Why choose us ?
        </Typography>

        <Typography
          variant="h6"
          sx={{
            mt: 2,
            mb: 2,
            textAlign: "left",
            color: "#000000",
            fontSize: 24,
          }}
        >
          Opportunities are constantly knocking at your door; it’s up to you to
          seize them or let them pass by. At DortexAI, we’re committed to
          nurturing your growth and offering you the chance to work with
          top-tier resources on an international scale. If you're ready to start
          a thrilling journey packed with milestones to achieve and countless
          memories to create, then DortexAI is the perfect place for you. Step
          into your future with us, and let's reach new heights together!
        </Typography>
        <MyCarousel list={internshipList} />
      <div className="QR">
          <p> 🌟Jumpstart Your Career!
        📅 Register now to secure your spot and take the first step toward success! 
        </p>

          <div>
            <img src="../../../public/QR.png" />
            <Button
              variant="contained"
              color="primary"
              fontWeight="bold"
              onClick={handleApplyNowClick}
              >
              Register Now
            </Button>
          </div>
      </div>
      </Container>
      <Footr /> {/* Footer at the bottom */}
    </Box>
  );
};

export default InternshipAndTraining;
