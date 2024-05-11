import React, { useMemo } from "react";
import { Outlet } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import MainTheme from "../MainTheme";

export default function Root() {
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem("themeMode") === null
      ? "dark"
      : localStorage.getItem("themeMode")
  );
  // Update the theme only if the mode changes
  const theme = useMemo(() => createTheme(MainTheme(themeMode)), [themeMode]);


  function toggleMode() {
    let mode = themeMode === "light" ? "dark" : "light";
    localStorage.setItem("themeMode", mode);
    setThemeMode(mode);
  }

  const [drawerDisplay, setDrawerDisplay] = useState("none");
  const [drawerVariant, setDrawerVariant] = useState("permanent");
  function openDrawer() {
    setDrawerVariant("temporary");
    setDrawerDisplay("block");
  }
  function closeDrawer() {
    setDrawerVariant("permanent");
    setDrawerDisplay("none");
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <NavBar openDrawer={openDrawer} />
        <SideBar
          {...{toggleMode, theme, themeMode, drawerDisplay, drawerVariant, closeDrawer}}
          // toggleMode={toggleMode}
          // theme={theme}
          // themeMode={themeMode}
          // drawerDisplay={drawerDisplay}
          // drawerVariant={drawerVariant}
          // closeDrawer={closeDrawer}
        />
        <Box
          sx={{
            ml: { sm: "190px" },
            margin: "auto",
            width: "calc(100% - 190px)",
            display: "flex",
            justifyContent: "center",
            pt: "60px",
          }}
          component="main"
        >
          <Outlet />
        </Box>
      </div>
    </ThemeProvider>
  );
}
