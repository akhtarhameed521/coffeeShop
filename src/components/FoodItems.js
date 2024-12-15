import Image from 'next/image'
import React from 'react'
import "../app/globals.css"

export default function FoodItems() {
  return (
    <div className=' bg-food flex flex-col  lg:flex-row justify-center h-auto lg:h-[50vh] capitalize items-center gap-52  text-center mt-[100px] w-full p-10 '>
        {/* First Item */}
        <div className='flex flex-col  items-center'>
            <div className='relative h-[100px] w-[100px]'>
                <Image src='/Group1.png' objectFit='contain' layout='fill' />
            </div>
            <h3 className='mt-5 mb-2 text-lg font-bold'>professional chefs</h3>
            <h3 className='text-md font-bold'>420</h3>
        </div>

        {/* Second Item */}
        <div className='flex flex-col items-center'>
            <div className='relative h-[100px] w-[100px]'>
                <Image src='/Group2.png' objectFit='contain' layout='fill' />
            </div>
            <h3 className='mt-5 mb-2 text-lg font-bold'>items of food</h3>
            <h3 className='text-md font-bold'>320</h3>
        </div>

        {/* Third Item */}
        <div className='flex flex-col items-center'>
            <div className='relative h-[100px] w-[100px]'>
                <Image src='/Group3.png' objectFit='contain' layout='fill' />
            </div>
            <h3 className='mt-5 mb-2 text-lg font-bold'>Years of experience</h3>
            <h3 className='text-md font-bold'>30</h3>
        </div>

        {/* Fourth Item */}
        <div className='flex flex-col items-center'>
            <div className='relative h-[100px] w-[100px]'>
                <Image src='/Group4.png' objectFit='contain' layout='fill' />
            </div>
            <h3 className='mt-5 mb-2 text-lg font-bold'>Happy Customer</h3>
            <h3 className='text-md font-bold'>520</h3>
        </div>
    </div>
  )
}
