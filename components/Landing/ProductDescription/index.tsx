'use client'

import React from 'react'
import Image from 'next/image'
import { DynamizingConversions } from './DynamizingConversions'
import { SeamlessIntegration } from './SeamlessIntegration'
import { YourBrands } from './YourBrands'
import { AI } from './AI'
import { ShapeAbstract } from '@/components/Landing/ShapeAbstract'

export const ProductDescription = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="container mx-auto py-60">
        <ShapeAbstract rotate={116} />
        <h2 className="text-[52px] tracking-[0.1px] max-w-[70%] text-center leading-[normal] mx-auto mb-24">
          Turn conversations into sales opportunities
          <br />
          <span className="text-elf-green-700 font-semibold">with GPT-3.5 Turbo and Cohere</span>
        </h2>
        <DynamizingConversions />
        <SeamlessIntegration />
        <YourBrands />
        <AI />
      </div>
      <span className="absolute w-[480px] h-[660px] -right-[300px] z-10 rotate-[206deg] top-[800px]">
        <Image src="/static/images/shape-3.svg" alt="shape" width={640} height={657} />
      </span>
    </div>
  )
}
