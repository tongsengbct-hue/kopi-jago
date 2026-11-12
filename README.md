# Kopi Jago — Website Kedai Kopi

Website landing page modern premium untuk **Kopi Jago**, menggunakan HTML5, CSS3, JavaScript, dan Bootstrap 5. Tidak menggunakan database atau backend.

## Fitur
- Desain responsif untuk desktop, tablet, dan ponsel.
- Palet warna cokelat kopi, krem, dan aksen keemasan.
- Navigasi sticky dan menu mobile Bootstrap.
- Bagian Beranda, Tentang, Menu, Pengalaman, dan Kontak.
- Kartu menu dan efek hover.
- Form kontak yang menyusun pesan lalu membuka WhatsApp.
- Tahun copyright otomatis dan tombol kembali ke atas.

## Struktur folder

```text
kopi-jago-website/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/
    ├── logo.svg
    ├── hero-coffee.svg
    ├── coffee-cup.svg
    ├── coffee-beans.svg
    ├── menu-espresso.svg
    ├── menu-latte.svg
    └── menu-coldbrew.svg
```

## Cara menjalankan
1. Ekstrak ZIP.
2. Buka folder `kopi-jago-website`.
3. Klik dua kali `index.html`, atau jalankan dengan ekstensi Live Server di Visual Studio Code.
4. Koneksi internet diperlukan untuk memuat Bootstrap 5 CDN dan Google Fonts. File inti website tetap berada di folder proyek.

## Kustomisasi sebelum dipublikasikan
- **Nomor WhatsApp:** buka `js/script.js`, ubah nilai `whatsappNumber` menjadi nomor WhatsApp kedai dengan format internasional tanpa tanda `+`. Contoh: `6281234567890`.
- **Alamat dan kontak:** ubah teks pada bagian `#contact` di `index.html`.
- **Menu dan harga:** ubah nama, deskripsi, dan harga di bagian `#menu`.
- **Foto:** ganti file SVG di folder `images/` dengan foto kedai/produk. Pertahankan nama file atau sesuaikan path pada `index.html` dan CSS.
- **Media sosial:** ubah tautan Instagram, TikTok, dan WhatsApp pada bagian footer.

## Catatan
Form kontak bekerja dengan membuka WhatsApp (bukan menyimpan data). Nomor WhatsApp bawaan adalah nomor contoh dan wajib diganti. Harga, alamat, jam operasional, email, serta nomor telepon pada website adalah konten contoh yang perlu diverifikasi pemilik kedai.
