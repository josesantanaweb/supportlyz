/* eslint-disable max-len */
import * as React from 'react'
import { IIcon } from '@/types/icons'

export const Home = ({ width, height, ...props }: IIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || '1em'}
    height={height || '1em'}
    viewBox={`0 0 ${width || 32} ${height || 32}`}
    {...props}
  >
    <path
      fill="CurrentColor"
      d="m4.305 12.606 9.994-9.433.02-.02a2.49 2.49 0 0 1 3.364 0l.02.02 9.992 9.433a2.51 2.51 0 0 1 .805 1.838V26a2.5 2.5 0 0 1-2.5 2.5h-6a2.5 2.5 0 0 1-2.5-2.5v-5.5h-3V26a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 26V14.444a2.508 2.508 0 0 1 .805-1.838ZM6.5 25.5h5V20a2.5 2.5 0 0 1 2.5-2.5h4a2.5 2.5 0 0 1 2.5 2.5v5.5h5V14.66L16 5.691 6.5 14.66V25.5Z"
    />
  </svg>
)
