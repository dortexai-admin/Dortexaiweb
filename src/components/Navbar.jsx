import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Box, Link as MuiLink, Drawer, List, ListItem, ListItemText, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme, styled } from "@mui/material/styles";
import Container from "@mui/material/Container"; // Import Container from MUI
import logo from "../assets/DortexAiWhite.png";
import { Link as RouterLink } from 'react-router-dom'; // Corrected import

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: "Home", href: "/" },
    // { text: "DortexAI Lab", href: "/dortexailab" },
    { text: "Internships & Training", href: "/internshipandtraining" },
    {text:"Career", href:"/career"},
    { text: "About Us", href: "/aboutus" },
    { text: "Contact Us", href: "/contact" },
  ];

  // Styled Link for menu items with hover effect
  const MenuLink = styled(MuiLink)(({ theme }) => ({
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
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
    <>
      <AppBar 
        position="fixed" 
        sx={{ backgroundColor: "#0b0b08", zIndex: theme.zIndex.drawer + 1 }} // No need to manipulate zIndex
      >
        <Toolbar>
          <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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
                justifyContent: "right",
                gap: 2,
                mr: 5,
              }}
            >
              {menuItems.map((item, index) => (
                <MenuLink
                  key={index}
                  component={RouterLink}
                  to={item.href}
                  underline="none"
                  variant="body1"
                >
                  {item.text}
                </MenuLink>
              ))}
            </Box>
          </Container>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile screens */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{ zIndex: theme.zIndex.modal }} // Use a high zIndex value for the Drawer (above modal)
      >
        <Box
          sx={{ width: 200}}
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
                onClick={toggleDrawer(false)} // Close the drawer when a menu item is clicked
              >
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
