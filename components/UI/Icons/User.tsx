/* eslint-disable max-len */
import * as React from 'react'
import { IIcon } from '@/types/icons'

export const User = ({ width, height, ...props }: IIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || '1em'}
    height={height || '1em'}
    viewBox={`0 0 ${width || 50} ${height || 50}`}
    {...props}
  >
    <path
      fill="CurrentColor"
      d="M45.102 41.406c-2.975-5.142-7.559-8.83-12.909-10.578a14.062 14.062 0 1 0-14.386 0c-5.35 1.746-9.934 5.434-12.908 10.578a1.563 1.563 0 1 0 2.705 1.563c3.68-6.36 10.183-10.157 17.396-10.157 7.213 0 13.717 3.797 17.397 10.157a1.562 1.562 0 1 0 2.705-1.563ZM14.062 18.75A10.937 10.937 0 1 1 25 29.687 10.95 10.95 0 0 1 14.063 18.75Z"
    />
  </svg>
)
