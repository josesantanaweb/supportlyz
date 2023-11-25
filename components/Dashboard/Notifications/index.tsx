"use client"

import React, { useState } from "react"
import { NotificationHandler } from "./NotificationHandler"
// import { NotificationCenter } from "./NotificationCenter"

export const NOTIFICATIONS = [
  {
    id: 1,
    date: '2023-01-01',
    name: 'Valerie Smith',
    code: 98331,
  },
  // {
  //   id: 2,
  //   date: '2023-02-01',
  //   value: 98.37,
  // },
]


interface NotificationsProps {}

export const Notifications = ({}: NotificationsProps) => {
  const [open, setOpen] = useState<boolean>(false)

  const handleNotifications = () => setOpen(!open)

  return (
    <div className="relative">
      <NotificationHandler onClick={handleNotifications} lenght={2} />
      {/* <NotificationCenter open={open} notifications={NOTIFICATIONS} /> */}
    </div>
  )
}
