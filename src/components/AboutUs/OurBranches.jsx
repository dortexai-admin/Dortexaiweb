import React from "react";
import { Box, Typography, Container, Grid, Card, CardContent } from "@mui/material";
import { MapPin, Phone, Mail } from "lucide-react";

const branches = [
  {
    title: "Head Office Chandigarh-Mohali",
    address: "Chandigarh Group of College, Landran Mohali Punjab-140307, India",
    phone: "+91 98720 94149",
    email: "info@dortexai.com",
  },
  {
    title: "NOIDA Office",
    address: "NOIDA, Uttar Pradesh, India",
    phone: "+91 98720 94149",
    email: "info@dortexai.com",
  },
  {
    title: "JAIPUR Office (Coming Soon)",
    address: "Jaipur, Rajasthan, India",
    phone: "+91 98720 94149",
    email: "info@dortexai.com",
  },
  {
    title: "GURUGRAM Office (Coming Soon)",
    address: "Gurugram, Haryana, India",
    phone: "+91 98720 94149",
    email: "info@dortexai.com",
  },
];

export default function OurBranches() {
  return (
    <Box sx={{ py: { xs: 6, md: 12, lg: 16 } }}>
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        <Typography
          variant="h2"
          fontWeight="bold"
          sx={{
            fontSize: { xs: "2rem", sm: "3rem" },
            mb: 2,
            color: "black",
          }}
        >
          Our Global Presence - Across India
        </Typography>
        <Box
          sx={{
            width: "150px",
            height: "4px",
            backgroundColor: "primary.main",
            mx: "auto",
            mb: 3,
          }}
        />
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            mb: 5,
            fontSize: { xs: "1rem", md: "1.25rem" },
          }}
        >
          Our custom, state-of-the-art office is in Chandigarh, Mohali. We are also going to open branches in NOIDA,
          JAIPUR, GURUGRAM Soon.
        </Typography>

        <Grid container spacing={4}>
          {branches.map((branch, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card
                variant="outlined"
                sx={{
                  p: 3,
                  textAlign: "left",
                  "&:hover": {
                    boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                  },
                }}
              >
                <CardContent>
                  <Box display="flex" alignItems="center" sx={{ fontSize: "1.25rem", fontWeight: "bold", mb: 1 }}>
                    <MapPin style={{ marginRight: 8, color: "black" }} />
                    {branch.title}
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      mb: 2,
                      fontSize: "0.95rem",
                    }}
                  >
                    {branch.address}
                  </Typography>
                  <Box display="flex" flexDirection="column" gap={1}>
                    <Box display="flex" alignItems="center">
                      <Phone style={{ marginRight: 8, color: "black" }} />
                      <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>
                        {branch.phone}
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center">
                      <Mail style={{ marginRight: 8, color: "black" }} />
                      <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>
                        {branch.email}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
