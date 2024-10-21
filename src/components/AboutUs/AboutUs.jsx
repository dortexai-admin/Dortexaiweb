import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer/Footer";
import { Typography, Container, Box } from "@mui/material";

import img1 from "../../assets/about/img2.jpg";
import img2 from "../../assets/about/img4.jpg";
import img3 from "../../assets/about/img3.jpg";
import MyCarousel from "../carousel/MyCarousel";

export default function AboutUs() {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Box>
        <Navbar />
      </Box>
      <Box sx={{ pt: 15}}>
        <Container maxWidth="lg">
          <Typography component="h2" fontWeight="bold" gutterBottom>
            <Box
              component="span"
              sx={{
                color: "#0270b2",
                fontSize: 35,
                fontWeight: "bold",
              }}
            >
              ABOUT{" "}
            </Box>
            <Box
              component="span"
              sx={{
                color: "#000000",
                fontSize: 35,
                fontWeight: "bold",
              }}
            >
              US
            </Box>
          </Typography>
          <Typography sx={{ color: "black", fontWeight: "200", mb:4,mt:2 }}>
            Dortex AI Pvt Ltd is a leading service and product-based company
            with a team of skilled IT professionals who bring over seven years
            of combined experience in delivering innovative technology
            solutions. We are dedicated to harnessing the power of artificial
            intelligence and advanced technologies to meet the unique needs of
            our clients. Since our inception, we have built a reputation for
            excellence, offering a wide range of services, including software
            development, data analytics, and AI integration. Our product line
            includes cutting-edge tools designed to enhance productivity and
            streamline operations across various industries. At Dortex AI, we
            prioritize collaboration and customer satisfaction, ensuring that we
            not only meet but exceed expectations. We are committed to driving
            success for our clients by leveraging the latest technological
            advancements and fostering a culture of continuous improvement. Join
            us on our journey as we innovate and shape the future of technology
            together.
          </Typography>

          {/* <Box sx={{ display: "flex", gap:"1rem", flexWrap:'nowrap', justifyContent: "space-between", mt: 4 }}>
            <img
              src={img1}
              alt="Description 1"
              style={{aspectRatio: "2/1", objectFit: "cover", height:"250px" }}
            />
            <img
              src={img2}
              alt="Description 2"
              style={{aspectRatio: "2/1", objectFit: "cover", height:"250px" }}
            />
            <img
              src={img3}
              alt="Description 3"
              style={{aspectRatio: "2/1", objectFit: "cover", height:"250px" }}
            />
          </Box> */}

          <MyCarousel images={[img1, img2, img3]} />

          <Typography
            component="h2"
            fontWeight="bold"
            gutterBottom
            sx={{ marginTop: 5 }}
          >
            <Box
              component="span"
              sx={{
                color: "#0270b2",
                fontSize: 25,
                fontWeight: "bold",
              }}
            >
              Company{" "}
            </Box>
            <Box
              component="span"
              sx={{
                color: "#000000",
                fontSize: 25,
                fontWeight: "bold",
              }}
            >
              History
            </Box>
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: "#000000", lineHeight: 1.7 ,}}
          >
            The Hiring Company, incepted in 2022, is a new-age recruitment and
            staffing firm based in New Delhi. We specialize in IT, Non-IT, and
            bulk recruitment needs, and are empaneled with more than 100 vendors
            across India. We proudly serve over 40 clients, particularly from
            the startup domain.
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#000000", lineHeight: 1.7, mt: 2 }}
          >
            In just one year, we have provided employment to over 15,000 job
            seekers across 20 states in India. Our current focus is on building
            web applications to expedite bulk hiring.
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#000000", lineHeight: 1.7, mt: 2 }}
          >
            We believe in the ideology of “Anyone Can Hire,” enabling anyone,
            using their network, to help close vacancies for companies in need.
            We are building an affiliate network of over 1,500 freelance
            recruiters across India to decentralize recruitment operations.
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: 5 }}>
        <Container maxWidth="lg">
          <Typography
            component="h2"
            fontWeight="bold"
            gutterBottom
            sx={{ marginTop: 3 }}
          >
            <Box
              component="span"
              sx={{
                color: "#000000",
                fontSize: 25,
                fontWeight: "bold",
              }}
            >
              Our Project{" "}
            </Box>
            <Box
              component="span"
              sx={{
                color: "#0270b2",
                fontSize: 25,
                fontWeight: "bold",
              }}
            >
              MarketPlace
            </Box>
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: "#000000", lineHeight: 1.7,mt:2 }}
          >
            Diverse Service Offerings: Dortexai Pvt Ltd provides professional
            services across various domains like full-stack development, UI/UX
            design, app development, digital marketing, and more, catering to a
            wide range of client needs.
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#000000", lineHeight: 1.7, mt: 2 }}
          >
            Product Solutions: In addition to services, we develop innovative
            digital products like cloud storage platforms and job-finding apps,
            offering tools that solve real-world problems for users and
            businesses.
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#000000", lineHeight: 1.7, mt: 2 }}
          >
            End-to-End Customer Support: We provide tailored solutions to
            clients, from project planning and execution to maintenance and
            continuous support, ensuring seamless delivery and customer
            satisfaction.
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#000000", lineHeight: 1.7, mt: 2 }}
          >
           We want to bridge the unemployment gap (which stands at around 8.3% in 2023) by sourcing, training and placing job seekers who are entering the job market every year. We will provide specific job training which can help them gain employable skills to work in a customer support/sales environment or specifically voice jobs.
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#000000", lineHeight: 1.7, mt: 2 }}
          >
            Technology Leadership: Combining services and products, we stay at
            the forefront of technology, delivering cutting-edge solutions for
            both individual clients and the broader market.
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: 5 }}>
        <Container maxWidth="lg">
          <Box
            component="span"
            sx={{
              color: "#0270b2",
              fontSize: 25,
              fontWeight: "bold",
            }}
          >
            Our{" "}
          </Box>
          <Box
            component="span"
            sx={{
              color: "#000000",
              fontSize: 25,
              fontWeight: "bold",
            }}
          >
            Mission
          </Box>
          <Typography
            variant="body1"
            sx={{ color: "#000000", lineHeight: 1.7,mt:2}}
          >
            Our mission at Dortexai Pvt Ltd is to bridge the unemployment gap by
            leveraging our services and digital products to source, train, and
            place job seekers. Through customized training programs, we help
            candidates acquire employable skills in customer support, sales, and
            voice jobs, ensuring they are prepared for the evolving job market.
            As a product-based company, we also empower aspiring professionals
            and talent acquisition experts with recruitment tools via our job
            board. They can earn incentives by referring candidates, enhancing
            their networks, and contributing to a streamlined hiring process.
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#000000", lineHeight: 1.7, mt: 2 }}
          >
            Additionally, we aim to provide recruitment training to aspiring
            professionals or those with a strong network interested in talent
            acquisition. They can earn incentives by referring candidates
            through our job board.
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: 5 }}>
        <Container maxWidth="lg">
        <Typography
            component="h2"
            fontWeight="bold"
            gutterBottom
            sx={{ marginTop: 3 }}
          >
            <Box
              component="span"
              sx={{
                color: "#000000",
                fontSize: 25,
                fontWeight: "bold",
              }}
            >
              Our{" "}
            </Box>
            <Box
              component="span"
              sx={{
                color: "#0270b2",
                fontSize: 25,
                fontWeight: "bold",
              }}
            >
              Vision
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#000000", lineHeight: 1.7 }}
          >
            We envision reducing unemployment and building an affiliate network
            across India to increase the sourcing of candidates for every job.
          </Typography>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
