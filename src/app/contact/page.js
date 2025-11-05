import React from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Contact — Five Saints Energy',
  description: 'Get in touch with Five Saints Energy for free assessments, enquiries about grants, installations and support.',
  openGraph: {
    title: 'Contact — Five Saints Energy',
    description: 'Get in touch with Five Saints Energy for free assessments, enquiries about grants, installations and support.',
    url: 'https://www.fivesaintsenergy.co.uk/contact',
    images: [{ url: 'https://www.fivesaintsenergy.co.uk/hero.jpg', alt: 'Five Saints Energy' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact — Five Saints Energy',
    description: 'Get in touch with Five Saints Energy for free assessments and grant guidance.',
    images: ['https://www.fivesaintsenergy.co.uk/hero.jpg'],
  },
}

export default function ContactPage() {
  const phone = '0333 339 4847'
  const email = 'grants@fivesaintsenergy.co.uk'
  const address = 'Zenith House, Highlands Road, Solihull, B90 4PD'

  return (
    <main className="min-h-screen bg-white font-sans">
      {/* Hero */}
      <section className="relative bg-linear-to-br from-primary/90 to-primary/70 text-white pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">Get in touch</h1>
              <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto lg:mx-0">
                Have questions about switching to solar or want a free assessment? Reach out to our friendly team and we'll help you every step of the way.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a href={`tel:${phone.replace(/\s+/g,'')}`}>
                  <Button size="lg" className="font-semibold">
                    Call us
                    <Phone className="ml-2 w-5 h-5" />
                  </Button>
                </a>
                <a href={`mailto:${email}`}>
                  <Button size="lg" variant="outline" className="font-semibold">
                    Email us
                    <Mail className="ml-2 w-5 h-5" />
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 rounded-2xl p-6 border border-white/10 w-full mx-auto lg:ml-auto">
                <h3 className="text-xl font-bold text-white mb-4">Our Office is located in</h3>
                <p className="text-sm text-primary-foreground/90 mb-4">{address}</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex items-center gap-3 bg-white/5 border border-white/40 rounded-lg px-4 py-3">
                    <Phone className="w-5 h-5 text-white" />
                    <div>
                      <div className="text-sm text-primary-foreground/90 flex">Phone</div>
                      <a className="text-base font-medium text-white" href={`tel:${phone.replace(/\s+/g,'')}`}>{phone}</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white/5 border border-white/40 rounded-lg px-4 py-3">
                    <Mail className="w-5 h-5 text-white" />
                    <div>
                      <div className="text-sm text-primary-foreground/90">Email</div>
                      <a className="text-base font-medium text-white" href={`mailto:${email}`}>{email}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact + Map */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          <div>
            {/* <h2 className="text-2xl text-center font-bold my-2">Find us on the map</h2> */}
            <div className="w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden border">
              <iframe
                title="Five Saints Energy location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
