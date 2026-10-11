 <div align="center">

# 🗑️ SI TONG PINTAR

### Digital Twin Monitoring Tong Sampah Otomatis

*Solusi digital untuk memantau kapasitas tong sampah secara real-time.*

![Sprint](https://img.shields.io/badge/Sprint-1%20%7C%20Project%20Setup-2ea44f?style=for-the-badge)
![Mata Kuliah](https://img.shields.io/badge/Mata%20Kuliah-Rekayasa%20Perangkat%20Lunak-orange?style=for-the-badge)
![Platform](https://img.shields.io/badge/Platform-Web%20Dashboard-blue?style=for-the-badge)

</div>

---

## ✨ Tentang Proyek

**SI TONG PINTAR** adalah proyek Digital Twin yang dirancang untuk memantau tingkat kepenuhan tong sampah menggunakan sensor dan dashboard berbasis web.

Sistem ini menampilkan representasi digital dari tong sampah fisik agar petugas dapat mengetahui kondisi tong tanpa harus memeriksanya satu per satu secara langsung.

Informasi yang direncanakan meliputi persentase kepenuhan, status kondisi, lokasi tong, dan waktu pembaruan data. Informasi ini diharapkan membantu petugas menentukan prioritas pengangkutan sampah secara lebih efektif.

**Tujuan proyek:** meningkatkan efisiensi pemantauan dan mengurangi risiko tong sampah meluap.

---

## 📌 Status Proyek

| Informasi           | Keterangan                                                |
| ------------------- | --------------------------------------------------------- |
| Nama Proyek         | SI TONG PINTAR                                            |
| Metode Pengembangan | Scrum                                                     |
| Tahap Saat Ini      | Sprint 1 — Project Setup                                  |
| Platform            | Web Dashboard                                             |
| Fokus Sprint 1      | Perencanaan, desain, dokumentasi, dan inisialisasi proyek |

---

## 🎯 Fitur Utama

| Fitur                   | Deskripsi                                                      |
| ----------------------- | -------------------------------------------------------------- |
| 🔐 Login                | Membatasi akses kepada pengguna yang berwenang                 |
| 📊 Dashboard Monitoring | Menampilkan ringkasan kondisi tong sampah                      |
| 📈 Persentase Kepenuhan | Menampilkan perkiraan tingkat kepenuhan dalam persentase       |
| 🚦 Status Tong Sampah   | Mengelompokkan kondisi menjadi Normal, Hampir Penuh, dan Penuh |
| 🗑️ Digital Twin        | Menampilkan representasi digital kondisi tong sampah           |
| 📍 Detail Tong Sampah   | Menampilkan lokasi dan kondisi setiap tong                     |
| 🔔 Notifikasi           | Direncanakan untuk memberikan informasi ketika tong penuh      |
| 🕒 Riwayat Monitoring   | Direncanakan untuk menyimpan data pemantauan sebelumnya        |

*Catatan: fitur dikembangkan secara bertahap sesuai target setiap sprint. Fitur yang direncanakan belum tentu sudah tersedia.*

---

## 🚦 Status Kepenuhan Tong Sampah

| Status          | Persentase Kepenuhan | Keterangan                                             |
| --------------- | -------------------: | ------------------------------------------------------ |
| 🟢 Normal       |                0–59% | Tong masih memiliki ruang yang cukup                   |
| 🟡 Hampir Penuh |               60–89% | Tong perlu dipantau dan dijadwalkan untuk pengangkutan |
| 🔴 Penuh        |              90–100% | Tong perlu segera dikosongkan                          |

*Ambang batas tersebut merupakan rancangan awal dan dapat disesuaikan dengan kebutuhan sistem.*

---

## 📄 Dokumen Sprint 1

| No. | Dokumen                                                                                                      | Keterangan                                                    |
| --: | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------- |
|   1 | [Project Charter](perancangan%20proyek/proyek%20charter.md)                                                  | Latar belakang, tujuan, ruang lingkup, dan risiko proyek      |
|   2 | [Perhitungan Function Point](perancangan%20proyek/Perhitungan%20function%20point.md)                         | Estimasi ukuran fungsionalitas sistem                         |
|   3 | [Product Backlog & Sprint 1 Backlog](perancangan%20proyek/Product%20Backlog%20%26%20Sprint%201%20backlog.md) | Daftar kebutuhan, user story, prioritas, dan pekerjaan sprint |
|   4 | [Desain UI/UX](Desain%20Dan%20Arsitektur/UX_UI_Digital_Twin_Tong_Sampah.md)                                  | Rancangan antarmuka dan pengalaman pengguna                   |
|   5 | [Kerangka Dasar Program](inisialisasi%20kode%20proyek/Kerangka%20Dasar.md)                                   | Penjelasan struktur awal kode proyek                          |

*Pastikan nama file dan folder pada tautan sesuai dengan yang ada di repository GitHub.*

---

## 📁 Struktur Repository

```text
Sitong-pintar/
├── README.md
├── perancangan proyek/
│   ├── proyek charter.md
│   ├── Perhitungan function point.md
│   └── Product Backlog & Sprint 1 backlog.md
├── Desain Dan Arsitektur/
│   └── UX_UI_Digital_Twin_Tong_Sampah.md
└── inisialisasi kode proyek/
    └── Kerangka Dasar.md
```

---

## ⚙️ Cara Kerja Sistem

1. Sensor mengukur jarak antara permukaan sampah dan bagian atas tong.
2. Data sensor dikirim ke sistem untuk diproses.
3. Sistem menghitung perkiraan persentase kepenuhan tong.
4. Sistem menentukan status berdasarkan ambang batas yang ditetapkan.
5. Dashboard menampilkan kondisi tong melalui visualisasi Digital Twin.
6. Petugas menggunakan informasi tersebut untuk menentukan prioritas pengangkutan sampah.

*Catatan teknis: pada tahap prototipe, data sensor dapat disimulasikan sebelum dihubungkan ke perangkat keras.*

---

## 🗓️ Roadmap Pengembangan

* [x] **Sprint 1:** Perencanaan, desain, backlog, dan project setup.
* [ ] **Sprint 2:** Pengembangan kerangka dashboard dan logika perhitungan kepenuhan.
* [ ] **Sprint 3:** Visualisasi Digital Twin, detail tong, dan integrasi data sensor.
* [ ] **Sprint 4:** Notifikasi, riwayat monitoring, pengujian, dan persiapan rilis produk.

*Roadmap dapat disesuaikan berdasarkan hasil Sprint Planning dan pembagian tugas kelompok.*

---

## 👥 Tim Pengembang

| No. | Nama              | NIM       | Akun GitHub                                                        | Tanggung Jawab                  |
| --: | ----------------- | --------- | ------------------------------------------------------------------ | ------------------------------- |
|   1 | Sarah Tri Aulyah  | 240504065 | [@sarahtriaulyah](https://github.com/sarahtriaulyah)               | Project Charter & Project Setup |
|   2 | Riska Shofiyah    | 240504093 | [@shofiyahriska2-glitch](https://github.com/shofiyahriska2-glitch) | Product Backlog & System Design |
|   3 | Siti Nabila Zuhra | 240504078 | [@nabilazuhra318-design](https://github.com/nabilazuhra318-design) | Function Point & Desain UI/UX   |

---

<div align="center">

**Universitas Samudera**
Program Studi Informatika
Mata Kuliah Rekayasa Perangkat Lunak · 2026

*SI TONG PINTAR — Pantau kepenuhan, kelola sampah lebih efisien.* ♻️

</div>
