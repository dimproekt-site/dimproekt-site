import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Ті самі поля стають полями Decap CMS (public/admin/config.yml).
const photo = (image: any) =>
  z.object({ image: image(), vertical: z.boolean().default(false) });
const plan = (image: any) => z.object({ image: image(), label: z.string() });
const pair = z.object({ label: z.string(), value: z.string() });

// Садибні будинки (проєкти)
const sadybni = defineCollection({
  loader: glob({ pattern: '*/index.md', base: './src/content/sadybni' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      url_slug: z.string().optional(), // адреса сторінки (латиницею), задає адмінка
      order: z.number().default(100),
      stage: z.enum(['robochyi', 'eskizny']),
      for_sale: z.boolean().default(false),
      price: z.number().optional(), // порожньо = «Ціна за запитом»
      carousel: z.boolean().default(false),
      seo_title: z.string().optional(),
      card_text: z.string(),
      intro: z.string(),
      area: z.number(),
      living_area: z.number().optional(),
      build_area: z.number().optional(),
      floors_above: z.number(),
      floors_below: z.number().default(0),
      floors_detail: z.string().optional(),
      floors_note: z.string().optional(),
      dims: z.string().optional(),
      dims_garage: z.string().optional(),
      bedrooms: z.number().optional(),
      bathrooms: z.number().optional(),
      garage: z.string().optional(),
      terrace: z.string().optional(),
      walls: z.string().optional(),
      roof: z.string().optional(),
      roof_cover: z.string().optional(),
      slabs: z.string().optional(),
      foundation: z.string().optional(),
      note: z.string().optional(),
      tags: z.array(z.string()).default([]),
      cover: image(),
      carousel_image: image().optional(), // окреме фото для каруселі (бажано вертикальне)
      carousel_focus: z.string().optional(), // напр. "50% 30%"
      gallery: z.array(photo(image)),
      plans: z.array(plan(image)).default([]),
    }),
});

// Комерційна нерухомість (портфоліо)
const commercial = defineCollection({
  loader: glob({ pattern: '*/index.md', base: './src/content/commercial' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      url_slug: z.string().optional(), // адреса сторінки (латиницею), задає адмінка
      order: z.number().default(100),
      type: z.string(),
      location: z.string(),
      city: z.string().optional(),
      year: z.string().optional(),
      floors: z.string().optional(),
      area: z.number().optional(),
      card_text: z.string(),
      intro: z.string(),
      cover: image(),
      gallery: z.array(photo(image)),
      plans: z.array(plan(image)).default([]),
      specs: z.array(pair).default([]),
      params: z.array(pair).default([]),
      composition: z
        .array(z.object({ no: z.string(), name: z.string(), flats: z.string(), commercial: z.string() }))
        .optional(),
      composition_note: z.string().optional(),
    }),
});

// Статті
const articles = defineCollection({
  loader: glob({ pattern: '*/index.md', base: './src/content/articles' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      url_slug: z.string().optional(), // адреса сторінки (латиницею), задає адмінка
      seo_title: z.string(),
      seo_description: z.string(),
      rubric: z.string(),
      date: z.coerce.date(),
      read_time: z.number(),
      cover: image(),
      cover_alt: z.string(),
    }),
});

// Налаштування головної сторінки (редагуються в адмінці)
const home = defineCollection({
  loader: glob({ pattern: 'home.md', base: './src/content/settings' }),
  schema: ({ image }) =>
    z.object({
      hero_projects: z
        .array(
          z.object({
            project: z.string(), // slug садибного проєкту
            image: image().optional(), // інше фото для каруселі (бажано вертикальне)
            focus: z.string().optional(),
          }),
        )
        .max(6),
      showcase_homes: z.array(z.string()).max(6), // slug садибних для розділу 02
      showcase_commercial: z.array(z.string()).max(4), // slug комерційних для розділу 02
    }),
});

export const collections = { sadybni, commercial, articles, home };
