import React from "react";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";
import Buttons from "./Buttons";

export default function AboutSection() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center  mt-24 w-full gap-5 p-10  ">
        {/* Left Section for Content */}
        <div className="flex-1 items-center lg:items-start flex flex-col justify-start p-8">
          <h4 className="text-4xl font-cursive text-[#FF9F0D] mb-5">
            About Us
          </h4>

          <p className="text-3xl mb-4">
            <span className="text-[#FF9F0D]">We</span> Create the best foody
            product
          </p>

          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
            eu velit in consequat.
          </p>

          <p className="mb-3 flex items-center">
            <FaCheck color="white" className="mr-2" />
            Lacus nisi, et ac dapibus sit eu velit in consequat.
          </p>

          <p className="mb-3 flex items-center">
            <FaCheck color="white" className="mr-2" />
            Lacus nisi, et ac dapibus sit eu velit in consequat.
          </p>

          <p className="mb-3 flex items-center">
            <FaCheck color="white" className="mr-2" />
            Lacus nisi, et ac dapibus sit eu velit in consequat.
          </p>

          <div className="mt-5">
            <Buttons title={"read more"} />
          </div>
        </div>

        {/* Right Section for Images */}
        <div className="flex-1 gap-1 flex flex-col items-center justify-center">
          {/* Top Image */}
          <div className="relative w-full h-[auto] max-w-full mb-3">
            <Image
              src="/image2.png" // Path to the top image
              alt="About Image Top"
              layout="intrinsic"
              width={800} // Specify width for intrinsic layout
              height={500} // Specify height for intrinsic layout
              objectFit="cover"
            />
          </div>

          {/* Bottom Two Images */}
          <div className="flex flex-col md:flex-row items-center w-full gap-2">
            <div className="relative flex-1 h-[auto] max-w-full">
              <Image
                src="/image3.png" // Path to the left-bottom image
                alt="About Image Left Bottom"
                layout="intrinsic"
                width={400} // Specify width for intrinsic layout
                height={300} // Specify height for intrinsic layout
                objectFit="cover"
              />
            </div>
            <div className="relative flex-1 h-[auto] max-w-full">
              <Image
                src="/image4.png" // Path to the right-bottom image
                alt="About Image Right Bottom"
                layout="intrinsic"
                width={400} // Specify width for intrinsic layout
                height={300} // Specify height for intrinsic layout
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-40 -rotate-45 mt-40 opacity-[0.2] backdrop-blur-sm">
        <div className="h-[600px] w-[500px] relative">
          <Image
            src="/leaf.png"
            alt="Decorative Leaf"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <div className="mt-24 w-full flex flex-col items-center p-10 ">
        <h4 className="text-4xl font-cursive text-[#FF9F0D] mb-5">
          Food Category
        </h4>
        <p className="text-5xl font-bold leading-tight">
          <span className="text-[#FF9F0D]">Ch</span>
          oose food items
        </p>
        <div className="flex flex-col lg:flex-row gap-10 mt-10 flex-wrap justify-center">
          <div className="relative flex-1 w-[245px] h-[250px] sm:w-[280px] md:w-[300px] lg:w-[350px]">
            <Image
              src="/food1.png" // Path to the right-bottom image
              alt="About Image Right Bottom"
              layout="intrinsic"
              width={245} // Specify width for intrinsic layout
              height={250} // Specify height for intrinsic layout
              objectFit="cover"
            />
          </div>
          <div className="relative flex-1 w-[245px] h-[250px] sm:w-[280px] md:w-[300px] lg:w-[350px]">
            <Image
              src="/food4.png" // Path to the right-bottom image
              alt="About Image Right Bottom"
              layout="intrinsic"
              width={245} // Specify width for intrinsic layout
              height={250} // Specify height for intrinsic layout
              objectFit="cover"
            />
          </div>
          <div className="relative flex-1 w-[245px] h-[250px] sm:w-[280px] md:w-[300px] lg:w-[350px]">
            <Image
              src="/food2.png" // Path to the right-bottom image
              alt="About Image Right Bottom"
              layout="intrinsic"
              width={245} // Specify width for intrinsic layout
              height={250} // Specify height for intrinsic layout
              objectFit="cover"
            />
          </div>
          <div className="relative flex-1 w-[245px] h-[250px] sm:w-[280px] md:w-[300px] lg:w-[350px]">
            <Image
              src="/food3.png" // Path to the right-bottom image
              alt="About Image Right Bottom"
              layout="intrinsic"
              width={245} // Specify width for intrinsic layout
              height={250} // Specify height for intrinsic layout
              objectFit="cover"
            />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row items-center lg:items-start gap-20 mt-[100px] p-10">
  {/* Image Section */}
  <div className="mb-10 order-2 lg:order-1">
    {/* First Row */}
    <div className="flex flex-col lg:flex-row items-end gap-5 mb-5">
      <div className="relative w-full lg:w-[362px] aspect-[4/5]">
        <Image
          src="/food5.png"
          alt="Food 5"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="relative w-full lg:w-[281px] aspect-[3/4]">
        <Image
          src="/food6.png"
          alt="Food 6"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    </div>

    {/* Second Row */}
    <div className="flex flex-col lg:flex-row gap-5">
      {/* Left Side */}
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="relative w-full lg:w-[244px] aspect-[4/5]">
          <Image
            src="/food7.png"
            alt="Food 7"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="relative w-full lg:w-[221px] aspect-[1/1]">
          <Image
            src="/food8.png"
            alt="Food 8"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Right Side */}
      <div>
        <div className="relative w-full lg:w-[161px] aspect-[1/1] mb-3">
          <Image
            src="/food9.png"
            alt="Food 9"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="relative w-full lg:w-[161px] aspect-[1/1]">
          <Image
            src="/food10.png"
            alt="Food 10"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  </div>

  {/* Text Section */}
  <div className="mt-14 order-1 lg:order-2 text-center lg:text-start">
    <h4 className="font-cursive text-primary text-3xl mb-5">Why Choose Us</h4>
    <h3 className="text-[30px] font-[700] mb-5 leading-10">
      <span className="text-[#FF9F0D]">Ex</span>traordinary Taste and
      Experience
    </h3>
    <p className="text-[16px]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
      pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
      augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed
      vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
    </p>

    <div className="flex justify-center lg:justify-start gap-10 mt-[30px] text-center">
      <div>
        <div className="relative w-[50px] h-[50px] rounded-md bg-[#FF9F0D]">
          <Image
            src="/Hamburger.png"
            alt="Hamburger"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <h5 className="mt-2">Fast Food</h5>
      </div>
      <div>
        <div className="relative w-[50px] h-[50px] rounded-md bg-[#FF9F0D]">
          <Image
            src="/Cookie.png"
            alt="Cookie"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <h5 className="mt-2">Lunch</h5>
      </div>
      <div>
        <div className="relative w-[50px] h-[50px] rounded-md bg-[#FF9F0D]">
          <Image
            src="/Wine.png"
            alt="Wine"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <h5 className="mt-2">Drink</h5>
      </div>
    </div>

    <div className="mt-20">
      <div className="flex gap-10 border-[#FF9F0D] border-l-[20px] rounded-lg p-3 bg-white text-black">
        <div className="ml-16 w-[70%] flex flex-wrap justify-between pr-10  items-center">
          <h3 className="font-bold text-3xl text-[#FF9F0D]">30+</h3>
          <div>
            <p className="text-sm">Years of</p>
            <p className="text-md font-bold">Experience</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
}
