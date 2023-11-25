'use client'

import React from 'react'
import Image from 'next/image'

export const YourBrands = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="w-3/6 text-black">
        <h4 className="text-4xl mb-8 font-semibold pb-4 relative after:content-[''] after:absolute after:top-full after:left-0 after:h-1 after:z-20 after:bg-emerald-500 after:w-40">
          Your Brands <br />
          <span className="font-normal">Social Peacekeeper</span>
        </h4>
        <p className="text-base">
          In a social media-driven world, our AI chatbot is your shield. It transforms potential complaints into
          satisfaction, keeping your brands social presence positive and exemplary in customer service.
        </p>
      </div>
      <div className="w-3/6 flex justify-end">
        <span className="w-[90%] block">
          <Image src="/static/images/social.svg" alt="chat" width={640} height={657} className="w-full h-full" />
        </span>
      </div>
    </div>
  )
}
