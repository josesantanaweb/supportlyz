/* eslint-disable max-len */
'use client'

import React from 'react'
import Image from 'next/image'

export const AI = () => {
  return (
    <div className="flex max-md:flex-col-reverse justify-between items-center gap-[60px] md:gap-0 mb-[20px]">
      <div className="md:w-3/6 md:max-w-[602px] flex justify-center md:justify-start">
        <span className="block">
          <Image src="/static/images/ai.png" alt="ai" width={602} height={601.328} className="w-full h-full" />
        </span>
      </div>
      <div className="md:w-3/6 md:max-w-[575px] text-black">
      <h4 className="text-lg md:text-[25px] max-md:text-center mb-8 font-semibold pb-6 relative after:content-[''] after:absolute after:top-full after:left-1/2 md:after:left-0 after:h-2 after:z-20 after:bg-emerald-500 after:w-64 md:after:w-40 max-md:after:-translate-x-1/2 after:rounded-full leading-normal">
          GPT 3.5 Turbo and IA 3 (Cohere)
        </h4>
        <p className="text-sm max-md:text-justify leading-normal">
          GPT 3.5 Turbo and AI 3 (Cohere). These are text generation and conversation platforms that use very advanced
          and powerful natural language models.
          <br />
          <br /> GPT 3.5 Turbo is an enhanced version of GPT-3, the worlds largest and most sophisticated language
          model, developed by OpenAI. With GPT 3.5 Turbo you can generate high-quality text on any topic, style or
          format, simply by providing a few keywords or a seed phrase. You can use it to create everything from
          headlines, product descriptions, reviews, articles, emails, to scripts, poems, stories or songs.
          <br />
          <br />
          IA 3 (Cohere) is a conversation platform that uses the Cohere OneShot language model, based on GPT-3 but
          optimized for dialogue. With AI 3 (Cohere) you can create intelligent chatbots that can maintain fluid,
          coherent and natural conversations with your customers, understanding their intentions, emotions and
          preferences. You can use it to offer everything from technical support, advice, sales, reservations, to
          entertainment, education or therapy.
        </p>
      </div>
    </div>
  )
}
