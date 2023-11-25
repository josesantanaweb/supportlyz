'use client'

import React from 'react'
import Image from 'next/image'

export const AI = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="w-3/6 flex justify-start">
        <span className="w-[90%] block">
          <Image src="/static/images/ai.svg" alt="message-box" width={640} height={657} className="w-full h-full" />
        </span>
      </div>
      <div className="w-3/6 text-black">
        <h4 className="text-4xl mb-8 font-semibold pb-4 relative after:content-[''] after:absolute after:top-full after:left-0 after:h-1 after:z-20 after:bg-emerald-500 after:w-40">
          GPT 3.5 Turbo and IA 3 (Cohere)
        </h4>
        <p className="text-base">
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
