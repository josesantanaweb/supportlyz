'use client'

import React from 'react'
import Image from 'next/image'
import { IntegrationIcon } from '@/components/UI/Icons'

export const Integration = () => {
  return (
    <div className="bg-white bg-opacity-50 rounded-3xl h-[110px] w-1/5 flex flex-col justify-center p-6">
      <p className="mb-2 text-base text-gray-400">Integrated with</p>
      <div className="flex items-center gap-3">
        <span className="text-2xl text-emerald-500">
          <IntegrationIcon />
        </span>
        <Image src="/static/images/shopify-logo.png" className="w-6 h-6" width={24} height={24} alt="logo" />
        <Image src="/static/images/messages-logo.png" className="w-6 h-6" width={24} height={24} alt="logo" />
      </div>
    </div>
  )
}
