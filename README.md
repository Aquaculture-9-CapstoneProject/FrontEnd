# Blue Bay

**Blue Bay** adalah platform jual beli produk akuakultur terbaik, menyediakan
berbagai jenis ikan, udang, kerang, ikan hias, dan produk olahan laut. Dengan
komitmen terhadap kualitas, kami hadir untuk memenuhi kebutuhan Anda, baik
sebagai pelanggan rumah tangga maupun pegiat akuakultur profesional.

## Demo

- ![Demo 1](public/demo/1.gif)
- ![Demo 2](public/demo/2.gif)
- ![Demo 3](public/demo/3.gif)

## Fitur Utama

### Untuk User

- **Login/Register:** _User_ dapat masuk menggunakan _email/password_ untuk
  akses yang dipersonalisasi.
- **Cari Produk:** Temukan produk dengan mudah menggunakan fitur pencarian
  berdasarkan nama.
- **Tambah ke Keranjang:** Pilih dan tambahkan produk ke keranjang untuk
  pembelian yang lebih praktis.
- **Pembayaran Virtual:** Nikmati kemudahan bertransaksi dengan berbagai metode
  pembayaran virtual.
- **Cek Daftar Pesanan:** Pantau status dan detail pesanan Anda dengan cepat.
- **Detail Produk:** Informasi lengkap mengenai produk, termasuk harga,
  deskripsi, dan spesifikasi.
- **Detail Daftar Pesanan:** Lihat rincian lengkap dari setiap pesanan, termasuk
  status pengiriman.
- **Artikel Informasi:** Baca artikel menarik tentang akuakultur dan berbagai
  tips bermanfaat.
- **Pencarian Artikel:** Jelajahi artikel berdasarkan kategori yang relevan.

### Untuk Admin

- **Dashboard:** Pantau pendapatan bulan ini, jumlah pesanan, total produk, dan
  artikel secara real-time.
- **Status Transaksi:** Kelola dan cek status transaksi pengguna.
- **Manage Transaksi:** Update dan pantau transaksi pelanggan.
- **Manage Pesanan:** Edit atau kelola pesanan pelanggan dengan mudah.
- **Manage Produk:** Tambahkan, hapus, atau ubah detail produk sesuai kebutuhan.
- **Manage Artikel:** Tambahkan, hapus, atau edit artikel untuk memberikan
  informasi terkini.

## Tech Stack

- **Zustand**: State management ringan untuk React.
- **React Router DOM**: Navigasi antar halaman di React.
- **React Hook Form**: Pengelolaan dan validasi form.
- **Axios**: Client HTTP untuk permintaan API.
- **Date-fns**: Manipulasi dan format tanggal/waktu.
- **Chart.js**: Membuat grafik interaktif.
- **React Chart.js 2**: Integrasi Chart.js dengan React.
- **Toastify-js**: Notifikasi toast stylish.
- **Swiper**: Slider/swiper interaktif.
- **DaisyUI**: Komponen UI siap pakai untuk TailwindCSS.
- **TailwindCSS**: Framework CSS berbasis utility.
- **JWT Decode**: Dekode JSON Web Token.
- **Postman**: Pengujian dan dokumentasi API.
- **Figma**: Desain prototipe antarmuka pengguna.

## Instalasi

1. **Clone repository:**

```bash
   git clone https://github.com/Aquaculture-9-CapstoneProject/FrontEnd.git
   cd blueBay
```

2. **Install dependencies:**

- Pilih salah satu dari perintah berikut, sesuai dengan package manager yang
  Anda gunakan:

```bash
  npm install
  # or
  pnpm install
  # or
  yarn install
```

3. **Setup Environment Variables:**

- pada file .env, isi dengan konfigurasi api backend yang akan digunakan

```bash
  cp .env_example .env
```

4. **Run development server:**

```bash
  npm run dev
  # or
  pnpm dev
  # or
  yarn dev
```
