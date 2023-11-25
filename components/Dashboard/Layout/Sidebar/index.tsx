'use client'
import React, { useState } from 'react'
import {
  MessageIcon,
  HomeIcon,
  RobotIcon,
  ChatIcon,
  TrayMessageIcon,
  UsersIcon,
  MagnetIcon,
  DashboardIcon,
  CogIcon,
} from '@/components/UI/Icons'
import { WrapperItem } from './WrapperItem'

const OPTIONS = [
  {
    label: 'dashboard',
    icon: <HomeIcon />,
    link: '/',
  },
  {
    label: 'messages',
    icon: <TrayMessageIcon />,
    link: '/',
  },
  {
    label: 'chatbots',
    icon: <MessageIcon />,
    link: '/',
  },
  {
    label: 'suly',
    icon: <RobotIcon />,
    link: '/',
  },
  {
    label: 'mail marketing',
    icon: <ChatIcon />,
    link: '/',
  },
  {
    label: 'leads',
    icon: <UsersIcon />,
    link: '/',
  },
  {
    label: 'analytics',
    icon: <MagnetIcon />,
    link: '/',
  },
  {
    label: 'integrations',
    icon: <DashboardIcon />,
    link: '/',
  },
  {
    label: 'settings',
    icon: <CogIcon />,
    link: '/',
  },
]

export const Sidebar = () => {
  const [activeItem, setActiveItem] = useState<string>('dashboard')

  return (
    <div className="bg-geyser-100 w-28">
      {OPTIONS.slice(0, 7).map((item, index) => (
        <WrapperItem
          key={index}
          label={item.label}
          icon={item.icon}
          link={item.link}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
      ))}

      <div className="mt-20">
        {OPTIONS.slice(7, 9).map((item, index) => (
          <WrapperItem
            key={index}
            label={item.label}
            icon={item.icon}
            link={item.link}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        ))}
      </div>
    </div>
  )
}
