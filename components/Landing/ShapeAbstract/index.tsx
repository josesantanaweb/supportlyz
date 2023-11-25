'use client'

import React from 'react'
import Image from 'next/image'
import { IShape } from '@/types/shape'

export const ShapeAbstract = ({ rotate }: IShape) => {
  return (
    <span className={`absolute w-[450px] h-[660px] -left-[320px] z-10 rotate-[${rotate}deg] -top-28`}>
      <Image src="/static/images/shape-3.svg" alt="shape" width={640} height={657} />
    </span>
  )
}
