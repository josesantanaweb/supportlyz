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
      d="M3.33329 9.16665H13.475L8.81663 4.50831L9.99996 3.33331L16.6666 9.99998L9.99996 16.6666L8.82496 15.4916L13.475 10.8333H3.33329V9.16665Z"
    />
  </svg>
)
