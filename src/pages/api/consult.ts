import type { APIRoute } from 'astro';

// Заявка з форми «Отримати консультацію» → Telegram-бот.
// Потрібні секрети в Cloudflare (Settings → Variables and Secrets): TG_BOT_TOKEN, TG_CHAT_ID.
export const prerender = false;

const clip = (s: unknown, n: number) => String(s ?? '').trim().slice(0, n);

export const POST: APIRoute = async ({ request, locals }) => {
  let body: any;
  try { body = await request.json(); } catch { return new Response('bad request', { status: 400 }); }
  if (body.website) return new Response('ok'); // honeypot
  const name = clip(body.name, 100), contact = clip(body.contact, 150), message = clip(body.message, 2000), page = clip(body.page, 200);
  if (!name || !contact) return new Response('bad request', { status: 400 });

  const env = (locals as any).runtime?.env ?? {};
  if (!env.TG_BOT_TOKEN || !env.TG_CHAT_ID) return new Response('not configured', { status: 503 });

  const text = `Нова заявка з сайту\nІм'я: ${name}\nКонтакт: ${contact}\n${message ? 'Повідомлення: ' + message + '\n' : ''}Сторінка: ${page}`;
  const r = await fetch(`https://api.telegram.org/bot${env.TG_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: env.TG_CHAT_ID, text }),
  });
  return new Response(r.ok ? 'ok' : 'upstream error', { status: r.ok ? 200 : 502 });
};
