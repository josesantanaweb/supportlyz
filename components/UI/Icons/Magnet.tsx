/* eslint-disable max-len */
import * as React from "react"
import { IIcon } from '@/types/icons'

export const Magnet = ({ width, height, ...props }: IIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || '1em'}
    height={height || '1em'}
    viewBox={`0 0 ${width || 20} ${height || 20}`}
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M7.882.207a1.9 1.9 0 0 1 2.111 1.689A1 1 0 0 1 10 2v4a1 1 0 0 1-.749.968 3.1 3.1 0 1 0 3.78 3.78A1 1 0 0 1 14 10h3.8a2 2 0 0 1 2 2 .998.998 0 0 1-.026.226 10 10 0 1 1-12-12 1 1 0 0 1 .11-.02ZM8 2.23a8 8 0 1 0 9.77 9.77h-3.06a5.1 5.1 0 1 1-6.71-6.71V2.23Z"
      clipRule="evenodd"
      fill="CurrentColor"
    />
    <path
      fillRule="evenodd"
      d="M12.422.684a1 1 0 0 1 .91-.127 10 10 0 0 1 6.111 6.11A1 1 0 0 1 18.5 8H14a1 1 0 0 1-.76-.35 7.995 7.995 0 0 0-.89-.89A1 1 0 0 1 12 6V1.5a1 1 0 0 1 .422-.816ZM14 3.054v2.5a10 10 0 0 1 .447.446h2.498A8 8 0 0 0 14 3.055Z"
      clipRule="evenodd"
      fill="CurrentColor"
    />
  </svg>
)
