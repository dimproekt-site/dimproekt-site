import { defineCollection, z } from 'astro:content';

// Категорії проектів:
// - projectType: "sadybny" (садибні / котеджні будинки) | "bagatokvartyrny" (багатоквартирні житлові будинки)
// - stage (тільки для sadybny): "robochyi" (робочий проект, готовий, може продаватись) | "eskizny" (ескізний проект, зроблений на замовлення)
// - forSale: чи доступний цей проект для продажу як готовий архівний проект

const projects = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      projectType: z.enum(['sadybny', 'bagatokvartyrny']),
      stage: z.enum(['robochyi', 'eskizny']).optional(),
      forSale: z.boolean().default(false),
      area: z.number().optional(), // загальна площа, м²
      floors: z.number().optional(),
      location: z.string().optional(), // локація об'єкта (область/місто), не адреса клієнта
      year: z.number().optional(),
      coverImage: image().optional(), // додаси фото проекту — поки не обов'язково
      gallery: z.array(image()).optional(),
      description: z.string(),
      featured: z.boolean().default(false),
      publishDate: z.date(),
    }),
});

export const collections = { projects };
