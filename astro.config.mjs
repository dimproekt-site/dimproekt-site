import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // У день запуску змінити на 'https://dimproekt.com': разом з цим автоматично
  // зміняться canonical, sitemap і robots, а блокування індексації тестової адреси зникне.
  site: 'https://dimproekt-site.pages.dev',
  integrations: [sitemap({ filter: (page) => !/\/404\/?$/.test(page) })],

  adapter: cloudflare({ imageService: 'compile' })
});