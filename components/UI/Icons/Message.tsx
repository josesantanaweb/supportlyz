/* eslint-disable max-len */
import * as React from "react"
import { IIcon } from '@/types/icons'

export const Message = ({ width, height, ...props }: IIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || '1em'}
    height={height || '1em'}
    viewBox={`0 0 ${width || 32} ${height || 32}`}
    {...props}
  >
    <path
      fill="CurrentColor"
      d="M16.003 19.41a7.518 7.518 0 0 0 3.574-.901 7.56 7.56 0 0 0 2.723-2.494l-1.798-1.2a5.407 5.407 0 0 1-1.946 1.78 5.377 5.377 0 0 1-7.051-1.78l-1.799 1.2a7.56 7.56 0 0 0 2.724 2.494 7.518 7.518 0 0 0 3.573.9ZM11.685 7.476a2.167 2.167 0 0 1 2.118 2.593c-.084.42-.29.807-.591 1.11a2.156 2.156 0 0 1-2.353.471 2.177 2.177 0 0 1-1.333-2.004 2.157 2.157 0 0 1 .626-1.54 2.136 2.136 0 0 1 1.533-.63Zm8.636 0a2.167 2.167 0 0 1 2.118 2.593 2.156 2.156 0 0 1-2.944 1.581 2.16 2.16 0 0 1-.969-.799 2.177 2.177 0 0 1-.364-1.205 2.156 2.156 0 0 1 .626-1.54 2.136 2.136 0 0 1 1.533-.63Z"
    />
    <path
      fill="CurrentColor"
      d="M14.14 31.34 16 30.258l-4.286-7.585H5.286a2.12 2.12 0 0 1-1.516-.634 2.166 2.166 0 0 1-.627-1.533V5.335A2.185 2.185 0 0 1 3.77 3.8a2.138 2.138 0 0 1 1.516-.634h21.428a2.119 2.119 0 0 1 1.517.634 2.166 2.166 0 0 1 .626 1.533v15.17a2.184 2.184 0 0 1-.627 1.534 2.14 2.14 0 0 1-1.516.634h-9.643v2.167h9.643a4.262 4.262 0 0 0 3.03-1.27A4.36 4.36 0 0 0 31 20.506V5.335c0-.57-.11-1.134-.326-1.66a4.338 4.338 0 0 0-.929-1.406 4.281 4.281 0 0 0-1.39-.94A4.243 4.243 0 0 0 26.715 1H5.284c-.562 0-1.12.112-1.64.33-.52.217-.992.537-1.39.94-.398.402-.714.88-.93 1.406A4.376 4.376 0 0 0 1 5.334v15.17a4.36 4.36 0 0 0 1.255 3.066 4.262 4.262 0 0 0 3.03 1.27h5.181l3.674 6.5Z"
    />
    <path
      fill="CurrentColor"
      fillRule="evenodd"
      d="m20.502 14.814 1.798 1.201a7.56 7.56 0 0 1-3.15 2.706 7.52 7.52 0 0 1-4.787.508 7.53 7.53 0 0 1-1.933-.72l-.009-.005a7.56 7.56 0 0 1-2.715-2.489l1.799-1.2.007.01.025.037a5.41 5.41 0 0 0 1.913 1.734 5.377 5.377 0 0 0 2.55.645h.005c.887 0 1.76-.221 2.543-.641l.008-.005a5.4 5.4 0 0 0 1.914-1.733l.025-.037.007-.01Zm-3.43 7.858h9.642a2.12 2.12 0 0 0 1.5-.617l.017-.017a2.166 2.166 0 0 0 .626-1.533V5.335a2.186 2.186 0 0 0-.644-1.551 2.138 2.138 0 0 0-1.498-.617H5.285a2.121 2.121 0 0 0-1.515.634 2.166 2.166 0 0 0-.627 1.533v15.17a2.185 2.185 0 0 0 .627 1.534l.017.017a2.14 2.14 0 0 0 1.499.617h6.428L16 30.257l-1.86 1.084-3.674-6.502h-5.18a4.242 4.242 0 0 1-1.655-.336 4.281 4.281 0 0 1-1.393-.95A4.376 4.376 0 0 1 1 20.505V5.333a4.376 4.376 0 0 1 .326-1.658 4.337 4.337 0 0 1 .929-1.407 4.282 4.282 0 0 1 1.376-.933l.014-.006A4.243 4.243 0 0 1 5.285 1h21.43a4.243 4.243 0 0 1 1.654.336 4.283 4.283 0 0 1 1.393.95c.39.4.7.871.912 1.39l.007.017c.21.52.32 1.078.319 1.641v15.17a4.376 4.376 0 0 1-1.238 3.048l-.017.018a4.28 4.28 0 0 1-1.376.933c-.52.22-1.081.336-1.655.336h-9.643v-2.167Zm4.931-11.665a2.156 2.156 0 0 1-2.508.644 2.16 2.16 0 0 1-1.065-.959 2.177 2.177 0 0 1-.268-1.045 2.156 2.156 0 0 1 .626-1.54 2.136 2.136 0 0 1 1.533-.63 2.167 2.167 0 0 1 2.118 2.593 2.175 2.175 0 0 1-.436.937Zm-8.426-.315a2.167 2.167 0 0 1-1.47 1.082 2.15 2.15 0 0 1-2.217-.922 2.177 2.177 0 0 1-.364-1.205 2.157 2.157 0 0 1 .626-1.54 2.136 2.136 0 0 1 1.533-.63 2.167 2.167 0 0 1 2.118 2.593c-.044.219-.12.429-.226.622Zm-3.3.133a1.82 1.82 0 0 1-.433-1.178v-.003a1.821 1.821 0 0 1 .547-1.3 1.842 1.842 0 0 1 1.29-.528h.004a1.85 1.85 0 0 1 1.536.821 1.827 1.827 0 0 1 .305.97v.04a1.842 1.842 0 0 1-.16.727l-.738-1.12-2.352 1.571Zm8.358-.444a1.822 1.822 0 0 1-.155-.734v-.003a1.823 1.823 0 0 1 1.142-1.69 1.845 1.845 0 0 1 .696-.138h.003a1.85 1.85 0 0 1 1.536.821 1.834 1.834 0 0 1 .305.97v.04a1.85 1.85 0 0 1-.44 1.173l-2.344-1.565-.743 1.126Z"
      clipRule="evenodd"
    />
  </svg>
)