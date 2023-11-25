import * as React from "react"
import { IIcon } from '@/types/icons'

export const Bell = ({ width, height, ...props }: IIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || '1em'}
    height={height || '1em'}
    viewBox={`0 0 ${width || 22} ${height || 22}`}
    {...props}
  >
    <path
      fill="CurrentColor"
      fillRule="evenodd"
      d="M10.5 5.19V4a1.5 1.5 0 1 1 3 0v1.19A6 6 0 0 1 18 11v5h1a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2h1v-5a6 6 0 0 1 4.5-5.81ZM8 16h8v-5a4 4 0 1 0-8 0v5Zm2 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1 2 2 0 0 1-4 0Z"
      clipRule="evenodd"
    />
  </svg>
)
