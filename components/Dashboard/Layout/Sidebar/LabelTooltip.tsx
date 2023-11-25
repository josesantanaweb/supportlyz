'use client'
import React from 'react'
import clsx from 'clsx'
import { ILabelTooltip } from '@/types/sidebar'

export const LabelTooltip = ({ hover, label }: ILabelTooltip) => {
  const labelClass = clsx({
    'absolute flex items-center justify-center h-5 p-3 text-xs text-white capitalize rounded-full -top-2 left-10 z-20 bg-emerald-900 whitespace-nowrap':
      true,
    'opacity-1': hover,
    'opacity-0': !hover,
  })

  return <span className={labelClass}>{label}</span>
}
