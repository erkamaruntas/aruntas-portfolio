// www.aruntas.com'a gelen istekleri kalıcı olarak aruntas.com'a yönlendirir,
// /api/wave ile "Selam ver" sayacını yönetir; diğer tüm istekler public/
// altındaki statik dosyalardan cevaplanır.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === 'www.aruntas.com') {
      url.hostname = 'aruntas.com';
      return Response.redirect(url.toString(), 301);
    }
    if (url.pathname === '/api/wave') return wave(request, env);
    return env.ASSETS.fetch(request);
  },
};

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
  });

// Ham IP saklanmaz: ziyaretçi yalnızca IP'sinin özetiyle (hash) tanınır.
async function visitorKey(request) {
  const ip = request.headers.get('cf-connecting-ip') || 'unknown';
  const data = new TextEncoder().encode('aruntas-wave:' + ip);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return 'v:' + [...new Uint8Array(hash)].map(b => b.toString(16).padStart(2, '0')).join('');
}

async function wave(request, env) {
  const key = await visitorKey(request);
  const count = Number(await env.WAVES.get('count')) || 0;
  const waved = (await env.WAVES.get(key)) !== null;

  if (request.method === 'GET') return json({ count, waved });
  if (request.method !== 'POST') return json({ error: 'method' }, 405);

  // Başka sitelerden gelen istekleri kabul etme
  const origin = request.headers.get('origin');
  if (origin && new URL(origin).hostname !== new URL(request.url).hostname) {
    return json({ error: 'origin' }, 403);
  }

  // Aynı ziyaretçi günde bir kez sayılır
  if (waved) return json({ count, waved: true });

  // KV atomik değil; aynı anda gelen iki selamdan biri kaybolabilir.
  // Kişisel bir sitenin trafiğinde bu kabul edilebilir.
  const next = count + 1;
  await Promise.all([
    env.WAVES.put('count', String(next)),
    env.WAVES.put(key, '1', { expirationTtl: 60 * 60 * 24 }),
  ]);
  return json({ count: next, waved: true });
}
