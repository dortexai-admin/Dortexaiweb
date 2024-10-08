// import React,{useState} from "react";
// import logo from '../assets/DortexAiWhite.png';
// import './Navbar.css'

// const Navbar = () => {
//     const [dropdownOpen, setDropdownOpen] = useState(false);

//     const handleDropdownToggle = () => {
//       setDropdownOpen(!dropdownOpen);
//     };
//     return (
//         <div className="cont">
//         <nav>
//             <div>
//                 <img src={logo} alt="logo"/>
//             </div>
//             <div>
//                 <ul>
//                     <li><a href="#" >Home</a></li>
//                     <li><a href="#About" >About Us</a></li>
//                     <li><a href="#Services">Services</a></li>
//                     <li><a href="#Projects">Our Projects</a></li>
//                     <li><a href="#Contact" >Contact Us</a></li>
//                 </ul>
//             </div>
//         </nav>
//         </div>
//     );
// };

// export default Navbar;

"use client";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme, styled } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'; // Importing arrow icon for dropdowns
import logo from "../assets/DortexAiWhite.png";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null); // State for Services dropdown
  const [internshipAnchorEl, setInternshipAnchorEl] = useState(null); // State for Internships dropdown

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  // Handling the "Services" dropdown
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Handling the "Internships & Training" dropdown
  const handleInternshipMenuOpen = (event) => {
    setInternshipAnchorEl(event.currentTarget);
  };

  const handleInternshipMenuClose = () => {
    setInternshipAnchorEl(null);
  };

  const menuItems = [
    { text: "Home", href: "/" },
    { text: "DortexAI Lab", href: "/" },
    { text: "About Us", href: "#About" },
    { text: "Services", href: "#", dropdown: true },
    { text: "Internships & Training", href: "#", dropdown: true },
    { text: "Contact Us", href: "#Contact" },
  ];

  // Services Dropdown Options
  const serviceOptions = [
    { text: "Innovative AI Solutions", href: "/services/ai-solutions" },
    { text: "Application Development", href: "/services/application-development" },
    { text: "Web Development", href: "/services/web-development" },
    { text: "Digital Marketing", href: "/services/digital-marketing" },
    { text: "UI/UX Design", href: "/services/ui-ux-design" },
  ];

  // Internships & Training Dropdown Options
  const internshipOptions = [
    { text: "Web Development", href: "/internships/web-development" },
    { text: "App Development", href: "/internships/app-development" },
    { text: "Backend Development", href: "/internships/backend-development" },
    { text: "Full Stack Development", href: "/internships/full-stack-development" },
    { text: "UI/UX Development", href: "/internships/ui-ux-development" },
    { text: "Cloud Development", href: "/internships/cloud-development" },
    { text: "DevOps", href: "/internships/devops" },
    { text: "Digital Marketing", href: "/internships/digital-marketing" },
  ];

  const MenuLink = styled(Link)(({ theme }) => ({
    color: "white",
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
    <AppBar position="fixed" sx={{ backgroundColor: "#0b0b08", mb: 8,  zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        {!isMobile && (
          <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
            <Link href="/" passHref>
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
            </Link>
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
            gap: 2,
            mr: 5,
          }}
        >
          {menuItems.map((item, index) =>
            item.dropdown ? (
              item.text === "Services" ? (
                // Dropdown for "Services"
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
                        component={Link}
                        href={option.href}
                        onClick={handleMenuClose}
                      >
                        {option.text}
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              ) : (
                // Dropdown for "Internships & Training"
                <Box
                  key={index}
                  onMouseEnter={handleInternshipMenuOpen} // Show internships menu on hover
                  onMouseLeave={handleInternshipMenuClose} // Hide internships menu when not hovering
                  sx={{ display: "flex", alignItems: "center", cursor: "pointer",color:'black' }}
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
                        component={Link}
                        href={option.href}
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
                href={item.href}
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
                    component={Link}
                    key={index}
                    href={item.href}
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

export default Navbar;
