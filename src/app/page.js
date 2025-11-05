import React from 'react';
import {
  Sun,
  ArrowRight,
  Zap,
  Shield,
  TrendingDown,
  Clock,
  Award,
  Leaf,
  Check,
  Menu,
  X,
  ChevronRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

import Image from 'next/image';

import AppHeader from './components/navbar';
import AppFooter from './components/footer';
import Link from 'next/link';

export const metadata = {
  title: 'Five Saints Energy — Solar & Energy Efficiency',
  description: 'Switch to solar, improve home efficiency, and access government-backed grants. Free assessments and expert installations.',
}



function HomePage() {
  const whyChooseUsFeatures = [
    {
      icon: Zap,
      bgColor: 'bg-primary',
      iconColor: 'text-white',
      title: 'No Upfront Costs',
      description: 'Start solar today without paying a penny upfront. Zero installation bills.'
    },
    {
      icon: Clock,
      bgColor: 'bg-primary',
      iconColor: 'text-white',
      title: 'Flexible Lease Options',
      description: 'Choose terms from 5 to 25 years to suit your budget and savings goals.'
    },
    {
      icon: Shield,
      bgColor: 'bg-primary',
      iconColor: 'text-white',
      title: 'All-Inclusive Repairs & Monitoring',
      description: 'Enjoy a worry-free system maintained by Emerald Green Energy for the full lease term.'
    },
    {
      icon: Award,
      bgColor: 'bg-primary',
      iconColor: 'text-white',
      title: 'Expert Installation & Maintenance',
      description: 'Accredited, trusted, and fully compliant installations by certified professionals.'
    },
    {
      icon: TrendingDown,
      bgColor: 'bg-primary',
      iconColor: 'text-white',
      title: 'FCA-Regulated Finance',
      description: 'Lease agreements through HTG Finance Limited (trading as Home Tree Finance, FCA Reg. No 825534).'
    },
    {
      icon: Leaf,
      bgColor: 'bg-primary',
      iconColor: 'text-white',
      title: 'Sustainable Savings',
      description: 'Reduce your carbon footprint while cutting energy bills significantly.'
    }
  ];

  const howItWorksSteps = [
    {
      step: 1,
      title: 'Free Assessment',
      description: 'Book a free, no-obligation home survey to see if your home is suitable for solar.'
    },
    {
      step: 2,
      title: 'Choose Your Plan',
      description: 'Select a flexible lease from 5 to 25 years with zero upfront cost.'
    },
    {
      step: 3,
      title: 'Expert Installation',
      description: 'Our certified partners at Emerald Green Energy install your system.'
    },
    {
      step: 4,
      title: 'Save Immediately',
      description: 'Start generating your own clean electricity and saving on your bills from day one.'
    }
  ];

  const accreditations = [
    { name: 'MCS', full: 'Microgeneration Certification Scheme', image: "/mcs.png" },
    { name: 'RECC', full: 'Renewable Energy Consumer Code', image: "/rec.png" },
    { name: 'HIES', full: 'Home Insulation & Energy Systems', image: "/hies.jpg" },
    { name: 'NICEIC', full: 'National Inspection Council', image: "/nic.png" },
    { name: 'TrustMark', full: 'Government-Endorsed Quality', image: "/trust.png" }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-primary via-primary to-indigo-900 text-white pt-36 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="flex justify-center lg:justify-start">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                  <Sun className="w-5 h-5 text-yellow-300" />
                  <span className="text-sm font-semibold">Powered by Emerald Green Energy</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
                Switch to Solar With £0 Upfront Cost!
              </h1>
              <p className="text-xl text-primary-foreground leading-relaxed">
                We help homeowners make the switch to clean, affordable solar power through our collaboration with Emerald Green Energy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" variant="white" className="font-bold text-lg px-8 py-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                  <Link href="/appointment">
                    Book Free Assessment
                  </Link>
                  <ArrowRight className="ml-2 w-5 h-5" />

                </Button>
                {/* <Button size="lg" variant="" className="text-lg px-8 py-6 font-bold">
                  See How Much You Save
                </Button> */}
              </div>
              <p className="text-sm text-primary-foreground">
                Lease from <strong className="text-white">5-25 years</strong>. Full maintenance, repairs, & monitoring included.
              </p>
            </div>

            {/* Image Content */}
            <div className="relative">
              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/10">
                <img
                  src="/hero.jpg"
                  alt="Solar panels on modern home"
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-gray-900 rounded-2xl p-6 shadow-xl">
                  <p className="text-sm font-semibold">Zero Upfront Cost</p>
                  <p className="text-3xl font-bold">£0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
            Partnered with industry-leading & accredited installers
          </h3>
          <div className="grid grid-cols-2 gap-8 text-center sm:grid-cols-4 lg:grid-cols-4">
            <div className="flex items-center justify-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              <span className="text-lg font-medium text-gray-700">MCS Certified</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              <span className="text-lg font-medium text-gray-700">RECC Member</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              <span className="text-lg font-medium text-gray-700">NICEIC Approved</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              <span className="text-lg font-medium text-gray-700">TrustMark Endorsed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Clean energy, huge savings, no hassle. We make your switch to solar simple and worry-free.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUsFeatures.map((feature) => (
              <Card key={feature.title} className="border-none shadow-xl hover:shadow-2xl hover:-translate-y-1">
                <CardHeader className="p-8">
                  <div className={`w-14 h-14 ${feature.bgColor} rounded-xl flex items-center justify-center mb-5`}>
                    <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
                  </div>
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <p className="text-gray-600 text-base leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Your Solar Journey in 4 Simple Steps
            </h2>
            <p className="text-xl text-gray-600">
              From consultation to activation, we've streamlined the process.
            </p>
          </div>
          <div className="relative">
            {/* Dotted line for desktop */}
            {/* <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-transparent" style={{ transform: 'translateY(-50%)' }}>
               <svg width="100%" height="2" className="overflow-visible">
                 <line x1="0" y1="1" x2="100%" y2="1" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="8 8" />
               </svg>
            </div> */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {howItWorksSteps.map((step) => (
                <div key={step.step} className="flex flex-col items-center text-center">
                  <div className="relative z-10 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg mb-6">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 max-w-xs">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section id="partnership" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text content first on mobile by default */}
            <div className="space-y-6">
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                Trusted Partnership
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900">
                Powered by Emerald Green Energy
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  We collaborate with <strong>Emerald Green Energy</strong>, a nationally recognised, accredited renewable energy provider.
                </p>
                <p>
                  Every installation is delivered by Emerald Green Energy's certified teams, ensuring your solar system meets the highest standards of safety, performance, and compliance.
                </p>
                <p>
                  From your first home survey to your completed installation, we work seamlessly to make your transition to renewable energy simple, transparent, and reliable.
                </p>
              </div>
              {/* <div className="pt-4">
                <Button size="lg" className="font-bold">
                  Learn More About Our Partnership
                </Button>
              </div> */}
            </div>
            {/* Image content */}
            <div>
              <img
                src="/hero.jpg"
                alt="Solar installation team"
                className="rounded-2xl shadow-xl w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Savings Example Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-extrabold">
            Start Saving Today
          </h2>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-lg">
            <p className="text-2xl mb-4">
              <strong>Example:</strong> An average household can save up to <span className="text-yellow-300 font-bold">£800</span> per year on electricity bills.
            </p>
            <p className="text-xl">
              Over a 25-year lease, that's a potential total saving of <span className="text-yellow-300 font-bold text-3xl">£20,000</span>.
            </p>
          </div>
          <Button size="lg" variant="white" className="font-bold text-lg text-green-700 px-12 py-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all">
            <Link href="/appointment">
              Calculate Your Savings 
            </Link>
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Accreditations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Professional Accreditations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our partners at Emerald Green Energy hold full accreditation, ensuring all installations meet the highest standards.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {accreditations.map((cert) => {
              console.log(cert.image)
              return (
                <div
                  key={cert.name}
                  className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                >
                  <div className="w-32 h-16  flex items-center justify-center mx-auto mb-4 overflow-hidden">
                    <Image
                      src={cert.image}
                      alt={`${cert.name} logo`}
                      width={48}
                      height={48}
                      className="object-contain"
                      priority={false}
                    />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">{cert.name}</h3>
                  <p className="text-xs text-gray-600">{cert.full}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-extrabold">
            Your Solar Journey Begins Here
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to find out how much you could save? Get a free, no-obligation assessment from our friendly team today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-12 py-6 font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              <Link href="/appointment">
                Book Free Assessment
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white text-lg px-12 py-6 font-bold">
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* <AppFooter /> */}
    </div>
  );
}

export default HomePage;