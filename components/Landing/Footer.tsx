/* eslint-disable import/no-default-export */

import Image from 'next/image'

import { footerLinks } from '@/data/footerLinks'

export default function Footer() {
  return (
    <footer className="text-white bg-elephant-900 py-10">
      <div className="container mx-auto flex flex-col items-center gap-8">
        <Image src="/static/images/logo-landing.svg" alt="Supportlyz" width={284.39} height={53} />
        <nav>
          <ul className="flex items-center justify-center gap-6">
            {footerLinks?.company?.map((link, i) => (
              <li key={i} className="text-[15px] leading-normal transition-all opacity-70 hover:opacity-100 active:text-malachite-500">
                <a href={link.href}>{link.title}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="w-full max-w-[480px] h-px bg-malachite-500"></div>
        <nav>
          <ul className="flex items-center justify-center gap-6">
            {footerLinks?.social?.map((link, i) => (
              <li key={i}>
                <a href={link.href} title={link.title} className='w-[52px] h-[52px] rounded-full bg-elf-green-700 block btn !p-0'>
                    <Image src={link.icon} alt={link.title} width={28} height={28} />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
