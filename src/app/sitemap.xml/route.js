import fs from 'fs'
import path from 'path'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.fivesaintsenergy.co.uk'

// Static list of important routes to include in the sitemap.
// You can expand this list or generate it dynamically from a CMS or pages manifest.
const ROUTES = [
  { url: '/', priority: 1.0, changefreq: 'daily' },
  { url: '/contact', priority: 0.8, changefreq: 'monthly' },
  { url: '/appointment', priority: 0.8, changefreq: 'monthly' },
  { url: '/calculate', priority: 0.6, changefreq: 'monthly' },
  { url: '/services/insulation', priority: 0.7, changefreq: 'monthly' },
  { url: '/services/heating', priority: 0.7, changefreq: 'monthly' },
  { url: '/services/renewable', priority: 0.7, changefreq: 'monthly' },
  { url: '/services/schemes', priority: 0.7, changefreq: 'monthly' },
  { url: '/services/other', priority: 0.6, changefreq: 'monthly' },
]

// Map route -> candidate source files to check for last modified time
const ROUTE_SOURCES = {
  '/': ['src/app/page.js', 'src/app/page.jsx'],
  '/contact': ['src/app/contact/page.js', 'src/app/contact/page.jsx'],
  '/appointment': ['src/app/appointment/page.js', 'src/app/appointment/page.jsx'],
  '/calculate': ['src/app/calculate/page.jsx', 'src/app/calculate/page.js'],
  '/services/insulation': ['src/app/services/insulation/page.jsx', 'src/app/services/insulation/page.js'],
  '/services/heating': ['src/app/services/heating/page.jsx', 'src/app/services/heating/page.js'],
  '/services/renewable': ['src/app/services/renewable/page.jsx', 'src/app/services/renewable/page.js'],
  '/services/schemes': ['src/app/services/schemes/page.jsx', 'src/app/services/schemes/page.js'],
  '/services/other': ['src/app/services/other/page.jsx', 'src/app/services/other/page.js'],
}

async function getLastModForRoute(route) {
  const candidates = ROUTE_SOURCES[route]
  if (!candidates) return new Date().toISOString()

  for (const rel of candidates) {
    const abs = path.join(process.cwd(), rel)
    try {
      const stat = await fs.promises.stat(abs)
      // return ISO date portion (sitemap prefers YYYY-MM-DD or full ISO)
      return stat.mtime.toISOString()
    } catch (e) {
      // file doesn't exist, try next
      continue
    }
  }
  return new Date().toISOString()
}

export async function GET() {
  // Build entries with lastmod where possible
  const entries = await Promise.all(
    ROUTES.map(async (r) => {
      const lastmod = await getLastModForRoute(r.url)
      return { ...r, lastmod }
    })
  )

  const xmlItems = entries
    .map((e) => {
      return `  <url>\n    <loc>${BASE_URL}${e.url}</loc>\n    <lastmod>${e.lastmod}</lastmod>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority.toFixed(2)}</priority>\n  </url>`
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${xmlItems}\n</urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
