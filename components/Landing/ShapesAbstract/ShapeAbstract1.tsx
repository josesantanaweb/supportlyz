'use client'

import React from 'react'
import Image from 'next/image'

export const ShapeAbstract1 = () => {
  return (
    <span className={`absolute w-[450px] h-[660px] -left-[320px] z-10 rotate-[106deg] -top-40 max-xl:hidden`}>
      <Image src="/static/images/shape-3.svg" alt="shape" width={640} height={657} />
    </span>
  )
}
