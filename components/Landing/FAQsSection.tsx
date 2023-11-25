'use client'

/* eslint-disable react/no-multi-comp */
/* eslint-disable import/no-default-export */

import { useState } from 'react'

import { PlusIcon, MinusIcon } from '../UI/Icons'

import { faqs } from '@/data/faqs'

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={`bg-geyser-100 rounded-[20px] py-10 px-5 border-[3px] border-white transition-all hover:shadow-customer-review mb-4 last:mb-0 relative ${
        isOpen ? 'shadow-customer-review' : ''
      }`}
    >
      <h3 className="text-[22px] leading-normal font-medium">{question}</h3>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-firefly-900 flex items-center justify-center absolute top-10 w-8 h-8 right-6"
      >
        <MinusIcon
          className={`${isOpen ? 'opacity-100' : 'opacity-0'} transition-all absolute`}
          width={32}
          height={32}
        />
        <PlusIcon
          className={`${isOpen ? 'opacity-0' : 'opacity-100'} transition-all absolute`}
          width={32}
          height={32}
        />
      </button>

      <div className={`overflow-hidden transition-all ${isOpen ? 'max-h-[150px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="mb-6 mt-7 h-2 w-1/3 rounded-3xl bg-malachite-500"></div>
        <p className="text-base leading-normal">{answer}</p>
      </div>
    </div>
  )
}

export default function FAQsSection({ className = '' }: { className?: string }) {
  return (
    <section className={`text-firefly-900 container ${className}`}>
      <div className="text-center mb-[60px]">
        <h2 className="text-[52px] leading-[50px] tracking-[0.1px] mb-6">
          <span className="text-elf-green-700 font-semibold">Frequently Asked</span> Questions Supportlyz
        </h2>
      </div>

      {faqs.map((faq) => (
        <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
      ))}
    </section>
  )
}
