/* eslint-disable max-len */
import * as React from 'react'
import { IIcon } from '@/types/icons'

export const TrayMessage = ({ width, height, ...props }: IIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || '1em'}
    height={height || '1em'}
    viewBox={`0 0 ${width || 30} ${height || 26}`}
    {...props}
  >
    <path
      fill="CurrentColor"
      fillRule="evenodd"
      d="M25.791 1.68c-.777-.646-1.75-.93-2.791-.93H7c-.997 0-1.965.261-2.751.893-.789.632-1.273 1.541-1.475 2.614L.777 13.743A1.25 1.25 0 0 0 .75 14v7.004a4.259 4.259 0 0 0 4.246 4.246H25.004a4.26 4.26 0 0 0 4.246-4.246V14c0-.086-.009-.173-.027-.258l-1.998-9.49c-.2-1.027-.66-1.93-1.434-2.573Zm-1.598 1.922c.24.199.465.54.58 1.134l.004.022 1.973 9.372v6.868a1.76 1.76 0 0 1-1.752 1.752H5.002a1.759 1.759 0 0 1-1.752-1.752V14.13l1.973-9.372.006-.03c.113-.609.346-.944.585-1.136.245-.197.62-.342 1.186-.342h16c.585 0 .955.154 1.193.352Z"
      clipRule="evenodd"
    />
    <path
      fill="CurrentColor"
      fillRule="evenodd"
      d="M29.25 14c0-.69-.56-1.25-1.25-1.25h-9c-.69 0-1.25.56-1.25 1.25a2.75 2.75 0 1 1-5.5 0c0-.69-.56-1.25-1.25-1.25H2a1.25 1.25 0 1 0 0 2.5h7.901a5.25 5.25 0 0 0 10.198 0H28c.69 0 1.25-.56 1.25-1.25Z"
      clipRule="evenodd"
    />
  </svg>
)
