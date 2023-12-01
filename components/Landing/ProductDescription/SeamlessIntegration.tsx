/* eslint-disable max-len */
'use client'

import React from 'react'
import Image from 'next/image'

export const SeamlessIntegration = () => {
  return (
    <div className="flex max-md:flex-col-reverse justify-between items-center gap-[60px] md:gap-20 relative mb-[80px] md:mb-[140px]">
      <div className="md:w-3/6 md:max-w-[522px] flex justify-start">
        <span className="w-[100%] block">
          <Image
            src="/static/images/message-box.svg"
            alt="message-box"
            width={523}
            height={248}
            className="w-full h-full"
          />
        </span>
      </div>
      <div className="md:w-3/6 md:max-w-[575px] text-black">
      <h4 className="text-lg md:text-[25px] max-md:text-center mb-8 font-semibold pb-6 relative after:content-[''] after:absolute after:top-full after:left-1/2 md:after:left-0 after:h-2 after:z-20 after:bg-emerald-500 after:w-64 md:after:w-40 max-md:after:-translate-x-1/2 after:rounded-full leading-normal">
          <span className="font-normal">Seamless Integration:</span> <br />
          Your Chatbot, Ready in Minutes
        </h4>

        <p className="text-sm max-md:text-justify leading-normal">
          Setting up our AI chatbot is as easy as it gets. Within minutes, you can have it up and running on your
          website. Designed for effortless integration, our chatbot seamlessly fits into your existing digital
          landscape, ensuring you can start enhancing customer experiences without any technical hassle. Get ready for a
          smooth, straightforward setup that brings immediate results to your business.
        </p>
      </div>
    </div>
  )
}
