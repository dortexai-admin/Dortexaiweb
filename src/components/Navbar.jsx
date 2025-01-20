import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Box,
    Drawer,
    List,
    ListItem,
    ListItemText,
    useMediaQuery,
    Button,
    Typography,
    Stack,
    Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme, styled } from "@mui/material/styles";
import Container from "@mui/material/Container"; // Import Container from MUI
import logo from "../assets/DortexAiWhite.png";
import { Link as RouterLink } from "react-router-dom"; // Corrected import
import { PopupMenu } from "../NavComp/NavMenuServices";
import { menuItems } from "../Utils/constants";
import RichTreeDrawer from "../NavComp/RichTreeDrawer";

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const toggleDrawer = (open) => (event) => {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }
        setDrawerOpen(open);
    };
    const [hoveredIndex, setHoveredIndex] = useState(-1);

    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: "#0b0b08",
                    zIndex: theme.zIndex.drawer + 1,
                }} // No need to manipulate zIndex
            >
                <Toolbar>
                    <Container
                        maxWidth="lg"
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            // justifyContent: "center",
                            gap: 20,
                            // width: isMobile ? "fit-content" : "100%",
                            width: isMobile ? "100%" : "fit-content",
                        }}
                    >
                        {/* Logo for larger screens */}
                        {!isMobile && (
                            <RouterLink to="/">
                                <Box
                                    sx={{
                                        borderRadius: "50%",
                                        overflow: "hidden",
                                        width: 100,
                                        height: 100,
                                    }}
                                >
                                    <img src={logo} alt="Logo" width={100} height={100} />
                                </Box>
                            </RouterLink>
                        )}

                        {/* Menu Icon for mobile screens */}
                        {isMobile && (
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                                onClick={toggleDrawer(true)}
                            >
                                <MenuIcon />
                            </IconButton>
                        )}

                        {/* Desktop Menu Links */}
                        <Box
                            sx={{
                                display: { xs: "none", md: "flex" },
                                flexGrow: 1,
                                // justifyContent: "right",
                                gap: 2,
                                mr: 5,
                            }}
                        >
                            {menuItems.map((item, index) => (
                                <Box
                                    key={index}
                                    position="relative"
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(-1)}
                                    sx={{
                                        display: "inline-block",
                                        // paddingBottom: "5px", // Space for bottom border
                                        position: "relative",
                                        // border:1,
                                        // paddingBottom:10,
                                        "&:hover": {
                                            color: "rgb(26, 219, 254)", // Change text color on hover
                                            // background: "rgba(41, 39, 39, 0.75)", // Background color on hover
                                            // border: "1px solid rgba(255, 255, 255, 0.18)", // Border on hover
                                            // transition: "all 0.3s ease-in-out", // Smooth transition for hover effects
                                        },
                                        "&::after": {
                                            content: '""',
                                            position: "absolute",
                                            bottom: "0",
                                            left: "0",
                                            width: "0",
                                            height: "2px", // Thickness of the bottom border
                                            backgroundColor: "rgb(26, 219, 254)", // Bottom border color
                                            // transform: "scaleX(0)", // Start with 0 width
                                            // transformOrigin: "bottom right", // Animates from right to left
                                            transition: "all 0.3s ease-out", // Smooth transition for the border
                                        },
                                        "&:hover::after": {
                                            transform: "scaleX(1)", // Show the bottom border on hover
                                            transformOrigin: "bottom left", // Animate from left to right
                                            width: "100%",
                                        },
                                    }}
                                >
                                    {item.href === undefined ? (
                                        <Typography
                                            underline="none"
                                            variant="body1"
                                            sx={{
                                                fontWeight: "500",
                                                color: "#ffffff",
                                                "&:hover": {
                                                    color: "rgb(26, 219, 254)", // Change text color on hover
                                                },
                                                cursor: "pointer",
                                            }}
                                        >
                                            {item.text}
                                        </Typography>
                                    ) : (
                                        <Link
                                            component={RouterLink}
                                            to={item.href || undefined}
                                            underline="none"
                                            variant="body1"
                                            sx={{
                                                fontWeight: "500",
                                                color: "#ffffff",
                                                "&:hover": {
                                                    color: "rgb(26, 219, 254)", // Change text color on hover
                                                },
                                            }}
                                        >
                                            {item.text}
                                        </Link>
                                    )}
                                    {hoveredIndex === index && item.subMenu && <PopupMenu subMenu={item.subMenu} />}
                                </Box>
                            ))}
                        </Box>
                    </Container>
                </Toolbar>
            </AppBar>

            {/* Drawer for mobile screens */}
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)} sx={{ zIndex: theme.zIndex.modal }}>
                {/* <Box
                    sx={{ width: 200 }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <List>
                        {menuItems.map((item, index) => (
                            <ListItem
                                button
                                component={RouterLink}
                                key={index}
                                to={item.href}
                                onClick={toggleDrawer(false)}
                            >
                                <ListItemText primary={item.text} />
                            </ListItem>
                        ))}
                    </List>
                </Box> */}

                <RichTreeDrawer />
            </Drawer>
        </>
    );
};

export default Navbar;
