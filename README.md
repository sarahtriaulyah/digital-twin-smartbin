<div align="center">
🗑️ SI TONG PINTAR
Digital Twin Monitoring Tong Sampah Otomatis
Solusi digital untuk memantau kapasitas tong sampah melalui dashboard web.
![Sprint](https://img.shields.io/badge/Sprint-1%20(Project%20Setup)-2ea44f?style=for-the-badge)
![Mata Kuliah](https://img.shields.io/badge/Mata%20Kuliah-Rekayasa%20Perangkat%20Lunak-orange?style=for-the-badge)
![Platform](https://img.shields.io/badge/Platform-Web%20Dashboard-blue?style=for-the-badge)
</div>
---
✨ Tentang Proyek
Si Tong Pintar adalah proyek Digital Twin yang dirancang untuk memantau tingkat kepenuhan tong sampah melalui sensor dan dashboard berbasis web.
Sistem menampilkan representasi digital dari tong sampah fisik agar petugas dapat mengetahui kondisi tong tanpa harus memeriksanya satu per satu secara langsung.
Informasi yang direncanakan meliputi persentase kepenuhan, status tong, lokasi, dan waktu pembaruan data. Sistem ini diharapkan membantu petugas menentukan prioritas pengangkutan dan mengurangi risiko tong sampah meluap.
Tujuan: meningkatkan efisiensi pemantauan kondisi tong sampah.
🎯 Fitur Utama
Fitur	Deskripsi	Rencana
🔐 Login	Akses untuk pengguna yang berwenang	Pengembangan bertahap
📊 Dashboard Monitoring	Ringkasan kondisi tong sampah	Sprint berikutnya
📈 Persentase Kepenuhan	Tingkat kepenuhan dalam persen	Sprint berikutnya
🚦 Status Tong	Normal, Hampir Penuh, atau Penuh	Sprint berikutnya
🗑️ Digital Twin	Representasi digital kondisi tong	Sprint berikutnya
📍 Detail Tong	Lokasi dan kondisi tiap tong	Pengembangan bertahap
🔔 Notifikasi	Informasi saat tong mencapai batas kepenuhan	Direncanakan
🕒 Riwayat Monitoring	Data pemantauan sebelumnya	Direncanakan
> Fitur dikembangkan secara bertahap sesuai hasil Sprint Planning. Belum semua fitur pada daftar ini sudah diimplementasikan.
🚦 Rancangan Status Kepenuhan
Status	Persentase	Keterangan
🟢 Normal	0–59%	Tong masih memiliki ruang yang cukup
🟡 Hampir Penuh	60–89%	Tong perlu dipantau dan dijadwalkan untuk pengangkutan
🔴 Penuh	90–100%	Tong perlu diprioritaskan untuk dikosongkan
Ambang batas ini merupakan rancangan awal dan dapat disesuaikan dengan kebutuhan sistem.
📄 Dokumen Proyek
Dokumen	Keterangan
Project Charter	Latar belakang, tujuan, ruang lingkup, dan risiko
Perhitungan Function Point	Estimasi ukuran fungsionalitas sistem
Product Backlog & Sprint 1 Backlog	User story, prioritas, dan pekerjaan sprint
Activity Diagram	Alur aktivitas monitoring
Sequence Diagram	Urutan komunikasi antarbagian sistem
Desain UI/UX	Rancangan antarmuka dan pengalaman pengguna
Kerangka Dasar Program	Penjelasan kode awal dashboard
📁 Struktur Repository
```text
Sitong-pintar/
├── README.md
├── perancangan proyek/
│   ├── proyek charter.md
│   ├── Perhitungan function point.md
│   └── Product Backlog & Sprint 1 backlog.md
├── Desain Dan Arsitektur/
│   ├── Activity Diagram.md
│   ├── Sequence Diagram.md
│   └── UX_UI_Digital_Twin_Tong_Sampah.md
└── inisialisasi kode proyek/
    ├── Kerangka Dasar.md
    ├── index.html
    ├── style.css
    └── script.js
```
Nama file dan folder pada tautan harus sama persis dengan yang ada di repository GitHub.
⚙️ Cara Kerja Sistem
Sensor mengukur jarak antara permukaan sampah dan bagian atas tong.
Data sensor dikirim ke sistem untuk diproses.
Sistem menghitung perkiraan persentase kepenuhan.
Dashboard menampilkan status dan representasi digital tong.
Sistem menentukan status berdasarkan ambang batas.
Petugas menggunakan informasi tersebut untuk menentukan prioritas pengangkutan.
Catatan prototipe: program awal menggunakan data simulasi. Integrasi sensor fisik, penyimpanan database, autentikasi, dan notifikasi memerlukan pengembangan lanjutan.
🗓️ Roadmap Pengembangan
[x] Sprint 1 — Perencanaan, desain, backlog, dan project setup.
[ ] Sprint 2 — Kerangka dashboard dan logika perhitungan kepenuhan.
[ ] Sprint 3 — Visualisasi Digital Twin, detail tong, dan integrasi data sensor.
[ ] Sprint 4 — Notifikasi, riwayat monitoring, pengujian, dan rilis produk.
Roadmap dapat berubah sesuai hasil Sprint Planning.
👥 Tim Pengembang
No.	Nama	NIM	Akun GitHub	Tugas
1	Sarah Tri Aulyah	240504065	@sarahtriaulyah	Project Charter & Project Setup
2	Riska Shofiyah	240504093	@shofiyahriska2	Product Backlog & System Design
3	Siti Nabila Zuhra	240504078	@nabilazuhra318	Function Point & Desain UI/UX
Pastikan nama, NIM, akun GitHub, dan pembagian tugas sudah dikonfirmasi oleh seluruh anggota kelompok.
---
<div align="center">
Universitas Samudera  
Program Studi Informatika  
Mata Kuliah Rekayasa Perangkat Lunak · 2026
Si Tong Pintar — Pantau kepenuhan, kelola sampah lebih efisien. ♻️
</div>
