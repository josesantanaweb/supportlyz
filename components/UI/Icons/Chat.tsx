/* eslint-disable max-len */
import * as React from 'react'
import { IIcon } from '@/types/icons'

export const Chat = ({ width, height, ...props }: IIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || '1em'}
    height={height || '1em'}
    viewBox={`0 0 ${width || 28} ${height || 28}`}
    {...props}
  >
    <path
      fill="CurrentColor"
      d="M13.999.667C6.635.667.665 6.636.665 14S6.635 27.333 14 27.333c2.429.004 4.812-.66 6.89-1.917l4.043 1.19a1.346 1.346 0 0 0 1.672-1.673l-1.19-4.042A13.277 13.277 0 0 0 27.333 14c0-7.364-5.97-13.333-13.333-13.333Zm0 2.666A10.667 10.667 0 0 1 23.01 19.71a2.015 2.015 0 0 0-.236 1.654l.588 2.001-2.002-.588a2.015 2.015 0 0 0-1.653.236 10.667 10.667 0 1 1-5.71-19.679Z"
    />
    <path
      fill="CurrentColor"
      d="M18.999 13.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0ZM12.999 13.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0ZM6.999 13.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z"
    />
  </svg>
)
