import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import { Link as RouterLink } from 'react-router-dom'; // Corrected import
import MuiLink from "@mui/material/Link"; // Renaming MUI Link to avoid conflict
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme, styled } from "@mui/material/styles";
import Container from "@mui/material/Container"; // Import Container from MUI
import logo from "../assets/DortexAiWhite.png";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: "Home", href: "/" },
    { text: "DortexAI Lab", href: "/dortexailab" },
    { text: "About Us", href: "/aboutus" },
    { text: "Internships & Training", href: "/internshipandtraining" },
    { text: "Contact Us", href: "#Contact" },
  ];

  const MenuLink = styled(MuiLink)(({ theme }) => ({
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
    <AppBar position="fixed" sx={{ backgroundColor: "#0b0b08", zIndex: theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {!isMobile && (
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

export default Navbar;
