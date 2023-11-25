import * as React from "react"
import { IIcon } from '@/types/icons'

export const Chevron = ({ width, height, ...props }: IIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || '1em'}
    height={height || '1em'}
    viewBox={`0 0 ${width || 11} ${height || 7}`}
    {...props}
  >
    <path
      fill="CurrentColor"
      fillRule="evenodd"
      d="M1.066.922a1.036 1.036 0 0 1 1.415 0l3.292 3.136L9.066.922a1.036 1.036 0 0 1 1.414 0 .92.92 0 0 1 0 1.347l-4 3.81a1.036 1.036 0 0 1-1.414 0l-4-3.81a.92.92 0 0 1 0-1.347Z"
      clipRule="evenodd"
    />
  </svg>
)
