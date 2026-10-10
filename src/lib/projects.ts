import { getCollection, type CollectionEntry } from 'astro:content';

export type Sadybnyi = CollectionEntry<'sadybni'>;
export type Commercial = CollectionEntry<'commercial'>;

export const CURRENCY = '₴';

export const STAGE_LABEL = { robochyi: 'Робочий проєкт', eskizny: 'Ескізний проєкт' } as const;
export const STAGE_LABEL_EN = { robochyi: 'Construction design', eskizny: 'Concept design' } as const;

export const nf = (n: number) => String(n).replace('.', ',');

// Поверховість: надземні + підземні («2+1»); підвал додаємо з «+»
export function floorsText(d: Sadybnyi['data']) {
  return String(d.floors_above) + (d.floors_below > 0 ? '+' + d.floors_below : '');
}

export function priceText(d: Sadybnyi['data']) {
  return d.price ? d.price.toLocaleString('uk-UA').replace(/\s/g, ' ') + ' ' + CURRENCY : 'Ціна за запитом';
}

export async function getSadybni() {
  return (await getCollection('sadybni')).sort((a, b) => a.data.order - b.data.order);
}
export async function getCommercial() {
  return (await getCollection('commercial')).sort((a, b) => a.data.order - b.data.order);
}
export async function getArticles() {
  return (await getCollection('articles')).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}
export async function getHomeSettings() {
  const e = await getCollection('home');
  return e[0].data;
}
