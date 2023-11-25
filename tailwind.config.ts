import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        leap: {
          '0%, 100%': {
            transform: 'translateY(-5%)',
          },
          '50%': {
            transform: 'translateY(5%)',
          },
        },
      },
      animation: {
        'spin-slow': 'spin 25s linear infinite',
        'bounce-slow': 'leap 8s linear infinite',
      },
      colors: {
        geyser: {
          '100': '#EDF2F5',
          '200': '#d9e4ea',
          '300': '#a9c3d0',
          '400': '#7ba2b5',
          '500': '#5a879d',
          '600': '#466d83',
          '700': '#3a596a',
          '800': '#334c59',
          '900': '#2e414c',
        },
        emerald: {
          '100': '#ddfbe9',
          '200': '#bdf5d5',
          '300': '#8aebb4',
          '400': '#50d88b',
          '500': '#2ac870',
          '600': '#1b9e55',
          '700': '#197c45',
          '800': '#19623a',
          '900': '#096B5F',
        },
        firefly: {
          '100': '#dbf1f2',
          '200': '#bbe3e6',
          '300': '#8cced4',
          '400': '#55afbb',
          '500': '#3a93a0',
          '600': '#337987',
          '700': '#2f636f',
          '800': '#2d525d',
          '900': '#152930',
        },
        'elf-green': {
          '100': '#c8fff1',
          '200': '#91fee4',
          '300': '#52f6d6',
          '400': '#1ee3c2',
          '500': '#05c7a9',
          '600': '#01a08b',
          '700': '#068374',
          '800': '#0a655b',
          '900': '#003330',
        },
        malachite: {
          '50': '#effef1',
          '100': '#d9ffe2',
          '200': '#b5fdc6',
          '300': '#7bfa9b',
          '400': '#3bed69',
          '500': '#13ea4b',
          '600': '#08b134',
          '700': '#0a8b2c',
          '800': '#0e6d28',
          '900': '#0e5924',
        },
        lochinvar: {
          '50': '#f1fcf9',
          '100': '#d1f6ed',
          '200': '#a3ecdc',
          '300': '#6edac6',
          '400': '#40c1ad',
          '500': '#26a695',
          '600': '#1e8e81',
          '700': '#1b6a62',
          '800': '#1a5550',
          '900': '#1a4743',
          '950': '#092a28',
        },
        elephant: {
          '50': '#f0f9fb',
          '100': '#daeff3',
          '200': '#b9dfe8',
          '300': '#88c8d8',
          '400': '#50a7c0',
          '500': '#358ba5',
          '600': '#2f718b',
          '700': '#2b5d73',
          '800': '#2b4f5f',
          '900': '#19313f',
        },
        'te-papa-green': {
          '50': '#f0fdf9',
          '100': '#cbfcef',
          '200': '#98f7e1',
          '300': '#5cecce',
          '400': '#2bd6b9',
          '500': '#12baa0',
          '600': '#0b9683',
          '700': '#0e776a',
          '800': '#105f56',
          '900': '#10453f',
        },
        'tall-poppy': {
          '50': '#fef3f2',
          '100': '#fee4e2',
          '200': '#fdcecb',
          '300': '#fbaba6',
          '400': '#f67a73',
          '500': '#ec5047',
          '600': '#d93229',
          '700': '#b3261e',
          '800': '#97241d',
          '900': '#7d241f',
          '950': '#440e0b',
        },
      },
      boxShadow: {
        'customer-review':
          '0px 1px 2px 0px rgba(0,0,0,.02),0px 3.6px 6.9px 0px rgba(0,0,0,.04),0px 7.4px 14.1px 0px rgba(0,0,0,.04),0px 15.3px 29.2px 0px rgba(0,0,0,.06),0px 42px 80px 0px rgba(0,0,0,.08)',
        'team-review': '0px 0.6px 1.5px 0px rgba(0,0,0,.04), 0px 2.1px 5.1px 0px rgba(0,0,0,.05)',
        'geyser-5': '0 10px 20px rgba(104, 134, 193, 0.05)',
        'geyser-10': '0 10px 20px rgba(104, 134, 193, 0.10)',
        'geyser-20': '0 10px 20px rgba(104, 134, 193, 0.20)',
        'emerald-40': '0 10px 20px rgba(42, 200, 112, 0.4)',
        'emerald-50': '0 10px 20px rgba(42, 200, 112, 0.5)',
      },
      letterSpacing: {
        '0.1': '0.1px',
        '5': '5px',
      },
      borderRadius: {
        '2.5xl': '1.25rem',
      },
      backgroundImage: {
        'costumer-review': 'url("/static/images/landing/customer-review-bg.svg")',
        'gradient-suportlizt-1': 'linear-gradient(180deg, #01F256 0%, #14A199 100%)',
        'gradient-suportlizt-2': 'linear-gradient(180deg, #00F453 0%, #159B9E 100%)',
      },
      margin: {
        '6.5': '1.625rem',
      },
      padding: {
        '7.5': '1.875rem',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'ease-out',
      },
      lineHeight: {
        normal: 'normal',
      },
      gridTemplateColumns: {
        'benefits-experience': '56.97674418604651% auto',
      }
    },
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1740px',
      },
    },
  },
  plugins: [],
}
// eslint-disable-next-line import/no-default-export
export default config
