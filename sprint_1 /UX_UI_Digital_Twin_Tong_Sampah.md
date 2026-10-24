# 🗑️ SMART BIN MONITORING

Sistem monitoring tong sampah berbasis digital yang membantu petugas kebersihan dan admin dalam memantau kondisi tong secara cepat dan efisien.

---

## 1. Persona dan Kebutuhan Pengguna

| Pengguna               | Kebutuhan                                                                                                  |
| ---------------------- | ---------------------------------------------------------------------------------------------------------- |
| **Petugas Kebersihan** | Mengetahui tong yang penuh, persentase isi, dan waktu pembaruan tanpa memeriksa setiap tong secara manual. |
| **Admin / Pengelola**  | Melihat status sistem, mengelola data tong, dan mengatur ambang batas.                                     |

---

## 2. Sitemap

```text
LOGIN
  │
  ▼
DASHBOARD
  │
  ├── Monitoring Tong
  │     └── Detail Tong
  │           ├── Status
  │           ├── Persentase
  │           ├── Digital Twin
  │           └── Riwayat
  │
  ├── Riwayat Monitoring
  │
  ├── Notifikasi
  │
  └── Pengaturan
        ├── Ambang Batas
        └── Kelola Data Tong
```

---

# 3. LOGIN

```text
┌──────────────────────────────────────────────┐
│                                              │
│          🗑️ SMART BIN MONITORING             │
│                                              │
│          ┌────────────────────────┐          │
│          │ Email                  │          │
│          └────────────────────────┘          │
│                                              │
│          ┌────────────────────────┐          │
│          │ Password               │          │
│          └────────────────────────┘          │
│                                              │
│          ┌────────────────────────┐          │
│          │         LOGIN          │          │
│          └────────────────────────┘          │
│                                              │
└──────────────────────────────────────────────┘
```

### Komponen

| Komponen | Fungsi               |
| -------- | -------------------- |
| Logo     | Identitas sistem     |
| Email    | Input email pengguna |
| Password | Input password       |
| Login    | Masuk ke Dashboard   |

---

# 4. DASHBOARD

```text
┌──────────────────────────────────────────────────────────────────────┐
│ 🗑️ SMART BIN MONITORING                         🔔  Admin ▼          │
├────────────────┬─────────────────────────────────────────────────────┤
│                │                                                     │
│ 📊 Dashboard   │                    DASHBOARD                        │
│                │                                                     │
│ 🗑️ Monitoring  │  ┌────────────┐ ┌────────────┐ ┌────────────┐     │
│    Tong        │  │ TOTAL TONG │ │    PENUH   │ │   NORMAL   │     │
│                │  │     50     │ │      8     │ │     42     │     │
│ 🕘 Riwayat     │  └────────────┘ └────────────┘ └────────────┘     │
│                │                                                     │
│ 🔔 Notifikasi  │  MONITORING TONG                                   │
│                │                                                     │
│ ⚙️ Pengaturan  │  ┌───────────────────────────────────────────────┐ │
│                │  │ #001  Gedung A   ████████████░░  80%          │ │
│                │  │       ⚠️ PERLU DIKOSONGKAN     10:30 WIB       │ │
│                │  ├───────────────────────────────────────────────┤ │
│                │  │ #002  Gedung B   ██████░░░░░░░  45%            │ │
│                │  │       🟢 NORMAL                  10:32 WIB     │ │
│                │  ├───────────────────────────────────────────────┤ │
│                │  │ #003  Gedung C   █████████████  95%            │ │
│                │  │       🔴 PENUH                   10:34 WIB     │ │
│                │  └───────────────────────────────────────────────┘ │
│                │                                                     │
└────────────────┴─────────────────────────────────────────────────────┘
```

### Informasi Dashboard

| Informasi       | Keterangan                             |
| --------------- | -------------------------------------- |
| Total Tong      | Jumlah seluruh tong yang terdaftar     |
| Tong Penuh      | Jumlah tong yang melewati ambang batas |
| Tong Normal     | Jumlah tong dalam kondisi normal       |
| Persentase Isi  | Tingkat kepenuhan tong                 |
| Status          | Kondisi tong saat ini                  |
| Update Terakhir | Waktu data terakhir diperbarui         |

---

# 5. MONITORING TONG

