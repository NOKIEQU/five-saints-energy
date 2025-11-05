import React from 'react'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Heating Services — Five Saints Energy',
  description: 'High-efficiency heating systems including heat pumps, boilers and hybrid options — installation and maintenance to lower running costs.',
  openGraph: {
    title: 'Heating Services — Five Saints Energy',
    description: 'High-efficiency heating systems including heat pumps, boilers and hybrid options.',
    url: 'https://www.fivesaintsenergy.co.uk/services/heating',
    images: [{ url: 'https://www.fivesaintsenergy.co.uk/hero.jpg', alt: 'Heating services' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Heating Services — Five Saints Energy',
    description: 'High-efficiency heating systems including heat pumps, boilers and hybrid options.',
    images: ['https://www.fivesaintsenergy.co.uk/hero.jpg'],
  },
}

export default function HeatingPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <section className="relative bg-linear-to-br from-primary to-primary/80 text-white pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-extrabold">Heating Services</h1>
            <p className="mt-4 text-lg text-primary-foreground/90 max-w-3xl mx-auto lg:mx-0">
              High-efficiency heating systems, maintenance and upgrades to reduce running costs and improve warmth throughout your home.
            </p>
            <div className="mt-6">
              <Button size="lg" className="font-semibold">Book a Consultation</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Our heating solutions</h2>
          <p className="text-gray-700">We install and service gas boilers, heat pumps, and hybrid systems, offering tailored options that suit your home and budget.</p>
        </div>
      </section>
    </main>
  )
}
