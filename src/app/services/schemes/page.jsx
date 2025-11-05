import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Government Schemes — ECO4 & GBIS — Five Saints Energy',
  description: 'Information and help to access ECO4, GBIS and other government energy efficiency schemes — check eligibility and apply with our support.',
  openGraph: {
    title: 'Government Schemes — ECO4 & GBIS — Five Saints Energy',
    description: 'Information and help to access ECO4, GBIS and other government energy efficiency schemes.',
    url: 'https://www.fivesaintsenergy.co.uk/services/schemes',
    images: [{ url: 'https://www.fivesaintsenergy.co.uk/hero.jpg', alt: 'ECO4 & GBIS schemes' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Government Schemes — ECO4 & GBIS',
    description: 'Information and help to access ECO4, GBIS and other energy efficiency schemes.',
    images: ['https://www.fivesaintsenergy.co.uk/hero.jpg'],
  },
}

export default function SchemesPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <section className="relative bg-linear-to-br from-primary to-primary/80 text-white pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-extrabold">Government Schemes</h1>
            <p className="mt-4 text-lg text-primary-foreground/90 max-w-3xl mx-auto lg:mx-0">
              Information on government-backed energy efficiency programmes such as ECO4 and the Great British Insulation Scheme (GBIS). We can help you identify which schemes you may qualify for and guide you through applications.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-4 lg:justify-start justify-center">
              <Link href="/appointement">
                <Button size="lg" className="font-semibold">Check scheme eligibility</Button>
              </Link>
             
            </div>
          </div>
        </div>
      </section>

      {/* ECO4 section (styled similar to GBIS) */}
      <section id="eco4" className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold">ECO4 — Energy Company Obligation (Phase 4)</h2>
            <p className="mt-3 text-lg text-gray-700 max-w-3xl mx-auto">ECO4 offers funded measures to improve energy efficiency for eligible households, focusing on reducing carbon emissions and tackling fuel poverty.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-2">What ECO4 provides</h3>
                <p className="text-gray-700 mb-3">ECO4 funds a range of energy-saving measures, including insulation, heating upgrades, and support for renewable technologies where appropriate. These measures aim to lower bills, improve home comfort and reduce carbon output.</p>

                <h4 className="font-medium mb-2">Common measures</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Loft, cavity and solid wall insulation</li>
                  <li>Boiler and heating system upgrades</li>
                  <li>Heat pumps and other low-carbon heating technologies</li>
                  <li>Smart heating controls and efficiency improvements</li>
                </ul>
              </div>

              <div className="rounded-lg bg-primary/5 p-6">
                <h4 className="text-lg font-bold mb-2">Help with applications</h4>
                <p className="text-gray-700 mb-3">We can assess your property, check ECO4 eligibility, and manage the application and installation process on your behalf.</p>
                <div>
                  <Link href="/appointement">
                    <Button size="lg" className="font-semibold">Check eligibility</Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Who can apply?</h3>
                <p className="text-gray-700 mb-3">ECO4 primarily targets low-income and vulnerable households, particularly those with lower EPC ratings (D, E, F or G). Eligibility often depends on benefits, property energy performance and local programme rules.</p>

                <h4 className="font-medium mb-2">Qualifying benefits (examples)</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1 mb-3">
                  <li>Income-based Job Seekers Allowance</li>
                  <li>Income-related Employment and Support Allowance (ESA)</li>
                  <li>Income Support / Pension Credit</li>
                  <li>Working Tax Credit / Child Tax Credit / Universal Credit</li>
                  <li>Housing Benefit</li>
                </ul>

                <details className="mt-2">
                  <summary className="cursor-pointer font-medium">Am I eligible? — Read more</summary>
                  <div className="mt-3 text-gray-700 space-y-3">
                    <div>
                      <strong>Typical eligibility routes</strong>
                      <p className="mt-1">Eligibility can be via low income, benefits or poor energy performance (low EPC). Local suppliers and delivery partners administer the grants and will confirm eligibility after a survey.</p>
                    </div>
                  </div>
                </details>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Why act now?</h3>
                <p className="text-gray-700">ECO4 runs until 31 March 2026. Funding is limited and demand is high — early applications improve the chance of receiving support.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-lg bg-white p-6 text-center shadow-sm">
              <h4 className="text-2xl font-extrabold">Free grants</h4>
              <p className="text-gray-600">Up to 100% funding where eligible</p>
            </div>
            <div className="rounded-lg bg-white p-6 text-center shadow-sm">
              <h4 className="text-2xl font-extrabold">Broad measures</h4>
              <p className="text-gray-600">Insulation, heating upgrades and low-carbon tech</p>
            </div>
            <div className="rounded-lg bg-white p-6 text-center shadow-sm">
              <h4 className="text-2xl font-extrabold">Deadline</h4>
              <p className="text-gray-600">Scheme runs to Mar 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* GBIS section */}
      <section id="gbis" className="py-12 lg:py-36 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold">Great British Insulation Scheme (GBIS)</h2>
            <p className="mt-3 text-lg text-gray-700 max-w-3xl mx-auto">The Great British Insulation Scheme is a government initiative to improve energy efficiency in eligible homes by providing free or discounted insulation installations. It runs alongside ECO4 and focuses specifically on insulation measures to keep homes warmer and reduce energy bills.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-2">What GBIS provides</h3>
                <p className="text-gray-700 mb-3">GBIS funds or subsidises insulation work to help households retain heat, reduce bills and improve comfort. Installations typically take 2–7 days depending on the property and work scope.</p>

                <h4 className="font-medium mb-2">Types of insulation</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Cavity wall insulation</li>
                  <li>Internal or external solid wall insulation</li>
                  <li>Loft insulation</li>
                  <li>Flat or pitched roof insulation</li>
                  <li>Underfloor and solid floor insulation</li>
                  <li>Park home insulation</li>
                  <li>Room-in-roof insulation</li>
                </ul>
              </div>

              <div className="rounded-lg bg-primary/5 p-6">
                <h4 className="text-lg font-bold mb-2">Free installations where eligible</h4>
                <p className="text-gray-700 mb-3">This funded upgrade reduces heating bills and ensures a warmer, more comfortable home for you and your family — completely free of charge where eligibility criteria are met.</p>
                <div>
                  <Link href="/appointement">
                    <Button size="lg" className="font-semibold">Find out if I qualify</Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Eligibility criteria</h3>
                <p className="text-gray-700 mb-3">GBIS eligibility depends on property type, EPC rating, tenure and household income. Below are the common routes to eligibility.</p>

                <h4 className="font-medium mb-2">Qualifying benefits (examples)</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1 mb-3">
                  <li>Income-based Job Seekers Allowance</li>
                  <li>Income-related Employment and Support Allowance (ESA)</li>
                  <li>Income Support</li>
                  <li>Pension Credit / Guarantee Credit</li>
                  <li>Working Tax Credit / Child Tax Credit / Universal Credit</li>
                  <li>Housing Benefit</li>
                </ul>

                <details className="mt-2">
                  <summary className="cursor-pointer font-medium">Am I eligible? — Read the groups</summary>
                  <div className="mt-3 text-gray-700 space-y-3">
                    <div>
                      <strong>General Group</strong>
                      <p className="mt-1">You may qualify if you live in council tax bands A–D (England) or A–E (Scotland) and have an EPC rating of D–G. Private renters may qualify if their EPC rating is D or E.</p>
                    </div>

                    <div>
                      <strong>Low-income Group</strong>
                      <p className="mt-1">If you receive qualifying benefits and live in the least energy-efficient housing (EPC D–G), you may be eligible for free or lower-cost insulation. Owner-occupiers may also receive heating controls where appropriate.</p>
                    </div>
                  </div>
                </details>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-2">How insulation saves energy</h3>
                <p className="text-gray-700">Insulation reduces the amount of heat lost through walls, roofs and floors, meaning your heating system uses less energy to maintain a comfortable temperature. Over time this reduces bills and carbon emissions.</p>
                <p className="text-gray-700 mt-3">Think of insulation as wrapping your home in a warm blanket — it keeps heat where you need it and reduces the workload on your boiler.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-lg bg-white p-6 text-center shadow-sm">
              <h4 className="text-2xl font-extrabold">2–7 days</h4>
              <p className="text-gray-600">Typical installation time</p>
            </div>
            <div className="rounded-lg bg-white p-6 text-center shadow-sm">
              <h4 className="text-2xl font-extrabold">100% funding</h4>
              <p className="text-gray-600">Where eligibility is met</p>
            </div>
            <div className="rounded-lg bg-white p-6 text-center shadow-sm">
              <h4 className="text-2xl font-extrabold">Runs to Mar 2026</h4>
              <p className="text-gray-600">Time-limited scheme</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
