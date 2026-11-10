import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // У день запуску змінити на 'https://dimproekt.com': разом з цим автоматично
  // зміняться canonical, sitemap і robots, а блокування індексації тестової адреси зникне.
  site: 'https://dimproekt.com',
  // Адреса /pro ніколи не існувала на сайті, але на неї ведуть сторонні посилання: переспрямовуємо на «Про нас»
  redirects: {
    '/pro': { status: 301, destination: '/pro-nas/' },
  },
  integrations: [sitemap({ filter: (page) => !/\/404\/?$/.test(page) })],

  adapter: cloudflare({ imageService: 'compile' })
});