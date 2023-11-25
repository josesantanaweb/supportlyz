'use client'

import React from 'react'
import { IStatisticsItem } from '@/types/statistics'

export const StatisticsItem = ({ children, title, count }: IStatisticsItem) => {
  return (
    <div className="flex items-center gap-3 px-8 border-gray-300 group-hover:text-white">
      <span className="text-5xl text-emerald-500 group-hover:text-white">{children}</span>
      <div>
        <p className="text-gray-400 group-hover:text-white">{title}</p>
        <h5 className="text-3xl text-black group-hover:text-white">{count}</h5>
      </div>
    </div>
  )
}
