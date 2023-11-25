'use client'

import React from 'react'
import { TrayMessage } from '@/components/UI/Icons/TrayMessage'
import { ChatItem } from './ChatItem'
import { IChats } from '@/types/chats'

export const RecentChats = ({ chats }: IChats) => {
  return (
    <div className="bg-white w-[400px] rounded-2xl p-5 bg-opacity-50">
      <div className="mb-5 flex items-center justify-between w-full">
        <h1 className="flex items-center gap-3 text-black text-lg">
          <span className="text-emerald-500 text-2xl">
            <TrayMessage />
          </span>
          <b>Recent Chats</b>
        </h1>
        <span className="rounded-full text-white text-sm py-px px-3 bg-emerald-500">{chats.length}</span>
      </div>
      <div className="max-h-screen overflow-y-auto">
        {chats.map((chat, index: number) => (
          <ChatItem chat={chat} key={index} />
        ))}
      </div>
    </div>
  )
}
