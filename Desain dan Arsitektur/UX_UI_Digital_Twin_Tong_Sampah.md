1. Persona dan Kebutuhan Pengguna
Pengguna	Kebutuhan
Petugas kebersihan	Mengetahui tong yang penuh, persentase isi, dan waktu pembaruan tanpa memeriksa setiap tong secara manual.
Admin/pengelola	Melihat status sistem, mengelola data tong, dan mengatur ambang batas.

2. Struktur halaman / sitemap
LOGIN
  │
  ▼
DASHBOARD
  ├── Monitoring Tong
  │     └── Detail Tong
  │            ├── Status
  │            ├── Persentase
  │            ├── Digital Twin
  │            └── Riwayat
  │
  ├── Riwayat Monitoring
  │
  ├── Notifikasi
  │
  └── Pengaturan
         ├── Ambang Batas
         └── Kelola Data Tong

3. Wireframe Dashboard

┌─────────────────────────────────────────────────────────────┐
│  🗑️ SMART BIN MONITORING                 🔔  Admin ▼       │
├───────────────┬─────────────────────────────────────────────┤
│               │                                             │
│  Dashboard    │  Dashboard                                  │
│               │  Monitoring kondisi tong sampah             │
│  Monitoring   │                                             │
│               │  ┌──────────┐ ┌──────────┐ ┌──────────┐   │
│  Riwayat      │  │   01     │ │   00     │ │   00     │   │
│               │  │  Normal  │ │ Hampir   │ │  Penuh   │   │
│  Notifikasi   │  │          │ │  Penuh   │ │          │   │
│               │  └──────────┘ └──────────┘ └──────────┘   │
│  Pengaturan   │                                             │
│               │  Kondisi Tong                               │
│               │  ┌───────────────────────────────────────┐ │
│               │  │                                       │ │
│               │  │          🗑️ DIGITAL TWIN              │ │
│               │  │                                       │ │
│               │  │             ███████                   │ │
│               │  │             ███████                   │ │
│               │  │             ███████                   │ │
│               │  │             ███████                   │ │
│               │  │             ███████                   │ │
│               │  │             ───────                   │ │
│               │  │                                       │ │
│               │  │          65% TERISI                   │ │
│               │  └───────────────────────────────────────┘ │
│               │                                             │
│               │  Status: 🟡 HAMPIR PENUH                   │
│               │  Update terakhir: 09:42:15                 │
│               │                                             │
└───────────────┴─────────────────────────────────────────────┘

4. Komponen utama
A. Summary Card

| Card         | Informasi                             |
| ------------ | ------------------------------------- |
| Normal       | Jumlah tong dengan kondisi normal     |
| Hampir Penuh | Jumlah tong mendekati batas           |
| Penuh        | Jumlah tong yang sudah melewati batas |

B. Digital Twin
Bagian tengah menampilkan bentuk digital tong sampah. Tingkat isian divisualisasikan secara vertikal.
        ┌───────┐
        │       │
        │███████│ ← level sampah
        │███████│
        │███████│
        │███████│
        │       │
        └───────┘
           65%

5.  Halaman Detail Monitoring

┌─────────────────────────────────────────────────────────────┐
│ ← Monitoring / Detail Tong                                  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  TONG SAMPAH #001                         🟡 HAMPIR PENUH   │
│                                                             │
│       ┌───────────────┐       ┌────────────────────────┐   │
│       │               │       │ Tingkat Kepenuhan      │   │
│       │      🗑️       │       │                        │   │
│       │               │       │       65%              │   │
│       │    █████      │       │                        │   │
│       │    █████      │       │ Jarak Sampah           │   │
│       │    █████      │       │       XX cm             │   │
│       │               │       │                        │   │
│       └───────────────┘       └────────────────────────┘   │
│                                                             │
│  STATUS                                                     │
│  🟢 Normal        🟡 Hampir Penuh        🔴 Penuh          │
│                                                             │
│  Update terakhir                                           │
│  30 September 2026 • 09:42:15                              │
│                                                             │
│  ─────────────────────────────────────────────────────────  │
│                                                             │
│  Riwayat Kepenuhan                                          │
│                                                             │
│  09:42   █████████████████████ 65%                         │
│  09:30   ██████████████████    58%                         │
│  09:15   ███████████████       51%                         │
│  09:00   ████████████          43%                         │
│                                                             │
└─────────────────────────────────────────────────────────────┘

6. Sistem status UX

0%                    70%          90%             100%
│─────────────────────│────────────│────────────────│
        NORMAL          HAMPIR PENUH       PENUH

. Notifikasi ketika penuh
Ketika sensor mendeteksi kondisi penuh:

┌──────────────────────────────────────┐
│ 🔔 PERINGATAN TONG SAMPAH            │
│                                      │
│ Tong #001 telah mencapai batas       │
│ kepenuhan.                           │
│                                      │
│ Tingkat kepenuhan: 100%              │
│                                      │
│              [ Lihat Tong ]          │
└──────────────────────────────────────┘

7. Logika Estimasi Kepenuhan
  Jika menggunakan sensor jarak dari bagian atas tong, persentase isi dapat diperkirakan dengan rumus: Persentase isi = ((H − d) / H) × 100%, dengan H adalah tinggi efektif bagian dalam tong dan d adalah jarak sensor ke permukaan sampah. H dan d harus menggunakan satuan yang sama. Nilai hasil perhitungan dibatasi pada rentang 0–100% dan perlu dikalibrasi melalui pengujian fisik.
Catatan: rumus ini merupakan pendekatan untuk permukaan sampah yang relatif rata. Bentuk sampah yang tidak rata dapat menyebabkan pembacaan berubah-ubah, sehingga pengembangan berikutnya dapat menerapkan beberapa kali pembacaan dan perataan data.

8. Alur Sistem

Tahap	Proses
1	Sampah masuk ke tong fisik.
2	Sensor jarak membaca jarak permukaan sampah ke sensor.
3	Mikrokontroler mengolah pembacaan dan menghitung perkiraan persentase isi berdasarkan tinggi tong hasil kalibrasi.
4	Data dikirim melalui jaringan ke backend/database (teknologi ditentukan kelompok).
5	Dashboard mengambil data dan memperbarui nilai/status.
6	Model digital menampilkan kondisi tong sesuai data; status penuh memicu indikator/notifikasi.
