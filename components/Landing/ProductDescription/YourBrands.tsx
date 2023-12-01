/* eslint-disable max-len */
'use client'

import React from 'react'
import Lottie from "lottie-react"

import SocialMediaAnimation from '@/lottie-animation/socialMedia.json'

export const YourBrands = () => {
  return (
    <div className="flex max-md:flex-col justify-between items-center gap-[60px] md:gap-0 mb-[80px] md:mb-[140px]">
      <div className="md:w-3/6 md:max-w-[483px] text-black">
        <h4 className="text-lg md:text-[25px] max-md:text-center mb-8 font-semibold pb-6 relative after:content-[''] after:absolute after:top-full after:left-1/2 md:after:left-0 after:h-2 after:z-20 after:bg-emerald-500 after:w-64 md:after:w-40 max-md:after:-translate-x-1/2 after:rounded-full leading-normal">
          Your Brands
          <br className="max-md:hidden" />
          <span className="font-normal">Social Peacekeeper</span>
        </h4>

        <p className="text-sm max-md:text-justify leading-normal">
          In a social media-driven world, our AI chatbot is your shield. It transforms potential complaints into
          satisfaction, keeping your brands social presence positive and exemplary in customer service.
        </p>
      </div>

      <div className="md:w-full md:max-w-[715px] flex justify-center md:justify-end">
        <span className="block">
          {/* <Image src="/static/images/social.svg" alt="chat" width={715} height={714} className="w-full h-full" /> */}
          <Lottie animationData={SocialMediaAnimation} loop={true} />
        </span>
      </div>
    </div>
  )
}
