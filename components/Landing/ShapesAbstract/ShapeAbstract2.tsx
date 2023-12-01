'use client'

import React from 'react'
import Image from 'next/image'

export const ShapeAbstract2 = () => {
  return (
    <span className="absolute w-[480px] h-[660px] -right-[350px] z-10 rotate-[206deg] top-[850px] max-xl:hidden">
      <Image src="/static/images/shape-3.svg" alt="shape" width={640} height={657} />
    </span>
  )
}
