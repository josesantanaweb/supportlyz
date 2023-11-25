'use client'

import React from 'react'
import { CHATS } from '@/data/chats'
import { Statistics } from '@/components/Dashboard/Statistics'
import { PaymentNotification } from '@/components/Dashboard/PaymentNotification'
import { HomeIcon } from '@/components/UI/Icons'
import { RecentChats } from '@/components/Dashboard/RecentChats'
import { Integration } from '@/components/Dashboard/Integration'
import { SetUpProgress } from '@/components/Dashboard/SetUpProgress'


export const Content = () => {

  return (
    <div className="w-full p-6">
      <div className="flex items-start w-full gap-4">
        <div className="w-full">
          <div className="flex w-full gap-5 mb-5">
            <div className="w-1/5">
              <h3 className="text-2xl font-semibold text-black">Welcome!</h3>
              <p className="flex items-center gap-2 text-sm text-gray-400">
                <span className="text-lg text-emerald-500">
                  <HomeIcon />
                </span>
                Dashboard Overview
              </p>
            </div>
            <PaymentNotification />
          </div>
          <div className="flex w-full gap-5 mb-5">
            <SetUpProgress />
            <div className="w-4/5">
              <div className="flex gap-5 mb-5">
                <div className="bg-white bg-opacity-50 rounded-3xl h-[180px] w-1/3"></div>
                <div className="bg-white bg-opacity-50 rounded-3xl h-[180px] w-1/3"></div>
                <div className="bg-white bg-opacity-50 rounded-3xl h-[180px] w-1/3"></div>
              </div>
              <div className="flex gap-5">
                <Integration />
                <Statistics />
              </div>
            </div>
          </div>
        </div>
        <RecentChats chats={CHATS} />
      </div>
    </div>
  )
}
