import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer/Footer";
import { Typography, Container, Box } from "@mui/material";
import img2 from "../../assets/about/img4.jpg";
import img3 from "../../assets/about/img3.jpg";
import MyCarousel from "../carousel/MyCarousel";
import img4 from "../../../public/dortexlab.jpg";
import img5 from "../../../public/lab.jpg";
import img1 from "../../assets/about/img2.jpg";
import Incrementor from "./Incrementor";
import backgroundimageofabout from "../../../public/Addbackground.png";
import Poster from "./Poster";
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function AboutUs() {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Box>
        <Navbar />
      </Box>
      <Box sx={{ pt: 15 }}>
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
          <Typography
            sx={{
              color: "black",
              fontWeight: "200",
              mb: 4,
              mt: 2,
              textAlign: "justify",
              fontSize: 18,
            }}
          >
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              objectFit: "contain",
            }}
          >
            <img
              src={backgroundimageofabout}
              alt="Description of the image"
              style={{
                maxWidth: "100%",
                height: "80%",
              }}
            />
          </Box>

          <MyCarousel images={[img2, img3, img1, img4, img5]} />

          <Typography
            component="h2"
            fontWeight="bold"
            gutterBottom
            sx={{ marginTop: 5, fontSize: 25 }}
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

          <Typography variant="body1" sx={{ color: "#000000", lineHeight: 1.7, fontSize: 18 }}>
            We are a global leader in product development, having a wide range
            of technology experts under the same roof. You would be surprised to
            meet our enthusiastic team of blockchain, cloud, Mobility &
            Automation.
          </Typography>
          <Typography variant="body1" sx={{ color: "#000000", lineHeight: 1.7, mt: 2, fontSize: 18 }}>
            Our mission is to help companies adopt new technologies and simplify
            complicated issues that arise amid technology evolution.
          </Typography>
          <Typography variant="body1" sx={{ color: "#000000", lineHeight: 1.7, mt: 2, fontSize: 18 }}>
            We are designers, engineers, developers, analysts, programmers,
            testers, cloud experts, blockchain specialists, automation freaks &
            smart workers who have developed applications that are now being
            used by millions of consumers worldwide.
          </Typography>
          <Typography variant="body1" sx={{ color: "#000000", lineHeight: 1.7, mt: 2, fontSize: 18 }}>
            We know how to build successful software products and welcome
            startup minds to discuss their product feasibility & scalability.
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: 5 }}>
        <Container maxWidth="lg">
          <Typography
            component="h2"
            fontWeight="bold"
            gutterBottom
            sx={{ marginTop: 3, fontSize: 25 }}
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
              MarketPlace
            </Box>
          </Typography>

          <Typography variant="body1" sx={{ color: "#000000", lineHeight: 1.7, mt: 2, fontSize: 18 }}>
            Diverse Service Offerings: Dortexai Pvt Ltd provides professional
            services across various domains like full-stack development, UI/UX
            design, app development, digital marketing, and more, catering to a
            wide range of client needs.
          </Typography>
          <Typography variant="body1" sx={{ color: "#000000", lineHeight: 1.7, mt: 2, fontSize: 18 }}>
            Product Solutions: In addition to services, we develop innovative
            digital products like cloud storage platforms and job-finding apps,
            offering tools that solve real-world problems for users and
            businesses.
          </Typography>
          <Typography variant="body1" sx={{ color: "#000000", lineHeight: 1.7, mt: 2, fontSize: 18 }}>
            End-to-End Customer Support: We provide tailored solutions to
            clients, from project planning and execution to maintenance and
            continuous support, ensuring seamless delivery and customer
            satisfaction.
          </Typography>
          <Typography variant="body1" sx={{ color: "#000000", lineHeight: 1.7, mt: 2, fontSize: 18 }}>
            We want to bridge the unemployment gap (which stands at around 8.3%
            in 2023) by sourcing, training, and placing job seekers who are
            entering the job market every year. We will provide specific job
            training which can help them gain employable skills to work in a
            customer support/sales environment or specifically voice jobs.
          </Typography>
          <Typography variant="body1" sx={{ color: "#000000", lineHeight: 1.7, mt: 2, fontSize: 18 }}>
            Technology Leadership: Combining services and products, we stay at
            the forefront of technology, delivering cutting-edge solutions for
            both individual clients and the broader market.
          </Typography>
        </Container>
      </Box>
      <Box sx={{ py: 2 }}>
        <Container maxWidth="lg">
          <Typography
            component="h2"
            fontWeight="bold"
            gutterBottom
            sx={{ marginTop: 2, fontSize: 25 }}
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
              Branches
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#000000",
              lineHeight: 1.7,
              mt: 2,
              textAlign: "justify",
              fontSize: 18,
            }}
          >
             <Typography
            variant="body1"
            sx={{
              color: "#000000",
              lineHeight: 1.7,
              mt: 2,
              fontWeight:"bold",
              textAlign: "justify",
              fontSize: 18,
            }}
          >
          <ol>
          <LocationOnIcon sx={{ color: 'black', marginRight: '1.5rem',marginTop:-1 }} />
          Chandigarh Group of College, Landran Mohali Punjab
          </ol>
          <ol>
          <LocationOnIcon sx={{ color: 'black', marginRight: '1.5rem',marginTop:-1 }} />
          Rajasthan Sikar coming soon.
          </ol>
          <ol>
          <LocationOnIcon sx={{ color: 'black', marginRight: '1.5rem',marginTop:-1 }} />
          Noida coming soon.
          </ol>
          
          </Typography>
          </Typography>
          </Container>
          </Box>

      <Box sx={{ py: 2 }}>
        <Container maxWidth="lg">
          <Typography
            component="h2"
            fontWeight="bold"
            gutterBottom
            sx={{ marginTop: 2, fontSize: 25 }}
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
              Mission
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#000000",
              lineHeight: 1.7,
              mt: 2,
              textAlign: "justify",
              fontSize: 18,
            }}
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
          <Typography variant="body1" sx={{ color: "#000000", lineHeight: 1.7, mt: 2, fontSize: 18 }}>
            We envision a world where every individual has the opportunity to
            secure meaningful employment, and we are committed to being a part of
            that journey. Our innovative solutions and unwavering dedication to
            client satisfaction drive us forward in our mission to create
            sustainable employment opportunities.
          </Typography>
        </Container>
      </Box>

      <Incrementor />
      <Poster />
      <Footer />
    </Box>
  );
}
