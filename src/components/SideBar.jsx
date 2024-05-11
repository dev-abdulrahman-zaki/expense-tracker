import React from "react";
import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Box,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CreateIcon from "@mui/icons-material/Create";
import Person2Icon from "@mui/icons-material/Person2";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";

export default function SideBar({
  toggleMode,
  theme,
  themeMode,
  drawerDisplay,
  drawerVariant,
  closeDrawer,
}) {
  const currentLocation = useLocation();
  const navigate = useNavigate();

  const listItems = [
    { text: "Profile", icon: <Person2Icon /> },
    { text: "Settings", icon: <SettingsIcon /> },
    { text: "Logout", icon: <LogoutIcon /> },
  ];

  return (
    <Box component="nav">
      <Drawer
        sx={{
          display: { xs: drawerDisplay, sm: "block" },
          width: "190px",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "190px",
            boxSizing: "border-box",
          },
        }}
        variant={drawerVariant}
        open={true}
        onClose={() => {
          closeDrawer();
        }}
        anchor="left"
      >
        {/* <Toolbar /> */}

        <ListItem
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "64px",
          }}
          disablePadding
        >
          <IconButton onClick={toggleMode} color="inherit">
            {themeMode === "dark" ? (
              <Brightness7 sx={{ color: "orange" }} />
            ) : (
              // <Brightness4 sx={{ color: (theme) => theme.palette.info.main}} />
              <Brightness4 sx={{ color: "primary.main" }} />
            )}
          </IconButton>
        </ListItem>

        <Divider />

        <List sx={{p:"0"}}>
          <ListItem
            sx={{
              bgcolor:
                currentLocation.pathname === "/"
                  ? theme.palette.liActive.main
                  : null,
            }}
            disablePadding
          >
            <ListItemButton
              onClick={() => {
                navigate("/");
              }}
            >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>

          <ListItem
            sx={{
              bgcolor:
                currentLocation.pathname === "/create"
                  ? theme.palette.liActive.main
                  : null,
            }}
            disablePadding
          >
            <ListItemButton
              onClick={() => {
                navigate("/create");
              }}
            >
              <ListItemIcon>
                <CreateIcon />
              </ListItemIcon>
              <ListItemText primary="Create" />
            </ListItemButton>
          </ListItem>

          {listItems.map((li, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>{li.icon}</ListItemIcon>
                <ListItemText primary={li.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
