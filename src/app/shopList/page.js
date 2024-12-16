import HeroSection from "../../components/HeroSection";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa6";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { IoArrowBackCircle } from "react-icons/io5";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import Footer from "../../components/Footer";




export default function Page() {
  return (
    <>
      <HeroSection header={"menu list"} title={"shop detail"} />
      <div className="max-w-7xl m-auto mt-[100px] p-10">
        {/* Main Product Section */}
        <div className="flex flex-wrap gap-3 lg:flex-nowrap ">
          {/* Thumbnail Images */}
          <div className=" flex-col hidden md:flex ">
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="relative h-[115px]   md:w-[100px] mb-3">
                  <Image
                    src={`/food${index + 1}.png`}
                    alt={`food${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
              ))}
          </div>

          {/* Main Product Image */}
          <div className="relative w-[550px] h-[500px]">
            <Image
              src="/food5.png"
              alt="Main Product Image"
              layout="fill"
              objectFit="contain"
              className="rounded-md"
            />
          </div>

          {/* Product Details */}
          <div className="flex-1">
            <div className="mb-3">
              <span className="bg-primary px-4 py-2 rounded-lg text-white text-sm">
                In Stock
              </span>
            </div>
            <h2 className="text-3xl font-bold mb-5">Yummy Chicken Chup</h2>
            <p className="text-[#4F4F4F] text-lg leading-6 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
              pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna,
              vitae feugiat pretium donec id elementum.
            </p>
            <h2 className="text-3xl font-bold text-primary mb-4">$54.00</h2>
            <div className="flex items-center gap-5 mb-5">
              {/* Rating Stars */}
              <div className="flex items-center gap-1 text-primary">
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <FaStar key={index} />
                  ))}
              <div className="text-gray-500 ml-5 text-sm " >
               |
              </div>
              </div>
              <span className="text-sm text-gray-500">5.0 rating  </span>
              <span className="text-sm text-gray-500"> | 22 reviews</span>
            </div>
            <p className="mb-5 text-gray-500">Dictum / cursus / Risus</p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              {/* Quantity Selector */}
              <div className="flex items-center border border-gray-300 rounded-sm overflow-hidden">
                <button className="px-5 py-1 border-r border-gray-300 text-lg">
                  -
                </button>
                <span className="px-5 py-1 text-lg">1</span>
                <button className="px-5 py-2 border-l border-gray-300 text-lg">
                  +
                </button>
              </div>
              {/* Add to Cart Button */}
              <button className="bg-primary text-white px-6 py-3 rounded-md flex items-center gap-2">
                <AiOutlineShoppingCart />
                Add to cart
              </button>
            </div>
                  <hr className=" h-[1px] w-full bg-slate-700 mt-7 " />
            {/* Wishlist and Compare */}
            <div className="flex  items-center gap-4 mt-6 text-gray-600 text-sm">
              <button className="flex items-center gap-2">
                <AiOutlineHeart />
                Add to Wishlist
              </button>
              <button className="flex items-center gap-2">
                <AiOutlineShareAlt />
                Compare
              </button>
            </div>

            {/* Category and Tag */}
            <div className="mt-5 text-gray-600 text-sm">
              <p>
                <strong>Category:</strong> Pizza
              </p>
              <p>
                <strong>Tag:</strong> Our Shop
              </p>
            </div>

            {/* Social Media Share */}
            <div className="flex items-center gap-4 mt-6 ">
              <span>Share :</span>
              <FaFacebook className="cursor-pointer" />
              <FaTwitter className="cursor-pointer" />
              <FaInstagram className="cursor-pointer" />
              <FaYoutube className="cursor-pointer" />
            </div>
        <hr className=" h-[1px] w-full bg-slate-100 mt-7 " />
          </div>
        </div>
        {/* Description and Reviews */}
        <div className="mt-16">
          <div className="flex gap-8 border-b border-gray-200 pb-3">
            <button className="text-primary font-bold">Description</button>
            <button className="text-gray-500">Reviews (24)</button>
          </div>
          <div className="mt-8">
            <p>
            Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl.
            </p>
            <p className="mt-10" >
            Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl.

            </p>
            <h3 className=" mt-10 text-1xl font-[400] " > Key Benefits </h3>
            <ul className="list-disc pl-5 mt-4">
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Nulla quis lorem ut libero malesuada feugiat.</li>
              <li>Donec sollicitudin molestie malesuada.</li>
            </ul>
          </div>
        </div>

        {/* Similar Products Section */}
        <div className="mt-16">
          <div className=" flex justify-between " >
            <h2 className="text-2xl font-bold mb-6">Similar Products</h2>
            <div className="flex text-3xl text-primary items-center gap-1" >
            <IoArrowBackCircle/>
            <IoArrowForwardCircleSharp  />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <div key={index} >
                  <div className="relative h-[300px] w-full mb-4">
                    <Image
                      src={`/food${index + 1}.png`}
                      alt={`Similar Product ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md"
                    />
                  </div>
                  <h3 className="text-lg font-semibold">Product Name</h3>
                  <div className="flex gap-5 items-center" >
                    <p className="text-primary font-bold">$25.00</p>
                    <p className=" line-through font-semibold">$25.00</p>

                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
