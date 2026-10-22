import games from '../data/games.json';
import srw30 from '../data/srw30-missions.json';
import { canonical } from '../lib/site';

export function GET() {
  const paths = new Set<string>();
  paths.add('');
  paths.add('search/');
  paths.add('about/');
  const platformSlugs = new Set<string>();
  for (const g of games as any[]) {
    platformSlugs.add(g.platformSlug);
    paths.add(`${g.slug}/`);
    paths.add(`${g.slug}/missions/`);
    paths.add(`${g.slug}/secrets/`);
    paths.add(`${g.slug}/units/`);
  }
  for (const p of platformSlugs) paths.add(`platform/${p}/`);
  paths.add('srw-30/missions/sample-01/');
  for (const m of (srw30 as any).missions ?? []) {
    if (m.slug) paths.add(`srw-30/missions/${m.slug}/`);
  }

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[...paths]
    .map(p => `  <url><loc>${canonical(p)}</loc></url>`)
    .join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
