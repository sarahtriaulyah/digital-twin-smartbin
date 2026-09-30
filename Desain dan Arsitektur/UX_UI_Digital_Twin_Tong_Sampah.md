1. Persona dan Kebutuhan Pengguna
Pengguna	Kebutuhan
Petugas Kebersihan	Mengetahui tong yang penuh, persentase isi, dan waktu pembaruan tanpa memeriksa setiap tong secara manual.
Admin/Pengelola	Melihat status sistem, mengelola data tong, dan mengatur ambang batas.
2. Struktur Halaman / Sitemap

Struktur halaman sistem dibuat sederhana agar pengguna dapat berpindah halaman dengan mudah.

LOGIN
  │
  ▼
DASHBOARD
  │
  ├── Monitoring Tong
  │     │
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
         │
         ├── Ambang Batas
         └── Kelola Data Tong
3. Wireframe Dashboard

Dashboard merupakan halaman utama yang menampilkan kondisi tong secara ringkas.

┌─────────────────────────────────────────────────────────────────────┐
│ 🗑️ SMART BIN MONITORING                              🔔  Admin ▼    │
├───────────────────┬─────────────────────────────────────────────────┤
│                   │                                                 │
│  Dashboard        │  Dashboard                                      │
│                   │  Monitoring kondisi tong sampah                 │
│  Monitoring       │                                                 │
│                   │  ┌──────────┐  ┌──────────┐  ┌──────────┐      │
│  Riwayat          │  │    01    │  │    00    │  │    00    │      │
│                   │  │  Normal  │  │ Hampir   │  │  Penuh   │      │
│  Notifikasi       │  │          │  │  Penuh   │  │          │      │
│                   │  └──────────┘  └──────────┘  └──────────┘      │
│  Pengaturan       │                                                 │
│                   │  Kondisi Tong                                   │
│                   │  ┌───────────────────────────────────────────┐  │
│                   │  │                                           │  │
│                   │  │              🗑️ DIGITAL TWIN              │  │
│                   │  │                                           │  │
│                   │  │                 ███████                   │  │
│                   │  │                 ███████                   │  │
│                   │  │                 ███████                   │  │
│                   │  │                 ███████                   │  │
│                   │  │                 ███████                   │  │
│                   │  │                 ───────                   │  │
│                   │  │                                           │  │
│                   │  │                  65%                      │  │
│                   │  │                 TERISI                    │  │
│                   │  └───────────────────────────────────────────┘  │
│                   │                                                 │
│                   │  Status: 🟡 HAMPIR PENUH                       │
│                   │  Update terakhir: 09:42:15                     │
│                   │                                                 │
└───────────────────┴─────────────────────────────────────────────────┘
4. Komponen Utama Dashboard
A. Summary Card

Summary card digunakan untuk memberikan informasi kondisi tong secara cepat.

Card	Informasi
Normal	Jumlah tong dengan kondisi normal
Hampir Penuh	Jumlah tong yang mendekati batas
Penuh	Jumlah tong yang sudah melewati batas
Tampilan Summary Card
┌──────────────┐   ┌──────────────┐   ┌──────────────┐
│     01       │   │     00       │   │     00       │
│              │   │              │   │              │
│   NORMAL     │   │ HAMPIR PENUH │   │    PENUH     │
└──────────────┘   └──────────────┘   └──────────────┘
5. Digital Twin

Digital Twin merupakan representasi digital dari tong sampah fisik.

Tingkat isian ditampilkan secara vertikal berdasarkan hasil pembacaan sensor.

          ┌─────────┐
          │         │
          │ ███████ │  ← Level sampah
          │ ███████ │
          │ ███████ │
          │ ███████ │
          │         │
          └─────────┘
              65%
6. Halaman Detail Monitoring

Halaman ini menampilkan informasi lebih lengkap mengenai satu tong.

┌─────────────────────────────────────────────────────────────────────┐
│ ← Monitoring / Detail Tong                                          │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  TONG SAMPAH #001                              🟡 HAMPIR PENUH       │
│                                                                     │
│       ┌─────────────────┐          ┌────────────────────────────┐   │
│       │                 │          │ Tingkat Kepenuhan          │   │
│       │       🗑️        │          │                            │   │
│       │                 │          │          65%               │   │
│       │    ███████      │          │                            │   │
│       │    ███████      │          │ Jarak Sampah               │   │
│       │    ███████      │          │          XX cm             │   │
│       │                 │          │                            │   │
│       └─────────────────┘          └────────────────────────────┘   │
│                                                                     │
│  STATUS                                                             │
│                                                                     │
│  🟢 Normal       🟡 Hampir Penuh       🔴 Penuh                    │
│                                                                     │
│  ─────────────────────────────────────────────────────────────────  │
│                                                                     │
│  Update terakhir                                                     │
│  30 September 2026 • 09:42:15                                      │
│                                                                     │
│  ─────────────────────────────────────────────────────────────────  │
│                                                                     │
│  Riwayat Kepenuhan                                                  │
│                                                                     │
│  09:42   ██████████████████████████████  65%                      │
│  09:30   ███████████████████████████     58%                      │
│  09:15   ████████████████████████        51%                      │
│  09:00   ████████████████████            43%                      │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
7. Sistem Status UX

