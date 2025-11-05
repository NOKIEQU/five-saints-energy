import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: 'Book Free Assessment — Five Saints Energy',
    description: 'Learn how to book a free home assessment for solar, insulation or heating upgrades. Simple 4-step process.',
    openGraph: {
        title: 'Book Free Assessment — Five Saints Energy',
        description: 'Learn how to book a free home assessment for solar, insulation or heating upgrades.',
        url: 'https://www.fivesaintsenergy.co.uk/appointment',
        images: [{ url: 'https://www.fivesaintsenergy.co.uk/hero.jpg', alt: 'Book a free assessment' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Book Free Assessment — Five Saints Energy',
        description: 'Book a free home assessment for solar, insulation or heating upgrades.',
        images: ['https://www.fivesaintsenergy.co.uk/hero.jpg'],
    },
}

const steps = [
    {
        title: "Request an appointment",
        description:
            "Tell us about your property and preferred time. You can use the contact form or call us directly.",
    },
    {
        title: "Site visit & assessment",
        description:
            "A qualified technician will visit, inspect the site and review options tailored to your needs.",
    },
    {
        title: "Proposal & scheduling",
        description:
            "We provide a clear proposal and schedule the work at a time that suits you.",
    },
    {
        title: "Installation & follow-up",
        description:
            "We complete the installation to high standards and follow up to ensure everything runs smoothly.",
    },
];

export default function Page() {
    return (
        <main className="lg:p-24">
            <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">How do I book?</h1>
                        <p className="text-xl text-gray-600">Here is the breakdown of the booking process.</p>
                    </div>

                    <div className="relative">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                            {steps.map((step, idx) => (
                                <div key={step.title} className="flex flex-col items-center text-center">
                                    <div className="relative z-10 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg mb-6">
                                        <span className="text-2xl font-bold text-white">{idx + 1}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                                    <p className="text-gray-600 max-w-xs">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <Link href="/contact" className="inline-block rounded-md bg-primary px-5 py-3 text-white font-semibold hover:bg-primary/90">Contact us now</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}