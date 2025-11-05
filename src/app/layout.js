import { Geist, Geist_Mono, trust } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import AppFooter from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata = {
  title: 'Five Saints Energy',
  description: 'Five Saints Energy — Solar PV, insulation and energy efficiency programmes. Free assessments, grant help and expert installations across the UK.',
  openGraph: {
    title: 'Five Saints Energy',
    description: 'Switch to solar, improve home efficiency, and access government-backed grants. Free assessments and expert installations.',
    url: 'https://www.fivesaintsenergy.co.uk',
    siteName: 'Five Saints Energy',
    images: [
      {
        url: 'https://www.fivesaintsenergy.co.uk/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Five Saints Energy — Solar panels on a home',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Five Saints Energy',
    description: 'Free assessments, grants guidance and professional solar & insulation installations.',
    images: ['https://www.fivesaintsenergy.co.uk/hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* JSON-LD Organization schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Five Saints Energy",
              url: "https://www.fivesaintsenergy.co.uk",
              logo: "https://www.fivesaintsenergy.co.uk/logo.svg",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+44 333 339 4847",
                  contactType: "customer service",
                  areaServed: "GB",
                  availableLanguage: ["English"]
                }
              ],
              sameAs: [
                "https://www.facebook.com/",
                "https://www.twitter.com/",
                "https://www.linkedin.com/"
              ]
            })
          }}
        />
        <Navbar />
        {children}
        <AppFooter/>
      </body>
    </html>
  );
}
