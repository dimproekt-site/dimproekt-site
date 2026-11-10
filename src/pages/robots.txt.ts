import type { APIRoute } from 'astro';
import { isTestHost } from '../lib/seo';

export const GET: APIRoute = ({ site }) => {
  const body = isTestHost(site)
    ? 'User-agent: *\nDisallow: /\n'
    : `User-agent: *\nAllow: /\nDisallow: /admin/\nDisallow: /api/\n\nSitemap: ${new URL('/sitemap-index.xml', site).href}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
