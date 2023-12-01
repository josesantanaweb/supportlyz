/* eslint-disable import/no-default-export */

import Image from 'next/image'

import { footerLinks } from '@/data/footerLinks'
import { socialLinks } from '@/data/socialLinks'

export default function Footer() {
  return (
    <footer className="text-white bg-elephant-900 py-4 md:py-10">
      <div className="container mx-auto flex flex-col items-center gap-4 md:gap-8">
        <Image
          src="/static/images/logo-landing.svg"
          alt="Supportlyz"
          width={284.39}
          height={53}
          className="max-md:w-[103px] max-md:h-[19px]"
        />

        <nav>
          <ul className="flex items-center justify-center gap-4 md:gap-6">
            {footerLinks?.map((link, i) => (
              <li key={i} className="leading-[0]">
                <a
                  href={link.href}
                  className="text-[10px] md:text-[15px] leading-normal transition-all opacity-70 hover:opacity-100 active:text-malachite-500"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="block md:hidden w-full max-w-[480px] h-0.5 bg-emerald-500 mt-4"></div>
        </nav>

        <div className="hidden md:block w-full max-w-[480px] h-px bg-emerald-500"></div>

        <nav>
          <ul className="flex items-center justify-center gap-4 md:gap-6">
            {socialLinks.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  title={link.title}
                  className="w-[26px] md:w-[52px] h-[26px] md:h-[52px] rounded-full bg-elf-green-700 block btn !p-0"
                >
                  <Image
                    src={link.icon}
                    alt={link.title}
                    width={28}
                    height={28}
                    className="max-md:w-3.5 max-md:h-3.5"
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
