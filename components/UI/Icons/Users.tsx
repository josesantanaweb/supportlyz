/* eslint-disable max-len */
import * as React from 'react'
import { IIcon } from '@/types/icons'

export const Users = ({ width, height, ...props }: IIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || '1em'}
    height={height || '1em'}
    viewBox={`0 0 ${width || 32} ${height || 32}`}
    {...props}
  >
    <path
      fill="CurrentColor"
      fillRule="evenodd"
      d="M27.873 18.793a9.25 9.25 0 0 0-15.791 6.54 1.25 1.25 0 0 0 2.5 0 6.75 6.75 0 0 1 13.5 0 1.25 1.25 0 0 0 2.5 0 9.25 9.25 0 0 0-2.71-6.54Z"
      clipRule="evenodd"
    />
    <path
      fill="CurrentColor"
      fillRule="evenodd"
      d="M21.332 7.917a4.083 4.083 0 1 1 0 8.166 4.083 4.083 0 0 1 0-8.166ZM27.915 12a6.583 6.583 0 1 0-13.166 0 6.583 6.583 0 0 0 13.166 0ZM11.915 6.667c0-.69-.56-1.25-1.25-1.25a6.583 6.583 0 0 0-4.183 11.666 9.247 9.247 0 0 0-5.067 8.25 1.25 1.25 0 0 0 2.5 0 6.75 6.75 0 0 1 6.75-6.75 1.25 1.25 0 0 0 0-2.5 4.083 4.083 0 1 1 0-8.166c.69 0 1.25-.56 1.25-1.25Z"
      clipRule="evenodd"
    />
  </svg>
)
