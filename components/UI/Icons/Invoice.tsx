/* eslint-disable max-len */
import * as React from 'react'
import { IIcon } from '@/types/icons'

export const Invoice = ({ width, height, ...props }: IIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || '1em'}
    height={height || '1em'}
    viewBox={`0 0 ${width || 34} ${height || 34}`}
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="CurrentColor"
        fillRule="evenodd"
        d="M5.668 7.083a4.25 4.25 0 0 1 4.25-4.25h14.167a4.25 4.25 0 0 1 4.25 4.25V29.75a1.416 1.416 0 0 1-2.302 1.105l-2.657-2.125-2.656 2.125a1.417 1.417 0 0 1-1.887-.103l-1.832-1.832-1.831 1.832a1.417 1.417 0 0 1-1.887.105l-2.657-2.127-2.656 2.125a1.416 1.416 0 0 1-2.302-1.105V7.083Zm4.25-1.416a1.417 1.417 0 0 0-1.417 1.416v19.72l1.24-.991a1.416 1.416 0 0 1 1.77 0l2.55 2.04L16 25.915a1.417 1.417 0 0 1 2.003 0l1.936 1.937 2.552-2.04a1.416 1.416 0 0 1 1.77 0l1.24.991V7.083a1.417 1.417 0 0 0-1.416-1.416H9.918Zm1.417 7.083a1.417 1.417 0 0 1 1.416-1.417h8.5a1.416 1.416 0 1 1 0 2.834h-8.5a1.416 1.416 0 0 1-1.416-1.417ZM12.75 17a1.416 1.416 0 0 0 0 2.833h4.25a1.416 1.416 0 0 0 0-2.833h-4.25Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path d="M0 0h34v34H0z" />
      </clipPath>
    </defs>
  </svg>
)
