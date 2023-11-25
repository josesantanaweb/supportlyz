"use client"

import React from "react"
import Image from "next/image"
import {
  ChevronIcon,
  MessageIcon,
} from "@/components/UI/Icons"

export const Account = () => {

  return (
    <div className="account group">
      <Image src="/static/images/boy.png" alt="boy" width={45} height={45} className="rounded-full w-11 h-11" />
      <div>
        <h4 className="text-sm text-black group-hover:text-white">Zeta</h4>
        <p className="flex items-center gap-1 text-xs text-gray-400 group-hover:text-white">
          <span className="text-lg text-emerald-500 group-hover:text-white">
            <MessageIcon />
          </span>
          Nike Shopify Store
        </p>
      </div>
      <span className="px-3 text-sm text-emerald-500 group-hover:text-white">
        <ChevronIcon />
      </span>
    </div>
  )
}
