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
import srwogs from '../data/srwogs-missions.json';
import srwoggaiden from '../data/srwoggaiden-missions.json';
import srwog2nd from '../data/srwog2nd-missions.json';
import srwz from '../data/srwz-missions.json';
import srwzspecial from '../data/srwzspecial-missions.json';
import srwz2hakai from '../data/srwz2hakai-missions.json';
import srwz2saisei from '../data/srwz2saisei-missions.json';
import srwz3jigoku from '../data/srwz3jigoku-missions.json';
import srwz3tengoku from '../data/srwz3tengoku-missions.json';
import srwmk2 from '../data/srwmasoukishin2-missions.json';
import srwmk3 from '../data/srwmasoukishin3-missions.json';
import srwmkf from '../data/srwmasoukishinf-missions.json';
import srwk from '../data/srwk-missions.json';
import srwneo from '../data/srwneo-missions.json';
import srwl from '../data/srwl-missions.json';
import srwux from '../data/srwux-missions.json';
import srwbx from '../data/srwbx-missions.json';
import srwoe from '../data/srwoperationextend-missions.json';
import srwcc from '../data/srwcardchronicle-missions.json';
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
    // /missions/ 仅 srw-30、srw-1、srw-2、srw-3、srw-ex、srw-4、srw-masoukishin、srw-shin、srw-f、srw-f-final、srw-compact、srw-64、srw-compact-2、srw-alpha、srw-alpha-gaiden、srw-a、srw-impact、srw-r、srw-alpha-2、srw-compact-3、srw-og、srw-d、srw-mx、srw-gc、srw-og-2、srw-alpha-3、srw-j、srw-w、srw-ogs、srw-og-gaiden、srw-og-2nd 与 srw-z、srw-z-special、srw-z-2-hakai、srw-z-2-saisei、srw-z-3-jigoku、srw-z-3-tengoku、srw-k、srw-neo、srw-l、srw-card-chronicle、srw-masoukishin-2、srw-masoukishin-3、srw-masoukishin-f、srw-ux、srw-bx 与 srw-operation-extend 有真实总表页，其余作的重定向页同样不收录。
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
  paths.add('srw-ogs/missions/');
  for (const m of (srwogs as any).missions ?? []) {
    if (m.slug) paths.add(`srw-ogs/missions/${m.slug}/`);
  }
  paths.add('srw-og-gaiden/missions/');
  for (const m of (srwoggaiden as any).missions ?? []) {
    if (m.slug) paths.add(`srw-og-gaiden/missions/${m.slug}/`);
  }
  paths.add('srw-og-2nd/missions/');
  for (const m of (srwog2nd as any).missions ?? []) {
    if (m.slug) paths.add(`srw-og-2nd/missions/${m.slug}/`);
  }
  paths.add('srw-z/missions/');
  for (const m of (srwz as any).missions ?? []) {
    if (m.slug) paths.add(`srw-z/missions/${m.slug}/`);
  }
  paths.add('srw-z-special/missions/');
  for (const m of (srwzspecial as any).missions ?? []) {
    if (m.slug) paths.add(`srw-z-special/missions/${m.slug}/`);
  }
  paths.add('srw-z-2-hakai/missions/');
  for (const m of (srwz2hakai as any).missions ?? []) {
    if (m.slug) paths.add(`srw-z-2-hakai/missions/${m.slug}/`);
  }
  paths.add('srw-z-2-saisei/missions/');
  for (const m of (srwz2saisei as any).missions ?? []) {
    if (m.slug) paths.add(`srw-z-2-saisei/missions/${m.slug}/`);
  }
  paths.add('srw-z-3-jigoku/missions/');
  for (const m of (srwz3jigoku as any).missions ?? []) {
    if (m.slug) paths.add(`srw-z-3-jigoku/missions/${m.slug}/`);
  }
  paths.add('srw-z-3-tengoku/missions/');
  for (const m of (srwz3tengoku as any).missions ?? []) {
    if (m.slug) paths.add(`srw-z-3-tengoku/missions/${m.slug}/`);
  }
  paths.add('srw-masoukishin-2/missions/');
  for (const m of (srwmk2 as any).missions ?? []) {
    if (m.slug) paths.add(`srw-masoukishin-2/missions/${m.slug}/`);
  }
  paths.add('srw-masoukishin-3/missions/');
  for (const m of (srwmk3 as any).missions ?? []) {
    if (m.slug) paths.add(`srw-masoukishin-3/missions/${m.slug}/`);
  }
  paths.add('srw-masoukishin-f/missions/');
  for (const m of (srwmkf as any).missions ?? []) {
    if (m.slug) paths.add(`srw-masoukishin-f/missions/${m.slug}/`);
  }
  paths.add('srw-k/missions/');
  for (const m of (srwk as any).missions ?? []) {
    if (m.slug) paths.add(`srw-k/missions/${m.slug}/`);
  }
  paths.add('srw-neo/missions/');
  for (const m of (srwneo as any).missions ?? []) {
    if (m.slug) paths.add(`srw-neo/missions/${m.slug}/`);
  }
  paths.add('srw-l/missions/');
  for (const m of (srwl as any).missions ?? []) {
    if (m.slug) paths.add(`srw-l/missions/${m.slug}/`);
  }
  paths.add('srw-card-chronicle/missions/');
  for (const m of (srwcc as any).missions ?? []) {
    if (m.slug) paths.add(`srw-card-chronicle/missions/${m.slug}/`);
  }
  paths.add('srw-ux/missions/');
  for (const m of (srwux as any).missions ?? []) {
    if (m.slug) paths.add(`srw-ux/missions/${m.slug}/`);
  }
  paths.add('srw-bx/missions/');
  for (const m of (srwbx as any).missions ?? []) {
    if (m.slug) paths.add(`srw-bx/missions/${m.slug}/`);
  }
  paths.add('srw-operation-extend/missions/');
  for (const m of (srwoe as any).missions ?? []) {
    if (m.slug) paths.add(`srw-operation-extend/missions/${m.slug}/`);
  }

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[...paths]
    .map(p => `  <url><loc>${canonical(p)}</loc></url>`)
    .join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
