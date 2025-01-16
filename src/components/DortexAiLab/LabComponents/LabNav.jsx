"use client";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import { Link as RouterLink } from "react-router-dom"; // Corrected import
import MuiLink from "@mui/material/Link"; // Renaming MUI Link to avoid conflict
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme, styled } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"; // Importing arrow icon for dropdowns
import logo from "../../../assets/DortexAiWhite.png";

const LabNav = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const menuItems = [
        { text: "Home", href: "https://www.dortexai.com/" },
        { text: "Training & Development", href: "" },
        { text: "Our Services", href: "/ourservices" },
        { text: "Models", href: "" },
        // { text: "About Us", href: "/aboutus" },
        { text: "Careers", href: "/careers" },
        { text: "Contact Us", href: "/contact" },
    ];

    const MenuLink = styled(MuiLink)(({ theme }) => ({
        color: "white",
        fontWeight: "bold",
        textDecoration: "none",
        position: "relative",
        "&:hover": {
            color: theme.palette.secondary.main,
        },
        "&::after": {
            content: '""',
            position: "absolute",
            width: "0",
            height: "2px",
            bottom: "-2px",
            left: "0",
            backgroundColor: theme.palette.secondary.main,
            visibility: "hidden",
            transition: "all 0.3s ease-in-out",
        },
        "&:hover::after": {
            visibility: "visible",
            width: "100%",
        },
    }));

    return (
        <AppBar position="fixed" sx={{ backgroundColor: "#0b0b08", mb: 8, zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
                {!isMobile && (
                    <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
                        <RouterLink to="/" passHref>
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
                    </Box>
                )}
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
                <Box
                    sx={{
                        display: { xs: "none", md: "flex" },
                        flexGrow: 1,
                        justifyContent: "right",
                        gap: 5,
                        mr: 5,
                    }}
                >
                    {menuItems.map((item, index) =>
                        item.dropdown ? (
                            item.text === "Services" ? (
                                <Box
                                    key={index}
                                    onMouseEnter={handleMenuOpen} // Show menu on hover
                                    onMouseLeave={handleMenuClose} // Hide menu when not hovering
                                    sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
                                >
                                    <MenuLink href="#">
                                        {item.text}
                                        <ArrowDropDownIcon sx={{ ml: 0.5 }} /> {/* Down arrow */}
                                    </MenuLink>
                                    <Menu
                                        anchorEl={anchorEl}
                                        open={Boolean(anchorEl)}
                                        onClose={handleMenuClose}
                                        MenuListProps={{ "aria-labelledby": "basic-button" }}
                                        sx={{
                                            mt: 1,
                                        }}
                                        anchorOrigin={{
                                            vertical: "bottom",
                                            horizontal: "left",
                                        }}
                                        transformOrigin={{
                                            vertical: "top",
                                            horizontal: "left",
                                        }}
                                    >
                                        {serviceOptions.map((option, idx) => (
                                            <MenuItem
                                                key={idx}
                                                component={RouterLink}
                                                to={option.href}
                                                onClick={handleMenuClose}
                                            >
                                                {option.text}
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </Box>
                            ) : (
                                <Box
                                    key={index}
                                    onMouseEnter={handleInternshipMenuOpen} // Show internships menu on hover
                                    onMouseLeave={handleInternshipMenuClose} // Hide internships menu when not hovering
                                    sx={{ display: "flex", alignItems: "center", cursor: "pointer", color: "black" }}
                                >
                                    <MenuLink href="#">
                                        {item.text}
                                        <ArrowDropDownIcon sx={{ ml: 0.5 }} /> {/* Down arrow */}
                                    </MenuLink>
                                    <Menu
                                        anchorEl={internshipAnchorEl}
                                        open={Boolean(internshipAnchorEl)}
                                        onClose={handleInternshipMenuClose}
                                        MenuListProps={{ "aria-labelledby": "basic-button" }}
                                        sx={{
                                            mt: 1,
                                        }}
                                        anchorOrigin={{
                                            vertical: "bottom",
                                            horizontal: "left",
                                        }}
                                        transformOrigin={{
                                            vertical: "top",
                                            horizontal: "left",
                                        }}
                                    >
                                        {internshipOptions.map((option, idx) => (
                                            <MenuItem
                                                key={idx}
                                                component={RouterLink}
                                                to={option.href}
                                                onClick={handleInternshipMenuClose}
                                            >
                                                {option.text}
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </Box>
                            )
                        ) : (
                            <MenuLink
                                key={index}
                                component={RouterLink}
                                to={item.href}
                                underline="none"
                                variant="body1"
                            >
                                {item.text}
                            </MenuLink>
                        )
                    )}
                </Box>
                {isMobile && (
                    <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                        <Box
                            sx={{ width: 250 }}
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
                        </Box>
                    </Drawer>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default LabNav;
