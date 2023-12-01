/* eslint-disable max-len */
'use client'

/* eslint-disable react/no-multi-comp */
/* eslint-disable import/no-default-export */

import { Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { PricesAndPlans } from '@/data/pricesAndPlans'

import { CheckIcon, CloseIcon, SupportlyzIcon } from '../UI/Icons'

import SwiperPagination from './SwiperPagination'
import { useRef, useState } from 'react'

interface IPricesAndPlans {
  name: string
  price: number
  pros: Array<string>
  cons: Array<string>
  link: string
}

const Feature = ({ className = '', children }: { className?: string; children: React.ReactNode }) => {
  return (
    <li
      className={`p-4 md:py-7.5 md:px-0 text-sm md:text-lg leading-normal first:border-t border-b flex items-center gap-2.5 ${className}`}
    >
      {children}
    </li>
  )
}

const PriceCard = ({ data, highlight }: { data: IPricesAndPlans; highlight: boolean }) => {
  const { name, price, pros, cons, link } = data

  return (
    <div
      className={`rounded-[10px] md:rounded-[20px] p-6 pt-[19px] xxs:px-10 md:px-[73px] md:pt-[38px] md:pb-12 border-[3px] border-white relative overflow-hidden transition-all hover:shadow-customer-review flex flex-col items-center h-full ${
        highlight ? 'text-white border-opacity-0 bg-elephant-900' : 'bg-geyser-100'
      }`}
    >
      <div className="font-medium tracking-0.1 text-center mb-4 md:mb-[37px]">
        <h3
          className={`leading-normal md:leading-[50px] text-base md:text-[25px] mb-2 ${
            highlight ? 'text-emerald-500' : 'text-elf-green-700'
          }`}
        >
          {name}
        </h3>
        <p className="leading-normal md:leading-[50px] text-[20px] md:text-[40px]">${price}</p>
      </div>

      <ul className="mb-8 md:mb-24 z-10 w-full">
        {pros.map((pro, i) => (
          <Feature
            key={i}
            className={highlight ? 'border-white border-opacity-20 md:border-opacity-50' : 'border-te-papa-green'}
          >
            <span className={highlight ? 'text-emerald-500' : 'text-elf-green-700'}>
              <CheckIcon className="text-[15px] md:text-[32px]" />
            </span>
            <span>{pro}</span>
          </Feature>
        ))}

        {cons.map((con, i) => (
          <Feature
            key={i}
            className={highlight ? 'border-white border-opacity-20 md:border-opacity-50' : 'border-te-papa-green'}
          >
            <span className="text-tall-poppy-700">
              <CloseIcon className="text-[15px] md:text-[32px]" />
            </span>
            <span>{con}</span>
          </Feature>
        ))}
      </ul>

      <a
        href={link}
        className={`btn mt-auto text-xs md:text-sm leading-normal font-medium md:font-normal bg-emerald-500 h-[34px] md:h-[52px] w-[119px] md:w-[201px] z-10`}
      >
        Start Free Trial
      </a>

      <SupportlyzIcon className="absolute bottom-[-90px] sm:bottom-[-185.42px] left-1/2 -translate-x-1/2 text-lochinvar-600 opacity-5 -scale-y-100 text-[239px] sm:text-[493.067px]" />
    </div>
  )
}

export default function PricesAndPlansSection({ className = '' }: { className?: string }) {
  const swiperRef = useRef<SwiperType>()
  const [activeIndex, setActiveIndex] = useState<number>(0)

  return (
    <section id='price' className={`text-firefly-900 container ${className}`}>
      <div className="text-center mb-8 md:mb-[60px]">
        <h2 className="text-xl leading-normal md:text-[40px] md:leading-[50px] tracking-[0.1px] max-w-[274px] mx-auto md:max-w-none">
          <span className="text-elf-green-700 font-bold md:font-semibold">Prices</span> and Plans
        </h2>
      </div>

      <div className="hidden xl:grid grid-cols-1 sm:grid-cols-3 gap-[35px]">
        {PricesAndPlans.map((data, i: number) => (
          <PriceCard key={i} data={data} highlight={i === 1} />
        ))}
      </div>

      <div className="block xl:hidden -mx-5">
        <Swiper
          onSwiper={(swiper: SwiperType) => {
            swiperRef.current = swiper
          }}
          onSlideChange={(swiper: SwiperType) => {
            setActiveIndex(swiper.realIndex)
          }}
          // loop={true}
          navigation={false}
          // spaceBetween={16}
          initialSlide={1}
          // slidesOffsetAfter={50}
          centeredSlides={true}
          // slidesOffsetBefore={50}
          breakpoints={{
            // 0: {
            //   slidesPerView: 1,
            //   spaceBetween: 16,
            // },
            0: {
              slidesPerView: 1.25,
              spaceBetween: 16,
            },
            500: {
              slidesPerView: 1.5,
              spaceBetween: 16,
            },
            1066: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            // 1272: {
            //   slidesPerView: 2.5,
            //   spaceBetween: 16,
            // },
          }}
        >
          {PricesAndPlans.map((data, index: number) => (
            <SwiperSlide key={index} /**className="!w-auto" */ className=" !h-auto pb-6">
              <PriceCard data={data} highlight={index === 1} />
            </SwiperSlide>
          ))}
        </Swiper>

        <SwiperPagination
          className="mx-auto"
          count={PricesAndPlans.length}
          // activeIndex={activeIndex == 0 ? 1 : activeIndex == 1 ? 2 : 0}
          activeIndex={activeIndex}
          onClick={(index: number) => {
            // swiperRef.current?.slideTo(index == 1 ? 0 : index == 2 ? 1 : 2, 500)
            swiperRef.current?.slideTo(index, 500)
          }}
        />
      </div>
    </section>
  )
}
