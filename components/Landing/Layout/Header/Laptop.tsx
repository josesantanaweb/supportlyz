'use client'

import React from 'react'
import Image from 'next/image'

export const Laptop = () => {
  return (
    <div className="absolute top-[190px] w-3/6 right-24 animate-bounce-slow z-30">
      <Image src="/static/images/laptop.png" alt="laptop" width={1800} height={1200} className="w-full" />
    </div>
  )
}
