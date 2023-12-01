'use client'

/* eslint-disable max-len */
/* eslint-disable react/no-multi-comp */
/* eslint-disable import/no-default-export */

import { useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'

import { Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { useIsMobile } from '@/hooks/useIsMobile'

import { SupportlyzIcon, ArrowIcon } from '@/components/UI/Icons'
import SwiperPagination from './SwiperPagination'

import { customersReview } from '@/data/customersReview'

interface ICustomerReview {
  image: string
  name: string
  job?: string
  title: string
  review: string
}

const CustomerCard = ({ data }: { data: ICustomerReview }) => {
  const isMobile = useIsMobile()

  const { image, name, job, title, review } = data

  return (
    <div className="bg-elf-green-700 rounded-[10px] md:rounded-2.5xl px-4 py-6 md:p-6 leading-normal relative overflow-hidden max-w-[217px] md:max-w-[440px] text-white">
      <SupportlyzIcon
        className="absolute top-[-79px] right-[-48px] text-lochinvar-600 opacity-70"
        width={isMobile ? 180 : 392.869}
        height={isMobile ? 180 : 396.211}
      />

      <div className="relative z-10 md:px-3 md:pt-9 mb-10 md:mb-3">
        <div className="mb-4 md:mb-6.5">
          <Image
            src={image}
            alt={name}
            title={name}
            width={isMobile ? 32 : 70}
            height={isMobile ? 32 : 70}
            className="rounded-full h-[32px] w-[32px] md:h-[70px] md:w-[70px] object-contain"
          />
        </div>

        <div className="text-xs md:text-sm font-normal tracking-[1.466px] md:tracking-5 opacity-70 mb-4 md:mb-7 leading-normal">
          <div>{name}</div>
          {job && <div>{job}</div>}
        </div>

        <div className="text-xs md:text-lg font-semibold tracking-[0.029px] md:trakink-0.1 mb-4 relative leading-normal">
          &quot;{title}&quot;
        </div>

        <div className="h-[2px] md:h-2 w-[84px] md:w-28 rounded-3xl bg-malachite-500 mb-4"></div>

        <p className="text-xs md:text-sm font-medium md:font-normal leading-normal md:tracking-0.1 md:min-h-[182px]">{review}</p>
      </div>

      <div className="md:text-right">
        <a href="#" className="btn btn-outline-primary h-8 md:h-10 flex-shrink-0 text-xs md:text-sm">
          <span>Source</span>
          <ArrowIcon className='text-[20px]' />
        </a>
      </div>
    </div>
  )
}

const CustomerCarrousel = ({ reviews }: { reviews: Array<ICustomerReview> }) => {
  const isMobile = useIsMobile()
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [swiperWidth, setSwiperWidth] = useState<number>(0)
  // const [slides, setSlides] = useState<Array<ICustomerReview>>([])
  const [customerReviewWidth, setCustomerReviewWidth] = useState<number>(0)

  const swiperRef = useRef<SwiperType>()

  const slides = useMemo(() => {
    const slidesPerView = Math.floor(swiperWidth / customerReviewWidth)
    const tempSlides: Array<ICustomerReview> = JSON.parse(JSON.stringify(reviews))

    if (slidesPerView * 2 > tempSlides.length) {
      const maxItemsToAdd = slidesPerView * 2 - tempSlides.length

      for (let i = 0; i < maxItemsToAdd; i++) {
        tempSlides.push(tempSlides[i])
      }
    }

    return tempSlides
  }, [swiperWidth, reviews, customerReviewWidth])

  useEffect(() => {
    const handleResize = () => {
      setSwiperWidth(swiperRef.current?.el?.offsetWidth || 0)
    }

    handleResize()

    window?.addEventListener('resize', handleResize)

    return () => {
      window?.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (isMobile) {
      setCustomerReviewWidth(217)
    } else {
      setCustomerReviewWidth(440)
    }
  }, [isMobile])

  // useEffect(() => {
  //   if (swiperWidth) {
  //     const slidesPerView = Math.floor(swiperWidth / customerReviewWidth)
  //     const tempSlides: Array<ICustomerReview> = JSON.parse(JSON.stringify(reviews))

  //     if (slidesPerView * 2 > tempSlides.length) {
  //       const maxItemsToAdd = slidesPerView * 2 - tempSlides.length

  //       for (let i = 0; i < maxItemsToAdd; i++) {
  //         tempSlides.push(tempSlides[i])
  //       }
  //     }

  //     setSlides(tempSlides)

  //     swiperRef.current?.update()
  //   }
  // }, [swiperWidth, reviews, customerReviewWidth])

  return (
    <div>
      <Swiper
        onSwiper={(swiper: SwiperType) => {
          swiperRef.current = swiper
        }}
        onRealIndexChange={(swiper: SwiperType) => {
          setActiveIndex(swiper.realIndex)
        }}
        loop={true}
        navigation={false}
        slidesPerView="auto"
        spaceBetween={isMobile ? 10 : 45}
      >
        {slides.map((data, index) => (
          <SwiperSlide key={index} className="!w-auto">
            <CustomerCard data={data} />
          </SwiperSlide>
        ))}
      </Swiper>

      <SwiperPagination
        className="mx-auto mt-6 md:mt-20 hidden md:block"
        count={reviews.length}
        activeIndex={activeIndex}
        onClick={(index: number) => {
          swiperRef.current?.slideToLoop(index, 500)
        }}
      />
    </div>
  )
}

export default function OurCustomersReviewSection({ className = '' }: { className?: string }) {
  return (
    <section className={`text-firefly-900 container ${className}`}>
      <div className="text-center mb-8 md:mb-[60px]">
        <h2 className="text-xl leading-normal md:text-[40px] md:leading-[50px] tracking-[0.1px] max-w-[274px] mx-auto md:max-w-none">
          <span className="text-elf-green-700 font-bold md:font-semibold">Our Customers</span> approach our Performance
        </h2>
      </div>
      <CustomerCarrousel reviews={customersReview} />
    </section>
  )
}
