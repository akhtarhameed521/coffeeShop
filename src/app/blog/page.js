import HeroSection from "../../components/HeroSection";
import Image from "next/image";
import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import { LiaComments } from "react-icons/lia";
import { RiAccountCircleLine } from "react-icons/ri";
import { PiArrowLineUpRight } from "react-icons/pi";
import Footer from "../../components/Footer";
import { CiSearch } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

export default function page() {
  return (
    <>
      <HeroSection header={"blog list"} title={"blog"} />

      <div className=" max-w-7xl m-auto mt-[100px] p-10 ">
        <div className=" flex items-center lg:items-start flex-col lg:flex-row gap-5 ">
          <div className=" w-full lg:w-2/3 ">
            {Array(4)
              .fill(0)
              .map((_, index) => {
                return (
                  <div className="mb-14">
                     <div className="relative w-full h-[500px]  ">
                      <Image
                        src={"/food1.png"}
                        objectFit="cover"
                        layout="fill"
                      />
                    </div>
                    <div className="flex gap-4 items-center mt-5 capitalize">
                      <div className="flex gap-3 items-center ">
                        <span className="text-primary">
                          {" "}
                          <CiCalendarDate />{" "}
                        </span>
                        <p>feb 14, 2022</p>
                      </div>
                      <div>/</div>
                      <div className="flex gap-3 items-center ">
                        <span className="text-primary">
                          {" "}
                          <LiaComments />{" "}
                        </span>
                        <p>3</p>
                      </div>
                      <div>/</div>
                      <div className="flex gap-3 items-center ">
                        <span className="text-primary">
                          {" "}
                          <RiAccountCircleLine />{" "}
                        </span>
                        <p>3</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h2 className=" text-[24px] font-[700]  ">
                        {" "}
                        10 Reasons To Do A Digital Detox Challenge
                      </h2>
                    </div>
                    <hr className=" w-full bg-slate-400 mt-6 " />
                    <div className="mt-6 w-[80%] ">
                      <p className=" text-[16px] font-[400] text-[#4F4F4F]  ">
                        At vero eos et accusam et justo duo dolores et ea rebum.
                        Stet clita kasd gubergren, no sea takimata sanctus est
                        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                        consetetur sadipscing elitr, sed diam nonumy eirmod
                        tempor invidunt ut labore et dolore magna aliquyam erat
                      </p>
                    </div>
                    <div className=" mt-10 ">
                      <button className=" bg-transparent border border-[#FF9F0D] text-primary w-[172px] h-[52px] flex items-center justify-center gap-4 ">
                        Read more
                        <span>
                          {" "}
                          <PiArrowLineUpRight />{" "}
                        </span>
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className=" w-full lg:w-1/3 ">
            <div className=" flex ">
              <input
                type="text"
                placeholder="search your keywords"
                className="w-[80%] h-[60px] focus:bg-none border placeholder:text-gray-400 px-2 capitalize "
              />
              <button className=" bg-primary h-[60px] w-[20%] flex items-center justify-center text-white text-2xl font-bold ">
                {" "}
                <CiSearch />{" "}
              </button>
            </div>
            <div className=" mt-6 flex flex-col items-center border p-7 ">
              <div className=" relative w-[147px] h-[125px] ">
                <Image src={"/user.png"} objectFit="contain" layout="fill" />
              </div>
              <div className="mt-6 ">
                <h2 className="text-[20px]  font-[700]  capitalize">
                  prince miyako
                </h2>
              </div>
              <div className="mt-1 font-[#464646] text-[16px] ">
                <p>Blogger/Photographer</p>
              </div>
              <div className=" flex gap-3 items-center ">
                <div className=" flex gap-2 items-center text-primary ">
                  <span>
                    {" "}
                    <FaStar />{" "}
                  </span>
                  <span>
                    {" "}
                    <FaStar />{" "}
                  </span>
                  <span>
                    {" "}
                    <FaStar />{" "}
                  </span>
                  <span>
                    {" "}
                    <FaStar />{" "}
                  </span>
                  <span>
                    {" "}
                    <FaStar />{" "}
                  </span>
                </div>
                <div>
                  <p className=" text-[14px] font-[400] "> (1 Review) </p>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className=" leading-6 text-[16px]  ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.Veritatis distinctio, odio eligendi suscipit
                  reprehenderit atque
                </p>
              </div>
              <div className=" mt-5 ">
                <div className=" flex gap-4 items-center ">
                  <span>
                    {" "}
                    <FaFacebook />{" "}
                  </span>
                  <span>
                    {" "}
                    <FaTwitter />{" "}
                  </span>
                  <span>
                    {" "}
                    <FaInstagram />{" "}
                  </span>
                  <span>
                    {" "}
                    <FaPinterest />{" "}
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-5 p-7 border rounded-md">
              <h2 className="text-[20px] font-[700]">Recent Post</h2>
              {Array(4)
                .fill(0)
                .map((_, index) => {
                  return (
                    <div key={index}>
                      <div className="flex gap-4 items-center mt-6">
                        <div className="relative w-[130px] rounded-2xl h-[90px]">
                          <Image
                            src={"/food2.png"}
                            objectFit="contain"
                            className="rounded-lg"
                            layout="fill"
                          />
                        </div>
                        <div className="text-gray-400">
                          <span className="text-[14px]">June 22, 2020</span>
                          <p className="text-[14px] leading-6 font-[400] mt-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nemo, enim.
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="mt-5 p-7 border rounded-md">
              <h2 className="text-[20px] font-[700]">filter by menu</h2>
              {Array(4)
                .fill(0)
                .map((_, index) => {
                  return (
                    <div key={index}>
                      <div className="flex gap-3 items-center mt-6">
                        <div className="relative w-[130px] rounded-2xl h-[90px]">
                          <Image
                            src={"/food3.png"}
                            objectFit="contain"
                            className="rounded-lg"
                            layout="fill"
                          />
                        </div>
                        <div className=" w-full flex items-center  justify-between ">
                          <h2 className=" text-[16px] font-[700] capitalize ">
                            chicken fry
                          </h2>
                          <span className=" text-[16px] font-[700] capitalize ">
                            25
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="mt-7 p-10  border  rounded-md">
                <h2 className=" text-[20px] font-[700] " > Popular Tags </h2>
                <div className=" grid grid-cols-1 sm:grid-cols-2 place-items-center md:grid-cols-3 gap-5 mt-7 " >
                    <div className=" w-[115px] h-[38px] text-center border p-2 px-2 rounded-md mb-4 " > <span>Sandwich</span> </div>
                    <div className=" w-[115px] h-[38px] text-center border p-2 px-2 rounded-md mb-4 " > <span>Sandwich</span> </div>
                    <div className=" w-[115px] h-[38px] text-center border p-2 px-2 rounded-md mb-4 " > <span>Sandwich</span> </div>
                    <div className=" w-[115px] h-[38px] text-center border p-2 px-2 rounded-md mb-4 " > <span>Sandwich</span> </div>
                    <div className=" w-[115px] h-[38px] text-center border p-2 px-2 rounded-md mb-4 " > <span>Sandwich</span> </div>
                    <div className=" w-[115px] h-[38px] text-center border p-2 px-2 rounded-md mb-4 " > <span>Sandwich</span> </div>
                    <div className=" w-[115px] h-[38px] text-center border p-2 px-2 rounded-md mb-4 " > <span>Sandwich</span> </div>
                    <div className=" w-[115px] h-[38px] text-center border p-2 px-2 rounded-md mb-4 " > <span>Sandwich</span> </div>
                    <div className=" w-[115px] h-[38px] text-center border p-2 px-2 rounded-md mb-4 " > <span>Sandwich</span> </div>
                   
                    
                </div>
            </div>
            <div className="mt-7 p-10 border rounded-md">
                <h2 className=" text-[20px] font-[700] " > Photo Gallery </h2>
                <div className=" grid grid-cols-1 sm:grid-cols-2 place-items-center md:grid-cols-3 gap-5 mt-7 " >
                    <div className=" relative w-[110px] h-[92px] " >
                        <Image src={'/food5.png'} objectFit="contain" layout="fill" />
                    </div>
                    <div className=" relative w-[110px] h-[92px] " >
                        <Image src={'/food5.png'} objectFit="contain" layout="fill" />
                    </div>
                    <div className=" relative w-[110px] h-[92px] " >
                        <Image src={'/food5.png'} objectFit="contain" layout="fill" />
                    </div>
                    <div className=" relative w-[110px] h-[92px] " >
                        <Image src={'/food5.png'} objectFit="contain" layout="fill" />
                    </div>
                    <div className=" relative w-[110px] h-[92px] " >
                        <Image src={'/food5.png'} objectFit="contain" layout="fill" />
                    </div>
                    <div className=" relative w-[110px] h-[92px] " >
                        <Image src={'/food5.png'} objectFit="contain" layout="fill" />
                    </div>
                </div>
            </div>
            <div className="mt-7 p-10 border rounded-md" >
                <h2 className=" text-[20px] font-[700] " >  follow us </h2>
                <div className=" flex gap-3 mt-7 " >
                    <div className=" bg-gray-200 p-2 " > <span> <FaFacebook/> </span> </div>
                    <div className=" bg-gray-200 p-2 " > <span> <FaInstagram/> </span> </div>
                    <div className=" bg-gray-200 p-2 " > <span> <FaTwitter/> </span> </div>
                    <div className=" bg-gray-200 p-2 " > <span> <FaPinterest/> </span> </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
