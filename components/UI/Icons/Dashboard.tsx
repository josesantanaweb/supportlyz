/* eslint-disable max-len */
import * as React from 'react'
import { IIcon } from '@/types/icons'

export const Dashboard = ({ width, height, ...props }: IIcon) => (
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
      d="M20 17.333A2.667 2.667 0 0 0 17.333 20v5.333A2.667 2.667 0 0 0 20 28h5.333A2.667 2.667 0 0 0 28 25.333V20a2.667 2.667 0 0 0-2.667-2.667H20Zm-13.333 0a2.667 2.667 0 0 0-2.66 2.467L4 20v5.333a2.667 2.667 0 0 0 2.467 2.66l.2.007H12a2.667 2.667 0 0 0 2.66-2.467l.007-.2V20a2.667 2.667 0 0 0-2.467-2.66l-.2-.007H6.667ZM20 20h5.333v5.333H20V20ZM6.667 20H12v5.333H6.667V20Zm0-16a2.667 2.667 0 0 0-2.66 2.467l-.007.2V12a2.667 2.667 0 0 0 2.467 2.66l.2.007H12a2.667 2.667 0 0 0 2.66-2.467l.007-.2V6.667a2.667 2.667 0 0 0-2.467-2.66L12 4H6.667ZM20 4a2.667 2.667 0 0 0-2.66 2.467l-.007.2V12a2.667 2.667 0 0 0 2.467 2.66l.2.007h5.333a2.667 2.667 0 0 0 2.66-2.467L28 12V6.667a2.667 2.667 0 0 0-2.467-2.66l-.2-.007H20ZM6.667 6.667H12V12H6.667V6.667Zm13.333 0h5.333V12H20V6.667Z"
      clipRule="evenodd"
    />
  </svg>
)
