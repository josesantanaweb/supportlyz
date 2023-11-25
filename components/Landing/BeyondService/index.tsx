'use client'

import React from 'react'
import Image from 'next/image'
import { AnimateShape } from '@/components/Landing/AnimateShape'

export const BeyondService = () => {
  return (
    <div className="w-full h-[845px] bg-elf-green-700 relative mb-[219px]">
      <AnimateShape />
      <span className="absolute w-[1050px] h-100% -left-[450px] -top-[200px] z-10">
        <Image src="/static/images/shape-2.svg" alt="shape" width={1000} height={600} className="h-full w-full" />
      </span>
      <span className="absolute top-0 -left-[260px] w-[1080px] animate-bounce-slow z-10">
        <Image
          src="/static/images/beyond-service.svg"
          alt="beyond-service"
          width={1200}
          height={657}
          className="w-full"
        />
      </span>
      {/* <span className="absolute w-[450px] h-[660px] -right-[360px] z-10 rotate-[-4deg] -top-[310px]">
        <Image src="/static/images/shape-3.svg" alt="shape" width={640} height={657} />
      </span> */}
      <div className="relative flex items-center w-full h-full overflow-hidden">
        <span className="absolute w-[1050px] h-100% -right-[310px] top-[200px] z-10">
          <Image src="/static/images/shape-2.svg" alt="shape" width={1000} height={600} className="h-full w-full" />
        </span>
        <div className="container mx-auto flex items-center justify-end w-full h-full z-20">
          <div className="text-white w-3/6">
            <h4 className="text-4xl mb-8 font-semibold pb-4 relative after:content-[''] after:absolute after:top-full after:left-0 after:h-1 after:z-20 after:bg-emerald-900 after:w-40">
              <span className="font-normal">Beyond Service: Defining</span> <br />
              the Future of E-commerce
            </h4>
            <p className="text-base bg-elf-green-600 block rounded-2xl p-8 bg-opacity-40">
              In the era of e-commerce, success is written in two words: quality and service. Our AI chatbot not only
              supports these pillars but elevates them to new heights. Get ready to experience a revolution in how you
              interact with your customers, setting new standards in e-commerce and positioning your brand as an
              undisputed leader in customer service and interaction quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
