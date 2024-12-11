import React from "react";
import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa"; // Importing social media icons from React Icons
import Image from "next/image";
import Button from "@/components/Buttons";
import AboutSection from "@/components/About";
import FoodItems from "@/components/FoodItems";
import MenuItems from "@/components/MenuItems";
import Footer from "@/components/Footer";
import { CiPlay1 } from "react-icons/ci";
import { AiOutlineLike } from "react-icons/ai";
import { LiaCommentSolid } from "react-icons/lia";
import { CiShare2 } from "react-icons/ci";


export default function Home() {
  return (
    // hero section of homepage
    <>
      <div className=" w-[100%] bg-[#0D0D0DF2] text-[#ffffff]  " >

      

      <div className="flex justify-center items-center min-h-screen ">
  <div className="flex flex-col lg:flex-row py-16 w-full max-w-[1280px] m-auto px-5">
    {/* Right Section for Content */}
    <div className="flex-1 p-0 flex justify-center items-center md:pl-8 md:pr-0">
      {/* First Grid - Vertical Line and Icons */}
      <div className="hidden md:flex flex-col justify-between items-center relative sm:w-1/12">
        {/* Top Vertical Line */}
        <div className="w-px h-36 bg-white" />

        {/* Social Media Icons */}
        <div className="flex flex-col gap-4 items-center mt-8 mb-8">
          <button className="text-white">
            <FaFacebookF size={20} />
          </button>
          <button className="text-[#FF9F0D]">
            <FaTwitter size={20} />
          </button>
          <button className="text-white">
            <FaPinterestP size={20} />
          </button>
        </div>

        {/* Bottom Vertical Line */}
        <div className="w-px h-36 bg-white" />
      </div>

      {/* Second Grid - Content */}
      <div className="flex flex-col justify-center items-center sm:items-start text-center sm:text-left pl-4 sm:pl-8 pr-4 sm:pr-0">
        <h4 className="font-cursive text-4xl mb-5 text-primary">
          It's Quick & Amusing!
        </h4>

        <h1 className="text-5xl mb-5">
          <span className="text-[#FF9F0D]">Th</span>e art of speed food
          quality
        </h1>
        <p className="text-xl mb-3">
          This is a brief description of the site. You can add any content
          here, such as an intro or call to action.
        </p>
        {/* button here */}
        <Button title={"Getting Started"} />
      </div>
    </div>

    {/* Left Section for Image */}
    <div className="flex-1 relative w-full h-72 sm:h-[60vh]">
      <Image
        src="/image1.png" // Ensure this path is correct
        alt="Hero Image"
        layout="fill" // Makes the image fill the container
        objectFit="cover" // Ensure the image covers the area without distortion
        className="max-w-full h-auto"
      />
    </div>
  </div>
</div>


      {/* about section */}
      <div className=" max-w-7xl m-auto  ">
        <AboutSection />
        
      </div>
      <div>
        <FoodItems />
      </div>
      <div className="mt-[100px] max-w-7xl m-auto p-10 ">
        <div className="w-full flex justify-center items-center flex-col">
          <h2 className="text-primary font-cursive text-3xl">choose & picks</h2>
          <h3 className="text-5xl">
            <span className="text-[#FF9F0D]">fr</span>om our menu
          </h3>
        </div>
        <div className="w-full flex flex-col lg:flex-row  gap-20  mt-[70px] text-xl capitalize">
          <button className="bg-transparent border-none">breakfast</button>
          <button className="bg-transparent border-none">lunch</button>
          <button className="bg-transparent border-none">dinner</button>
          <button className="bg-transparent border-none">dessert</button>
          <button className="bg-transparent border-none">drink</button>
          <button className="bg-transparent border-none">snack</button>
          <button className="bg-transparent border-none">soups</button>
        </div>
        <div className="flex flex-col items-center lg:flex-row lg:items-start mt-[50px] relative">
          {/* menu main image is here */}
          <div className="relative z-30 flex-1 hidden lg:block">
            <Image
              src="/menu1.png"
              alt="Menu"
              unoptimized
              width={450}
              height={300}
              objectFit="contain"
              className="z-30"
            />
            <div className="absolute top-0 -left-10 " >
              <Image
                src="/leaf.png"
                alt="Menu"
                unoptimized
                width={550}
                height={400}
                objectFit="contain"
                className="z-10"
              />
            </div>
            <div>

            </div>
          </div>
          {/* side menu item is here */}
          <div className="flex-1 flex flex-col sm:flex-row flex-wrap gap-8">
            <MenuItems />
            <MenuItems />
          </div>
        </div>
      </div>

                 

      <div className=" mt-[100px] max-w-7xl m-auto p-10 ">
        <div>
          <h3 className="text-primary font-cursive  text-4xl ">testamonial</h3>
          <h2 className="text-4xl font-bold">what our clients are saying</h2>
        </div>
        <div className=" flex justify-center items-center py-10 px-4 mt-[50px] ">
          <div className="bg-[#ffff]  rounded-lg relative p-8 w-full max-w-[800px]">
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
              Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
              ut velit in consequat.
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
      {/* this is play section  */}
      <div className="mt-[100px] relative">
        <div className="relative w-full h-[60vh]">
          {/* Image section */}
          <Image
            src={"/play.png"}
            objectFit="cover"
            layout="fill"
            alt="play-image"
          />

          {/* Overlay text */}
          <div className="text-white  text-end w-full">
            <div className="w-full flex mt-20 sm:w-[70%] md:w-[50%] lg:w-[50%] mx-auto px-4 sm:px-0 relative">
              {/* Heading */}
              <div className="absolute top-[10%]  p-10 left-0 sm:left-[10%]" >
                <h3 className="text-primary font-cursive text-base sm:text-4xl">
                  Restaurant Active Process
                </h3>
                <h2 className="text-[15px] sm:text-xl lg:text-3xl font-bold leading-snug">
                  <span className="text-yellow-500">We</span> Document Every Food
                  Bean Process until it is saved
                </h2>
                {/* Paragraph */}
                <p className="text-sm sm:text-base lg:text-lg font-bold mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                  diam pellentesque bibendum non dui volutpat fringilla bibendum.
                  Urna, elit augue urna.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row sm:justify-end gap-4 mt-5">
                  <button className="h-[50px] w-full sm:w-[190px] bg-transparent border text-sm sm:text-lg font-bold border-slate-400 rounded-[30px]">
                    Read More
                  </button>
                  <button className="flex items-center justify-center gap-3 w-full sm:w-auto">
                    <span className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">
                      <CiPlay1 />
                    </span>
                    Play Video
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[100px] max-w-7xl m-auto p-10">
      <div className="text-center mb-10">
        <h4 className="text-primary font-cursive text-4xl font-semibold">Blog Post</h4>
        <h2 className="text-white text-4xl font-bold">
          <span className="text-yellow-500">Latest</span> News & Blog
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-8 justify-center">
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="bg-black border border-gray-600 rounded-lg overflow-hidden shadow-md"
            >
              {/* Image Section */}
              <div className="relative h-[300px] w-full  lg:w-[400px]">
                <Image
                  src={`/blog${index + 1}.png`} // Use images like blog1.png, blog2.png, blog3.png
                  alt={`blog${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              {/* Content Section */}
              <div className="p-5 text-white">
                <p className="text-yellow-500 text-sm font-medium">
                  10 February 2022
                </p>
                <h3 className="text-lg font-semibold my-3">
                  Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis
                </h3>
                <div className="flex justify-between items-center text-sm mt-3">
                  <a href="#" className="text-yellow-500 underline">
                    Learn More
                  </a>
                  {/* Icon Section */}
                  <div className="flex space-x-3 text-md ">
                    <button className="text-gray-400 text-lg hover:text-yellow-500">
                      <AiOutlineLike />
                    </button>
                    <button className=" text-lg text-yellow-500">
                      <LiaCommentSolid />
                    </button>
                    <button className="text-gray-400 text-lg hover:text-yellow-500">
                      <CiShare2 />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>

      
        <Footer />

      </div>
    </>
  );
}
