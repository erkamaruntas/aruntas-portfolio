# aruntas.com

Kişisel portföy sitem: **[aruntas.com](https://aruntas.com)**

Kaydırdıkça hikâye anlatan, Apple ürün sayfası tarzında tek dosyalık (framework'süz) HTML/CSS/JS sayfası. Arka planda her bölümde değişen gerçek Anadolu halıları var; projelerim, gerçek GitHub katkı grafiği (kilim çerçeveli), teknolojiler ve iletişim bilgilerim burada.

Halı görselleri [The Met](https://www.metmuseum.org/about-the-met/policies-and-documents/open-access) ve [Cleveland Museum of Art](https://www.clevelandart.org/open-access) açık erişim (public domain) koleksiyonlarındaki Anadolu halılarından üretildi.

Sayılar, GitHub ve teknolojiler bölümlerindeki `bg-lotto.jpg`: [Classical Turkish Carpet with the Lotto Pattern](https://www.clevelandart.org/art/2015.61), Uşak, 1600–1650, Cleveland Museum of Art, envanter 2015.61 (public domain).
Arka planda kullanılan `bg-lotto-seamless.svg`, bu fotoğrafın yalnızca iç desenini kırpar ve dört yönde aynalayarak boşluksuz tekrar oluşturur.

## Projeler

- **[Atelify](https://atelify.aruntas.com)**: Fotoğrafları yapay zekâ ile kişiye özel mücevher tasarımlarına dönüştüren platform.
- **[Subtification](https://subtification.aruntas.com)**: Abonelik ve taksit takip eden iOS uygulaması.

## Yapı

```
public/          Yayınlanan dosyalar
  index.html     Sayfanın tamamı (stil ve kod dahil)
  assets/        Proje ekran görüntüleri
  assets/rugs/   Halı arka planları, yazı desenleri, kilim çerçevesi, saçaklı uç
wrangler.jsonc   Cloudflare ayarı (aruntas.com ve www.aruntas.com)
```

## Yayınlama

Cloudflare Workers (statik dosyalar) üzerinde çalışır:

```bash
npx wrangler deploy
```

---

© 2026 Yusuf Erkam Aruntaş
