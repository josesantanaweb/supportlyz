/* eslint-disable max-len */
'use client'

import React from 'react'
import Image from 'next/image'

export const DynamizingConversions = () => {
  return (
    <div className="flex max-md:flex-col justify-between items-center mb-[80px] md:mb-[140px]">
      <div className="md:w-3/6 md:max-w-[545px] text-black max-md:mb-[60px]">
        <h4 className="text-lg md:text-[25px] max-md:text-center mb-8 font-semibold pb-6 relative after:content-[''] after:absolute after:top-full after:left-1/2 md:after:left-0 after:h-2 after:z-20 after:bg-emerald-500 after:w-64 md:after:w-40 max-md:after:-translate-x-1/2 after:rounded-full leading-normal">
          Dynamizing Conversions <br />
          <span className="font-normal">and Purchase Value</span>
        </h4>

        <p className="text-sm max-md:text-justify leading-normal">
          Turn every click into a golden opportunity with our AI chatbot. Through intelligent responses and real-time
          personalization, we boost your conversion rates and increase the average order value. Its a doubly effective
          strategy: you capture more sales while simultaneously increasing the value of each.
        </p>
      </div>
      <div className="md:w-3/6 lg:w-full md:max-w-[660px] flex justify-end">
        <Image src="/static/images/chat.svg" alt="chat" width={660} height={514} className="w-full h-full" />
      </div>
    </div>
  )
}
