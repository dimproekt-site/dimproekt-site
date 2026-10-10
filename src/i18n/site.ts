// Спільні адреси та тексти шапки й підвалу (UA/EN).
export type Lang = 'uk' | 'en';

export const ROUTES = {
  home: '/',
  homeEn: '/en/',
  catalog: '/#catalog',
  catalogEn: '/en/#catalog',
  contact: '/#contact',
  contactEn: '/en/#contact',
  sadybni: '/sadybni-budynky/',
  multi: '/bagatokvartyrne-zhytlo/',
  start: '/yak-pochaty-proektuvannya/',
  about: '/pro-nas/',
  articles: '/statti/',
  privacy: '/polityka-konfidentsiinosti/',
} as const;

export const CONTACTS = {
  phone: '+380 63 251 92 17',
  phoneHref: 'tel:+380632519217',
  email: 'dimproekt.am@gmail.com',
  whatsapp: 'https://wa.me/380632519217',
  telegram: 'https://t.me/dimproekt',
  instagram: 'https://www.instagram.com/dimproekt/',
  facebook: 'https://www.facebook.com/profile.php?id=61555465005838',
  facebookGroup: 'https://www.facebook.com/groups/projecthouseandgarden',
} as const;

export interface NavItem {
  key: 'projects' | 'design' | 'about' | 'contacts';
  label: string;
  short?: string;
  href: string;
  sub?: { label: string; href: string }[];
}

export const NAV: Record<Lang, NavItem[]> = {
  uk: [
    { key: 'projects', label: 'Проекти', href: ROUTES.catalog, sub: [
      { label: 'Садибні будинки', href: ROUTES.sadybni },
      { label: 'Багатоквартирне житло та комерційна нерухомість', href: ROUTES.multi },
    ] },
    { key: 'design', label: 'Індивідуальне проектування садибних будинків', short: 'Проектування', href: ROUTES.start },
    { key: 'about', label: 'Про нас', href: ROUTES.about },
    { key: 'contacts', label: 'Контакти', href: ROUTES.contact },
  ],
  en: [
    { key: 'projects', label: 'Projects', href: ROUTES.catalogEn, sub: [
      { label: 'Country houses', href: ROUTES.sadybni },
      { label: 'Apartment and commercial buildings', href: ROUTES.multi },
    ] },
    { key: 'design', label: 'Custom country house design', short: 'House design', href: ROUTES.start },
    { key: 'about', label: 'About us', href: ROUTES.about },
    { key: 'contacts', label: 'Contacts', href: ROUTES.contactEn },
  ],
};

export const FOOTER = {
  uk: {
    contacts: 'Контакти', hours: 'Режим роботи', tz: 'за київським часом',
    hoursList: ['Пн–Пт 10:00–19:00', 'Сб 10:00–16:00', 'Нд вихідний'],
    legal: '© 2026 ДІМПРОЕКТ. Всі права захищені.', privacy: 'Політика конфіденційності',
    fbGroup: 'Наша група у Facebook: Проекти будинків та ідеї для дачі | Дім & Сад',
    columns: [
      { title: 'Проекти', links: [
        { label: 'Садибні будинки', href: ROUTES.sadybni },
        { label: 'Багатоквартирне житло та комерційна нерухомість', href: ROUTES.multi },
      ] },
      { title: 'Студія', links: [
        { label: 'Як почати проектування', href: ROUTES.start },
        { label: 'Про нас', href: ROUTES.about },
        { label: 'Статті', href: ROUTES.articles },
      ] },
    ],
  },
  en: {
    contacts: 'Contacts', hours: 'Opening hours', tz: 'Kyiv time',
    hoursList: ['Mon–Fri 10:00–19:00', 'Sat 10:00–16:00', 'Sun closed'],
    legal: '© 2026 DIMPROEKT. All rights reserved.', privacy: 'Privacy policy',
    fbGroup: 'Our Facebook group: Проекти будинків та ідеї для дачі | Дім & Сад',
    columns: [
      { title: 'Projects', links: [
        { label: 'Country houses', href: ROUTES.sadybni },
        { label: 'Apartment and commercial buildings', href: ROUTES.multi },
      ] },
      { title: 'Studio', links: [
        { label: 'How to start a house design', href: ROUTES.start },
        { label: 'About us', href: ROUTES.about },
        { label: 'Articles', href: ROUTES.articles },
      ] },
    ],
  },
} as const;
