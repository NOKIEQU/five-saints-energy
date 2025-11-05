import React from 'react'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Renewable Energy Solutions — Five Saints Energy',
  description: 'Solar PV, battery storage and hybrid solutions to maximise energy independence and savings for homes and businesses.',
  openGraph: {
    title: 'Renewable Energy Solutions — Five Saints Energy',
    description: 'Solar PV, battery storage and hybrid solutions to maximise energy independence and savings.',
    url: 'https://www.fivesaintsenergy.co.uk/services/renewable',
    images: [{ url: 'https://www.fivesaintsenergy.co.uk/hero.jpg', alt: 'Renewable energy solutions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Renewable Energy Solutions — Five Saints Energy',
    description: 'Solar PV, battery storage and hybrid solutions to maximise savings.',
    images: ['https://www.fivesaintsenergy.co.uk/hero.jpg'],
  },
}

export default function RenewablePage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <section className="relative bg-linear-to-br from-primary to-primary/80 text-white pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-extrabold">Renewable Energy Solutions</h1>
            <p className="mt-4 text-lg text-primary-foreground/90 max-w-3xl mx-auto lg:mx-0">
              Solar PV, battery storage and integrated energy solutions designed to maximise your energy independence and savings.
            </p>
            <div className="mt-6">
              <Button size="lg" className="font-semibold">Explore Solutions</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Systems we provide</h2>
          <p className="text-gray-700">We design and install solar PV, battery storage and hybrid systems for homes and businesses, optimised for performance and ROI.</p>
        </div>
      </section>
    </main>
  )
}
