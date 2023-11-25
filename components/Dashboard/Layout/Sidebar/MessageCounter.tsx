'use client'
import React from 'react'
import { IMessageCounter } from '@/types/sidebar'

export const MessageCounter = ({ counter }: IMessageCounter) => {
  return (
    <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white rounded-full -top-2 -right-2 bg-emerald-900">
      {counter}
    </span>
  )
}
