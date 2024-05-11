import React from "react";
import {
  Avatar,
  Button,
  Typography,
  Link,
  Toolbar,
  AppBar,
  IconButton,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import PaidIcon from "@mui/icons-material/Paid";
import MenuIcon from "@mui/icons-material/Menu";

export default function NavBar({openDrawer}) {
  return (
    <AppBar
      sx={{
        ml: { sm: "190px" },
        width: { sm: "calc(100% - 190px)" },
        py: { xs: "8px", sm: "0" },
      }}
      position="static"
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
          }}
        >
          <IconButton sx={{ display: { sm: "none" } }}
          onClick={()=>{openDrawer()}}
          >
            <MenuIcon />
          </IconButton>

          <Link component={RouterLink} to="/">
            <Button
              variant="text"
              style={{
                color: "white",
                border: "2px solid white",
                borderRadius: "8px",
                textTransform: "capitalize",
                fontWeight: "600",
              }}
              size="large"
              endIcon={<PaidIcon />}
              sx={{
                "&:hover": { transform: "scale(1.01)" },
                "& .MuiButton-endIcon": {
                  marginLeft: "4px",
                },
              }}
            >
              My Expenses
            </Button>
          </Link>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
          }}
        >
          <Typography variant="body1" color="white">
            Abdulrahman Zaki
          </Typography>
          <Avatar alt="Avatar" src="avatar.jpg" />
        </div>
      </Toolbar>
    </AppBar>
  );
}
