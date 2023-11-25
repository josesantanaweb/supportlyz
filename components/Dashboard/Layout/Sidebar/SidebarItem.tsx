'use client'
import React from 'react'
import clsx from 'clsx'
import { MessageCounter } from './MessageCounter'
import { ISidebarItem } from '@/types/sidebar'

export const SidebarItem = ({ icon, label, activeItem }: ISidebarItem) => {
  const sidebarItemClass = clsx({
    'sidebar-item group': true,
    'sidebar-item-is-active': activeItem === label,
    'text-gray-400': label === 'settings' || label === 'integrations',
    'text-emerald-500': label !== 'settings' && label !== 'integrations',
  })

  return (
    <div className={sidebarItemClass}>
      <div className="relative z-10 text-3xl group-hover:text-white">
        {label === 'messages' && <MessageCounter counter={2} />}
        {icon}
      </div>
    </div>
  )
}
