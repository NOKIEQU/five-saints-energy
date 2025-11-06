# Five Saints Energy LTD — Website

Official website for Five Saints Energy LTD. Built by Wiktor Piwanowski.

This repository contains the Next.js website for Five Saints Energy LTD. It uses the Next.js App Router, Tailwind CSS for styling, lucide-react for icons and Shadcn UI for components.

## Features
- Modern Next.js (App Router) site
- Responsive design with Tailwind CSS
- Accessible UI primitives (Sheet, Dialog, Dropdown) and components
- Savings calculator (client-side) -- Right now disabled
- Dynamic sitemap at `/sitemap.xml` and `robots.txt`

## Tech stack
- Next.js (React)
- Tailwind CSS
- lucide-react (icons)
- Radix/shadcn-style UI primitives (Sheet, Dialog, Dropdown)

## Prerequisites
- Node.js 18+ (recommended)
- npm (or yarn/pnpm if you prefer)

## Quick start (development)
Open a PowerShell terminal in the project root and run:

```powershell
npm install
npm run dev
```

Then open http://localhost:3000 in your browser.

## Build for production
To create an optimized production build and run it locally:

```powershell
npm run build
npm run start
```

The production server typically runs on port 3000 by default (http://localhost:3000).

## Linting
If the project includes lint scripts, run:

```powershell
npm run lint
```

## Environment variables
There are no required environment variables by default in the repository. If you integrate third-party services (for example Google Maps or analytics), add any keys as `NEXT_PUBLIC_*` variables in a `.env.local` file.

Example `.env.local` (optional):

```text
# NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_key_here
```

## Deployment
This project is well-suited to deploy on Vercel (recommended) or any platform that supports Node.js and Next.js. With Vercel you can connect the GitHub repository and it will handle builds and previews automatically.

## File structure (important paths)
- `src/app/` — App Router pages and layout
- `src/app/components/` — site components (including `navbar.jsx`)
- `src/components/ui/` — UI primitives (Button, Sheet, Dropdown, etc.)
- `public/` — static assets (images, robots.txt)
- `src/app/sitemap.xml/route.js` — dynamic sitemap route

## Author
Wiktor Piwanowski

Client: Five Saints Energy LTD

---
If you want me to add deployment scripts, CI, or developer notes (or change the global font), tell me which option you prefer and I can update the README with step-by-step deployment instructions.This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
