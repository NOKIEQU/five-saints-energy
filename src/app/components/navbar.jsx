"use client"
import React, { useState } from 'react';
// import Image from 'next/image'; // Removed for preview compatibility
// import Link from 'next/link'; // Removed for preview compatibility
import { Button } from '@/components/ui/button';
import { ArrowRight, Menu, X, ChevronDown } from 'lucide-react';
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from '@/components/ui/sheet'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import Image from 'next/image';
import Link from 'next/link';

export default function AppHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(null);

  const navLinks = [
    { name: 'How It Works', href: '/#how-it-works' },
    { name: 'Why Choose Us', href: '/#why-us' },
    { name: 'Our Partnership', href: '/#partnership' },
    {
      name: 'Services',
      submenu: true,
      items: [
        { name: 'Insulation Services', href: '/services/insulation' },
        { name: 'Heating Services', href: '/services/heating' },
        { name: 'Renewable Energy Solution', href: '/services/renewable' },
        { name: 'Government Schemes', href: '/services/schemes' },
      ],
    },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 shadow-sm backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          {/* Replaced Next.js <Link> with <a> for preview */}
          <Link href="/" className="shrink-0 flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Five Saints Energy Logo"
              width={180} // You can adjust this width
              height={40} // You can adjust this height
              style={{ height: '40px', width: '150px' }} // Added inline style for consistent sizing
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-8 items-center">
            {navLinks.map((link) => (
              link.submenu ? (
                <DropdownMenu key={link.name}>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center gap-2 font-medium text-gray-600 hover:text-primary transition-colors">
                      {link.name} <ChevronDown className="w-4 h-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="min-w-[200px]">
                    {link.items.map((item) => (
                      <DropdownMenuItem key={item.href} asChild>
                        <Link href={item.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary">
                          {item.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link key={link.name} href={link.href} className="font-medium text-gray-600 hover:text-primary transition-colors">
                  {link.name}
                </Link>
              )
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button size="default" className="font-semibold">
             <Link href="/appointment">
              Book Free Assessment
             </Link>
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Mobile Menu Button (Sheet) */}
          <div className="lg:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open menu"
                >
                  <Menu className="w-6 h-6 text-gray-900" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-sm p-6">
                <SheetTitle className="sr-only">Main navigation</SheetTitle>
                <div className="flex justify-between items-center mb-10">
                  <img
                    src="/logo.png"
                    alt="Five Saints Energy Logo"
                    width={180}
                    height={40}
                    style={{ height: '40px', width: '150px' }}
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    {/* <X className="w-6 h-6 text-gray-900" /> */}
                  </Button>
                </div>
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <div key={link.name}>
                      {!link.submenu ? (
                        <a href={link.href} onClick={() => setIsMenuOpen(false)} className="block text-2xl font-medium text-gray-800 hover:text-primary py-2">
                          {link.name}
                        </a>
                      ) : (
                        <div>
                          <button
                            onClick={() => setMobileSubmenuOpen(mobileSubmenuOpen === link.name ? null : link.name)}
                            className="w-full flex items-center justify-between text-2xl font-medium text-gray-800 py-2"
                            aria-expanded={mobileSubmenuOpen === link.name}
                          >
                            <span>{link.name}</span>
                            <ChevronDown className={`w-5 h-5 transition-transform ${mobileSubmenuOpen === link.name ? 'rotate-180' : ''}`} />
                          </button>
                          {mobileSubmenuOpen === link.name && (
                            <div className="mt-2 pl-4">
                              {link.items.map((item) => (
                                <a key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)} className="block text-lg text-gray-800 py-2">
                                  {item.name}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
                <Button size="lg" className="w-full mt-12 font-semibold" onClick={() => setIsMenuOpen(false)}>
                  Book Free Assessment
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      
    </header>
  );
};

