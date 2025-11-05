import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChartNoAxesGantt, Home, MapPin } from 'lucide-react'

export const metadata = {
  title: '404 — Page not found — Five Saints Energy',
  description: 'The page you requested could not be found. Return home or contact Five Saints Energy for help.',
}

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center py-20 px-6">
      <div className="w-full max-w-3xl text-center">
        <div className="inline-flex items-center justify-center mb-6 w-24 h-24 rounded-full bg-primary/10 mx-auto">
          <ChartNoAxesGantt className="w-12 h-12 text-primary" />
        </div>

        <h1 className="text-6xl font-extrabold text-gray-900">404</h1>
        <p className="mt-4 text-xl text-gray-700">Sorry — we couldn’t find the page you’re looking for.</p>
        <p className="mt-2 text-sm text-gray-500">It may have been moved, renamed, or might never have existed. Try one of the options below.</p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/" className="w-full sm:w-auto">
            <Button size="lg" className="px-6 py-3 inline-flex items-center gap-2">
              <Home className="w-4 h-4" />
              Home
            </Button>
          </Link>

          <Link href="/contact" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="px-6 py-3 inline-flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Contact us
            </Button>
          </Link>
        </div>

        <div className="mt-10 text-sm text-gray-600">
          <p>If you believe this is an error, please <Link href="/contact" className="font-medium text-primary underline">get in touch</Link> and we'll help you find what you need.</p>
        </div>
      </div>
    </main>
  )
}
