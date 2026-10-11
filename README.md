# ДІМПРОЕКТ: сайт

Astro 5 (статика) + Cloudflare Workers + Decap CMS (адмінка `/admin/`).

## Локально

```bash
npm install
npm run dev          # сайт: http://localhost:4321
npx decap-server     # в іншому терміналі: локальний режим адмінки, http://localhost:4321/admin/
```

У локальному режимі адмінка пише у файли на диску (без GitHub).

## Де що лежить

- `src/content/sadybni/<адреса>/index.md` + фото поруч: садибні проекти
- `src/content/commercial/<адреса>/`: комерційні об'єкти
- `src/content/articles/<адреса>/`: статті
- `src/content/settings/home.md`: карусель і розділ 02 головної
- `public/admin/config.yml`: поля адмінки (повторюють `src/content.config.ts`)
- `src/i18n/`: тексти інтерфейсу, меню, футер, правила повернення
- `src/pages/api/consult.ts`: форма консультації → Telegram

## Деплой (Cloudflare Workers)

`npm run build`, потім `npx wrangler deploy` (або Workers Builds з репозиторію: build `npm run build`, deploy `npx wrangler deploy`).

Секрети Worker-а (Settings → Variables and Secrets):
`TG_BOT_TOKEN`, `TG_CHAT_ID` (без них форма показує повідомлення про помилку з посиланнями на месенджери).

## Чек-лист запуску на dimproekt.com

1. Cloudflare: підключити домен до Worker-а (Settings → Domains & Routes).
2. `astro.config.mjs`: `site: 'https://dimproekt.com'` (змінить canonical, sitemap, robots і зніме `noindex` з тестової адреси).
3. Дата запуску: `src/i18n/refund.ts` (`LAUNCH_DATE`) і `src/pages/polityka-konfidentsiinosti.astro` (`updated`).
4. `decap-proxy`: у налаштуваннях Worker-а вказати новий домен у змінній з адресою сайту (ORIGIN), якщо вона є; GitHub OAuth App не змінюється.
5. Cloudflare → Web Analytics: увімкнути для сайту (без cookies).
6. Google Search Console: додати домен, подати `https://dimproekt.com/sitemap-index.xml`.
7. Перевірити форму консультації та посилання WhatsApp/Telegram на живому домені.
