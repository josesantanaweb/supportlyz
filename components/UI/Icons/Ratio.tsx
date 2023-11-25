/* eslint-disable max-len */
import * as React from 'react'
import { IIcon } from '@/types/icons'

export const Ratio = ({ width, height, ...props }: IIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || '1em'}
    height={height || '1em'}
    viewBox={`0 0 ${width || 50} ${height || 50}`}
    {...props}
  >
    <path
      fill="CurrentColor"
      d="M25 3.125A21.875 21.875 0 1 0 46.875 25 21.9 21.9 0 0 0 25 3.125Zm18.672 20.314h-9.438a9.348 9.348 0 0 0-14.656-6.07l-6.672-6.672a18.715 18.715 0 0 1 30.766 12.74v.002ZM25 31.25A6.25 6.25 0 1 1 31.25 25 6.258 6.258 0 0 1 25 31.25ZM6.25 25a18.652 18.652 0 0 1 4.447-12.094l6.672 6.672a9.349 9.349 0 0 0 6.069 14.656v9.438A18.766 18.766 0 0 1 6.25 25Zm20.313 18.672v-9.438a9.386 9.386 0 0 0 7.671-7.672h9.438a18.762 18.762 0 0 1-17.11 17.11Z"
    />
  </svg>
)
