# aruntas.com

Kişisel portföy sitem: **[aruntas.com](https://aruntas.com)**

Bento grid düzeninde, tek dosyalık (framework'süz) HTML/CSS/JS sayfası. Projelerim, kullandığım teknolojiler, gerçek GitHub katkı grafiği ve iletişim bilgilerim burada.

## Projeler

- **[Atelify](https://atelify.aruntas.com)**: Fotoğrafları yapay zekâ ile kişiye özel mücevher tasarımlarına dönüştüren platform.
- **[Subtification](https://subtification.aruntas.com)**: Abonelik ve taksit takip eden iOS uygulaması.

## Yapı

```
public/          Yayınlanan dosyalar
  index.html     Sayfanın tamamı (stil ve kod dahil)
  assets/        Proje ekran görüntüleri
wrangler.jsonc   Cloudflare ayarı (aruntas.com ve www.aruntas.com)
```

## Yayınlama

Cloudflare Workers (statik dosyalar) üzerinde çalışır:

```bash
npx wrangler deploy
```

---

© 2026 Yusuf Erkam Aruntaş
