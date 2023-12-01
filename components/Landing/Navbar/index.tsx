/* eslint-disable react/no-multi-comp */
'use client'

import React from 'react'
import Image from 'next/image'

import { ListIcon } from '@/components/UI/Icons'

import { useIsMobile } from '@/hooks/useIsMobile'
import { ComponentVisible } from '@/hooks/useVisible'

import { menuLinks } from '@/data/menuLinks'
import { socialLinks } from '@/data/socialLinks'

const MobileMenu = () => {
  return (
    <nav className="bg-te-papa-green-900 px-5 py-6 rounded-l-[20px] text-white max-w-[212px] right-0 top-full absolute">
      <div className="relative h-5 w-[107px] mb-[22px]">
        <Image src="/static/images/logo-landing.svg" alt="Supportlyz" fill priority />
      </div>

      <div className="text-sm leading-normal mb-6">MAIN MENU</div>

      <ul>
        {menuLinks.map((link, i) => (
          <li key={i}>
            <a
              href={link.href}
              className="px-2.5 py-[6.5px] flex gap-2 text-sm font-medium border-b border-transparent hover:border-emerald-500 mb-6 md:mb-0"
            >
              <Image src={link.icon} alt={link.title} width={20} height={20} className="max-md:w-5 max-md:h-5" />
              {link.title}
            </a>
          </li>
        ))}
      </ul>

      <a href="#" className="btn btn-outline-emerald-500 h-[34px] !p-0 w-full text-sm font-medium">
        Get Started
      </a>

      <div className="flex gap-4 justify-center mt-5">
        {socialLinks.map((link, i) => (
          <a
            key={i}
            href={link.href}
            title={link.title}
            className="w-[24px] h-[24px] rounded-full bg-emerald-500 block btn !p-0"
          >
            <Image src={link.icon} alt={link.title} width={28} height={28} className="max-md:w-3.5 max-md:h-3.5" />
          </a>
        ))}
      </div>
    </nav>
  )
}

export const Navbar = () => {
  const { ref, isVisible, setIsVisible } = ComponentVisible(false)

  const isMobile = useIsMobile()
  return (
    <div ref={ref} className="bg-elf-green-800 bg-opacity-20 relative z-50">
      <div className="p-5 lg:py-10 container mx-auto">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-5 xl:gap-20 grow">
            <div className="relative h-[39.498px] w-[220px] max-md:hidden">
              <Image src="/static/images/logo-landing.svg" alt="Supportlyz" fill priority />
            </div>
            <div className="relative h-8 w-8 md:hidden">
              <Image src="/static/images/isotype.svg" alt="Supportlyz" fill priority />
            </div>

            <ul className="flex items-center gap-2.5 lg:gap-5 xl:gap-10 grow max-md:hidden font-medium">
              {menuLinks.map((link, i) => (
                <li key={i} className={`${i === menuLinks.length - 1 ? 'ml-auto' : ''}`}>
                  <a
                    href={link.href}
                    className={`text-white text-sm cursor-pointer transition border-b-2 border-white py-2 border-opacity-0 hover:border-opacity-100 px-2.5`}
                  >
                    {link.title}
                  </a>
                </li>
              ))}

              <li>
                <a className="btn btn-outline-emerald-500 w-[136px] h-[44px] text-sm font-medium !p-0" href="#">
                  Get Started
                </a>
              </li>
            </ul>

            <div className="md:hidden ml-auto flex items-center gap-2">
              <a
                className="btn btn-outline-emerald-500 w-[101px] h-[34px] text-xs font-medium !p-0"
                href="#"
              >
                Get Started
              </a>
              <button
                type="button"
                className={`btn btn-outline-emerald-500 w-9 h-[34px] !p-0 ${
                  isVisible ? '!bg-opacity-100 !border-opacity-0' : '!bg-opacity-0 !border-opacity-100'
                }`}
                onClick={() => setIsVisible(!isVisible)}
              >
                <ListIcon className="text-white text-[16px]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {isMobile && isVisible && <MobileMenu />}
    </div>
  )
}
