"use client"

import React from "react"
import { BellIcon } from "@/components/UI/Icons"
import { ButtonIcon } from "@/components/UI/Buttons/ButtonIcon"

interface NotificationHandlerProps {
  onClick: () => void;
  lenght: number;
}

export const NotificationHandler = ({
  onClick,
  lenght,
}: NotificationHandlerProps) => {
  return (
    <div className="relative">
      <ButtonIcon onClick={onClick}>
        <BellIcon />
      </ButtonIcon>
      <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white rounded-full bg-emerald-900 -top-1 -right-1">
        {lenght}
      </span>
    </div>
  )
}
