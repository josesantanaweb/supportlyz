'use client'

import React from 'react'
import Image from 'next/image'

export const DynamizingConversions = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="w-3/6 text-black">
        <h4 className="text-4xl mb-8 font-semibold pb-4 relative after:content-[''] after:absolute after:top-full after:left-0 after:h-1 after:z-20 after:bg-emerald-500 after:w-40">
          Dynamizing Conversions <br />
          <span className="font-normal">and Purchase Value</span>
        </h4>
        <p className="text-base">
          Turn every click into a golden opportunity with our AI chatbot. Through intelligent responses and real-time
          personalization, we boost your conversion rates and increase the average order value. Its a doubly effective
          strategy: you capture more sales while simultaneously increasing the value of each.
        </p>
      </div>
      <div className="w-3/6 flex justify-end">
        <span className="w-[90%] block">
          <Image src="/static/images/chat.svg" alt="chat" width={640} height={657} className="w-full h-full" />
        </span>
      </div>
    </div>
  )
}