Sistem menggunakan tiga kondisi utama:

0%                    70%          90%                  100%
│─────────────────────│────────────│──────────────────────│
        NORMAL          HAMPIR PENUH          PENUH
Status
🟢 NORMAL
Tong masih dalam kondisi normal.


🟡 HAMPIR PENUH
Tong mendekati batas kepenuhan.


🔴 PENUH
Tong sudah mencapai batas kepenuhan.

Catatan: nilai 70% dan 90% merupakan contoh visual ambang batas. Nilai sebenarnya dapat ditentukan melalui pengaturan Admin.

8. Notifikasi Ketika Tong Penuh

Ketika sensor mendeteksi kondisi penuh, sistem memberikan peringatan.

┌────────────────────────────────────────┐
│ 🔔  PERINGATAN TONG SAMPAH             │
├────────────────────────────────────────┤
│                                        │
│  Tong #001 telah mencapai batas        │
│  kepenuhan.                            │
│                                        │
│  Tingkat kepenuhan: 100%               │
│                                        │
│          ┌────────────────┐            │
│          │   LIHAT TONG   │            │
│          └────────────────┘            │
│                                        │
└────────────────────────────────────────┘
9. Logika Estimasi Kepenuhan

Jika menggunakan sensor jarak dari bagian atas tong, persentase isi dapat diperkirakan menggunakan rumus:

Persentase Isi = ((H - d) / H) × 100%

Keterangan:

H = Tinggi efektif bagian dalam tong

d = Jarak sensor ke permukaan sampah
Alur Perhitungan
┌──────────────────────┐
│ Tinggi Tong (H)      │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│ Jarak Sensor (d)     │
└──────────┬───────────┘
           │
           ▼
┌────────────────────────────┐
│ ((H - d) / H) × 100%       │
└──────────┬─────────────────┘
           │
           ▼
┌────────────────────────────┐
│ Batasi nilai 0% - 100%     │
└──────────┬─────────────────┘
           │
           ▼
┌────────────────────────────┐
│ Persentase Kepenuhan       │
└────────────────────────────┘

H dan d harus menggunakan satuan yang sama. Nilai hasil perhitungan dibatasi pada rentang 0–100% dan perlu dikalibrasi melalui pengujian fisik.

Rumus merupakan pendekatan untuk permukaan sampah yang relatif rata. Bentuk sampah yang tidak rata dapat menyebabkan pembacaan berubah-ubah, sehingga pengembangan berikutnya dapat menerapkan beberapa kali pembacaan dan perataan data.

10. Alur Sistem

Berikut alur utama dari sampah masuk sampai data ditampilkan pada Dashboard.

                    ┌─────────────────────┐
                    │    TONG FISIK       │
                    │                     │
                    │   Sampah masuk      │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   SENSOR JARAK      │
                    │                     │
                    │ Membaca jarak       │
                    │ permukaan sampah    │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   MIKROKONTROLER    │
                    │                     │
                    │ Mengolah data       │
                    │ sensor               │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │ PERHITUNGAN         │
                    │ KEPEUnUHAN          │
                    │                     │
                    │ Persentase isi      │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │  JARINGAN / BACKEND │
                    │                     │
                    │ Mengirim dan        │
                    │ menyimpan data      │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │      DATABASE       │
                    │                     │
                    │ Data monitoring     │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │     DASHBOARD       │
                    │                     │
                    │ Persentase          │
                    │ Status              │
                    │ Digital Twin        │
                    └──────────┬──────────┘
                               │
                               ▼
                       ┌──────────────┐
                       │ Status Penuh?│
                       └──────┬───────┘
                              │
                    ┌─────────┴─────────┐
                    │                   │
                   TIDAK                YA
                    │                   │
                    ▼                   ▼
             ┌─────────────┐    ┌─────────────────┐
             │ Update Data │    │   NOTIFIKASI    │
             │ Dashboard   │    │      PENUH      │
             └─────────────┘    └─────────────────┘
