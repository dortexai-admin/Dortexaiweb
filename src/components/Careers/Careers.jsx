import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import Footr from "../Footer/Footer";
import Navbar from "../Navbar";

const jobListings = [
  {
    title: "AI/ML",
    company: "DortexAi Pvt.Ltd.",
    category: "AI/ML",
    urgency: "Urgent",
    jobType: "Contractual Full Time",
    location: "Mohali",
    salary: "₹20,000 - ₹50,000/month",
    daysLeft: "30 days left to apply",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSeaRsXmW0rZuI_ys_Dk89AfuvXF4WMtjANOkFziN8blAcy4TQ/viewform",
  },
  {
    title: "App Developer",
    company: "DortexAi Pvt.Ltd.",
    category: "App Development",
    urgency: "Urgent",
    jobType: "Contractual Full Time",
    location: "Mohali",
    salary: "₹20,000 - ₹50,000/month",
    daysLeft: "56 days left to apply",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSeaRsXmW0rZuI_ys_Dk89AfuvXF4WMtjANOkFziN8blAcy4TQ/viewform",
  },
  {
    title: "Full Stack Developer",
    company: "DortexAi Pvt.Ltd.",
    category: "Full Stack Development",
    urgency: "Urgent",
    jobType: "Contractual Full Time",
    location: "Mohali",
    salary: "₹20,000 - ₹50,000/month",
    daysLeft: "45 days left to apply",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSeaRsXmW0rZuI_ys_Dk89AfuvXF4WMtjANOkFziN8blAcy4TQ/viewform",
  },
  {
    title: "Backend Developer",
    company: "DortexAi Pvt.Ltd.",
    category: "Backend Development",
    urgency: "Urgent",
    jobType: "Contractual Full Time",
    location: "Mohali",
    salary: "₹20,000 - ₹50,000/month",
    daysLeft: "50 days left to apply",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSeaRsXmW0rZuI_ys_Dk89AfuvXF4WMtjANOkFziN8blAcy4TQ/viewform",
  },
  {
    title: "Web Developer",
    company: "DortexAi Pvt.Ltd.",
    category: "Web Development",
    urgency: "Urgent",
    jobType: "Contractual Full Time",
    location: "Mohali",
    salary: "₹20,000 - ₹50,000/month",
    daysLeft: "40 days left to apply",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSeaRsXmW0rZuI_ys_Dk89AfuvXF4WMtjANOkFziN8blAcy4TQ/viewform",
  },
  {
    title: "UI/Ux Designer",
    company: "DortexAi Pvt.Ltd.",
    category: "UI/Ux Designer",
    urgency: "Urgent",
    jobType: "Contractual Full Time",
    location: "Mohali",
    salary: "₹20,000 - ₹50,000/month",
    daysLeft: "20 days left to apply",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSeaRsXmW0rZuI_ys_Dk89AfuvXF4WMtjANOkFziN8blAcy4TQ/viewform",
  },
  {
    title: "Digital Marketing Specialist",
    company: "DortexAi Pvt.Ltd.",
    category: "Digital Marketing",
    urgency: "Urgent",
    jobType: "Contractual Full Time",
    location: "Mohali",
    salary: "₹20,000 - ₹50,000/month",
    daysLeft: "15 days left to apply",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSeaRsXmW0rZuI_ys_Dk89AfuvXF4WMtjANOkFziN8blAcy4TQ/viewform",
  },
  {
    title: "HR Manager",
    company: "DortexAi Pvt.Ltd.",
    category: "HR",
    urgency: "Urgent",
    jobType: "Contractual Full Time",
    location: "Mohali",
    salary: "₹20,000 - ₹50,000/month",
    daysLeft: "20 days left to apply",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSeaRsXmW0rZuI_ys_Dk89AfuvXF4WMtjANOkFziN8blAcy4TQ/viewform",
  },
  {
    title: "Sales Executive",
    company: "DortexAi Pvt.Ltd.",
    category: "Sales",
    urgency: "Urgent",
    jobType: "Contractual Full Time",
    location: "Mohali",
    salary: "₹20,000 - ₹50,000/month",
    daysLeft: "15 days left to apply",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSeaRsXmW0rZuI_ys_Dk89AfuvXF4WMtjANOkFziN8blAcy4TQ/viewform",
  },
  // Add more job listings as needed
];

const Career = () => {
  return (
    <Box sx={{ minHeight: "100vh", pt: 12 }}>
      <Navbar />

      {/* Background image section with text overlay */}
      <Box
        sx={{
          position: "relative",
          height: "600px",
          backgroundImage: `url('./dortexlab.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: 0.9,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            color: "#fff",
          }}
        >
          <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
            CAREERS
          </Typography>
          <Typography variant="h4" sx={{ mb: 1 }}>
            We're hiring!
          </Typography>
          <Typography variant="h3">Come work with us</Typography>
        </Box>
      </Box>

      {/* Job Listings Section */}
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" sx={{ mb: 1, color: "black", fontWeight: "bold" }}>
          Job Openings.
        </Typography>
        <Grid container spacing={2}>
          {jobListings.map((job, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                onClick={() => window.open(job.formLink, "_blank")}
                sx={{
                  cursor: "pointer",
                  "&:hover": { opacity: 0.9 },
                }}
              >
                <Paper
                  sx={{
                    p: 3,
                    textAlign: "left",
                    borderRadius: 2,
                    boxShadow: 3,
                    backgroundColor: "#1E1E1E",
                  }}
                >
                  <Typography variant="h6" sx={{ color: "white" }}>
                    {job.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "white" }}>
                    By {job.company} in {job.category}
                  </Typography>
                  <Typography variant="body2" color="red">
                    {job.urgency}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "white" }}>
                    {job.jobType} - {job.location}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "white" }}>
                    {job.salary}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "grey" }}>
                    {job.daysLeft}
                  </Typography>
                </Paper>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Typography
          variant="h5"
          sx={{
            mt: 5,
            textAlign: "center",
            color: "#000000",
            fontWeight: "Bold",
          }}
        >
         Contact US
        </Typography>
        <Typography
  variant="h8"
  sx={{
    mt: 5,
    textAlign: "center", // Horizontally center the text
    color: "#000000",
    fontWeight: "Bold",
    display: "flex", // Flexbox to center
    justifyContent: "center", // Horizontally center in flex
    alignItems: "center", // Vertically center in flex (if applicable)
  }}
>
  Have a question or need more information? Just drop us a line!
  info@dortexai.com
</Typography>

<Box sx={{ mt: 2, textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src={"./apple.png"} alt="Email Icon" style={{ width: '24px', height: '24px', marginRight: '8px' }} />
          <Typography variant="h8" sx={{ color: "#000000", fontWeight: "Bold" }}>
            info@dortexai.com
          </Typography>
        </Box>
      </Box>


      <Footr />
    </Box>
  );
};

export default Career;
