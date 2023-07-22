import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const navItems = [
  { name: "Blogs", link: "/" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" }
];

export default function Appbar() {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        color="transparent"
        position="relative"
        sx={{
          boxShadow: "none"
        }}
      >
        <Toolbar
          sx={{
            height: "100px",
            justifyContent: "center"
          }}
        >
          <Box>
            {navItems.map((item, index) => (
              <Link to={item.link} key={index}>
                <Button sx={{ color: "#000" }}>{item.name}</Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
