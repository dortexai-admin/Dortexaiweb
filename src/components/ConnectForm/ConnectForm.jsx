import * as React from "react";
import {
    Box,
    Typography,
    Button,
    TextField,
    Grid,
    IconButton,
    Divider,
    InputAdornment,
    Container,
    MenuItem,
} from "@mui/material";

// Import icons individually
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import MessageIcon from "@mui/icons-material/Message";
import SubjectIcon from "@mui/icons-material/Subject";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import InstagramIcon from "@mui/icons-material/Instagram";
import contactus from "../../assets/about/contactf.jpg";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { menuItems } from "../../Utils/constants";

const ConnectForm = () => {
    const location = useLocation();
    const [selectedTitle, setSelectedTitle] = React.useState("");
    const [selectedService, setSelectedService] = React.useState("");
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const title = params.get("title");
        const service = params.get("service");
        setSelectedTitle(title);
        setSelectedService(service);
    }, [location.search]);
    return (
        <Container
            maxWidth="lg"
            sx={{
                position: "relative",
                padding: 4,
                backgroundImage: `url(${contactus})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: 4,
                // boxShadow: 10,
                // boxShadow: '0 4px 10px rgba(0, 1, 255, 2)',
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "10vh",
                "::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(255, 255, 255, 0.4)",
                },
            }}
        >
            <Box
                className="connect-form-container"
                sx={{
                    padding: 4,
                    backgroundColor: "rgba(255, 255, 255, 0.95)", // Semi-transparent background for form
                    borderRadius: 2,
                    boxShadow: 10,
                    width: "100%",
                    position: "relative", // Ensure form is above the overlay
                }}
            >
                <Grid container spacing={4}>
                    {/* Left side: Text and social buttons */}
                    <Grid item xs={12} md={6}>
                        <Typography
                            variant="h4"
                            fontWeight="bold"
                            color="textPrimary"
                        >
                            Let's Work Together
                        </Typography>
                        <Typography variant="h6" color="textSecondary">
                            {selectedTitle}
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<WhatsAppIcon />}
                            sx={{
                                marginTop: 1,
                                padding: "12px 24px",
                                backgroundColor: "green", // Custom color for WhatsApp button
                                "&:hover": { backgroundColor: "#533aa7" }, // Darker shade on hover
                            }}
                            onClick={() => {
                                const message =
                                    "Hi DortexAI Team,\nI want to connect to have a discussion about ";
                                const phoneNumber = "+919872094149";
                                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                                    message
                                )}`;
                                window.open(whatsappUrl, "_blank"); // Open WhatsApp in a new tab
                            }}
                        >
                            WhatsApp
                        </Button>

                        <Box mt={2}>
                            <Typography variant="h6" color="textSecondary">
                                <LocationOnIcon
                                    sx={{
                                        verticalAlign: "middle",
                                        marginRight: 1,
                                    }}
                                />
                                Office:
                            </Typography>
                            <Typography
                                variant="body1"
                                fontWeight="bold"
                                color="textPrimary"
                            >
                                431, Opposite Gillco valley, Landra Kharar road,
                                SEC 115, Sector 115, Kharar, Punjab 140301
                            </Typography>
                            <Divider sx={{ margin: "10px 0" }} />
                            <Typography variant="h6" color="textSecondary">
                                <EmailIcon
                                    sx={{
                                        verticalAlign: "middle",
                                        marginRight: 1,
                                    }}
                                />
                                Email:
                            </Typography>
                            <Typography
                                variant="body1"
                                fontWeight="bold"
                                color="textPrimary"
                            >
                                info@dortexai.com
                            </Typography>
                            <Divider sx={{ margin: "10px 0" }} />
                            <Typography variant="h6" color="textSecondary">
                                Follow Us:
                            </Typography>
                            <Box mt={1}>
                                <IconButton
                                    href="https://x.com/dortex_ai"
                                    target="_blank"
                                    aria-label="Twitter"
                                    size="small"
                                >
                                    <TwitterIcon sx={{ color: "#0c1274" }} />
                                </IconButton>
                                <IconButton
                                    href="https://www.facebook.com/profile.php?id=61561315643620"
                                    target="_blank"
                                    aria-label="Facebook"
                                    size="small"
                                >
                                    <FacebookIcon sx={{ color: "#0c1274" }} />
                                </IconButton>
                                <IconButton
                                    href="https://www.linkedin.com/company/dortex-ai/"
                                    target="_blank"
                                    aria-label="LinkedIn"
                                    size="small"
                                >
                                    <LinkedInIcon sx={{ color: "#0c1274" }} />
                                </IconButton>
                                <IconButton
                                    href="https://www.instagram.com/dortex_ai/?hl=en"
                                    target="_blank"
                                    aria-label="Instagram"
                                    size="small"
                                >
                                    <InstagramIcon sx={{ color: "#0c1274" }} />
                                </IconButton>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Right side: Form */}
                    <Grid item xs={12} md={6}>
                        <form id="contact-form">
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="name"
                                        label="Your Name"
                                        variant="outlined"
                                        InputLabelProps={{
                                            style: {
                                                fontWeight: "bold",
                                                color: "black",
                                            }, // Bold label
                                        }}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <PersonIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Your Email"
                                        variant="outlined"
                                        type="email"
                                        InputLabelProps={{
                                            style: {
                                                fontWeight: "bold",
                                                color: "black",
                                            }, // Bold label
                                        }}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <EmailIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="Phone"
                                        label="Phone"
                                        variant="outlined"
                                        InputLabelProps={{
                                            style: {
                                                fontWeight: "bold",
                                                color: "black",
                                            }, // Bold label
                                        }}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <SubjectIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Grid>
                                {selectedTitle && (
                                    <Grid item xs={12}>
                                        {/* Options */}
                                        <TextField
                                            required
                                            select
                                            fullWidth
                                            id="Looking For"
                                            label="Looking For"
                                            variant="outlined"
                                            value={selectedService}
                                        >
                                            {menuItems
                                                .filter(
                                                    (item) =>
                                                        item.text ===
                                                            "Services" &&
                                                        item.subMenu !==
                                                            undefined
                                                )[0]
                                                .subMenu.filter(
                                                    (item) =>
                                                        item.title ===
                                                        selectedTitle
                                                )[0]
                                                .items.map((item) => (
                                                    <MenuItem
                                                        key={item.text}
                                                        value={item.text}
                                                    >
                                                        {item.text}
                                                    </MenuItem>
                                                ))}
                                        </TextField>
                                    </Grid>
                                )}
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="message"
                                        label="How Can We Help You"
                                        variant="outlined"
                                        multiline
                                        rows={4}
                                        InputLabelProps={{
                                            style: {
                                                fontWeight: "bold",
                                                color: "black",
                                            }, // Bold label
                                        }}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <MessageIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                        sx={{
                                            width: "100%",
                                            backgroundColor: "#0c1274", // Custom color for WhatsApp button
                                            fontWeight: "bold",
                                            "&:hover": {
                                                backgroundColor: "#533aa7",
                                            },
                                        }}
                                    >
                                        Send Message
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default ConnectForm;
