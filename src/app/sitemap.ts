import { MetadataRoute } from 'next';
import { navLinks } from '@/lib/data';
import { projects } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mujtaba-110.vercel.app';

  const staticPages = navLinks.map((link) => ({
    url: `${siteUrl}${link.href}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: link.href === '/' ? 1 : 0.8,
  }));
  
  const projectPages = projects.map((project) => ({
    url: `${siteUrl}/projects/${project.id}`, // Assuming you might have project detail pages later
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  // For now, let's keep it simple and just include the main pages.
  // You can add projectPages back if you create detail pages for them.

  return [
    ...staticPages,
  ];
}
