/* eslint-disable max-len */
import { IIcon } from '@/types/icons'

export const Check = ({ width, height, ...props }: IIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || '1em'}
    height={height || '1em'}
    viewBox="0 0 35 32"
    fill="none"
    {...props}
  >
    <path
      d="M13.0861 27.2268L4.05664 18.9468L8.17153 15.1735L13.0861 19.6935L27.4519 6.50684L31.5668 10.2802L13.0861 27.2268Z"
      fill="currentColor"
    />
  </svg>
)
