/* eslint-disable max-len */
import { IIcon } from '@/types/icons'

export const Close = ({ width, height, ...props }: IIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || '1em'}
    height={height || '1em'}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <path d="M6.88063 4.63965L27.3606 25.1196L25.1206 27.3596L4.64062 6.87965L6.88063 4.63965Z" fill="currentColor" />
    <path d="M27.3606 6.87965L6.88063 27.3596L4.64062 25.1196L25.1206 4.63965L27.3606 6.87965Z" fill="currentColor" />
  </svg>
)
