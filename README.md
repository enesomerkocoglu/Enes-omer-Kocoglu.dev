<div align="center">

#  Kişisel Portfolyo Web Sitesi

### Enes Ömer Koçoğlu · Jr. Front-End Developer

[![Live Demo](https://img.shields.io/badge/🌐%20Canlı%20Demo-Portfolyo-2C3E50?style=for-the-badge)](https://enesomerkocoglu.github.io/portfolyo)
[![GitHub](https://img.shields.io/badge/Kaynak%20Kodu-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/enesomerkocoglu/portfolyo)
[![Status](https://img.shields.io/badge/Durum-Aktif%20Geliştirme-success?style=for-the-badge)]()

<br/>

> Kendimi, teknik becerilerimi ve kariyerimi tanıttığım kişisel portfolyo web sitesi.
> HTML, CSS ve Vanilla JavaScript ile sıfırdan inşa edildi.

</div>

---

## 📸 Ekran Görüntüleri

| Anasayfa | Hakkında |
|:---:|:---:|
| ![Anasayfa](https://github.com/user-attachments/assets/cab49f81-dcd5-44c4-a099-6e4815703c0d) | ![Hakkında](https://github.com/user-attachments/assets/915e811e-7b21-43cf-8f37-108bf73c3f59) |

| Özgeçmiş | Footer |
|:---:|:---:|
| ![Özgeçmiş](https://github.com/user-attachments/assets/7fa400ee-7514-45e1-84ed-0c2bae8bce05) | ![Footer](https://github.com/user-attachments/assets/f2d1aca5-0f80-41ca-a3a5-b15a39afe17d) |

---

## 🎯 Sitenin Amacı

İşe alım süreçlerinde özgeçmişin ötesine geçmek. Teknik becerilerimi, eğitim geçmişimi ve kariyer hedeflerimi — tek, erişilebilir ve profesyonel bir dijital kimlikte sunmak.

---

## 🗂️ Sayfa Yapısı

| Bölüm | İçerik |
|---|---|
| **Anasayfa** | Kısa tanıtım metni ve unvan |
| **Hakkında** | Profil, teknik beceriler ve öne çıkan projeler |
| **Özgeçmiş** | Eğitim bilgileri, sertifikalar ve kariyer hedefi |
| **Footer** | Sosyal medya linkleri, e-posta ve konum |

---

## 🛠️ Kullanılan Teknolojiler

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript%20ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 🏗️ Teknik Mimari

**Neden Vanilla HTML/CSS/JS?**

Portfolyo sitesi için herhangi bir framework kullanılmadı. Amaç; dilin temel yapı taşlarına hakimiyeti kanıtlamak ve gereksiz bağımlılıklar olmadan performanslı, bakımı kolay bir site üretmek.

```
portfolyo/
├── index.html          → Semantic HTML5 yapısı, SEO meta etiketleri
├── sytle.css           → CSS Custom Properties, Flexbox & Grid, Responsive
└── gorsel/
    ├── close.svg       → Menü kapat ikonu
    ├── menu.svg        → Hamburger menü ikonu
    ├── arrow-up.svg    → Sayfanın üstüne git ikonu
    ├── linkedin.png    → LinkedIn ikonu
    ├── instagram-icon.png → Instagram ikonu
    ├── twitter.png     → X / Twitter ikonu
    └── github.png      → GitHub ikonu
```

**Renk Sistemi**

Tüm renkler CSS Custom Properties ile merkezi olarak yönetiliyor:

```css
:root {
    --ana-renk      : #F2F1EF;   /* Arka plan — kırık beyaz */
    --ikinci-renk   : #2C3E50;   /* Koyu lacivert — header, vurgu */
    --üçüncü-renk   : #B0B0B0;   /* Gri — kart arka planları */
    --dördüncü-renk : #A97300;   /* Altın sarısı — unvan ve başlıklar */
    --siyah         : #000000;   /* Metin rengi */
    --metin-renk    : #F9FAFB;   /* Açık metin — koyu arka plan üzeri */
}
```

---
## ✨ Özellikler

- 📱 **Tam Responsive** — 5 breakpoint ile 388px'den 1440px'e kadar uyumlu
- 🍔 **Animasyonlu Hamburger Menü** — CSS transform + opacity ile akıcı geçiş
- ♿ **Erişilebilirlik** — `aria-label`, `aria-expanded`, `tabindex`, semantic HTML
- ⬆️ **Sayfanın Üstüne Git** — Sabit konumlu hızlı erişim butonu
- 🎨 **CSS Custom Properties** — Merkezi renk ve tema yönetimi
- ⚡ **Performans Odaklı CSS Yükleme** — Render-blocking önleyici teknik
- 🔍 **SEO Hazır** — `meta description`, `meta keywords`, `meta author` etiketleri

---

## 🎓 Eğitim & Sertifikalar

**Eğitim**

| Kurum | Bölüm | Durum |
|---|---|---|
| Anadolu Üniversitesi | Web Tasarım ve Kodlama | Ön Lisans — Devam ediyor |
| Bahçekent Anadolu Lisesi | — | Mezun (2021–2025) |

**Sertifikalar**

| Sertifika | Kurum | Bağlantı |
|---|---|---|
| Responsive Web Design | freeCodeCamp | [Görüntüle](https://freecodecamp.org/certification/ekcrypt/responsive-web-design-v9) |
| JavaScript Algorithms and Data Structures | freeCodeCamp | [Görüntüle](https://freecodecamp.org/certification/ekcrypt/javascript-v9) |

---

## 📚 Bu Projeden Öğrendiklerim

**Teknik Kazanımlar**
- **CSS Custom Properties ile tema yönetimi:** Onlarca bileşene tek yerden renk uygulamak, ölçeklenebilir stil mimarisinin temelini oluşturuyor.
- **CSS animasyon performansı:** `opacity` ve `transform` özelliklerinin GPU tarafından işlendiğini ve `display` toggle'a kıyasla çok daha akıcı animasyon ürettiğini pratikte deneyimledim.
- **Render-blocking CSS çözümü:** `media="print"` trick'i sayfa yükleme performansını doğrudan etkileyen bir teknik; bunu keşfetmek performans odaklı düşünmeyi geliştirdi.
- **Erişilebilirlik (a11y):** `aria-*` etiketlerini ve klavye navigasyonunu desteklemek, "sadece görsel değil, herkes için çalışan" arayüz anlayışını pekiştirdi.

**Süreç Kazanımları**
- Kendi markamı ve sunumumu oluştururken içerik, tasarım ve kod arasındaki dengeyi yönetmeyi öğrendim.

---

## ⚡ Performans & Kalite

**Google PageSpeed Insights — Mobil & Masaüstü**

| Metrik | Mobil | Masaüstü |
|---|---|---|
| 🚀 Performans | ![100](https://img.shields.io/badge/100-success?style=flat-square) | ![100](https://img.shields.io/badge/100-success?style=flat-square) |
| ♿ Erişilebilirlik | ![100](https://img.shields.io/badge/100-success?style=flat-square) | ![100](https://img.shields.io/badge/100-success?style=flat-square) |
| ✅ En İyi Uygulamalar | ![100](https://img.shields.io/badge/100-success?style=flat-square) | ![100](https://img.shields.io/badge/100-success?style=flat-square) |
| 🔍 SEO | ![100](https://img.shields.io/badge/100-success?style=flat-square) | ![100](https://img.shields.io/badge/100-success?style=flat-square) |

> 📊 [PageSpeed Insights Raporu](https://pagespeed.web.dev/analysis?url=https://enesomerkocoglu.github.io/Enes-omer-Kocoglu.dev/)

**Diğer Kalite Metrikleri**

| Metrik | Durum | Notlar |
|---|---|---|
| Responsive | ✅ Tam Uyum | 5 breakpoint, 388px–1440px arası |
| Semantic HTML | ✅ | `section`, `article`, `figure`, `nav` kullanımı |
| Erişilebilirlik | ✅ | `aria-label`, `aria-expanded`, `tabindex` |
| SEO | ✅ | Meta description, keywords, author etiketleri |
| Cross-Browser | ✅ | Chrome, Firefox, Safari, Edge |

---

## 🗺️ Gelecek Planları

- [ ] Öne Çıkan Projeler bölümünü gerçek projelerle doldurma
- [ ] Dark / Light tema toggle
- [ ] Animasyonlu sayfa geçişleri
- [ ] İletişim formu entegrasyonu
- [ ] Türkçe / İngilizce dil desteği

---

## 📬 İletişim

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/enes-ömer-koçoğlu-08447937b)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/enesomerkocoglu)
[![X](https://img.shields.io/badge/X-000000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/enesomerkocoglu)
[![E-posta](https://img.shields.io/badge/E--posta-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:enesomerk1@gmail.com)

📍 İstanbul / Türkiye

<br/>

---

<sub>© 2026 Enes Ömer Koçoğlu · Kişisel Portfolyo · Tüm hakları saklıdır.</sub>

</div>
