"use client";
import React from "react";
import Image from "next/image";
import {
  Box,
  Typography,
  Select,
  MenuItem,
  Checkbox,
  TextField,
  Button,
  Pagination,
  Slider,
} from "@mui/material";
import HeroSection from "../../components/HeroSection";
import { IoIosStar } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { useRouter } from "next/navigation";
import Footer from "../../components/Footer";

const HomePage = () => {
  const foodImages = [
    "/food1.png",
    "/food2.png",
    "/food3.png",
    "/food4.png",
    "/food5.png",
    "/food6.png",
    "/food7.png",
    "/food8.png",
    "/food9.png",
    "/food10.png",
    "/food1.png",
    "/food2.png",
    "/food3.png",
    "/food4.png",
  ];

  const [priceRange, setPriceRange] = React.useState([10, 100]);

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const router = useRouter()

  return (
    <>
      <HeroSection header={"our shop"} title={"shop"} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-5">
          {/* Left Content */}
          <div className="lg:flex-3 w-full lg:w-3/4 ">
            {/* Sort and Show Row */}
            <div className="flex flex-col md:flex-row md:items-center gap-5 mb-4">
              {/* Sort By */}
              <div className="flex items-center space-x-2">
                <Typography>Sort By:</Typography>
                <Select defaultValue="newest" size="small" className="w-full md:w-56">
                  <MenuItem value="newest">Newest</MenuItem>
                  <MenuItem value="oldest">Oldest</MenuItem>
                </Select>
              </div>

              {/* Show */}
              <div className="flex items-center space-x-2">
                <Typography className="px-2 py-1 rounded-md">Show:</Typography>
                <Select defaultValue="default" size="small" className="w-full md:w-56">
                  <MenuItem value="default">Default</MenuItem>
                  <MenuItem value="custom">Custom</MenuItem>
                </Select>
              </div>
            </div>

            {/* Food Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 cursor-pointer " onClick={()=> router.push('/shopList') } >
              {foodImages.map((src, index) => (
                <div
                  key={index}
                  className="border border-gray-300 rounded-lg p-2"
                >
                  <div className="relative w-full h-40 sm:h-56">
                    <Image
                      src={src}
                      alt={`Food ${index + 1}`}
                      layout="fill"
                      className="rounded-md object-cover"
                    />
                  </div>
                  <Typography className="mt-2 ">
                    Food Item {index + 1}
                  </Typography>
                  <div className="flex  gap-2">
                    <Typography className="text-orange-500">$10.00</Typography>
                    <Typography className="text-orange-500 line-through">
                      $20.00
                    </Typography>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <Pagination count={3} color="primary" />
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:flex-1 w-full lg:w-1/4 p-4 border rounded-md">
            {/* Search */}
            <div className="relative mb-6">
              {/* Search Input */}
              <input
                type="text"
                placeholder="Search Product"
                className="w-full p-2 pr-10 border border-gray-300 bg-[#FF9F0D1A] focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {/* Search Icon */}
              <div className="absolute inset-y-0 right-0 flex items-center">
                <AiOutlineSearch className="text-white bg-[#FF9F0D] text-[40px]" />
              </div>
            </div>

            {/* Categories */}
            <Typography variant="h6" className="mb-2">
              Category
            </Typography>
            {[
              "Sandwiches",
              "Burger",
              "Chicken Chup",
              "Drink",
              "Pizza",
              "Non-Veg",
              "Uncategorized",
            ].map((item, index) => (
              <div key={index} className="flex items-center mb-2">
                <Checkbox size="small" />
                <Typography>{item}</Typography>
              </div>
            ))}

            {/* Sidebar Banner */}
            <div className="mt-6">
              <Image
                src="/Banner.png"
                alt="Banner"
                width={300}
                height={200}
                className="rounded-md"
              />
            </div>

            {/* Filter by Price */}
            <Typography variant="h6" className="mt-6">
              Filter by Price
            </Typography>
            <Slider
              value={priceRange}
              onChange={handlePriceChange}
              valueLabelDisplay="auto"
              min={0}
              max={200}
              className="mt-4"
            />
            <div className="flex justify-between items-center">
              <Typography className="mt-2">
                From ${priceRange[0]} - ${priceRange[1]}
              </Typography>
              <Button variant="outlined" size="small">
                Filter
              </Button>
            </div>

            {/* Latest Products */}
            <Typography variant="h6" className="mt-8 mb-4">
              Latest Products
            </Typography>
            {[...Array(3)].map((_, index) => (
              <div key={index} className="flex items-start mb-4">
                <Image src="/Vector.png" alt="Product" width={70} height={70} />
                <div className="ml-4">
                  <Typography>Product {index + 1}</Typography>
                  <div className="flex items-center text-yellow-500">
                    {Array(5)
                      .fill(0)
                      .map((_, starIndex) => (
                        <IoIosStar key={starIndex} />
                      ))}
                  </div>
                  <Typography>$35</Typography>
                </div>
              </div>
            ))}

            {/* Product Tags */}
            <Typography variant="h6" className="mt-8 mb-4">
              Product Tags
            </Typography>
            {["Sandwiches", "Burger", "Cookies", "Pizza"].map((tag, index) => (
              <Button
                key={index}
                
                size="small"
                className="mr-2 mb-2 text-black "
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default HomePage;
