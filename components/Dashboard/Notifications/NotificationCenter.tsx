"use client"

import React from "react"
import { CogIcon } from "@/components/UI/Icons"
import { Notification } from "./Notification"
import { INotification } from "@/types/notifications"

interface NotificationCenterProps {
  open: boolean;
  notifications: INotification[];
}

export const NotificationCenter = ({
  open,
  notifications,
}: NotificationCenterProps) => {
  const openClass = open ? "opacity-1" : "opacity-0"

  return (
    <div
      className={`min-w-[330px] bg-white transition bg-opacity-50 rounded-2xl absolute top-[120%] right-0 p-4 ${openClass}`}
    >
      <div className="flex items-center justify-between mb-4">
        <b>Notifications Center</b>
        <div className="text-gray-400 cursor-pointer">
          <CogIcon />
        </div>
      </div>
      <div>
        {
          notifications.map((notification) => (
            <Notification notification={notification} key={notification.id} />
          ))
        }
      </div>
    </div>
  )
}
