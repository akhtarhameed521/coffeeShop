"use client"; // Ensure MUI works on the client side
import React, { useState } from "react";
import {
  Box,
  TextField,
  IconButton,
  Grid,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { LuSearch } from "react-icons/lu";
import { MdOutlineShoppingBag, MdMenu } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Menu items with corresponding hrefs
  const menuItems = [
    { name: "home", href: "/" },
    { name: "menu", href: "/menu" },
    { name: "blog", href: "/blog" },
    { name: "pages", href: "/pages" },
    { name: "about", href: "/about" },
    { name: "shop", href: "/shop" },
    { name: "contact", href: "/contact" },
  ];

  // Toggle the Drawer
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className="bg-[#0D0D0DF2]">
      <div className="max-w-7xl m-auto">
        <Box
          component="nav"
          sx={{
            padding: "1rem",
            position: "relative",
          }}
        >
          <Box
            component={"div"}
            sx={{
              marginTop: "20px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginBottom: "10px",
            }}
          >
            <Image src={"/Foodtuck.png"} height={100} width={100} alt="Foodtuck Logo" />
          </Box>
          <Grid container alignItems="center" spacing={2} justifyContent="space-between">
            {/* Links Section */}
            <Grid item xs={12} md={8}>
              {!isMobile ? (
                <Box
                  component="ul"
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "center", md: "start" },
                    flexWrap: "wrap",
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    gap: "1.5rem",
                  }}
                >
                  {menuItems.map((item) => (
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

            {/* Search Section and Shopping Bag Icon */}
            <Grid item xs={12} md={4} container justifyContent="flex-end" alignItems="center" spacing={2}>
              <Grid item xs={8}>
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    borderRadius: "27px",
                    border: "1px solid #FF9F0D", // Orange border
                  }}
                >
                  <TextField
                    variant="outlined"
                    placeholder="Search..."
                    fullWidth
                    sx={{
                      height: "50px", // Reduced height
                      borderRadius: "inherit",
                      input: {
                        height: "100%",
                        color: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        lineHeight: "32px", // Ensure vertical centering of text
                      },
                      fieldset: {
                        border: "none",
                      },
                    }}
                  />
                  <IconButton
                    sx={{
                      position: "absolute",
                      right: "0",
                      height: "100%",
                      width: "42px", // Match the new input height
                      borderRadius: "0 27px 27px 0",
                      "&:hover": { backgroundColor: "#0056b3" },
                    }}
                  >
                    <LuSearch style={{ color: "white" }} />
                  </IconButton>
                </Box>
              </Grid>

              {/* Shopping Bag Icon */}
              <Grid item xs={4}>
                <IconButton>
                  <MdOutlineShoppingBag style={{ color: "white" }} />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>

          {/* Drawer for Mobile Off-canvas */}
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer}
            sx={{
              display: { xs: "block", md: "none" },
              "& .MuiDrawer-paper": {
                backgroundColor: "black", // Drawer background color
                color: "white", // Text color inside the drawer
                width: "250px", // Drawer width
                paddingTop: "20px", // Padding for the drawer content
                paddingLeft: "20px",
              },
            }}
          >
            <Box role="presentation" onClick={toggleDrawer}>
              <Box sx={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
                <Image src={"/Foodtuck.png"} height={100} width={100} alt="Foodtuck Logo" />
              </Box>
              <List>
                {menuItems.map((item) => (
                  <ListItem button key={item.name}>
                    <Link href={item.href} passHref>
                      <ListItemText primary={item.name} sx={{ color: "white" }} />
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        </Box>
      </div>
    </div>
  );
}