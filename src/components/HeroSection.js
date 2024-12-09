import React from 'react'
import "../app/globals.css"
import { IoChevronForwardSharp } from "react-icons/io5";

export default function HeroSection({title, header}) {
  return (
    <div className='hero-section flex flex-col justify-center items-center text-[#ffffff] capitalize ' >
        <p className=' text-[40px] font-bold ' > {header} </p>
        <p className=' text-[15px]  mt-10 flex items-center gap-1' > Home <span > <IoChevronForwardSharp/> </span>  <span className='text-primary' >{title}</span>   </p>
    </div>
  )
}
