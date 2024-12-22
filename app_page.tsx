import Hero from '@/components/landing/Hero'
import SubscriptionPlans from '@/components/landing/SubscriptionPlans'
import Benefits from '@/components/landing/Benefits'
import Testimonials from '@/components/landing/Testimonials'
import Footer from '@/components/landing/Footer'
import SchemaMarkup from '@/components/SchemaMarkup'

export const metadata = {
  title: 'Property Management SaaS - Simplify Your Property Management',
  description: 'Effortlessly manage your properties with our flexible subscription plans. Maximize profits and streamline operations with our advanced property management tools.',
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SchemaMarkup />
      <Hero />
      <SubscriptionPlans />
      <Benefits />
      <Testimonials />
      <Footer />
    </div>
  )
}

