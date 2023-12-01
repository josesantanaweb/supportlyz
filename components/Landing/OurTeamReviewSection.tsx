'use client'

/* eslint-disable max-len */
/* eslint-disable react/no-multi-comp */
/* eslint-disable import/no-default-export */
import Image from 'next/image'

import { SupportlyzIcon } from '@/components/UI/Icons'

import { teamReview } from '@/data/teamReview'
import { useIsMobile } from '@/hooks/useIsMobile'

interface ICustomerReview {
  image: string
  name: string
  job?: string
  review: string
}

const TeamReviewCard = ({ data }: { data: ICustomerReview }) => {
  const isMobile = useIsMobile()

  const { image, name, job, review } = data

  return (
    <div className="bg-geyser-100 rounded-[10px] md:rounded-[20px] px-4 md:px-9 py-6 md:py-12 flex items-center justify-start border border-white relative overflow-hidden shadow-team-review">
      <SupportlyzIcon
        className="absolute bottom-[-93px] md:bottom-[-185.42px] right-[-70px] md:right-[-131.3px] text-lochinvar-600 opacity-5 -scale-y-100"
        width={isMobile ? 250 : 493.067}
        height={isMobile ? 250 : 497.262}
      />

      <div className="relative z-10">
        <div className="mb-4 md:mb-6">
          <Image
            src={image}
            alt={name}
            title={name}
            width={isMobile ? 32 : 90}
            height={isMobile ? 32 : 90}
            className="rounded-full h-[32px] w-[32px] md:h-[90px] md:w-[90px] object-contain"
          />
        </div>

        <div className="text-sm md:text-lg font-semibold leading-normal md:leading-normal tracking-0.1 mb-1.5 md:mb-6 text-elf-green-700">
          <div>{name}</div>
          {job && <div>{job}</div>}
        </div>

        <div className="mb-2 md:mb-6 h-[2px] md:h-[7px] w-[69px] md:w-[165px] rounded-3xl bg-malachite-500"></div>

        <p className="text-xs md:text-sm md:font-medium leading-normal md:min-h-[84px] text-firefly-900 md:max-w-[709px]">
          &quot;{review}&quot;
        </p>
      </div>
    </div>
  )
}

export default function OurTeamReviewSection({ className = '' }: { className?: string }) {
  return (
    <section className={`text-firefly-900 container ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {teamReview.map((data, i: number) => (
          <TeamReviewCard key={i} data={data} />
        ))}
      </div>
    </section>
  )
}
