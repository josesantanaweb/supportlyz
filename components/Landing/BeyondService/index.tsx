'use client'

import React from 'react'
import Image from 'next/image'
import { AnimateShape } from '@/components/Landing/ShapeAnimate'
import { Description } from './Description'
import { SupportlyzIcon } from '@/components/UI/Icons'

export const BeyondService = () => {
  return (
    <div className="w-full xl:h-[845px] bg-elf-green-700 relative mb-8 xl:mb-52 max-xl:pb-8">
      <div className="max-xl:h-[358px]">
        <AnimateShape />
        <span className="max-xl:hidden absolute w-[1050px] h-100% -left-[450px] -top-[200px] z-10">
          <Image src="/static/images/shape-2.svg" alt="shape" width={1000} height={600} className="h-full w-full" />
        </span>
        <span className="absolute top-0 max-xl:-translate-x-1/2 left-1/3 sm:left-1/2 xl:-left-[260px] xl:w-[1080px] z-10">
          <div className="animate-bounce-slow flex flex-col items-center">
            <Image
              src="/static/images/beyond-service.svg"
              alt="beyond-service"
              width={1200}
              height={657}
              className="w-full max-xl:min-w-[348px] max-xl:max-w-[348px] max-xl:h-[315px]"
            />
            <div className="rounded-[281.963px] bg-shadow blur-[16.66px] w-[281.963px] h-[18.917px]"></div>
          </div>
        </span>
        <div className='max-xl:hidden absolute left-0 right-0 h-[660px] overflow-hidden -top-[310px]'>
          <span className="absolute w-[450px] h-[660px] -right-[360px] z-10 rotate-[-4deg] top-0">
            <Image src="/static/images/shape-3.svg" alt="shape" width={640} height={657} />
          </span>
        </div>
      </div>
      <div className="relative flex items-center w-full h-full overflow-hidden">
        <span className="xl:absolute xl:w-[1050px] h-100% xl:-right-[310px] xl:top-[200px] z-10 max-xl:hidden">
          <Image src="/static/images/shape-2.svg" alt="shape" width={1000} height={600} className="h-full w-full" />
        </span>
        <Description />
      </div>

      <div className="xl:hidden absolute left-0 right-0 bottom-0 h-[383px] overflow-hidden">
        <div className="absolute w-[616px] h-[383px] bottom-0 right-[-266px]">
          <SupportlyzIcon className="absolute top-0  text-lochinvar-600 -scale-y-100 text-[584.271px]" />
        </div>
      </div>

      <div className="xl:hidden absolute w-[251px] h-[248px] top-[-52px] left-[-48px]">
        <SupportlyzIcon className="absolute top-0  text-lochinvar-600 -scale-y-100 text-[251px]" />
      </div>
    </div>
  )
}
