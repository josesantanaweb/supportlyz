'use client'

import React from 'react'
import Image from 'next/image'

export const SeamlessIntegration = () => {
  return (
    <div className="flex justify-between items-center gap-20 relative">
      <div className="w-3/6 flex justify-start">
        <span className="w-[100%] block">
          <Image
            src="/static/images/message-box.svg"
            alt="message-box"
            width={640}
            height={657}
            className="w-full h-full"
          />
        </span>
      </div>
      <div className="w-3/6 text-black">
        <h4 className="text-4xl mb-8 font-semibold pb-4 relative after:content-[''] after:absolute after:top-full after:left-0 after:h-1 after:z-20 after:bg-emerald-500 after:w-40">
          <span className="font-normal">Seamless Integration:</span> <br />
          Your Chatbot, Ready in Minutes
        </h4>
        <p className="text-base">
          Setting up our AI chatbot is as easy as it gets. Within minutes, you can have it up and running on your
          website. Designed for effortless integration, our chatbot seamlessly fits into your existing digital
          landscape, ensuring you can start enhancing customer experiences without any technical hassle. Get ready for a
          smooth, straightforward setup that brings immediate results to your business.
        </p>
      </div>
    </div>
  )
}
