import HeroSection from "../../components/HeroSection";
import React from "react";
import Image from "next/image";
import { BsPlayCircle } from "react-icons/bs"; // React-icons for play button
import Footer from "../../components/Footer";

export default function Page() {
  const teamMembers = [
    { name: "Mark Henry", role: "Owner", image: "/about5.png" },
    { name: "Lucky Helen", role: "Chef", image: "/about5.png" },
    { name: "Moon Henry", role: "Founder", image: "/about5.png" },
    { name: "Tom Morrow", role: "Specialist", image: "/about5.png" },
  ];

  return (
    <>
      <HeroSection header={"About Us"} title={"About"} />
      <div className="max-w-7xl m-auto p-10 mt-[100px] ">
        {/* Left Section with Images */}
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="flex  gap-5">
            {/* Top Image */}
            <div className="relative w-full lg:w-[336px] h-[536px]">
              <Image
                src="/food6.png"
                alt="Food Image 1"
                layout="fill"
                className="rounded-sm"
                objectFit="cover"
              />
            </div>
            {/* Two Small Images */}
            <div className="flex flex-col gap-5">
              <div className="relative w-full lg:w-[309px] h-[271px] ">
                <Image
                  src="/food7.png"
                  alt="Food Image 2"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-sm"
                />
              </div>
              <div className="relative w-[309px] h-[382px] ">
                <Image
                  src="/food8.png"
                  alt="Food Image 3"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-sm"
                />
              </div>
            </div>
          </div>

          {/* Right Section with Text and Buttons */}
          <div className="flex-1">
            <h5 className="text-primary text-sm font-medium tracking-wide mb-2  font-cursive ">
              About us
            </h5>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug mb-4">
              Food is an important <br /> part Of a balanced Diet
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu
              velit in consequat.
            </p>
            {/* Buttons */}
            <div className="flex items-center gap-5">
              <button className="bg-primary hover:bg-yellow-500 text-white font-semibold px-5 py-3 rounded-lg">
                Show more
              </button>
              <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium">
                <BsPlayCircle size={34} className="text-primary" />
                Watch video
              </button>
            </div>
          </div>
        </div>

        <div className=" mt-[100px] text-center ">
          <div>
            <h2 className=" text-2xl ">Why Choose Us</h2>
            <p className="leading-6 font-[400] text-[16px] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.{" "}
            </p>
          </div>
          <div className="relative w-full h-[386px] mt-10 ">
            <Image src={"/about.png"} layout="fill" objectFit="contain" />
          </div>
          <div className=" grid grid-cols-2 lg:grid-cols-3 gap-10 mt-10 ">
            <div className="flex items-center flex-col">
              <div className="relative w-[55px] h-[50px] ">
                <Image src={"/about2.png"} objectFit="contain" layout="fill" />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-[700]"> Best Chefs </h3>
                <p className=" leading-6 text-[16px] font-[400] mt-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque diam pellentesque bibendum non dui volutpat{" "}
                </p>
              </div>
            </div>
            <div className="flex items-center flex-col">
              <div className="relative w-[55px] h-[50px] ">
                <Image src={"/about1.png"} objectFit="contain" layout="fill" />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-[700]"> Best Chefs </h3>
                <p className=" leading-6 text-[16px] font-[400] mt-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque diam pellentesque bibendum non dui volutpat{" "}
                </p>
              </div>
            </div>
            <div className="flex items-center flex-col">
              <div className="relative w-[55px] h-[50px] ">
                <Image src={"/Person.png"} objectFit="contain" layout="fill" />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-[700]"> Best Chefs </h3>
                <p className=" leading-6 text-[16px] font-[400] mt-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque diam pellentesque bibendum non dui volutpat{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-[100px]">
          {/* Background Section */}
          <div className="about-bg w-full h-[40vh] flex flex-col items-center justify-center text-center">
            <h2 className="relative z-[5] font-bold text-4xl mb-2">
              Team Member
            </h2>
            <p className="relative z-[5] text-sm max-w-[600px] text-gray-100">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
              sed pharetra dictum neque massa congue.
            </p>
          </div>

          {/* Team Cards */}
          <div className="relative z-[5] w-full px-5 mt-[-70px]">
            <div className="flex flex-wrap justify-center gap-5">
              {/* Individual Card */}
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white  w-[250px] shadow-md rounded-md overflow-hidden group hover:shadow-2xl transition duration-300"
                >
                  {/* Image */}
                  <div className="relative h-[300px] w-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>

                  {/* Name and Role */}
                  <div className="text-center p-4">
                    <h3 className="text-lg font-bold capitalize text-gray-800">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-500">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className=" mt-[100px] max-w-7xl m-auto p-10 ">
          <div>
            <h3 className="text-primary font-cursive  text-4xl ">
              testamonial
            </h3>
            <h2 className="text-4xl font-bold">what our clients are saying</h2>
          </div>
          <div className=" flex justify-center items-center py-10 px-4 mt-[50px] ">
            <div className="bg-[#ffff] shadow-lg border rounded-lg relative p-8 w-full  md:w-[800px]">
              {/* Profile Image */}
              <div className="absolute -top-14 left-1/2 transform -translate-x-1/2">
                <Image
                  src="/profile.png"
                  alt="Profile"
                  width={110}
                  height={110}
                  className="rounded-full  "
                />
              </div>
              {/* Quote Icon */}
              <div className="text-[#FF9F0D] text-4xl text-center mt-16">“</div>
              {/* Testimonial Text */}
              <p className="text-gray-700 text-center mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat fringilla bibendum.
                Urna, elit augue urna, vitae feugiat pretium donec id elementum.
                Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus
                sit ut velit in consequat.
              </p>
              {/* Star Ratings */}
              <div className="flex justify-center items-center mt-4">
                {[...Array(4)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">
                    ★
                  </span>
                ))}
                <span className="text-gray-300 text-xl">★</span>
              </div>
              {/* Name and Title */}
              <div className="text-center mt-4">
                <h3 className="text-lg font-bold">Alamin Hasan</h3>
                <p className="text-sm text-gray-500">Food Specialist</p>
              </div>
              {/* Pagination Dots */}
            </div>
          </div>
          <div className="flex justify-center  space-x-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={`h-2 w-2 rounded-full ${
                  i === 0 ? "bg-yellow-500" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto p-6 font-sans">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">
          Our Food Menu
        </h1>
        <p className="text-gray-500 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br />
          Varius sed pharetra dictum neque massa congue.
        </p>
      </div>

      {/* Navigation */}
      <div className="flex flex-col md:flex-row justify-center border-b mb-8">
        {["Breakfast", "Lunch", "Dinner", "Dessert", "Drink", "Snack"].map(
          (item, index) => (
            <button
              key={index}
              className={`text-gray-500 px-4 py-2 ${
                item === "Breakfast" ? "text-yellow-500 border-b-2 border-yellow-500" : ""
              }`}
            >
              {item}
            </button>
          )
        )}
      </div>

      {/* Menu Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {[...Array(6)].map((_, index) => (
          <div>
                <div key={index} className="flex items-center">
            {/* Item Details */}
            <div className="flex-1">
              <h2 className="text-lg font-bold ">
                Alder Grilled Chinook Salmon
              </h2>
              <p className="text-gray-600 text-sm">
                Toasted French bread topped with romano, cheddar
              </p>
              <p className="text-gray-400 text-xs">560 CAL</p>
            </div>
            {/* Price */}
            <div className="text-yellow-500 font-bold text-lg">32$</div>
          </div>
          <hr className="w-full mt-10" />
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="text-center mt-8">
        <button className="border border-yellow-500 text-yellow-500 px-6 py-2 rounded hover:bg-yellow-500 hover:text-white transition">
          View menu
        </button>
      </div>
    </div>
      <Footer />
    </>
  );
}
