import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const staticRoutes = [
    '',
    '/about',
    '/blog',
    '/services/cloud-solutions',
    '/services/cybersecurity',
    '/services/digital-transformation',
    '/services/on-premises-solutions',
    '/services/web-hosting',
    '/services/office-365-google-workspace',
    '/case-studies',
    '/whitepapers',
  ]
  return staticRoutes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: path === '' ? 1 : 0.7,
  }))
}


