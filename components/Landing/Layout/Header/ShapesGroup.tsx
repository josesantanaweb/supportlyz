'use client'

import React from 'react'
import Image from 'next/image'

export const ShapesGroup = () => {
  return (
    <>
      <span className="absolute top-36 w-[230px] h-100% left-0 z-20">
        <Image src="/static/images/shape-1.svg" alt="shape-1" width={230} height={560} />
      </span>
      <span className="absolute w-[1050px] h-100% right-0 -top-11 z-10">
        <Image src="/static/images/shape-2.svg" alt="shape" width={1000} height={600} className="h-full w-full" />
      </span>
    </>
  )
}
