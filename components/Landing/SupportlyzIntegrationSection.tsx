/* eslint-disable react/no-multi-comp */
/* eslint-disable import/no-default-export */

import Image from 'next/image'

import { supportedTools } from '@/data/supportedTools'

const ProductCard = ({ name, image }: { name: string; image: string }) => {
  return (
    <div className="bg-geyser-100 rounded-[20px] px-8 flex items-center justify-center h-[167px] transition-all hover:shadow-customer-review relative group">
      <div className="rounded-[20px] absolute top-0 right-0 bottom-0 left-0 border border-white group-hover:border-[3px] "></div>
      <Image src={image} alt={name} title={name} width={208} height={35} className="max-h-[35px] object-contain" />
    </div>
  )
}

export default function SupportlyzIntegrationSection({ className = '' }: { className?: string }) {
  return (
    <section className={`text-firefly-900 container ${className}`}>
      <div className="text-center mb-[60px]">
        <h2 className="text-[52px] leading-[50px] tracking-[0.1px] mb-5">
          <span className="text-elf-green-700 font-semibold">Supportlyz integrates</span> with all your work tools
        </h2>
        <p className="text-base">Connect Tidio to dozens of ecommerce tools and platforms in less than 5 minutes.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-[38px] gap-y-[42px] px-[107px]">
        {supportedTools.map((tool) => (
          <ProductCard key={tool.name} name={tool.name} image={tool.image} />
        ))}
      </div>
    </section>
  )
}