```text
┌──────────────────────────────────────────────────────────────────────┐
│ MONITORING TONG                                                      │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│ 🔍 Cari Tong...                       Filter: [Semua Status ▼]       │
│                                                                      │
├─────────┬──────────────┬────────────┬────────────────┬───────────────┤
│ ID Tong │ Lokasi       │ Persentase │ Status         │ Update        │
├─────────┼──────────────┼────────────┼────────────────┼───────────────┤
│ #001    │ Gedung A     │ 80%        │ ⚠️ Peringatan  │ 10:30 WIB     │
│ #002    │ Gedung B     │ 45%        │ 🟢 Normal      │ 10:32 WIB     │
│ #003    │ Gedung C     │ 95%        │ 🔴 Penuh       │ 10:34 WIB     │
│ #004    │ Gedung D     │ 30%        │ 🟢 Normal      │ 10:35 WIB     │
└─────────┴──────────────┴────────────┴────────────────┴───────────────┘
```

---

# 6. DETAIL TONG

```text
┌──────────────────────────────────────────────────────────────────────┐
│ DETAIL TONG #001                                                     │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│ Lokasi       : Gedung A                                              │
│ Status       : ⚠️ PERLU DIKOSONGKAN                                  │
│ Persentase   : 80%                                                   │
│ Update       : 10:30 WIB                                             │
│                                                                      │
│ ┌──────────────────────┐       ┌──────────────────────────────────┐ │
│ │                      │       │ DIGITAL TWIN                     │ │
│ │        🗑️            │       │                                  │ │
│ │                      │       │           ┌────────┐             │ │
│ │        80%           │       │           │ ██████ │             │ │
│ │                      │       │           │ ██████ │             │ │
│ │                      │       │           │ ██████ │             │ │
│ └──────────────────────┘       │           └────────┘             │ │
│                                │                                  │ │
│                                └──────────────────────────────────┘ │
│                                                                      │
│ [Status] [Persentase] [Digital Twin] [Riwayat]                     │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

---

# 7. RIWAYAT MONITORING

```text
┌──────────────────────────────────────────────────────────────────────┐
│ RIWAYAT MONITORING                                                   │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│ Tong: [ Semua Tong ▼ ]       Tanggal: [ 01/10/2026 - 04/10/2026 ]  │
│                                                                      │
├──────────────┬───────────┬────────────┬─────────────────────────────┤
│ Waktu        │ ID Tong   │ Persentase │ Status                      │
├──────────────┼───────────┼────────────┼─────────────────────────────┤
│ 04/10 10:30  │ #001      │ 80%        │ ⚠️ Perlu Dikosongkan        │
│ 04/10 10:25  │ #001      │ 75%        │ ⚠️ Perlu Dikosongkan        │
│ 04/10 10:20  │ #001      │ 70%        │ 🟢 Normal                   │
│ 04/10 10:15  │ #002      │ 45%        │ 🟢 Normal                   │
└──────────────┴───────────┴────────────┴─────────────────────────────┘
```

---

# 8. NOTIFIKASI

```text
┌──────────────────────────────────────────────────────────────────────┐
│ NOTIFIKASI                                                            │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│ 🔴 TONG #003                                                         │
│    Tong sudah mencapai 95%. Segera lakukan pengosongan.              │
│    10:34 WIB                                                         │
│                                                                      │
│ 🟡 TONG #001                                                         │
│    Tong sudah mencapai 80% dan mendekati batas maksimum.             │
│    10:30 WIB                                                         │
│                                                                      │
│ 🟢 TONG #002                                                         │
│    Kondisi tong kembali normal.                                      │
│    10:20 WIB                                                         │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

---

# 9. PENGATURAN

## 9.1 Ambang Batas

