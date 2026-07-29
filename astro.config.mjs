import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  // заміниш на власний домен пізніше
  site: 'https://dimproekt-site.pages.dev',

  adapter: cloudflare()
});