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
      title: "AI/ML Trainer",
      experience: "1+ year",
      description: "We are seeking an AI/ML Trainer to join our team at DortexAI. The successful candidate will have a solid understanding of machine learning algorithms and AI frameworks. In this role, you will be responsible for developing training materials, conducting workshops, and delivering hands-on training sessions to both technical and non-technical audiences. You should be proficient in Python and familiar with popular libraries such as TensorFlow and PyTorch. Additionally, excellent communication skills are necessary to convey complex concepts in a clear and engaging manner. Experience in creating real-world applications of AI/ML will be a plus."
    },
    {
      title: "Backend Developer",
      experience: "1+ year",
      description: "DortexAI is looking for a talented Backend Developer focused on Node.js to join our dynamic team. In this role, you will design, develop, and maintain server-side applications and services. You will work closely with front-end developers to integrate user-facing elements with server-side logic. Experience with Node.js frameworks such as Express.js is required, along with knowledge of databases (SQL and NoSQL). You should have a solid understanding of API design principles and best practices. The ideal candidate will have strong problem-solving skills and the ability to work collaboratively in a fast-paced environment."
    },
    {
      title: "UI/UX Designer",
      experience: "1+ year",
      description: "We are looking for a creative and detail-oriented UI/UX Designer to join our team at DortexAI. You will be responsible for creating intuitive and engaging user interfaces for our web and mobile applications. Your role will involve conducting user research, designing wireframes and prototypes, and collaborating with developers to ensure the final product aligns with user needs. Proficiency in design tools such as Adobe XD, Sketch, or Figma is required. The ideal candidate should have a strong portfolio showcasing previous design projects and a passion for creating seamless user experiences."
    },
    {
      title: "React-Native Developer",
      experience: "1+ year",
      description: "DortexAI is in search of a skilled React-Native Developer to help us build high-quality mobile applications. You will be responsible for translating designs and wireframes into high-quality code, developing new user-facing features, and optimizing applications for maximum speed and scalability. A strong understanding of JavaScript and React principles is essential, along with experience in mobile app development for iOS and Android platforms. You should be familiar with RESTful APIs and have experience working with third-party libraries and APIs. A keen eye for design and attention to detail are important for this role."
    },
    {
      title: "Frontend Developer",
      experience: "1+ year",
      description: "As a Frontend Developer specializing in ReactJS and NextJS at DortexAI, you will be responsible for building responsive and visually appealing web applications. You will work closely with the design team to implement user interfaces and ensure optimal performance across different devices and browsers. A strong command of HTML, CSS, and JavaScript is essential, along with experience in state management libraries like Redux or Context API. Knowledge of Next.js features such as server-side rendering and static site generation will be beneficial. The ideal candidate should be proactive, detail-oriented, and able to work collaboratively in a team environment."
    },
    {
      title: "Digital Marketer",
      experience: "1+ year",
      description: "DortexAI is looking for a passionate Digital Marketer to join our marketing team. In this role, you will be responsible for developing and executing online marketing campaigns, including SEO, PPC, social media, and email marketing strategies. You will analyze campaign performance, track key metrics, and optimize strategies to increase brand visibility and drive traffic to our website. Strong analytical skills and proficiency in digital marketing tools are essential. The ideal candidate should have excellent communication skills and a proven track record of achieving measurable results in digital marketing initiatives."
    },
    {
      title: "Content Writer",
      experience: "1+ year",
      description: "We are seeking a talented Content Writer to create engaging and informative content for our website, blogs, and social media channels. The ideal candidate should have a strong command of the English language and be able to write clearly and persuasively on technical subjects related to AI and software development. You will be responsible for conducting research, producing high-quality articles, and ensuring content is optimized for SEO. Familiarity with content management systems and social media platforms is required. A passion for storytelling and the ability to meet deadlines will be crucial for success in this role."
    },
    {
      title: "Business Analyst",
      experience: "1+ year",
      description: "DortexAI is looking for a detail-oriented Business Analyst to join our team. In this role, you will be responsible for analyzing business processes, identifying areas for improvement, and collaborating with stakeholders to define project requirements. You should have a strong understanding of data analysis techniques and experience with business intelligence tools. The ideal candidate will possess excellent communication and problem-solving skills and the ability to work effectively in a team environment. Experience in the tech industry or familiarity with software development processes will be a plus."
    },
    {
      title: "Sales Executive",
      experience: "1+ year",
      description: "We are seeking a motivated Sales Executive to join our sales team at DortexAI. Your primary responsibility will be to generate new business opportunities and build relationships with potential clients. You should have a proven track record in sales and a strong understanding of the tech industry. The ideal candidate will possess excellent communication and negotiation skills, as well as the ability to work independently and as part of a team. Familiarity with CRM software and the ability to analyze market trends will be beneficial. A passion for technology and helping businesses succeed is essential."
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
