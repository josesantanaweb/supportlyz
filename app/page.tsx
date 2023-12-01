/* eslint-disable import/no-default-export */

import Image from 'next/image'

import SupportlyzIntegrationSection from '@/components/Landing/SupportlyzIntegrationSection'
import OurCustomersReviewSection from '@/components/Landing/OurCustomersReviewSection'
import OurTeamReviewSection from '@/components/Landing/OurTeamReviewSection'
import FAQsSection from '@/components/Landing/FAQsSection'
import PricesAndPlans from '@/components/Landing/PricesAndPlans'
import BenefitsExperienceSection from '@/components/Landing/BenefitsExperienceSection'
import Footer from '@/components/Landing/Footer'

import { Header } from '@/components/Landing/Layout/Header'
import { ProductDescription } from '@/components/Landing/ProductDescription'
import { BeyondService } from '@/components/Landing/BeyondService'

import 'swiper/css'
import 'swiper/css/navigation'

export default function Home() {
  return (
    <main>
      <Header />
      <ProductDescription />
      <BeyondService />

      <div className="relative overflow-hidden">
        <Image
          src="/static/images/shape-3.svg"
          alt="shape"
          width={528}
          height={585}
          className="absolute z-0 rotate-180 md:rotate-[132.835deg] max-md:right-[-93px] md:left-[-353px] top-[1144px] md:top-[1440px] max-md:w-[155.226px] max-md:h-[160.873px]"
        />

        <Image
          src="/static/images/shape-3.svg"
          alt="shape"
          width={528}
          height={585}
          className="absolute z-0 rotate-[140deg] md:rotate-[128.835deg] max-md:left-[-110px] right-auto md:right-[-354px] top-[1637px] md:top-[2037px] max-md:w-[155.226px] max-md:h-[160.873px]"
        />

        <Image
          src="/static/images/shape-3.svg"
          alt="shape"
          width={528}
          height={585}
          className="absolute z-0 rotate-[140deg] md:rotate-[128.835deg] max-md:right-[-110px] left-auto md:left-[-354px] top-[3034px] md:top-[3332px] max-md:w-[155.226px] max-md:h-[160.873px]"
        />

        <div className='relative z-10'>
          <SupportlyzIntegrationSection className="mb-20 md:mb-[140px]" />
          <OurCustomersReviewSection className="mb-8 md:mb-[85px]" />
          <OurTeamReviewSection className="mb-20 md:mb-[140px]" />
          <FAQsSection className="mb-20 md:mb-[140px]" />
          <PricesAndPlans className="mb-20 md:mb-[140px]" />
          <BenefitsExperienceSection className="mb-[100px] md:mb-[200px]" />
          <Footer />
        </div>
      </div>
    </main>
  )
}
