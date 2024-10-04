'use client'
import React, { useState } from "react";
import { AppBar, Avatar, Menu, MenuItem, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, ListItemIcon, CssBaseline, Box, createTheme, ThemeProvider, Tooltip } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventNoteIcon from '@mui/icons-material/EventNote';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AssessmentIcon from '@mui/icons-material/Assessment';
import HistoryIcon from '@mui/icons-material/History';

const drawerWidth = 240;
const settings = ['Profile', 'Logout'];
const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: 'white !important',
          height: '100%',
          margin: 0,
          padding: 0,
        },
        html: {
          height: '100%',
        },
        '#root': {
          height: '100%',
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 730,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default function ResponsiveDrawer({ children, profileImage }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Box sx={{ display: 'flex', justifyContent: 'center', padding: '16px 0' }}>
        <img src="/images/tabanghub3.png" alt="Logo" style={{ width: '120px', height: 'auto' }} />
      </Box>

      <List>
        {[{ text: "Dashboard", icon: <DashboardIcon /> },
          { text: "Event List", icon: <EventNoteIcon /> },
          { text: "Ongoing Event", icon: <EventAvailableIcon /> },
          { text: "Reports", icon: <AssessmentIcon /> },
          { text: "History", icon: <HistoryIcon /> },
        ].map((item) => (
          <ListItem button key={item.text}>
            <ListItemIcon sx={{ color: '#34e7b5' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} sx={{ color: '#7b9acb' }} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* AppBar */}
      <AppBar 
        position="fixed" 
        sx={{ 
          zIndex: (theme) => theme.zIndex.drawer + 1, 
          background: '#0f1319', 
          width: { md: `calc(100% - ${drawerWidth}px)` }, 
          ml: { md: `${drawerWidth}px` }, 
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }} // Only show the menu on small screens
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Tabang Hub
          </Typography>

          {/* Profile Picture */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Profile">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/org.png" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>


        </Toolbar>
      </AppBar>

      {/* Sidebar (Drawer) */}
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        {/* Mobile Drawer */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>

        {/* Permanent Drawer for Desktop */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" }, 
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Main Content */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box 
          component="main"
          sx={{ 
            flexGrow: 1,
            bgcolor: 'white', 
            p: 3,
            width: { md: `calc(100% - ${drawerWidth}px)` }, // Adjust width for the main content
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', // Center align the content on smaller screens
          }}
        >
          <Toolbar />
          {children}
        </Box>
      </ThemeProvider>
    </Box>
  );
}
