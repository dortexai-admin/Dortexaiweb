import React from "react";
import { Container, Box } from "@mui/material";

function Location() {
    return (
        // <Container maxWidth="lg">
        //   <Box className="location-container">
        //     <Box
        //       className="px-0 animate-fadeInUp"
        //       data-wow-delay="0.1s"
        //       // sx={{ display: 'flex', justifyContent: 'center' }}
        //     >
        //       <iframe
        //         className="h-[300px]"
        //         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.1085752069794!2d76.66190047503578!3d30.68722108783171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef154b91a85b%3A0x4d8b9df97e986631!2sChandigarh%20Group%20of%20Colleges%20(CGC)%20-%20Landran!5e0!3m2!1sen!2sin!4v1725014568626!5m2!1sen!2sin"
        //         allowFullScreen
        //         loading="lazy"
        //         // style={{ width: '300vw', height: '350px', border: 0 }}
        //       ></iframe>
        //     </Box>
        //   </Box>
        // </Container>
        // <Container maxWidth="lg" sx={{ backgroundColor: "red" }}>
        <Box className="location-container px-2 animate-fadeInUp w-full flex justify-center" data-wow-delay="0.1s">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.439378385074!2d76.6470749679275!3d30.73486136820908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed42d751d7c9%3A0xe80265eb0a36cb87!2sRS%20GROUP%2C%20Sector%20115%2C%20Kharar%2C%20Punjab%20140301!5e0!3m2!1sen!2sin!4v1615000000000!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                style={{ width: "75vw", height: "350px" }}
            ></iframe>
        </Box>
        // </Container>
    );
}

export default Location;
