/* eslint-disable import/no-default-export */

import SupportlyzIntegrationSection from '@/components/Landing/SupportlyzIntegrationSection'
import OurCustomersReviewSection from '@/components/Landing/OurCustomersReviewSection'
import OurTeamReviewSection from '@/components/Landing/OurTeamReviewSection'
import FAQsSection from '@/components/Landing/FAQsSection'
import PricesAndPlans from '@/components/Landing/PricesAndPlans'
import BenefitsExperienceSection from '@/components/Landing/BenefitsExperienceSection'
import Footer from '@/components/Landing/Footer'

import 'swiper/css'
import 'swiper/css/navigation'

export default function Landing() {
  return (
    <div>
      <SupportlyzIntegrationSection className="mb-[205px]" />
      <OurCustomersReviewSection className="mb-[66px]" />
      <OurTeamReviewSection className="mb-[200px]" />
      <FAQsSection className="mb-[200px]" />
      <PricesAndPlans className="mb-[200px]" />
      <BenefitsExperienceSection className="mb-[200px]" />
      <Footer />
    </div>
  )
}
