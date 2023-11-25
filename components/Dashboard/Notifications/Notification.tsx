"use client"

import React from "react"
import Image from "next/image"
import { BellIcon } from "@/components/UI/Icons"
import { INotification } from "@/types/notifications"

interface NotificationProps {
  notification: INotification;
}

export const Notification = ({ notification: { name, code } }: NotificationProps) => {
  return (
    <div className="flex items-start gap-2 p-3 mb-3 transition bg-white cursor-pointer hover:shadow-emerald-40 rounded-xl last:mb-0">
      <Image
        src="/static/images/girl.png"
        alt="user"
        width={40}
        height={40}
        className="object-cover rounded-full w-11 h-11"
      />
      <div>
        <h5 className="text-xs text-black">
          <b>{name}</b> sent you a message in the chat <b>#{code}</b>
        </h5>
        <p className="text-xs text-gray-400">2 minutes ago</p>
      </div>
      <div className="text-sm text-emerald-500">
        <BellIcon />
      </div>
    </div>
  )
}
