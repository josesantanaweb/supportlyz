/* eslint-disable max-len */
'use client'

import React from 'react'

export const Description = () => {
  return (
    <div className="container mx-auto flex items-center justify-end w-full h-full z-20">
      <div className="xl:w-3/6 text-white">
        <h4 className="text-lg md:text-4xl mb-8 max-xl:text-center font-semibold pb-4 relative after:content-[''] after:absolute after:top-full after:left-1/2 xl:after:left-0 after:h-1 after:z-20 after:bg-emerald-900 after:w-64 xl:after:w-40 max-xl:after:-translate-x-1/2">
          <span className="font-normal">Beyond Service: Defining</span> <br />
          the Future of E-commerce
        </h4>
        <p className="text-sm md:text-base bg-white bg-opacity-10 backdrop-blur-[28.14px] block rounded-2xl px-4 py-6 md:p-8 max-md:text-justify max-md:leading-normal">
          In the era of e-commerce, success is written in two words: quality and service. Our AI chatbot not only
          supports these pillars but elevates them to new heights. Get ready to experience a revolution in how you
          interact with your customers, setting new standards in e-commerce and positioning your brand as an undisputed
          leader in customer service and interaction quality.
        </p>
      </div>
    </div>
  )
}
