import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export const metadata = {
    title: 'Other Services — Five Saints Energy',
    description: 'Additional services and partner sites provided by Five Saints Energy. Visit partner sites for more specialised offerings.',
    openGraph: {
        title: 'Other Services — Five Saints Energy',
        description: 'Additional services and partner sites provided by Five Saints Energy.',
        url: 'https://www.fivesaintsenergy.co.uk/services/other',
        images: [{ url: 'https://www.fivesaintsenergy.co.uk/hero.jpg', alt: 'Other services' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Other Services — Five Saints Energy',
        description: 'Additional services and partner sites provided by Five Saints Energy.',
        images: ['https://www.fivesaintsenergy.co.uk/hero.jpg'],
    },
}

function page() {
    return (
        <main className="min-h-screen bg-white font-sans">
            <section className="relative bg-linear-to-br from-primary to-primary/80 text-white pt-28 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-extrabold">Other Services</h1>
                        <p className="mt-4 text-lg text-primary-foreground/90 max-w-3xl mx-auto lg:mx-0">
                            In addition to our core offerings, we provide a range of other services.
                        </p>

                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto space-y-6 my-8 px-4 sm:px-6 lg:px-8">
                <Link
                    href="https://fselegal.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit FSE Legal"
                    className="block bg-yellow-400 text-black rounded-lg shadow-md hover:bg-yellow-500 transition-colors"
                >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-6 sm:p-8 md:p-10 md:py-24">
                        <div className="flex items-center gap-4 sm:gap-8 w-full sm:w-auto">
                            <div className="shrink-0 w-24 sm:w-32 md:w-40">
                                <Image src="/logo.svg" alt="FSE Legal Logo" width={160} height={54} className="w-full h-auto" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">FSE Legal</h2>
                                <p className="text-sm sm:text-base">Legal services and advice — visit fselegal.co.uk</p>
                                <p className="text-sm sm:text-base">
                                    Secure your loved ones' future today — tomorrow is never promised.
                                </p>
                            </div>
                        </div>

                        <span className="mt-2 sm:mt-0 inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 border-2 border-black rounded-full text-base sm:text-lg font-medium">
                            Visit site
                        </span>
                    </div>
                </Link>

                <Link
                    href="https://bulliondirectlink.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Bullion Direct Link"
                    className="block bg-black text-white rounded-lg shadow-md hover:opacity-90 transition-opacity"
                >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-6 sm:p-8 md:p-10 md:py-24">
                        <div className="flex items-center gap-4 sm:gap-8 w-full sm:w-auto">
                            <div className="flex-shrink-0">
                                {/* fallback large letter as logo */}
                                <div className="text-6xl sm:text-8xl md:text-9xl font-extralight leading-none">B</div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Bullion Direct Link</h2>
                                <p className="text-sm sm:text-base">Bullion gold and jewelry — visit bulliondirectlink.co.uk</p>
                                <p className="text-sm sm:text-base">Invest in precious metals for a secure financial future.</p>
                            </div>
                        </div>

                        <span className="mt-2 sm:mt-0 inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 border-2 border-white rounded-full text-base sm:text-lg font-medium">
                            Visit site
                        </span>
                    </div>
                </Link>
            </div>
        </main>
    )
}

export default page