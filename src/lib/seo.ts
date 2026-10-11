import { CONTACTS } from '../i18n/site';

/** Тестові адреси Cloudflare не індексуємо; з реальним доменом обмеження зникає саме. */
export const isTestHost = (site?: URL | string) => /(pages|workers)\.dev$/.test(new URL(String(site ?? '')).hostname);

export const abs = (path: string, site: URL | string) => new URL(path, site).href;

export const ORG_ID = '/#organization';

export const organization = (site: URL | string) => ({
  '@context': 'https://schema.org',
  '@type': ['Organization', 'ProfessionalService'],
  '@id': abs(ORG_ID, site),
  name: 'ДІМПРОЕКТ',
  alternateName: ['DIMPROEKT', 'Архітектурна майстерня «Дімпроект»'],
  legalName: 'ТОВАРИСТВО З ОБМЕЖЕНОЮ ВІДПОВІДАЛЬНІСТЮ «АРХІТЕКТУРНА МАЙСТЕРНЯ «ДІМПРОЕКТ»',
  description: 'Архітектурна майстерня: проекти садибних будинків, індивідуальне проектування, багатоквартирне житло та комерційна нерухомість. Працюємо дистанційно по всій Україні та за кордоном.',
  url: abs('/', site),
  logo: abs('/assets/logo-on-light.svg', site),
  image: abs('/assets/og-default.jpg', site),
  telephone: '+380632519217',
  email: CONTACTS.email,
  areaServed: [{ '@type': 'Country', name: 'Україна' }],
  knowsLanguage: ['uk', 'ru', 'en'],
  sameAs: [CONTACTS.instagram, CONTACTS.facebook],
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '10:00', closes: '19:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '10:00', closes: '16:00' },
  ],
});

export const website = (site: URL | string) => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'ДІМПРОЕКТ',
  url: abs('/', site),
  inLanguage: ['uk', 'en'],
  publisher: { '@id': abs(ORG_ID, site) },
});

export const breadcrumbs = (items: { name: string; path?: string }[], site: URL | string) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem', position: i + 1, name: it.name,
    ...(it.path ? { item: abs(it.path, site) } : {}),
  })),
});
