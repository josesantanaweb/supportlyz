/* eslint-disable max-len */
/* eslint-disable react/no-multi-comp */
/* eslint-disable import/no-default-export */

import Image from 'next/image'

import { benefitsExperience } from '@/data/benefitsExperience'
import { SupportlyzIcon } from '../UI/Icons'

const SmallCard = ({
  title,
  description,
  image,
  video,
}: {
  title: string
  description: string
  image?: string
  video?: string
}) => {
  return (
    <div className="rounded-[20px] row-span-1 col-span-1 px-8 py-14 bg-elf-green-700 relative overflow-hidden">
      {video && (
        <div className="rounded-[20px] overflow-hidden left-0 right-0 top-0 bottom-0 absolute">
          <video
            src={video}
            autoPlay
            loop
            muted
            className="absolute left-0 right-0 mix-blend-soft-light top-1/2 -translate-y-1/2 pointer-events-none user-select-none"
          ></video>
        </div>
      )}
      {image && (
        <Image
          src={image}
          alt={title}
          title={title}
          className="absolute left-0 right-0 mix-blend-soft-light top-0 w-full opacity-50 pointer-events-none user-select-none"
          width={702}
          height={271}
        />
      )}
      <div className="z-10">
        <h3 className="leading-normal text-3xl font-bold max-w-md">{title}</h3>
        <div className="my-4 h-1.5 w-28 rounded-3xl bg-malachite-500"></div>
        <p className="leading-normal text-lg font-medium">{description}</p>
      </div>
    </div>
  )
}

const BigCard = ({
  title,
  description,
  link,
  image,
}: {
  title: string
  description: string
  link: string
  image?: string
}) => {
  return (
    <div className="rounded-[20px] row-span-2 col-span-1 px-8 py-14 relative overflow-hidden flex items-center">
      {image && (
        <Image
          src={image}
          alt={title}
          title={title}
          className="absolute left-0 right-0 top-0 bottom-0 pointer-events-none user-select-none w-full h-full object-cover"
          width={980}
          height={580}
        />
      )}

      <div
        style={{ backgroundImage: 'linear-gradient(90deg, #068374 0%, rgba(6, 131, 116, 0.00) 89.64%)' }}
        className="absolute left-0 right-11 top-0 bottom-0"
      ></div>
      <div
        style={{ backgroundImage: 'linear-gradient(90deg, #068374 0%, rgba(6, 131, 116, 0.00) 89.64%)' }}
        className="absolute left-0 right-11 top-0 bottom-0"
      ></div>

      <div className="w-[214.7px] h-[88.793px] absolute bg-white bg-opacity-75 rounded-[10px] backdrop-blur-[4.93px] z-20 text-[16.443px] leading-[106.5%] pt-[23.14px] pl-[16.44px] left-[51.73469387755102%] top-[37.97586206896552%] text-firefly-900">
        <div className="rounded-full bg-gradient-suportlizt-2 w-[29.598px] h-[29.598px] flex items-center justify-center left-[7.52px] top-[-19.26px] absolute">
          <SupportlyzIcon width={28.658} height={23.02} className="-scale-y-100 text-white" />
        </div>
        <div className="opacity-70 w-[148px]">
          You have received a{' '}
          <span className="bg-clip-text text-transparent font-semibold leading-[106.5%] bg-gradient-suportlizt-1">
            Supportlyz
          </span>{' '}
          notification
        </div>
      </div>

      <div className="relative z-10">
        <h3 className="leading-normal text-[40px] font-semibold max-w-md">{title}</h3>
        <div className="my-4 h-1.5 w-28 rounded-3xl bg-malachite-500"></div>
        <p className="leading-normal text-lg font-medium max-w-[364px] mb-10">{description}</p>
        <a href={link} className={`btn mt-auto text-lg leading-normal bg-emerald-500 h-[52px] w-[201px] z-10`}>
          Get Started
        </a>
      </div>
    </div>
  )
}

export default function BenefitsExperienceSection({ className = '' }: { className?: string }) {
  return (
    <section className={`text-firefly-900 container ${className}`}>
      <div className="text-center mb-[60px]">
        <h2 className="text-[52px] leading-[50px] tracking-0.1 mb-6">
          <span className="text-elf-green-700 font-semibold">More benefits,</span> better experience
        </h2>
      </div>

      <div className="grid grid-rows-2 grid-cols-benefits-experience gap-9 h-[580px] text-white">
        <BigCard {...benefitsExperience.big} />

        {benefitsExperience.small.map((data, i: number) => (
          <SmallCard key={i} title={data.title} description={data.description} video={data.video} image={data.image} />
        ))}
      </div>
    </section>
  )
}
