/* eslint-disable max-len */
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
      className={`bg-geyser-100 rounded-[10px] p-[13px] md:p-6 border border-white transition-all hover:shadow-customer-review mb-2.5 md:mb-4 last:mb-0 relative max-w-[1432px] mx-auto ${
        isOpen ? 'shadow-customer-review' : ''
      }`}
    >
      <h3 className="text-sm md:text-lg leading-normal font-medium max-w-[285px] md:max-w-none pr-10 md:pr-0">{question}</h3>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-firefly-900 flex items-center justify-center absolute top-[21px] md:top-6 w-5 md:w-6 h-5 md:h-6 right-[13px] md:right-6"
      >
        <MinusIcon
          className={`${isOpen ? 'opacity-100' : 'opacity-0'} transition-all absolute text-[20px] md:text-2xl`}
        />
        <PlusIcon
          className={`${isOpen ? 'opacity-0' : 'opacity-100'} transition-all absolute text-[20px] md:text-2xl`}
        />
      </button>

      <div className={`overflow-hidden transition-all ${isOpen ? 'max-h-[150px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="mb-4 md:mb-6 mt-2 md:mt-7 h-0.5 w-2/3 md:w-full rounded-3xl bg-firefly-900 bg-opacity-20"></div>
        <p className="text-sm md:text-sm leading-normal">{answer}</p>
      </div>
    </div>
  )
}

export default function FAQsSection({ className = '' }: { className?: string }) {
  return (
    <section className={`text-firefly-900 container ${className}`}>
      <div className="text-center mb-8 md:mb-[60px]">
        <h2 className="text-xl leading-normal md:text-[40px] md:leading-[50px] tracking-[0.1px] max-w-[274px] mx-auto md:max-w-none">
          <span className="text-elf-green-700 font-bold md:font-semibold">Frequently Asked</span> Questions Supportlyz
        </h2>
      </div>
      {faqs.map((faq) => (
        <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
      ))}
    </section>
  )
}
