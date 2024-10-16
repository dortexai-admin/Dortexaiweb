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
      roleDescription: "Design and implement both front-end and back-end components of our web applications.",
      skillsRequired: ["React", "Node.js", "MongoDB", "RESTful APIs", "Responsive Design", "Agile Methodologies"],
      responsibilities: [
        "Design and develop web applications.",
        "Work with UI/UX designers to create engaging experiences.",
        "Collaborate with developers to maintain code quality.",
        "Manage databases and implement new features."
      ],
      educationBackground: "Bachelor’s degree in Computer Science or a related field.",
      whatWeOffer: [
        "Competitive salary.",
        "Growth opportunities.",
        "Work-life balance.",
        "Remote work options."
      ],
      howToApply: "Send your application to info@dortexai.com with the subject line 'Application for Full Stack Developer'."
    },
    {
      title: "Game Developer",
      experience: "1+ years",
      roleDescription: "Design, develop, and maintain our rummy game for mobile platforms.",
      skillsRequired: ["C#", "C++", "JavaScript", "Game Engines (Unity/Unreal)", "Mobile Optimization", "Real-time Multiplayer"],
      responsibilities: [
        "Develop and optimize game mechanics and user interactions.",
        "Implement cross-platform game optimization.",
        "Collaborate with designers and backend developers.",
        "Debug and test games for performance."
      ],
      educationBackground: "Bachelor’s degree in Game Development, Computer Science, or a related field.",
      whatWeOffer: [
        "Creative freedom.",
        "Flexible working hours.",
        "Performance-based incentives.",
        "Remote work options."
      ],
      howToApply: "Send your application to info@dortexai.com with the subject line 'Application for Game Developer'."
    },
    {
      title: "AI/ML Trainer",
      experience: "1+ year",
      roleDescription: "Develop training materials and conduct hands-on sessions on AI and machine learning topics.",
      skillsRequired: ["Python", "TensorFlow", "PyTorch", "Machine Learning Algorithms", "Communication Skills"],
      responsibilities: [
        "Deliver workshops and hands-on training sessions.",
        "Create training materials for technical and non-technical audiences.",
        "Help develop real-world AI/ML applications."
      ],
      educationBackground: "Bachelor’s degree in Computer Science, AI/ML, or a related field.",
      whatWeOffer: [
        "Opportunities to work with cutting-edge AI technologies.",
        "Career growth in AI/ML education.",
        "Supportive and collaborative work environment."
      ],
      howToApply: "Send your application to info@dortexai.com with the subject line 'Application for AI/ML Trainer'."
    },
    {
      title: "UI/UX Designer",
      experience: "1+ year",
      roleDescription: "Create intuitive and engaging user interfaces for web and mobile applications.",
      skillsRequired: ["Adobe XD", "Figma", "Sketch", "Wireframing", "User Research"],
      responsibilities: [
        "Conduct user research and create wireframes and prototypes.",
        "Collaborate with developers to ensure designs align with user needs.",
        "Iterate on designs based on user feedback."
      ],
      educationBackground: "Bachelor’s degree in Design, Human-Computer Interaction, or a related field.",
      whatWeOffer: [
        "Opportunities to work on exciting UI/UX projects.",
        "Collaborative and innovative environment.",
        "Competitive salary and growth opportunities."
      ],
      howToApply: "Send your application to info@dortexai.com with the subject line 'Application for UI/UX Designer'."
    },
    {
      title: "HR Recruiter",
      experience: "1+ year",
      roleDescription: "Manage the recruitment process and ensure a great candidate experience.",
      skillsRequired: ["Recruitment Tools", "Interpersonal Skills", "Candidate Assessment", "Interviewing"],
      responsibilities: [
        "Source, screen, and interview candidates for various positions.",
        "Manage multiple recruitment processes simultaneously.",
        "Ensure compliance with employment laws and regulations."
      ],
      educationBackground: "Bachelor’s degree in Human Resources, Business Administration, or a related field.",
      whatWeOffer: [
        "Opportunities to work in a fast-paced, growing tech company.",
        "Flexible work environment.",
        "Competitive salary and benefits."
      ],
      howToApply: "Send your application to info@dortexai.com with the subject line 'Application for HR Recruiter'."
    }
  ];
  
  

  return (
    <Box sx={{ minHeight: "100vh", pt: 20 }}>
      <Navbar/>
      <Container maxWidth="lg" sx={{ pb: 10 }}>
        <Typography variant="h2" component="h2" fontWeight="bold" sx={{ mb: 4, color: "#12141d" }}>
          Career
        </Typography>

        <Typography variant="h5" sx={{ mb: 2, color: "#12141d" }}>
          Why Choose Us?
        </Typography>
        <Typography variant="body1" sx={{ color: "#5a5a5a", mb: 4 }}>
          Better opportunities are always knocking on your door; it's on you whether you want to let them pass or grab them with both hands. At DortexAI, the idea is to help our employees grow and gain experience working with the best possible resources at an international level. If you're ready to embark on a journey with loads of milestones to achieve, and hundreds of moments to cherish, then we might be the best place for you.
        </Typography>

        <Typography variant="h5" sx={{ mb: 2, color: "#12141d" }}>
          Current Openings
        </Typography>

        {jobList.map((job, index) => (
          <Accordion key={index} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${index}bh-content`} id={`panel${index}bh-header`}>
              <Typography fontWeight="600" sx={{ flexShrink: 0 }}>{job.title}</Typography>
              <Typography sx={{ color: "text.secondary", marginLeft: "auto" }}>{job.experience} experience</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6" sx={{ mb: 1 }}>Role Description</Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>{job.roleDescription}</Typography>

              <Typography variant="h6" sx={{ mb: 1 }}>Skills Required</Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>{job.skillsRequired.join(', ')}</Typography>

              <Typography variant="h6" sx={{ mb: 1 }}>Experience</Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>{job.experience}</Typography>

              <Typography variant="h6" sx={{ mb: 1 }}>Responsibilities</Typography>
              <ul>
                {job.responsibilities.map((resp, i) => (
                  <li key={i}>
                    <Typography variant="body2">{resp}</Typography>
                  </li>
                ))}
              </ul>

              <Typography variant="h6" sx={{ mb: 1 }}>What We Offer</Typography>
              <ul>
                {job.whatWeOffer.map((offer, i) => (
                  <li key={i}>
                    <Typography variant="body2">{offer}</Typography>
                  </li>
                ))}
              </ul>

              <Typography variant="h6" sx={{ mb: 1 }}>Educational Background</Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>{job.educationBackground}</Typography>

              <Typography variant="h6" sx={{ mb: 1 }}>How to Apply</Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>{job.howToApply}</Typography>

              <Button
                variant="contained"
                sx={{ mt: 2, backgroundColor: '#011255' }}
                onClick={() => window.open("mailto:info@dortexai.com?subject=Application for " + job.title)}
              >
                Apply Now
              </Button>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
      <Footr />
    </Box>
  );
};

export default Career;
