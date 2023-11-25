/* eslint-disable max-len */
import * as React from "react"
import { IIcon } from '@/types/icons'
export const Earphones = ({ width, height, ...props }: IIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || '1em'}
    height={height || '1em'}
    viewBox={`0 0 ${width || 24} ${height || 24}`}
    {...props}
  >
    <path
      fill="CurrentColor"
      fillRule="evenodd"
      d="M12 4a7 7 0 0 0-7 7v3a1 1 0 1 1-2 0v-3a9 9 0 1 1 18 0v3a1 1 0 1 1-2 0v-3a7 7 0 0 0-7-7Zm6 14a1 1 0 0 1 1 1c0 1.411-1.118 2.42-2.31 3.016-1.252.626-2.911.984-4.69.984a1 1 0 1 1 0-2c1.535 0 2.876-.313 3.796-.773C16.774 19.737 17 19.246 17 19a1 1 0 0 1 1-1Z"
      clipRule="evenodd"
    />
    <path
      fill="CurrentColor"
      fillRule="evenodd"
      d="M6 13a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H6Zm-2.121-1.121A3 3 0 0 1 6 11h1a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-3a3 3 0 0 1 .879-2.121ZM17 13a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-1Zm-2.121-1.121A3 3 0 0 1 17 11h1a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3h-1a3 3 0 0 1-3-3v-3a3 3 0 0 1 .879-2.121Z"
      clipRule="evenodd"
    />
  </svg>
)
