"use client"; // Ensure MUI works on the client side
import React, { useState } from "react";
import {
  Box,
  IconButton,
  Grid,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Divider,
} from "@mui/material";
import { LuSearch } from "react-icons/lu";
import { MdOutlineShoppingBag, MdMenu, MdOutlineAccountCircle } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

export default function Navbar2() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Toggle the Drawer
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navLinks = [
    { name: "home", href: "/" },
    { name: "menu", href: "/menu" },
    { name: "blog", href: "/blog" },
    { name: "pages", href: "/pages" },
    { name: "about", href: "/about" },
    { name: "shop", href: "/shop" },
    { name: "contact", href: "/contact" },
  ];

  return (
    <Box
      component="nav"
      sx={{
        padding: "1rem",
        position: "sticky",
        top: 0,
        zIndex: 10,
        background: "#0D0D0DF2",
        color: "#fff",
      }}
    >
      <div className="max-w-7xl m-auto">
        <Grid container alignItems="center" justifyContent="space-between">
          {/* Section 1: Logo */}
          {!isMobile && (
            <Grid item xs={4} md={2}>
              <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                <Image src={"/Foodtuck.png"} height={100} width={100} alt="Foodtuck Logo" />
              </Box>
            </Grid>
          )}

          {/* Section 2: Navigation Links */}
          <Grid item xs={8} md={6}>
            {!isMobile ? (
              <Box
                component="ul"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  gap: "1.5rem",
                }}
              >
                {navLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      style={{
                        textDecoration: "none",
                        textTransform: "capitalize",
                        color: "white", // Text color for links
                        transition: "color 0.3s ease",
                      }}
                      onMouseEnter={(e) => (e.target.style.color = "#FF9F0D")} // Highlight on hover
                      onMouseLeave={(e) => (e.target.style.color = "white")}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </Box>
            ) : (
              <IconButton onClick={toggleDrawer} sx={{ color: "white" }}>
                <MdMenu size={30} />
              </IconButton>
            )}
          </Grid>

          {/* Section 3: Icons */}
          {!isMobile && (
            <Grid item xs={12} md={4} container justifyContent="flex-end" alignItems="center" spacing={2}>
              {/* Three Icons: Search, Shopping Bag, User Account */}
              <Grid item>
                <IconButton sx={{ color: "white", "&:hover": { color: "#FF9F0D" } }}>
                  <LuSearch size={24} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton sx={{ color: "white", "&:hover": { color: "#FF9F0D" } }}>
                  <MdOutlineShoppingBag size={24} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton sx={{ color: "white", "&:hover": { color: "#FF9F0D" } }}>
                  <MdOutlineAccountCircle size={24} />
                </IconButton>
              </Grid>
            </Grid>
          )}
        </Grid>
      </div>

      {/* Drawer for Mobile Off-canvas */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            backgroundColor: "black",
            color: "white",
            width: "250px",
            padding: "20px",
          },
        }}
      >
        <Box role="presentation" onClick={toggleDrawer}>
          {/* Drawer Logo */}
          <Box sx={{ textAlign: "center", marginBottom: "1rem" }}>
            <Image src={"/Foodtuck.png"} height={80} width={80} alt="Foodtuck Logo" />
          </Box>

          <List>
            {navLinks.map((item) => (
              <ListItem button key={item.name}>
                <Link
                  href={item.href}
                  style={{
                    textDecoration: "none",
                    color: "white",
                    textTransform: "capitalize",
                  }}
                >
                  <ListItemText primary={item.name} />
                </Link>
              </ListItem>
            ))}
          </List>
          <Divider sx={{ background: "white", margin: "1rem 0" }} />

          {/* Drawer Icons */}
          <Box sx={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
            <IconButton sx={{ color: "white", "&:hover": { color: "#FF9F0D" } }}>
              <LuSearch size={24} />
            </IconButton>
            <IconButton sx={{ color: "white", "&:hover": { color: "#FF9F0D" } }}>
              <MdOutlineShoppingBag size={24} />
            </IconButton>
            <IconButton sx={{ color: "white", "&:hover": { color: "#FF9F0D" } }}>
              <MdOutlineAccountCircle size={24} />
            </IconButton>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}