```text
┌──────────────────────────────────────────────────────────────┐
│ PENGATURAN AMBANG BATAS                                      │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│ Normal                     [ 0% ─────────────── 70% ]         │
│                                                              │
│ Peringatan                [ 71% ────────────── 80% ]         │
│                                                              │
│ Penuh                     [ 81% ───────────── 100% ]         │
│                                                              │
│                   [ SIMPAN PENGATURAN ]                      │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Status Tong

| Persentase | Status        | Keterangan                    |
| ---------: | ------------- | ----------------------------- |
|      0–70% | 🟢 Normal     | Kondisi masih aman            |
|     71–80% | 🟡 Peringatan | Tong mulai mendekati penuh    |
|    81–100% | 🔴 Penuh      | Tong perlu segera dikosongkan |

---

# 10. KELOLA DATA TONG

```text
┌──────────────────────────────────────────────────────────────────────┐
│ KELOLA DATA TONG                                  [ + Tambah Tong ]  │
├─────────┬──────────────────┬──────────────┬─────────────────────────┤
│ ID Tong │ Lokasi           │ Status       │ Aksi                    │
├─────────┼──────────────────┼──────────────┼─────────────────────────┤
│ #001    │ Gedung A         │ Aktif        │ [Edit] [Hapus]          │
│ #002    │ Gedung B         │ Aktif        │ [Edit] [Hapus]          │
│ #003    │ Gedung C         │ Aktif        │ [Edit] [Hapus]          │
│ #004    │ Gedung D         │ Nonaktif     │ [Edit] [Hapus]          │
└─────────┴──────────────────┴──────────────┴─────────────────────────┘
```

---

# 11. ALUR PENGGUNA

```text
                    ┌─────────────┐
                    │    LOGIN    │
                    └──────┬──────┘
                           │
                           ▼
                 ┌──────────────────┐
                 │     DASHBOARD    │
                 └────────┬─────────┘
                          │
          ┌───────────────┼────────────────┐
          │               │                │
          ▼               ▼                ▼
 ┌────────────────┐ ┌──────────────┐ ┌──────────────┐
 │ Monitoring     │ │ Notifikasi   │ │ Pengaturan   │
 │ Tong           │ │              │ │              │
 └───────┬────────┘ └──────────────┘ └──────┬───────┘
         │                                   │
         ▼                         ┌─────────┴──────────┐
 ┌────────────────┐                │                    │
 │ Detail Tong    │                ▼                    ▼
 └───────┬────────┘         ┌─────────────┐     ┌──────────────┐
         │                  │ Ambang      │     │ Kelola Data  │
         ├─────────────┐    │ Batas       │     │ Tong         │
         │             │    └─────────────┘     └──────────────┘
         ▼             ▼
   ┌──────────┐  ┌──────────┐
   │ Digital  │  │ Riwayat  │
   │ Twin     │  │          │
   └──────────┘  └──────────┘
```

---

# 12. KOMPONEN UI

| Komponen         | Fungsi                            |
| ---------------- | --------------------------------- |
| **Sidebar**      | Navigasi utama sistem             |
| **Header**       | Nama sistem, notifikasi, dan akun |
| **Card**         | Menampilkan ringkasan informasi   |
| **Table**        | Menampilkan data tong             |
| **Progress Bar** | Menampilkan persentase isi tong   |
| **Badge Status** | Menunjukkan kondisi tong          |
| **Filter**       | Menyaring data                    |
| **Search**       | Mencari tong                      |
| **Button**       | Menjalankan aksi                  |
| **Notification** | Memberikan peringatan             |

---

# 13. STATUS SISTEM

| Status            | Persentase | Arti                          |
| ----------------- | ---------: | ----------------------------- |
| 🟢 **NORMAL**     |      0–70% | Tong masih dalam kondisi aman |
| 🟡 **PERINGATAN** |     71–80% | Tong mendekati batas maksimum |
| 🔴 **PENUH**      |    81–100% | Tong perlu segera dikosongkan |

---

# 14. FITUR BERDASARKAN PENGGUNA

| Fitur                   | Petugas | Admin |
| ----------------------- | :-----: | :---: |
| Login                   |    ✓    |   ✓   |
| Dashboard               |    ✓    |   ✓   |
| Monitoring Tong         |    ✓    |   ✓   |
| Detail Tong             |    ✓    |   ✓   |
| Digital Twin            |    ✓    |   ✓   |
| Riwayat Monitoring      |    ✓    |   ✓   |
| Notifikasi              |    ✓    |   ✓   |
| Pengaturan Ambang Batas |    —    |   ✓   |
| Kelola Data Tong        |    —    |   ✓   |

---

# 15. PRINSIP DESAIN

### 1. Simple

Tampilan sederhana dan mudah dipahami.

### 2. Informative

Informasi penting seperti persentase, status, dan waktu update harus terlihat jelas.

### 3. Responsive

Sistem dapat digunakan pada desktop, tablet, maupun perangkat mobile.

### 4. Consistent

Warna, ikon, tombol, dan komponen digunakan secara konsisten.

### 5. Easy to Monitor

Petugas dapat mengetahui kondisi tong dengan cepat tanpa membuka banyak halaman.

---

# 16. TUJUAN SISTEM

> **Smart Bin Monitoring membantu petugas kebersihan mengetahui kondisi tong secara cepat, akurat, dan efisien tanpa harus memeriksa setiap tong secara manual.**

---

## Struktur File

```text
smart-bin-monitoring/
│
└── README.md
```

**Semua rancangan, sitemap, wireframe, fitur, tabel, dan alur pengguna berada dalam satu file `README.md`.**
