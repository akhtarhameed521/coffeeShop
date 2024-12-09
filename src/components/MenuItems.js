import Image from 'next/image'
import React from 'react'

export default function MenuItems() {
  return (
    <div className="flex-1">
              {Array(4)
                .fill(0)
                .map((_, index) => (
                  <div key={index} className="flex gap-3 mb-3 items-center">
                    {/* Image Container */}
                    <div className="relative flex-shrink-0 h-[100px] w-[80px]">
                      <Image
                        src={`/menu${index + 2}.png`} // Dynamically selecting images from menu2.png to menu4.png
                        alt={`Menu ${index + 2}`}
                        unoptimized
                        layout="fill"
                        objectFit="contain"
                        className="z-30"
                      />
                    </div>
                    {/* Text Container */}
                    <div className="flex flex-col justify-center h-[100px]">
                      <h2 className="text-[12px] font-bold">lettuce leaf</h2>
                      <p className="text-[12px] font-bold">
                        Lorem ipsum dolor sit{" "}
                      </p>
                      <p className="text-[12px] text-[#FF9F0D] font-bold">
                        12.5$
                      </p>
                    </div>
                  </div>
                ))}
            </div>
  )
}
