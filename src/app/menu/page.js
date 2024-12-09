import HeroSection from "@/components/HeroSection";
import React from "react";
import "../../app/globals.css";
import Image from "next/image";
import FoodItems from "@/components/FoodItems";
import Footer from "@/components/Footer";

export default function page() {
  return (
    <>
      <HeroSection title={'menu'} header={"our menu"} />
      <div className=" max-w-7xl m-auto  capitalize p-10 ">
        <div className="flex flex-col lg:flex-row gap-20 mt-[100px] ">
          <div className=" relative w-full h-[700px] lg:w-[800px] ">
            <Image src={"/menuList2.png"} layout="fill" />
          </div>
          <div className="w-full">
            <div className="relative">
              <Image src={"/Coffee.png"} height={20} width={20} />
            </div>
            <h2 className="mt-[20px] text-[40px] font-[700]  ">starter Menu</h2>
            <div className=" flex w-full justify-between items-center ">
              <div>
                <h3 className=" mt-[30px] text-[24px] font-bold text-[#333333] ">
                  Alder Grilled Chinook Salmon
                </h3>
                <h4 className=" mt-[15px] text-[16px] text-[#4F4F4F] ">
                  Toasted French bread topped with romano, cheddar
                </h4>
                <h2 className=" mt-[15px] text-[16px] text-[#828282] ">
                  {" "}
                  560 Cal{" "}
                </h2>
              </div>
              <div>
                <h3 className=" text-primary text-[24px] font-bold ">32$</h3>
              </div>
            </div>
            <hr className=" w-full h-[3px] mt-7 bg-slate-100 " />
            <div className=" flex w-full justify-between items-center ">
              <div>
                <h3 className=" mt-[20px] text-[24px] font-bold text-[#333333] ">
                  Alder Grilled Chinook Salmon
                </h3>
                <h4 className=" mt-[15px] text-[16px] text-[#4F4F4F] ">
                  Toasted French bread topped with romano, cheddar
                </h4>
                <h2 className=" mt-[15px] text-[16px] text-[#828282] ">
                  {" "}
                  560 Cal{" "}
                </h2>
              </div>
              <div>
                <h3 className=" text-primary text-[24px] font-bold ">32$</h3>
              </div>
            </div>
            <hr className=" w-full h-[3px] mt-7 bg-slate-100 " />
            <div className=" flex w-full justify-between items-center ">
              <div>
                <h3 className=" mt-[20px] text-[24px] font-bold text-[#333333] ">
                  Alder Grilled Chinook Salmon
                </h3>
                <h4 className=" mt-[20px] text-[16px] text-[#4F4F4F] ">
                  Toasted French bread topped with romano, cheddar
                </h4>
                <h2 className=" mt-[20px] text-[16px] text-[#828282] ">
                  {" "}
                  560 Cal{" "}
                </h2>
              </div>
              <div>
                <h3 className=" text-primary text-[24px] font-bold ">32$</h3>
              </div>
            </div>
            <hr className=" w-full h-[3px] mt-7 bg-slate-100 " />
            <div className=" flex w-full justify-between items-center ">
              <div>
                <h3 className=" mt-[20px] text-[24px] font-bold text-[#333333] ">
                  Alder Grilled Chinook Salmon
                </h3>
                <h4 className=" mt-[20px] text-[16px] text-[#4F4F4F] ">
                  Toasted French bread topped with romano, cheddar
                </h4>
                <h2 className=" mt-[20px] text-[16px] text-[#828282] ">
                  {" "}
                  560 Cal{" "}
                </h2>
              </div>
              <div>
                <h3 className=" text-primary text-[24px] font-bold   ">32$</h3>
              </div>
            </div>
            <hr className=" w-full h-[3px] mt-7 bg-slate-100 " />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-20 mt-[100px] ">
          
          <div className="w-full">
            <div className="relative">
              <Image src={"/Coffee.png"} height={20} width={20} />
            </div>
            <h2 className="mt-[20px] text-[40px] font-[700]  ">starter Menu</h2>
            <div className=" flex w-full justify-between items-center ">
              <div>
                <h3 className=" mt-[30px] text-[24px] font-bold text-[#333333] ">
                  Alder Grilled Chinook Salmon
                </h3>
                <h4 className=" mt-[15px] text-[16px] text-[#4F4F4F] ">
                  Toasted French bread topped with romano, cheddar
                </h4>
                <h2 className=" mt-[15px] text-[16px] text-[#828282] ">
                  {" "}
                  560 Cal{" "}
                </h2>
              </div>
              <div>
                <h3 className=" text-primary text-[24px] font-bold ">32$</h3>
              </div>
            </div>
            <hr className=" w-full h-[3px] mt-7 bg-slate-100 " />
            <div className=" flex w-full justify-between items-center ">
              <div>
                <h3 className=" mt-[20px] text-[24px] font-bold text-[#333333] ">
                  Alder Grilled Chinook Salmon
                </h3>
                <h4 className=" mt-[15px] text-[16px] text-[#4F4F4F] ">
                  Toasted French bread topped with romano, cheddar
                </h4>
                <h2 className=" mt-[15px] text-[16px] text-[#828282] ">
                  {" "}
                  560 Cal{" "}
                </h2>
              </div>
              <div>
                <h3 className=" text-primary text-[24px] font-bold ">32$</h3>
              </div>
            </div>
            <hr className=" w-full h-[3px] mt-7 bg-slate-100 " />
            <div className=" flex w-full justify-between items-center ">
              <div>
                <h3 className=" mt-[20px] text-[24px] font-bold text-[#333333] ">
                  Alder Grilled Chinook Salmon
                </h3>
                <h4 className=" mt-[20px] text-[16px] text-[#4F4F4F] ">
                  Toasted French bread topped with romano, cheddar
                </h4>
                <h2 className=" mt-[20px] text-[16px] text-[#828282] ">
                  {" "}
                  560 Cal{" "}
                </h2>
              </div>
              <div>
                <h3 className=" text-primary text-[24px] font-bold ">32$</h3>
              </div>
            </div>
            <hr className=" w-full h-[3px] mt-7 bg-slate-100 " />
            <div className=" flex w-full justify-between items-center ">
              <div>
                <h3 className=" mt-[20px] text-[24px] font-bold text-[#333333] ">
                  Alder Grilled Chinook Salmon
                </h3>
                <h4 className=" mt-[20px] text-[16px] text-[#4F4F4F] ">
                  Toasted French bread topped with romano, cheddar
                </h4>
                <h2 className=" mt-[20px] text-[16px] text-[#828282] ">
                  {" "}
                  560 Cal{" "}
                </h2>
              </div>
              <div>
                <h3 className=" text-primary text-[24px] font-bold   ">32$</h3>
              </div>
            </div>
            <hr className=" w-full h-[3px] mt-7 bg-slate-100 " />
          </div>
          <div className=" relative w-full h-[700px] lg:w-[800px] ">
            <Image src={"/menuList3.png"} layout="fill" />
          </div>
        </div>

        
      </div>
      <div>
          <FoodItems/>
      </div>
      <div className="max-w-7xl m-auto " >
      <div className="flex flex-col lg:flex-row gap-20 mt-[100px] ">
          <div className=" relative w-full h-[700px] lg:w-[800px] ">
            <Image src={"/menuList2.png"} layout="fill" />
          </div>
          <div className="w-full">
            <div className="relative">
              <Image src={"/Coffee.png"} height={20} width={20} />
            </div>
            <h2 className="mt-[20px] text-[40px] font-[700]  ">starter Menu</h2>
            <div className=" flex w-full justify-between items-center ">
              <div>
                <h3 className=" mt-[30px] text-[24px] font-bold text-[#333333] ">
                  Alder Grilled Chinook Salmon
                </h3>
                <h4 className=" mt-[15px] text-[16px] text-[#4F4F4F] ">
                  Toasted French bread topped with romano, cheddar
                </h4>
                <h2 className=" mt-[15px] text-[16px] text-[#828282] ">
                  {" "}
                  560 Cal{" "}
                </h2>
              </div>
              <div>
                <h3 className=" text-primary text-[24px] font-bold ">32$</h3>
              </div>
            </div>
            <hr className=" w-full h-[3px] mt-7 bg-slate-100 " />
            <div className=" flex w-full justify-between items-center ">
              <div>
                <h3 className=" mt-[20px] text-[24px] font-bold text-[#333333] ">
                  Alder Grilled Chinook Salmon
                </h3>
                <h4 className=" mt-[15px] text-[16px] text-[#4F4F4F] ">
                  Toasted French bread topped with romano, cheddar
                </h4>
                <h2 className=" mt-[15px] text-[16px] text-[#828282] ">
                  {" "}
                  560 Cal{" "}
                </h2>
              </div>
              <div>
                <h3 className=" text-primary text-[24px] font-bold ">32$</h3>
              </div>
            </div>
            <hr className=" w-full h-[3px] mt-7 bg-slate-100 " />
            <div className=" flex w-full justify-between items-center ">
              <div>
                <h3 className=" mt-[20px] text-[24px] font-bold text-[#333333] ">
                  Alder Grilled Chinook Salmon
                </h3>
                <h4 className=" mt-[20px] text-[16px] text-[#4F4F4F] ">
                  Toasted French bread topped with romano, cheddar
                </h4>
                <h2 className=" mt-[20px] text-[16px] text-[#828282] ">
                  {" "}
                  560 Cal{" "}
                </h2>
              </div>
              <div>
                <h3 className=" text-primary text-[24px] font-bold ">32$</h3>
              </div>
            </div>
            <hr className=" w-full h-[3px] mt-7 bg-slate-100 " />
            <div className=" flex w-full justify-between items-center ">
              <div>
                <h3 className=" mt-[20px] text-[24px] font-bold text-[#333333] ">
                  Alder Grilled Chinook Salmon
                </h3>
                <h4 className=" mt-[20px] text-[16px] text-[#4F4F4F] ">
                  Toasted French bread topped with romano, cheddar
                </h4>
                <h2 className=" mt-[20px] text-[16px] text-[#828282] ">
                  {" "}
                  560 Cal{" "}
                </h2>
              </div>
              <div>
                <h3 className=" text-primary text-[24px] font-bold   ">32$</h3>
              </div>
            </div>
            <hr className=" w-full h-[3px] mt-7 bg-slate-100 " />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-20 mt-[100px] ">
          
          <div className="w-full">
            <div className="relative">
              <Image src={"/Coffee.png"} height={20} width={20} />
            </div>
            <h2 className="mt-[20px] text-[40px] font-[700]  ">starter Menu</h2>
            <div className=" flex w-full justify-between items-center ">
              <div>
                <h3 className=" mt-[30px] text-[24px] font-bold text-[#333333] ">
                  Alder Grilled Chinook Salmon
                </h3>
                <h4 className=" mt-[15px] text-[16px] text-[#4F4F4F] ">
                  Toasted French bread topped with romano, cheddar
                </h4>
                <h2 className=" mt-[15px] text-[16px] text-[#828282] ">
                  {" "}
                  560 Cal{" "}
                </h2>
              </div>
              <div>
                <h3 className=" text-primary text-[24px] font-bold ">32$</h3>
              </div>
            </div>
            <hr className=" w-full h-[3px] mt-7 bg-slate-100 " />
            <div className=" flex w-full justify-between items-center ">
              <div>
                <h3 className=" mt-[20px] text-[24px] font-bold text-[#333333] ">
                  Alder Grilled Chinook Salmon
                </h3>
                <h4 className=" mt-[15px] text-[16px] text-[#4F4F4F] ">
                  Toasted French bread topped with romano, cheddar
                </h4>
                <h2 className=" mt-[15px] text-[16px] text-[#828282] ">
                  {" "}
                  560 Cal{" "}
                </h2>
              </div>
              <div>
                <h3 className=" text-primary text-[24px] font-bold ">32$</h3>
              </div>
            </div>
            <hr className=" w-full h-[3px] mt-7 bg-slate-100 " />
            <div className=" flex w-full justify-between items-center ">
              <div>
                <h3 className=" mt-[20px] text-[24px] font-bold text-[#333333] ">
                  Alder Grilled Chinook Salmon
                </h3>
                <h4 className=" mt-[20px] text-[16px] text-[#4F4F4F] ">
                  Toasted French bread topped with romano, cheddar
                </h4>
                <h2 className=" mt-[20px] text-[16px] text-[#828282] ">
                  {" "}
                  560 Cal{" "}
                </h2>
              </div>
              <div>
                <h3 className=" text-primary text-[24px] font-bold ">32$</h3>
              </div>
            </div>
            <hr className=" w-full h-[3px] mt-7 bg-slate-100 " />
            <div className=" flex w-full justify-between items-center ">
              <div>
                <h3 className=" mt-[20px] text-[24px] font-bold text-[#333333] ">
                  Alder Grilled Chinook Salmon
                </h3>
                <h4 className=" mt-[20px] text-[16px] text-[#4F4F4F] ">
                  Toasted French bread topped with romano, cheddar
                </h4>
                <h2 className=" mt-[20px] text-[16px] text-[#828282] ">
                  {" "}
                  560 Cal{" "}
                </h2>
              </div>
              <div>
                <h3 className=" text-primary text-[24px] font-bold   ">32$</h3>
              </div>
            </div>
            <hr className=" w-full h-[3px] mt-7 bg-slate-100 " />
          </div>
          <div className=" relative w-full h-[700px] lg:w-[800px] ">
            <Image src={"/menuList3.png"} layout="fill" />
          </div>
        </div>
      </div>

      <div className=" mt-[100px] p-10 " >
        <div className=" w-full flex flex-col items-center justify-center " >
          <h3>Partners & Clients</h3>
          <h2 className="mt-2 text-2xl font-bold" >We work with the best pepole</h2>
        </div>
      <div className="flex gap-7 p-10 flex-col lg:flex-row mt-5 items-center justify-center">
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="  "
            >
              {/* Image Section */}
              <div className="relative h-[200px] w-[150px]">
                <Image
                  src={`/rest${index + 1}.png`} // Use images like blog1.png, blog2.png, blog3.png
                  alt={`rest${index + 1}`}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              {/* Content Section */}
              
            </div>
          ))}
      </div>
      </div>

      <Footer/>
    </>
  );
}
