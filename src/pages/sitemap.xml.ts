import games from '../data/games.json';
import srw30 from '../data/srw30-missions.json';
import srw1 from '../data/srw1-missions.json';
import srw2 from '../data/srw2-missions.json';
import srw3 from '../data/srw3-missions.json';
import srwex from '../data/srwex-missions.json';
import srw4 from '../data/srw4-missions.json';
import srwmk from '../data/srwmasoukishin-missions.json';
import srwshin from '../data/srwshin-missions.json';
import srwf from '../data/srwf-missions.json';
import srwffinal from '../data/srwffinal-missions.json';
import srwcompact from '../data/srwcompact-missions.json';
import srw64 from '../data/srw64-missions.json';
import srwcompact2 from '../data/srwcompact2-missions.json';
import srwcompact3 from '../data/srwcompact3-missions.json';
import srwalpha from '../data/srwalpha-missions.json';
import srwalphagaiden from '../data/srwalphagaiden-missions.json';
import srwa from '../data/srwa-missions.json';
import srwimpact from '../data/srwimpact-missions.json';
import srwr from '../data/srwr-missions.json';
import srwalpha2 from '../data/srwalpha2-missions.json';
import srwog from '../data/srwog-missions.json';
import srwd from '../data/srwd-missions.json';
import srwmx from '../data/srwmx-missions.json';
import srwgc from '../data/srwgc-missions.json';
import srwog2 from '../data/srwog2-missions.json';
import srwalpha3 from '../data/srwalpha3-missions.json';
import srwj from '../data/srwj-missions.json';
import srww from '../data/srww-missions.json';
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
    // /missions/ 仅 srw-30、srw-1、srw-2、srw-3、srw-ex、srw-4、srw-masoukishin、srw-shin、srw-f、srw-f-final、srw-compact、srw-64、srw-compact-2、srw-alpha、srw-alpha-gaiden、srw-a、srw-impact、srw-r、srw-alpha-2、srw-compact-3、srw-og、srw-d、srw-mx、srw-gc、srw-og-2、srw-alpha-3、srw-j 与 srw-w 有真实总表页，其余作的重定向页同样不收录。
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
  paths.add('srw-ex/missions/');
  for (const m of (srwex as any).missions ?? []) {
    if (m.slug) paths.add(`srw-ex/missions/${m.slug}/`);
  }
  paths.add('srw-4/missions/');
  for (const m of (srw4 as any).missions ?? []) {
    if (m.slug) paths.add(`srw-4/missions/${m.slug}/`);
  }
  paths.add('srw-masoukishin/missions/');
  for (const m of (srwmk as any).missions ?? []) {
    if (m.slug) paths.add(`srw-masoukishin/missions/${m.slug}/`);
  }
  paths.add('srw-shin/missions/');
  for (const m of (srwshin as any).missions ?? []) {
    if (m.slug) paths.add(`srw-shin/missions/${m.slug}/`);
  }
  paths.add('srw-f/missions/');
  for (const m of (srwf as any).missions ?? []) {
    if (m.slug) paths.add(`srw-f/missions/${m.slug}/`);
  }
  paths.add('srw-f-final/missions/');
  for (const m of (srwffinal as any).missions ?? []) {
    if (m.slug) paths.add(`srw-f-final/missions/${m.slug}/`);
  }
  paths.add('srw-compact/missions/');
  for (const m of (srwcompact as any).missions ?? []) {
    if (m.slug) paths.add(`srw-compact/missions/${m.slug}/`);
  }
  paths.add('srw-64/missions/');
  for (const m of (srw64 as any).missions ?? []) {
    if (m.slug) paths.add(`srw-64/missions/${m.slug}/`);
  }
  paths.add('srw-compact-2/missions/');
  for (const m of (srwcompact2 as any).missions ?? []) {
    if (m.slug) paths.add(`srw-compact-2/missions/${m.slug}/`);
  }
  paths.add('srw-alpha/missions/');
  for (const m of (srwalpha as any).missions ?? []) {
    if (m.slug) paths.add(`srw-alpha/missions/${m.slug}/`);
  }
  paths.add('srw-alpha-gaiden/missions/');
  for (const m of (srwalphagaiden as any).missions ?? []) {
    if (m.slug) paths.add(`srw-alpha-gaiden/missions/${m.slug}/`);
  }
  paths.add('srw-a/missions/');
  for (const m of (srwa as any).missions ?? []) {
    if (m.slug) paths.add(`srw-a/missions/${m.slug}/`);
  }
  paths.add('srw-impact/missions/');
  for (const m of (srwimpact as any).missions ?? []) {
    if (m.slug) paths.add(`srw-impact/missions/${m.slug}/`);
  }
  paths.add('srw-r/missions/');
  for (const m of (srwr as any).missions ?? []) {
    if (m.slug) paths.add(`srw-r/missions/${m.slug}/`);
  }
  paths.add('srw-alpha-2/missions/');
  for (const m of (srwalpha2 as any).missions ?? []) {
    if (m.slug) paths.add(`srw-alpha-2/missions/${m.slug}/`);
  }
  paths.add('srw-compact-3/missions/');
  for (const m of (srwcompact3 as any).missions ?? []) {
    if (m.slug) paths.add(`srw-compact-3/missions/${m.slug}/`);
  }
  paths.add('srw-og/missions/');
  for (const m of (srwog as any).missions ?? []) {
    if (m.slug) paths.add(`srw-og/missions/${m.slug}/`);
  }
  paths.add('srw-d/missions/');
  for (const m of (srwd as any).missions ?? []) {
    if (m.slug) paths.add(`srw-d/missions/${m.slug}/`);
  }
  paths.add('srw-mx/missions/');
  for (const m of (srwmx as any).missions ?? []) {
    if (m.slug) paths.add(`srw-mx/missions/${m.slug}/`);
  }
  paths.add('srw-gc/missions/');
  for (const m of (srwgc as any).missions ?? []) {
    if (m.slug) paths.add(`srw-gc/missions/${m.slug}/`);
  }
  paths.add('srw-og-2/missions/');
  for (const m of (srwog2 as any).missions ?? []) {
    if (m.slug) paths.add(`srw-og-2/missions/${m.slug}/`);
  }
  paths.add('srw-alpha-3/missions/');
  for (const m of (srwalpha3 as any).missions ?? []) {
    if (m.slug) paths.add(`srw-alpha-3/missions/${m.slug}/`);
  }
  paths.add('srw-j/missions/');
  for (const m of (srwj as any).missions ?? []) {
    if (m.slug) paths.add(`srw-j/missions/${m.slug}/`);
  }
  paths.add('srw-w/missions/');
  for (const m of (srww as any).missions ?? []) {
    if (m.slug) paths.add(`srw-w/missions/${m.slug}/`);
  }

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[...paths]
    .map(p => `  <url><loc>${canonical(p)}</loc></url>`)
    .join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
