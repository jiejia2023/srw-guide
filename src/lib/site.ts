export const SITE_NAME = '超级机器人大战攻略站';
export const SITE_ORIGIN = 'https://jiejia2023.github.io';
export const BASE = '/srw-guide/';

/** Build an absolute-in-site href respecting the Astro base. */
export function href(path = ''): string {
  const clean = path.replace(/^\//, '');
  return BASE + clean;
}

/** Absolute canonical URL for a site-relative path. */
export function canonical(path = ''): string {
  const clean = path.replace(/^\//, '');
  return SITE_ORIGIN + BASE + clean;
}
