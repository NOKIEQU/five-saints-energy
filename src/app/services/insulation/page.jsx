import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export const metadata = {
    title: 'Insulation Services — Five Saints Energy',
    description: 'Cavity, loft and solid wall insulation services with grant support where eligible — improve comfort and reduce energy bills.',
    openGraph: {
        title: 'Insulation Services — Five Saints Energy',
        description: 'Cavity, loft and solid wall insulation services with grant support where eligible.',
        url: 'https://www.fivesaintsenergy.co.uk/services/insulation',
        images: [{ url: 'https://www.fivesaintsenergy.co.uk/hero.jpg', alt: 'Insulation services' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Insulation Services — Five Saints Energy',
        description: 'Cavity, loft and solid wall insulation services with grant support where eligible.',
        images: ['https://www.fivesaintsenergy.co.uk/hero.jpg'],
    },
}

export default function InsulationPage() {
    return (
        <main className="min-h-screen bg-white font-sans">
            <section className="relative bg-linear-to-br from-primary to-primary/80 text-white pt-28 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-extrabold">Insulation Services</h1>
                        <p className="mt-4 text-lg text-primary-foreground/90 max-w-3xl mx-auto lg:mx-0">
                            Improve your home's energy efficiency and comfort with professional, grant-backed insulation installations across the UK.
                        </p>

                        <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-4 lg:justify-start justify-center">
                            <Link href="/appointement">
                                <Button size="lg" className="font-semibold">Get a free quote</Button>
                            </Link>
                         
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 px-4 sm:px-6 lg:px-8">
                
                <div className="max-w-7xl mx-auto space-y-10">
                    <div className="mt-8">
                        <div className="rounded-lg overflow-hidden">
                            <Image src="/hero.jpg" alt="Insulation banner" width={1600} height={400} className="w-full h-48 sm:h-64 object-cover" />
                        </div>
                    </div>
                    {/* Cavity Wall Insulation */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-extrabold">Cavity Wall Insulation — Reduce Heat Loss & Lower Bills</h2>
                            <p className="text-gray-700">If your home was built after the 1920s it likely has cavity walls. Without insulation, up to 33% of heat can escape through these walls. Our cavity wall insulation service helps improve energy efficiency, reduce heat loss and lower your heating bills.</p>

                            <div className="rounded-lg bg-primary/5 p-6">
                                <h4 className="text-lg font-bold mb-2">Discover if you qualify for 100% FREE energy efficiency upgrades!</h4>
                                <p className="text-gray-700 mb-3">You may be eligible for free cavity wall insulation under national schemes such as ECO4, GBIS or local authority grants.</p>
                                <div>
                                    <Link href="/appointement">
                                        {/* How it works + suitability */}
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold">Benefits of Cavity Wall Insulation</h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li><strong>Lower energy bills</strong> — save up to £400/year by preventing heat loss.</li>
                                <li><strong>Improved home comfort</strong> — more consistent indoor temperatures.</li>
                                <li><strong>Eco-friendly</strong> — reduce your carbon footprint and improve EPC ratings.</li>
                                <li><strong>Fast & clean installation</strong> — most jobs completed within a day.</li>
                            </ul>

                            <div className="rounded-lg bg-white p-4 shadow-sm">
                                <h4 className="font-medium mb-2">Costs & Grants</h4>
                                <p className="text-gray-700">Typical costs range from £500–£1,500 depending on property size. Many homeowners qualify for 100% free cavity wall insulation through:</p>
                                <ul className="list-disc list-inside text-gray-700 mt-2">
                                    <li>ECO4 Scheme</li>
                                    <li>Great British Insulation Scheme (GBIS)</li>
                                    <li>Local Authority Flex (LA Flex)</li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    {/* How it works + suitability */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="rounded-lg bg-white p-6 shadow-sm">
                            <h3 className="text-xl font-semibold mb-3">How cavity wall insulation works</h3>
                            <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                <li>Small holes are drilled into the exterior walls.</li>
                                <li>Insulation material (mineral wool or polystyrene beads) is injected into the cavity.</li>
                                <li>Holes are filled and matched to existing brickwork — keeping your home's appearance unchanged.</li>
                            </ol>
                            <p className="text-gray-700 mt-4">Installation is typically quick and minimally disruptive.</p>
                        </div>

                        <div className="rounded-lg bg-white p-6 shadow-sm">
                            <h3 className="text-xl font-semibold mb-3">Who is it for?</h3>
                            <ul className="text-gray-700 list-disc list-inside space-y-2">
                                <li>Homes built between 1920–2000</li>
                                <li>Brick walls with a cavity of 50mm or more</li>
                                <li>Properties in sound structural condition</li>
                                <li>Households aiming to improve energy efficiency and reduce bills</li>
                            </ul>
                            <p className="mt-3 text-gray-700">Not sure if your home is suitable? We offer free home surveys and expert advice.</p>
                        </div>
                    </div>
                    <div className="md:mt-48">
                        <div className="rounded-lg overflow-hidden">
                            <Image src="/hero.jpg" alt="Insulation banner" width={1600} height={400} className="w-full h-48 sm:h-64 object-cover" />
                        </div>
                    </div>
                    {/* Loft Insulation */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-extrabold">Loft Insulation — Keep the Heat In</h2>
                            <p className="text-gray-700">Loft insulation is one of the most cost-effective ways to reduce heat loss; approximately 25% of heat can escape through an uninsulated roof. Proper loft insulation keeps your home warmer and reduces heating bills.</p>

                            <div className="rounded-lg bg-primary/5 p-6">
                                <h4 className="text-lg font-bold mb-2">Discover if you qualify for 100% FREE energy efficiency upgrades!</h4>
                                <p className="text-gray-700 mb-3">Many homeowners can access grant-funded loft insulation through ECO4, GBIS and LA Flex programmes.</p>
                                <div>
                                    <Link href="/appointement">
                                        <Button size="lg" className="font-semibold">Book a free loft survey</Button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold">Benefits of Loft Insulation</h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>Lower energy bills — save up to £300/year.</li>
                                <li>Comfortable temperatures year-round.</li>
                                <li>Eco-friendly — reduces carbon emissions and improves EPC rating.</li>
                                <li>Quick & hassle-free installation — often completed in a few hours.</li>
                            </ul>

                            <h4 className="font-medium mt-3">Types we offer</h4>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                <li>Blanket insulation (mineral wool rolls)</li>
                                <li>Blown-fibre insulation for hard-to-reach areas</li>
                                <li>Rigid board insulation for loft conversions</li>
                                <li>Eco-friendly options (sheep’s wool, recycled materials)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="md:mt-48">
                        <div className="rounded-lg overflow-hidden">
                            <Image src="/hero.jpg" alt="Insulation banner" width={1600} height={400} className="w-full h-48 sm:h-64 object-cover" />
                        </div>
                    </div>
                    {/* Solid Wall Insulation */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-extrabold">Solid Wall Insulation — Older Homes, Better Performance</h2>
                            <p className="text-gray-700">Solid wall properties (commonly built before the 1920s) lose significant heat — sometimes up to 45% through walls. We provide both external and internal solid wall insulation solutions to make these homes warmer and more efficient.</p>

                            <div className="rounded-lg bg-primary/5 p-6">
                                <h4 className="text-lg font-bold mb-2">Grant-backed upgrades available</h4>
                                <p className="text-gray-700 mb-3">Solid wall insulation is often eligible for support under ECO4 and local grant programmes. We’ll check your eligibility and explain the options.</p>
                                <div>
                                    <Link href="/appointement">
                                        <Button size="lg" className="font-semibold">Request a survey</Button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold">External vs Internal Insulation</h3>
                            <p className="text-gray-700">External wall insulation adds a thermal layer to the outside of the property and improves appearance with a protective finish. Internal insulation preserves the exterior look but changes internal dimensions slightly.</p>

                            <h4 className="font-medium mt-3">Why choose solid wall insulation?</h4>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>Significant energy savings for older properties</li>
                                <li>Improves comfort and reduces drafts</li>
                                <li>Can increase property value and EPC rating</li>
                            </ul>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="rounded-lg bg-white p-6 text-center shadow-sm">
                            <h4 className="text-2xl font-extrabold">Fast installation</h4>
                            <p className="text-gray-600">Most cavity jobs completed within a day</p>
                        </div>
                        <div className="rounded-lg bg-white p-6 text-center shadow-sm">
                            <h4 className="text-2xl font-extrabold">Grant support</h4>
                            <p className="text-gray-600">We help with ECO4, GBIS and local grants</p>
                        </div>
                        <div className="rounded-lg bg-white p-6 text-center shadow-sm">
                            <h4 className="text-2xl font-extrabold">Nationwide</h4>
                            <p className="text-gray-600">UK-wide coverage and free surveys</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
