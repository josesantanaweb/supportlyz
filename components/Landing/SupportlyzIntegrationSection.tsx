/* eslint-disable react/no-multi-comp */
/* eslint-disable import/no-default-export */

import Image from 'next/image'

import { supportedTools } from '@/data/supportedTools'

const ProductCard = ({ name, image }: { name: string; image: string }) => {
  return (
    <div className="bg-geyser-100 rounded-[10px] md:rounded-[20px] px-8 flex items-center justify-center h-[84px] md:h-[167px] transition-all hover:shadow-customer-review relative group">
      <div className="rounded-[10px] md:rounded-[20px] absolute top-0 right-0 bottom-0 left-0 border border-white group-hover:border-[3px] "></div>
      <Image src={image} alt={name} title={name} width={208} height={35} className="max-h-[27px] md:max-h-[35px] object-contain" />
    </div>
  )
}

export default function SupportlyzIntegrationSection({ className = '' }: { className?: string }) {
  return (
    <section id='integrations' className={`text-firefly-900 container ${className}`}>
      <div className="text-center mb-8 md:mb-[60px]">
        <h2 className="text-xl leading-normal md:text-[40px] md:leading-[50px] tracking-[0.1px] max-w-[274px] mx-auto md:max-w-none">
          <span className="text-elf-green-700 font-bold md:font-semibold mt-4 md:mt-6">Supportlyz integrates</span> with all your work tools
        </h2>
        <p className="text-sm md:text-base leading-normal">Connect Tidio to dozens of ecommerce tools and platforms in less than 5 minutes.</p>
      </div>

      <div className="grid gap-2.5 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 md:gap-x-[38px] md:gap-y-[42px] md:max-w-[1507px] md:mx-auto">
        {supportedTools.map((tool) => (
          <ProductCard key={tool.name} name={tool.name} image={tool.image} />
        ))}
      </div>
    </section>
  )
}
