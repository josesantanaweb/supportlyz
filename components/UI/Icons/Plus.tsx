/* eslint-disable max-len */
import { IIcon } from '@/types/icons'

export const Plus = ({ width, height, ...props }: IIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || '1em'}
    height={height || '1em'}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <path
      d="M24.0007 13.333H18.6673V7.99967C18.6673 7.29243 18.3864 6.61415 17.8863 6.11406C17.3862 5.61396 16.7079 5.33301 16.0007 5.33301C15.2934 5.33301 14.6151 5.61396 14.115 6.11406C13.6149 6.61415 13.334 7.29243 13.334 7.99967L13.4287 13.333H8.00065C7.29341 13.333 6.61513 13.614 6.11503 14.1141C5.61494 14.6142 5.33398 15.2924 5.33398 15.9997C5.33398 16.7069 5.61494 17.3852 6.11503 17.8853C6.61513 18.3854 7.29341 18.6663 8.00065 18.6663L13.4287 18.5717L13.334 23.9997C13.334 24.7069 13.6149 25.3852 14.115 25.8853C14.6151 26.3854 15.2934 26.6663 16.0007 26.6663C16.7079 26.6663 17.3862 26.3854 17.8863 25.8853C18.3864 25.3852 18.6673 24.7069 18.6673 23.9997V18.5717L24.0007 18.6663C24.7079 18.6663 25.3862 18.3854 25.8863 17.8853C26.3864 17.3852 26.6673 16.7069 26.6673 15.9997C26.6673 15.2924 26.3864 14.6142 25.8863 14.1141C25.3862 13.614 24.7079 13.333 24.0007 13.333Z"
      fill="currentColor"
    />
  </svg>
)
