/* eslint-disable max-len */
import * as React from 'react'
import { IIcon } from '@/types/icons'

export const Integration = ({ width, height, ...props }: IIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || '1em'}
    height={height || '1em'}
    viewBox={`0 0 ${width || 24} ${height || 24}`}
    {...props}
  >
    <path
      fill="CurrentColor"
      fillRule="evenodd"
      d="M4.3 3.2a1.1 1.1 0 0 0-1.1 1.1v3.3h17.6V4.3a1.1 1.1 0 0 0-1.1-1.1H4.3Zm3.3 6.6H3.2v9.9a1.1 1.1 0 0 0 1.1 1.1h3.3v-11Zm2.2 11v-11h11v9.9a1.1 1.1 0 0 1-1.1 1.1H9.8ZM1 4.3v15.4A3.3 3.3 0 0 0 4.3 23h15.4a3.3 3.3 0 0 0 3.3-3.3V4.3A3.3 3.3 0 0 0 19.7 1H4.3A3.3 3.3 0 0 0 1 4.3Z"
      clipRule="evenodd"
    />
  </svg>
)
