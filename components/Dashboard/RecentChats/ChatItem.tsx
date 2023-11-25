'use client'

import React from 'react'
import Image from 'next/image'
import { IChat } from '@/types/chats'

export const ChatItem = ({ chat }: IChat) => {
  return (
    <div className="flex items-center w-full gap-3 p-3 mb-3 bg-white rounded-2xl last:mb-0">
      <div className="relative">
        <Image
          src={`/static/images/${chat.image}`}
          width={50}
          height={50}
          className="w-12 h-12 rounded-full max-w-fit"
          alt="user"
        />
        <Image
          src={`/static/images/${chat.brand}`}
          width={24}
          height={24}
          className="absolute w-6 h-6 border-2 border-white rounded-full -bottom-1 -right-1"
          alt="brand"
        />
      </div>
      <div className="relative">
        <div className="flex items-center justify-between w-full mb-1">
          <b className="text-sm text-black">{chat.name}</b>
          <div className="flex items-center gap-3">
            <span className="rounded-full text-white text-[10px] w-5 h-5 bg-emerald-500 flex items-center justify-center">
              {chat.count}
            </span>
            <b className="flex items-center justify-center h-5 px-2 py-1 text-xs leading-none text-black bg-gray-300 rounded-full">
              #{chat.code}
            </b>
          </div>
        </div>
        <p className="text-sm leading-4 text-gray-400 line-clamp-2">{chat.message}</p>
      </div>
    </div>
  )
}
