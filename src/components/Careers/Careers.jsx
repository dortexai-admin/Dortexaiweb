import React, { useState } from "react";
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Button, Container } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Footr from "../Footer/Footer";
import Navbar from "../Navbar";

const Career = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const jobList = [
    {
      title: "Full Stack Developer",
      experience: "2+ years",
      description: "As a Full Stack Developer at DortexAI, you will be responsible for designing and implementing the front-end and back-end components of our web applications. You will work closely with UI/UX designers to create an engaging user experience and collaborate with other developers to maintain code quality and implement new features. Proficiency in technologies such as React, Node.js, and MongoDB is essential. The ideal candidate should be comfortable working with RESTful APIs, managing databases, and ensuring responsive design. A strong understanding of Agile methodologies and experience with version control systems like Git will be beneficial."
    },
    {
      title: "Game Developer",
      experience: "1+ years",
      description: "Responsibilities: Game Development: Design, develop, and maintain our rummy game for mobile platforms using [specify the game engine, e.g., Unity, Unreal Engine, Cocos2d, etc.]. Gameplay Mechanics: Implement and refine game mechanics, rules, and user interactions to ensure a seamless and engaging user experience. Cross-Platform Optimization: Optimize the game for various mobile platforms (Android and iOS) ensuring smooth performance across different devices. Collaboration: Work closely with designers, animators, and backend developers to integrate gameplay features and assets. Real-time Multiplayer Features: Develop and maintain real-time multiplayer functionalities including matchmaking, leaderboards, and social features. Bug Fixing and Debugging: Identify performance bottlenecks, bugs, and crashes; provide solutions to improve game performance. Testing and Iteration: Collaborate with QA to test games and iterate on feedback to enhance gameplay and user satisfaction. Version Control: Maintain code versioning using tools like Git and collaborate with the team for smooth integration of new features. Required Skills and Qualifications: Educational Background: Bachelor’s degree in Computer Science, Game Development, or a related field (or equivalent experience). Programming Languages: Strong proficiency in C#, C++, or JavaScript (depending on the game engine being used). Experience with Game Engines: Hands-on experience with [Unity/Unreal Engine/Godot/other relevant game engines]. Mobile Game Development: Experience in developing games for mobile platforms (Android/iOS) with a solid understanding of mobile game development best practices. Knowledge of Rummy/Card Games: Familiarity with card games like Rummy and their rules/mechanics will be a significant advantage. Real-time Multiplayer: Experience in implementing and optimizing real-time multiplayer games using WebSockets, Photon, or similar technologies. Animation and Graphics: Basic understanding of 2D/3D animations and graphics integration. Problem-solving Skills: Strong debugging and troubleshooting skills to ensure smooth gameplay experience. Version Control: Experience with version control systems like Git. Preferred Qualifications: Experience with cross-platform frameworks like React Native or Flutter. Familiarity with backend services and APIs for game data and user management. Knowledge of game physics and AI programming. Passion for gaming and a good understanding of the latest trends in mobile games. Previous experience in developing card games or casino-type games is a plus. What We Offer: Creative Freedom: An opportunity to bring your ideas to life and shape the gaming experience for thousands of users. Work-Life Balance: Flexible working hours and a supportive work environment. Growth Opportunities: Regular skill development sessions and a chance to grow within the company. Competitive Salary: Attractive salary package and performance-based incentives. Remote Work Options: Open to candidates who prefer working remotely."
    },
    {
      title: "AI/ML Trainer",
      experience: "1+ year",
      description: "We are seeking an AI/ML Trainer to join our team at DortexAI. The successful candidate will have a solid understanding of machine learning algorithms and AI frameworks. In this role, you will be responsible for developing training materials, conducting workshops, and delivering hands-on training sessions to both technical and non-technical audiences. You should be proficient in Python and familiar with popular libraries such as TensorFlow and PyTorch. Additionally, excellent communication skills are necessary to convey complex concepts in a clear and engaging manner. Experience in creating real-world applications of AI/ML will be a plus."
    },
    {
      title: "UI/UX Designer",
      experience: "1+ year",
      description: "We are looking for a creative and detail-oriented UI/UX Designer to join our team at DortexAI. You will be responsible for creating intuitive and engaging user interfaces for our web and mobile applications. Your role will involve conducting user research, designing wireframes and prototypes, and collaborating with developers to ensure the final product aligns with user needs. Proficiency in design tools such as Adobe XD, Sketch, or Figma is required. The ideal candidate should have a strong portfolio showcasing previous design projects and a passion for creating seamless user experiences."
    },
    {
      title: "HR Recruiter",
      experience: "1+ year",
      description: "DortexAI is looking for a dedicated HR Recruiter to manage our recruitment process. In this role, you will be responsible for sourcing, screening, and interviewing candidates to fill various positions within the company. Strong interpersonal skills and the ability to assess candidates' qualifications and cultural fit are essential. You should have experience with various recruitment tools and platforms, as well as knowledge of employment laws and regulations. The ideal candidate will be proactive, organized, and able to manage multiple recruitment processes simultaneously. A passion for connecting talented individuals with opportunities is crucial for success in this role."
    }
  ];
  

  return (
    <Box sx={{ minHeight: "100vh", pt: 20 }}>
        <Navbar/>
      <Container maxWidth="lg" sx={{pb:10}}>
        <Typography variant="h2" component="h2" fontWeight="bold" sx={{ mb: 4, color: "#12141d" }}>
          Career
        </Typography>

        <Typography variant="h5" sx={{ mb: 2 ,color: "#12141d" }}>
          Why Choose Us?
        </Typography>
        <Typography variant="body1" sx={{ color: "#5a5a5a", mb: 4 }}>
          Better opportunities are always knocking on your door; it's on you whether you want to let them pass or grab them with both hands. At DortexAI, the idea is to help our employees grow and gain experience working with the best possible resources at an international level. If you're ready to embark on a journey with loads of milestones to achieve, and hundreds of moments to cherish, then we might be the best place for you.
        </Typography>

        <Typography variant="h5" sx={{ mb: 2,color: "#12141d" }}>
          Current Openings
        </Typography>

        {jobList.map((job, index) => (
          <Accordion key={index} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${index}bh-content`} id={`panel${index}bh-header`}>
              <Typography fontWeight='600' sx={{ flexShrink: 0 }}>{job.title}</Typography>
              <Typography sx={{ color: "text.secondary", marginLeft: "auto" }}>{job.experience} experience</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{job.description}</Typography>
              <Button
                variant="contained"
                sx={{ mt: 2,backgroundColor:'#011255' }}
                onClick={() => window.open("mailto:info@dortexai.com?subject=Application for " + job.title)}
              >
                Apply Now
              </Button>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
      <Footr/>
    </Box>
  );
};

export default Career;
