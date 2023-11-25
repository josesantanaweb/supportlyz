'use client'

import React from 'react'
import { Navbar } from '@/components/Landing/Navbar'
import { Button } from '@/components/Landing/Button'
import { Laptop } from './Laptop'
import { AnimateShape } from '@/components/Landing/AnimateShape'
import { ShapesGroup } from './ShapesGroup'

export const Header = () => {
  return (
    <div className="bg-elf-green-700 relative">
      <AnimateShape />
      <Navbar />
      <div className="relative overflow-hidden">
        <ShapesGroup />
        <div className="container mx-auto flex items-center justify-between bg-elf-green-700 h-[600px] overflow-hidden relative">
          <div className="flex items-start relative z-20 h-full flex-col justify-center w-1/3">
            <h4 className="text-5xl text-white leading-[4.5rem] mb-6">
              <span className="font-semibold">Customer</span> experience redefined{' '}
              <span className="font-semibold">– instant and brilliant</span>
            </h4>
            <p className="text-xl text-white mb-5">
              Imagine a service where every query is answered instantly with precision and a touch of artificial
              intelligence. Our AI chatbot turns this into reality, offering your customers the joy of instant expert
              responses, transforming customer service.
            </p>
            <Button link="/">Start Free Trial</Button>
          </div>
        </div>
      </div>
      <Laptop />
    </div>
  )
}
