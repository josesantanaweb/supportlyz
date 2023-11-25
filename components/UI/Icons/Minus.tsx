/* eslint-disable max-len */
import { IIcon } from '@/types/icons'

export const Minus = ({ width, height, ...props }: IIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || '1em'}
    height={height || '1em'}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <path
      d="M5.33398 16C5.33398 15.4696 5.5447 14.9609 5.91977 14.5858C6.29484 14.2107 6.80355 14 7.33398 14H24.6673C25.1978 14 25.7065 14.2107 26.0815 14.5858C26.4566 14.9609 26.6673 15.4696 26.6673 16C26.6673 16.5304 26.4566 17.0391 26.0815 17.4142C25.7065 17.7893 25.1978 18 24.6673 18H7.33398C6.80355 18 6.29484 17.7893 5.91977 17.4142C5.5447 17.0391 5.33398 16.5304 5.33398 16Z"
      fill="currentColor"
    />
  </svg>
)
