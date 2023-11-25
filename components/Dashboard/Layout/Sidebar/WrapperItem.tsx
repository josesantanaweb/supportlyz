'use client'
import React, { useState } from 'react'
import { LabelTooltip } from './LabelTooltip'
import { IWrapperItem } from '@/types/sidebar'
import { SidebarItem } from './SidebarItem'

export const WrapperItem = ({ icon, label, activeItem, setActiveItem }: IWrapperItem) => {
  const [hover, setHover] = useState<boolean>(false)

  const handleSidebarItem = () => setActiveItem(label)

  const handleOnMouseEnter = () => setHover(true)

  const handleOnMouseLeave = () => setHover(false)

  return (
    <div
      onClick={handleSidebarItem}
      className="relative"
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      <LabelTooltip label={label} hover={hover} />
      <SidebarItem label={label} icon={icon} activeItem={activeItem} />
    </div>
  )
}
