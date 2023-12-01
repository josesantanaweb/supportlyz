'use client'

import React from 'react'
import Image from 'next/image'
import { Navbar } from '@/components/Landing/Navbar'
import { AnimateShape } from '@/components/Landing/ShapeAnimate'
import { ShapesGroup } from './ShapesGroup'
import { SupportlyzIcon, ChevronBarDownIcon } from '@/components/UI/Icons'

export const Header = () => {
  return (
    <div className="bg-elf-green-700 relative max-md:h-screen">
      <div className="relative max-lg:flex max-lg:flex-col max-xl:overflow-hidden h-full">
        <AnimateShape />

        <Navbar />

        <div className="xl:hidden">
          <SupportlyzIcon className="absolute top-[180px] right-[-140px] text-lochinvar-600 opacity-100 -scale-y-100 text-[282.601px] z-20" />
          <SupportlyzIcon className="absolute top-[78px] left-[-77px] text-lochinvar-600 opacity-100 -scale-y-100 text-[159px] z-20" />
        </div>

        <div className="lg:hidden w-full h-[356px] flex items-center justify-center relative z-20 max-sm:px-2.5">
          <Image
            src="/static/images/laptop.png"
            alt="laptop"
            width={328.63}
            height={220}
            className="animate-bounce-slow"
          />
        </div>

        <div className="relative overflow-hidden max-md:flex-grow">
          <div className="max-xl:hidden">
            <ShapesGroup />
          </div>

          <div className="container mx-auto flex items-center justify-between bg-elf-green-700 xl:h-[600px] overflow-hidden relative">
            <div className="flex items-start relative z-20 h-full flex-col justify-center lg:w-1/3 max-md:max-w-[350px] max-lg:mx-auto max-lg:items-center">
              <h4 className="text-xl md:text-[40px] text-white !leading-normal mb-[15px] md:mb-4 max-md:text-center tracking-0.1 max-md:font-semibold">
                <span className="font-semibold">Customer</span> experience redefined{' '}
                <span className="font-semibold">– instant and brilliant</span>
              </h4>

              <p className="text-sm md:text-base text-white mb-4 max-md:text-justify !leading-normal lg:max-w-[470px]">
                Imagine a service where every query is answered instantly with precision and a touch of artificial
                intelligence. Our AI chatbot turns this into reality, offering your customers the joy of instant expert
                responses, transforming customer service.
              </p>

              <div className="max-md:mx-auto max-md:mt-6">
                <a
                  href="#"
                  className={`btn mt-auto text-xs md:text-sm leading-normal font-medium md:font-normal bg-emerald-500 h-[44px] md:h-[52px] w-[160px] md:w-[154px] z-10`}
                >
                  Start Free Trial
                </a>
              </div>

              <div className="min-h-[69px] mt-6">
                <div className="btn flex-col animate-swipe-slow font-medium text-lg md:hidden !p-0 leading-none">
                  <span>Swipe</span>
                  <ChevronBarDownIcon className="text-[30px]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-[190px] w-3/6 right-24 animate-bounce-slow z-30 max-lg:hidden max-w-[900px]">
          <Image src="/static/images/laptop.png" alt="laptop" width={1800} height={1200} className="w-full" />
        </div>
      </div>

      <div className="md:hidden absolute left-0 right-0 bottom-[-70px] overflow-hidden h-[173px] z-30">
        <Image
          src="/static/images/shape-3.svg"
          alt="shape"
          width={170}
          height={188.48}
          className="absolute z-0 rotate-[127deg] left-[-84px] top-[-11px]"
        />
        <Image
          src="/static/images/shape-3.svg"
          alt="shape"
          width={170}
          height={188.48}
          className="absolute z-0 rotate-[127deg] right-[-68px] top-[-11px]"
        />
      </div>
    </div>
  )
}
