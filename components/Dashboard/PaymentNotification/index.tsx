'use client'

import React from 'react'
import { InvoiceIcon } from '@/components/UI/Icons'

export const PaymentNotification = () => {
  return (
    <div className="h-[70px] text-white bg-gradient-to-b overflow-hidden from-emerald-500 to-[#29C1AF] rounded-3xl w-4/5 flex justify-between">
      <p className="flex items-center gap-3 px-5 text-sm">
        <span className="text-3xl">
          <InvoiceIcon />
        </span>
        You have a Pending Payment of $98.37
      </p>
      <div className="bg-gradient-to-b from-[#53B67E] to-[#29C1AF] w-1/4 px-6 flex items-center rounded-3xl">
        <div className="">
          <p className="text-xs">Current Plan</p>
          <p className="text-sm">Professional</p>
        </div>
      </div>
    </div>
  )
}
