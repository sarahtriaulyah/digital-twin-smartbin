# 🗑️ Digital Twin Monitoring Tong Sampah Otomatis

## 📌 Deskripsi Proyek

**Digital Twin Monitoring Tong Sampah Otomatis** adalah proyek prototipe yang menerapkan konsep **Digital Twin** untuk memantau tingkat kepenuhan tong sampah secara digital.

Sistem menggunakan data dari sensor untuk mengetahui jarak permukaan sampah dari bagian atas tong. Data tersebut kemudian diolah menjadi **persentase tingkat kepenuhan** dan ditampilkan melalui dashboard sebagai representasi digital dari tong sampah fisik.

Pada tahap awal, prototipe difokuskan pada **satu tong sampah** dan dapat dikembangkan menjadi sistem monitoring beberapa tong pada tahap berikutnya.

---

## 🎯 Tujuan

Proyek ini bertujuan untuk:

- Memantau tingkat kepenuhan tong sampah menggunakan sensor.
- Mengubah hasil pembacaan sensor menjadi persentase kepenuhan.
- Menampilkan status kondisi tong secara digital.
- Menyediakan representasi Digital Twin dari tong sampah fisik.
- Memberikan indikator ketika tong mendekati penuh atau sudah penuh.
- Menyediakan dasar pengembangan sistem monitoring beberapa tong pada tahap berikutnya.

---

## 🚀 Fitur

### 1. 📊 Monitoring Tingkat Kepenuhan
Menampilkan persentase kepenuhan tong berdasarkan data sensor.

### 2. 🚦 Status Kondisi Tong
Sistem mengelompokkan kondisi tong menjadi:

| Persentase | Status |
|---|---|
| 0–74% | 🟢 Normal |
| 75–89% | 🟠 Hampir Penuh |
| 90–100% | 🔴 Penuh |

### 3. 🗑️ Visualisasi Digital Twin
Menampilkan representasi digital tong sampah yang berubah mengikuti tingkat kepenuhan.

### 4. 🔔 Notifikasi
Memberikan indikator/peringatan ketika tingkat kepenuhan tong mencapai kondisi hampir penuh atau penuh.

### 5. 📜 Riwayat Monitoring
Menyimpan data perubahan kondisi tong dari waktu ke waktu sebagai fitur pengembangan lanjutan.

---

## 🏗️ Konsep Sistem

Alur kerja sistem:

```text
┌─────────────────┐
│  Tong Sampah    │
│     Fisik       │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Sensor Jarak   │
└────────┬────────┘
         │ Data Sensor
         ▼
┌─────────────────┐
│     Backend     │
│ Pengolahan Data │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│     Database    │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│    Dashboard    │
│   Digital Twin  │
└─────────────────┘
