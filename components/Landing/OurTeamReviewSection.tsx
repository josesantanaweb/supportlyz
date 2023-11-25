/* eslint-disable max-len */
/* eslint-disable react/no-multi-comp */
/* eslint-disable import/no-default-export */
import Image from 'next/image'

import { SupportlyzIcon } from '@/components/UI/Icons'

import { teamReview } from '@/data/teamReview'

interface ICustomerReview {
  image: string
  name: string
  job?: string
  review: string
}

const TeamReviewCard = ({ data }: { data: ICustomerReview }) => {
  const { image, name, job, review } = data

  return (
    <div className="bg-geyser-100 rounded-[20px] px-9 py-12 flex items-center justify-start border border-white relative overflow-hidden shadow-team-review">
      <SupportlyzIcon
        className="absolute bottom-[-185.42px] right-[-131.3px] text-lochinvar-600 opacity-5 -scale-y-100"
        width={493.067}
        height={497.262}
      />

      <div className="relative z-10">
        <div className="mb-6">
          <Image
            src={image}
            alt={name}
            title={name}
            width={90}
            height={90}
            className="rounded-full h-[90px] w-[90px] object-contain"
          />
        </div>

        <div className="text-2xl font-semibold leading-[106.5%] tracking-0.1 mb-6 text-elf-green-700">
          <div>{name}</div>
          {job && <div>{job}</div>}
        </div>

        <div className="mb-6 h-2 w-40 rounded-3xl bg-malachite-500"></div>

        <p className="text-base font-medium leading-normal min-h-[79px] text-firefly-900 max-w-[709px]">
          &quot;{review}&quot;
        </p>
      </div>
    </div>
  )
}

export default function OurTeamReviewSection({ className = '' }: { className?: string }) {
  return (
    <section className={`text-firefly-900 container ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {teamReview.map((data, i: number) => (
          <TeamReviewCard key={i} data={data} />
        ))}
      </div>
    </section>
  )
}
