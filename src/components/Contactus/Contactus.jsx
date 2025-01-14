import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer/Footer";
import { Box } from "@mui/material";
import ConnectForm from "../ConnectForm/ConnectForm";
import Location from "../Location/Location";

export default function Contactus() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
                marginTop: 12,
                justifyContent: "space-between",
                gap: 5,
            }}
        >
            <Box>
                <Navbar />
            </Box>

            <Box>
                <ConnectForm />
            </Box>

            <Box>
                <Location />
            </Box>

            <Box>
                <Footer />
            </Box>
        </Box>
    );
}
