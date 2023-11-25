'use client'

import React from 'react'
import Image from 'next/image'

export const Navbar = () => {
  return (
    <div className=" bg-elf-green-800 bg-opacity-20 relative z-20">
      <div className="py-10 container mx-auto">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-14">
            <div className="relative h-10 w-52">
              <Image src="/static/images/logo-landing.svg" alt="logo" fill priority />
            </div>
            <ul className="flex items-center gap-14">
              <li className="text-white text-lg cursor-pointer transition border-b-2 border-white py-2 border-opacity-0 hover:border-opacity-100">
                Product
              </li>
              <li className="text-white text-lg cursor-pointer transition border-b-2 border-white py-2 border-opacity-0 hover:border-opacity-100">
                Price
              </li>
              <li className="text-white text-lg cursor-pointer transition border-b-2 border-white py-2 border-opacity-0 hover:border-opacity-100">
                Resources
              </li>
              <li className="text-white text-lg cursor-pointer transition border-b-2 border-white py-2 border-opacity-0 hover:border-opacity-100">
                Partners
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-14">
            <ul className="flex items-center gap-14">
              <li className="text-white text-lg cursor-pointer transition border-b-2 border-white py-2 border-opacity-0 hover:border-opacity-100">
                Log in
              </li>
              <li className="text-white text-lg cursor-pointer border-2 border-emerald-500 rounded-full px-6 py-2 hover:bg-emerald-500">
                Get Started
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
