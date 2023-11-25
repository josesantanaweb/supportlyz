/* eslint-disable react/no-multi-comp */
/* eslint-disable import/no-default-export */

import { PricesAndPlans } from '@/data/pricesAndPlans'

import { CheckIcon, CloseIcon, SupportlyzIcon } from '../UI/Icons'

interface IPricesAndPlans {
  name: string
  price: number
  pros: Array<string>
  cons: Array<string>
  link: string
}

const Feature = ({ className = '', children }: { className?: string; children: React.ReactNode }) => {
  return (
    <li className={`py-7.5 text-[22px] leading-normal first:border-t border-b flex items-center gap-2.5 ${className}`}>
      {children}
    </li>
  )
}

const PriceCard = ({ data, highlight }: { data: IPricesAndPlans; highlight: boolean }) => {
  const { name, price, pros, cons, link } = data

  return (
    <div
      className={`rounded-[20px] px-[73px] pt-9 pb-12 border-[3px] border-white relative overflow-hidden shadow-team-review flex flex-col items-center ${
        highlight ? 'text-white border-opacity-0 bg-elephant-900' : 'bg-geyser-100'
      }`}
    >
      <div className="font-medium leading-[50px] tracking-0.1 text-center mb-8">
        <h3 className={`text-[40px] mb-4 ${highlight ? 'text-emerald-500' : 'text-elf-green-700'}`}>{name}</h3>
        <p className="text-[52px]">${price}</p>
      </div>

      <ul className="mb-24 z-10">
        {pros.map((pro, i) => (
          <Feature key={i} className={highlight ? 'border-white border-opacity-50' : 'border-te-papa-green'}>
            <span className={highlight ? 'text-emerald-500' : 'text-elf-green-700'}>
              <CheckIcon width={34.897} height={32} />
            </span>
            <span>{pro}</span>
          </Feature>
        ))}

        {cons.map((con, i) => (
          <Feature key={i} className={highlight ? 'border-white border-opacity-50' : 'border-te-papa-green'}>
            <span className="text-tall-poppy-700">
              <CloseIcon width={32} height={32} />
            </span>
            <span>{con}</span>
          </Feature>
        ))}
      </ul>

      <a href={link} className={`btn mt-auto text-lg leading-normal bg-emerald-500 h-[52px] w-[201px] z-10`}>
        Start Free Trial
      </a>

      <SupportlyzIcon
        className="absolute bottom-[-185.42px] left-1/2 -translate-x-1/2 text-lochinvar-600 opacity-5 -scale-y-100"
        width={493.067}
        height={497.262}
      />
    </div>
  )
}

export default function PricesAndPlansSection({ className = '' }: { className?: string }) {
  return (
    <section className={`text-firefly-900 container ${className}`}>
      <div className="text-center mb-[60px]">
        <h2 className="text-[52px] leading-[50px] tracking-0.1 mb-6">
          <span className="text-elf-green-700 font-semibold">Prices</span> and Plans
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-[35px]">
        {PricesAndPlans.map((data, i: number) => (
          <PriceCard key={i} data={data} highlight={i === 1} />
        ))}
      </div>
    </section>
  )
}
