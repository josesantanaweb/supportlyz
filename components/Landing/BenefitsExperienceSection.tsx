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
    <div className="rounded-[10px] md:rounded-[20px] md:row-span-1 md:col-span-1 px-4 md:px-8 py-8 md:pt-[67px] md:pb-8 bg-elf-green-700 relative overflow-hidden">
      {video && (
        <div className="rounded-[10px] md:rounded-[20px] overflow-hidden left-0 right-0 top-0 bottom-0 absolute">
          <video
            src={video}
            autoPlay
            loop
            muted
            className="absolute left-0 right-0 top-0 bottom-0 object-cover h-full w-full mix-blend-soft-light pointer-events-none user-select-none"
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

      <div className="relative z-10 max-md:flex max-md:flex-col max-md:items-center">
        <h3 className="leading-normal text-lg md:text-[25px] font-bold max-w-[240px] md:max-w-md max-md:text-center">
          {title}
        </h3>
        <div className="mt-4 mb-3.5 h-1 md:h-1.5 w-44 md:w-28 rounded-3xl bg-emerald-500"></div>
        <p className="leading-normal text-sm font-medium">{description}</p>
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
    <div className="rounded-[10px] md:rounded-[20px] md:row-span-2 md:col-span-1 px-4 md:px-8 py-8 md:py-14 relative overflow-hidden flex items-start md:items-center max-md:justify-center">
      {image && (
        <Image
          src={image}
          alt={title}
          title={title}
          className="absolute md:left-0 right-[-75px] md:right-0 top-[117px] md:top-0 md:bottom-0 pointer-events-none user-select-none max-md:min-w-[758px] w-[758px] md:w-full h-[454px] md:h-full object-cover"
          width={980}
          height={580}
        />
      )}

      <div className="max-md:hidden">
        {Array.from({ length: 2 }).map((_, i) => (
          <div
            key={i}
            style={{ backgroundImage: 'linear-gradient(90deg, #068374 0%, rgba(6, 131, 116, 0.00) 89.64%)' }}
            className="absolute left-0 right-11 top-0 bottom-0"
          ></div>
        ))}
      </div>

      <div className="md:hidden w-full absolute h-full left-0 right-0 top-0 bottom-0">
        {Array.from({ length: 7 }).map((_, i) => (
          <div
            key={i}
            style={{ backgroundImage: 'linear-gradient(180deg, #068374 0%, rgba(6, 131, 116, 0.00) 89.64%)' }}
            className="absolute left-0 right-0 top-0 h-[350px]"
          ></div>
        ))}
      </div>

      <div className="max-md:relative">
        <div className="relative z-10 max-md:flex max-md:flex-col max-md:items-center">
          <h3 className="leading-normal text-lg md:text-[25px] font-semibold max-w-[191px] md:max-w-md max-md:text-center">
            {title}
          </h3>

          <div className="my-4 h-1 md:h-1.5 w-44 md:w-28 rounded-3xl bg-emerald-500"></div>

          <p className="text-sm md:text-base lg:text-sm md:font-medium max-w-[364px] mb-4 md:mb-6 max-md:text-justify !leading-normal">
            {description}
          </p>

          <a
            href={link}
            className={`btn mt-auto text-xs md:text-sm leading-normal bg-emerald-500 h-[44px] md:h-[52px] w-[160px] md:w-[138px] z-10 block`}
          >
            Get Started
          </a>
        </div>

        <div className="w-[133px] md:w-[214.7px] h-[56px] md:h-[88.793px] absolute bg-white bg-opacity-75 rounded-[6px] md:rounded-[10px] backdrop-blur-[4.93px] z-20 text-[11px] md:text-[16.443px] leading-[106.5%] p-2.5 md:pt-[23.14px] md:pl-[16.44px] max-md:bottom-[186px] max-md:top-[calc(100%+34px)] max-md:-translate-x-1/2 max-md:left-1/2 max-xl:left-[54%] xl:right-2.5 2xl:right-auto 2xl:left-[51.73469387755102%] top-[37.97586206896552%] text-firefly-900 max-md:ml-2.5">
          <div className="rounded-full bg-gradient-suportlizt-2 w-[18px] md:w-[29.598px] h-[18px] md:h-[29.598px] flex items-center justify-center left-0 md:left-[7.52px] top-[-13px] md:top-[-19.26px] absolute">
            <SupportlyzIcon className="-scale-y-100 text-white text-[14px] md:text-[23.02px]" />
          </div>

          <div className="opacity-70 w-[99px] md:w-[148px]">
            You have received a{' '}
            <span className="bg-clip-text text-transparent font-semibold leading-[106.5%] bg-gradient-suportlizt-1">
              Supportlyz
            </span>{' '}
            notification
          </div>
        </div>
      </div>
    </div>
  )
}

export default function BenefitsExperienceSection({ className = '' }: { className?: string }) {
  return (
    <section id='resources' className={`text-firefly-900 container ${className}`}>
      <div className="text-center mb-8 md:mb-[60px]">
        <h2 className="text-xl leading-normal md:text-[40px] md:leading-[50px] tracking-[0.1px] max-w-[274px] mx-auto md:max-w-none">
          <span className="text-elf-green-700 font-bold md:font-semibold">More benefits,</span> better experience
        </h2>
      </div>

      <div className="grid grid-rows-benefits-experience-mobile xl:grid-rows-2 xl:grid-cols-benefits-experience gap-8 md:gap-[38px] xl:h-[580px] text-white">
        <BigCard {...benefitsExperience.big} />

        {benefitsExperience.small.map((data, i: number) => (
          <SmallCard key={i} title={data.title} description={data.description} video={data.video} image={data.image} />
        ))}
      </div>
    </section>
  )
}
