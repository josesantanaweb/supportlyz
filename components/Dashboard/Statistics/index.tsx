'use client'

import React from 'react'
import { ArrowIcon, MessageIcon, RatioIcon, UserIcon } from '@/components/UI/Icons'
import { StatisticsItem } from './StadisticsItem'

export const Statistics = () => {
  return (
    <div className="statistics group">
      <div className="relative z-30 flex items-center justify-around h-full pl-10 transition translate-x-0 group-hover:-translate-x-8 [&>*:nth-child(2)]:border-x">
        <StatisticsItem title="Total Users" count={82938}>
          <UserIcon />
        </StatisticsItem>
        <StatisticsItem title="Satisfaction Ratio" count={83}>
          <RatioIcon />
        </StatisticsItem>
        <StatisticsItem title="Successful Clients" count={33293}>
          <MessageIcon />
        </StatisticsItem>
        <span className="text-5xl text-white transition translate-x-16 group-hover:translate-x-0">
          <ArrowIcon />
        </span>
      </div>
    </div>
  )
}
