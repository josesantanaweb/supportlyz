'use client'

import React from 'react'
import { IButton } from '@/types/button'
import Link from 'next/link'

export const Button = ({ children, link }: IButton) => {
  return (
    <Link
      href={link}
      className="text-lg text-white bg-emerald-500 hover:bg-emerald-600 rounded-full py-3 px-8 cursor-pointer transition duration-500"
    >
      {children}
    </Link>
  )
}
