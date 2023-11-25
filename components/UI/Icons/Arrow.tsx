import * as React from 'react'
import { IIcon } from '@/types/icons'

export const Arrow = ({ width, height, ...props }: IIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || '1em'}
    height={height || '1em'}
    viewBox={`0 0 ${width || 24} ${height || 24}`}
    {...props}
  >
    <path
      fill="CurrentColor"
      d="M5 11h11.17l-4.88-4.88a1.008 1.008 0 0 1 .323-1.636.996.996 0 0 1 1.087.216l6.59 6.59a.997.997 0 0 1 0 1.41l-6.59 6.59a.997.997 0 1 1-1.41-1.41L16.17 13H5c-.55 0-1-.45-1-1s.45-1 1-1Z"
    />
  </svg>
)
