"use client"

import React from "react"
import { SearchIcon } from "@/components/UI/Icons"

export const Search = () => {
  return (
    <div className="search">
      <div className="search-icon">
        <SearchIcon />
      </div>
      <input
        type="text"
        placeholder="Search something cool..."
        className="w-full h-full px-4 text-black placeholder-gray-400 bg-transparent outline-none"
      />
    </div>
  )
}
