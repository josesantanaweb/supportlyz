'use client'

/* eslint-disable max-len */
/* eslint-disable react/no-multi-comp */
/* eslint-disable import/no-default-export */

import Image from 'next/image'
import { Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { SupportlyzIcon, ArrowIcon } from '@/components/UI/Icons'
import SwiperPagination from './SwiperPagination'

import { customersReview } from '@/data/customersReview'
import { useEffect, useRef, useState } from 'react'

interface ICustomerReview {
  image: string
  name: string
  job?: string
  title: string
  review: string
}

const CustomerCard = ({ data }: { data: ICustomerReview }) => {
  const { image, name, job, title, review } = data

  return (
    <div className="bg-elf-green-700 rounded-2.5xl p-6 leading-normal relative overflow-hidden max-w-[440px] text-white">
      <SupportlyzIcon
        className="absolute top-[-148.11px] right-[-104.62px] text-lochinvar-600 opacity-70"
        width={392.869}
        height={396.211}
      />

      <div className="relative z-10 px-3 pt-9 mb-3">
        <div className="mb-6.5">
          <Image
            src={image}
            alt={name}
            title={name}
            width={70}
            height={70}
            className="rounded-full h-[70px] w-[70px] object-contain"
          />
        </div>

        <div className="text-base font-normal tracking-5 opacity-70 mb-3 leading-normal">
          <div>{name}</div>
          {job && <div>{job}</div>}
        </div>

        <div className="text-2xl font-semibold trakink-0.1 mb-6 pb-4 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-2 after:w-28 after:rounded-3xl after:bg-malachite-500 leading-normal">
          &quot;{title}&quot;
        </div>

        <p className="text-base font-medium leading-normal tracking-0.1 min-h-[182px]">{review}</p>
      </div>

      <div className="text-right">
        <a href="#" className="btn btn-outline-primary h-10 flex-shrink-0">
          <span>Source</span>
          <ArrowIcon width={24} height={24} />
        </a>
      </div>
    </div>
  )
}

const CustomerCarrousel = ({ reviews }: { reviews: Array<ICustomerReview> }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [swiperWidth, setSwiperWidth] = useState<number>(0)
  const [slides, setSlides] = useState<Array<ICustomerReview>>([])

  const swiperRef = useRef<SwiperType>()
  const customerReviewWidth = 440

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
    if (swiperWidth) {
      const slidesPerView = Math.floor(swiperWidth / customerReviewWidth)
      const tempSlides: Array<ICustomerReview> = JSON.parse(JSON.stringify(reviews))

      if (slidesPerView * 2 > tempSlides.length) {
        const maxItemsToAdd = slidesPerView * 2 - tempSlides.length

        for (let i = 0; i < maxItemsToAdd; i++) {
          tempSlides.push(tempSlides[i])
        }
      }

      setSlides(tempSlides)

      swiperRef.current?.update()
    }
  }, [swiperWidth, reviews])

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
        spaceBetween={45}
      >
        {slides.map((data, index) => (
          <SwiperSlide key={index} className="!w-auto">
            <CustomerCard data={data} />
          </SwiperSlide>
        ))}
      </Swiper>

      <SwiperPagination
        className="mx-auto mt-24"
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
      <div className="text-center mb-[60px]">
        <h2 className="text-[52px] leading-[50px] tracking-[0.1px] mb-6">
          <span className="text-elf-green-700 font-semibold">Our Customers</span> approach our Performance
        </h2>
      </div>

      <CustomerCarrousel reviews={customersReview} />
    </section>
  )
}
