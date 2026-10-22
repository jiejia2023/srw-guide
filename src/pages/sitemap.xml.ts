import games from '../data/games.json';
import srw30 from '../data/srw30-missions.json';
import srw1 from '../data/srw1-missions.json';
import srw2 from '../data/srw2-missions.json';
import srw3 from '../data/srw3-missions.json';
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
    // /secrets/ 与 /units/ 已改为重定向页（noindex），不进 sitemap；
    // /missions/ 仅 srw-30、srw-1、srw-2 与 srw-3 有真实总表页，其余作的重定向页同样不收录。
  }
  for (const p of platformSlugs) paths.add(`platform/${p}/`);
  paths.add('srw-30/missions/');
  paths.add('srw-30/missions/sample-01/');
  for (const m of (srw30 as any).missions ?? []) {
    if (m.slug) paths.add(`srw-30/missions/${m.slug}/`);
  }
  paths.add('srw-1/missions/');
  for (const m of (srw1 as any).missions ?? []) {
    if (m.slug) paths.add(`srw-1/missions/${m.slug}/`);
  }
  paths.add('srw-2/missions/');
  for (const m of (srw2 as any).missions ?? []) {
    if (m.slug) paths.add(`srw-2/missions/${m.slug}/`);
  }
  paths.add('srw-3/missions/');
  for (const m of (srw3 as any).missions ?? []) {
    if (m.slug) paths.add(`srw-3/missions/${m.slug}/`);
  }

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[...paths]
    .map(p => `  <url><loc>${canonical(p)}</loc></url>`)
    .join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
