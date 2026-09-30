# DOKUMEN PERHITUNGAN FUNCTION POINT (FP)

## Digital Twin Monitoring Tong Sampah — SmartBin Twin

Function Point (FP) digunakan untuk memperkirakan ukuran fungsional aplikasi berdasarkan fungsi yang terlihat oleh pengguna.

Karena kebutuhan sistem masih dalam tahap rancangan, perhitungan berikut merupakan **estimasi awal** dan dapat diperbarui setelah detail fitur, data, serta tingkat kompleksitas sistem dikonfirmasi.

---

# 1. Identifikasi Fitur Sistem

| No | Fitur Sistem | Deskripsi |
|---:|---|---|
| 1 | Login | Petugas/admin masuk ke sistem |
| 2 | Kelola Data Tong | Menambah dan mengubah data tong sampah |
| 3 | Monitoring Kapasitas | Memasukkan atau memperbarui data kepenuhan tong |
| 4 | Dashboard Monitoring | Menampilkan kondisi tong sampah |
| 5 | Detail Tong | Menampilkan informasi setiap tong |
| 6 | Status Tong | Menentukan kondisi Normal, Hampir Penuh, atau Penuh |
| 7 | Notifikasi | Memberikan peringatan ketika tong hampir penuh/penuh |
| 8 | Riwayat Monitoring | Menampilkan perubahan kondisi tong dari waktu ke waktu |
| 9 | Laporan Kondisi Tong | Menampilkan rekap kondisi tong |

---

# 2. Tabel Perhitungan Function Point

| No | Fitur | I | O | Q | F | E | T | R |
|---:|---|---:|---:|---:|---:|---:|---:|---:|
| 1 | Login | 1 | 0 | 0 | 1 | 0 | 0 | 1 |
| 2 | Kelola Data Tong | 1 | 0 | 0 | 1 | 0 | 0 | 0 |
| 3 | Monitoring Kapasitas | 1 | 0 | 0 | 1 | 0 | 1 | 1 |
| 4 | Dashboard Monitoring | 0 | 1 | 0 | 0 | 0 | 1 | 0 |
| 5 | Detail Tong | 0 | 0 | 1 | 0 | 0 | 0 | 0 |
| 6 | Status Tong | 0 | 1 | 0 | 0 | 0 | 1 | 1 |
| 7 | Notifikasi | 0 | 1 | 0 | 0 | 0 | 1 | 1 |
| 8 | Riwayat Monitoring | 0 | 0 | 1 | 1 | 0 | 1 | 0 |
| 9 | Laporan Kondisi Tong | 0 | 1 | 1 | 0 | 0 | 0 | 0 |
| **Total** | | **3** | **4** | **3** | **4** | **0** | **5** | **4** |

---

# 3. Keterangan Komponen Function Point

| Simbol | Komponen | Keterangan |
|---|---|---|
| I | Input | Data yang dimasukkan ke sistem |
| O | Output | Informasi yang dihasilkan oleh sistem |
| Q | Inquiry | Permintaan atau pencarian informasi |
| F | Internal Data Structure | Struktur data yang dikelola oleh sistem |
| E | External File | Data yang berasal dari sistem eksternal |
| T | Transformation | Proses pengolahan input menjadi informasi |
| R | Transition | Perubahan keadaan atau status akibat suatu kejadian |

---

# 4. Perhitungan Index

Rumus yang digunakan:

**Index = I + O + Q + F + E + T + R**

Berdasarkan hasil tabel:

**Index = 3 + 4 + 3 + 4 + 0 + 5 + 4**

**Index = 23**

### Hasil

> **Function Point Index SmartBin Twin = 23**

---

# 5. Estimasi Metrik Ukuran Aplikasi

Berdasarkan identifikasi fungsi pada sistem **Digital Twin Monitoring Tong Sampah**, terdapat **9 fitur utama** yang terdiri dari fungsi input, output, inquiry, struktur data internal, transformasi, dan transisi.

Berdasarkan model **3D Function Point** yang digunakan, diperoleh nilai **Index sebesar 23**.

Nilai tersebut digunakan sebagai estimasi ukuran fungsional awal aplikasi pada **Sprint 1**.

---

## Rekapitulasi Function Point

| Komponen | Nilai |
|---|---:|
| Inputs (I) | 3 |
| Outputs (O) | 4 |
| Inquiries (Q) | 3 |
| Internal Data Structures (F) | 4 |
| External Files (E) | 0 |
| Transformations (T) | 5 |
| Transitions (R) | 4 |
| **Function Point Index** | **23** |
| **Jumlah Fitur** | **9** |

---

# 6. Interpretasi Hasil

Nilai **Function Point Index = 23** menunjukkan estimasi ukuran fungsional awal dari aplikasi SmartBin Twin berdasarkan fungsi yang telah diidentifikasi pada Sprint 1.

Perhitungan ini dapat digunakan sebagai dasar untuk:

- memperkirakan ukuran aplikasi;
- membantu menentukan ruang lingkup pengembangan;
- membantu menyusun backlog;
- membantu menentukan pekerjaan pada setiap Sprint;
- menjadi dasar evaluasi apabila terdapat penambahan atau perubahan fitur.

Nilai Function Point dapat berubah apabila terdapat perubahan pada kebutuhan sistem, penambahan fitur, perubahan struktur data, atau perubahan proses bisnis.

---

# 7. Catatan

1. Nilai **23** merupakan estimasi awal berdasarkan fitur SmartBin Twin yang telah dirancang.
2. Perhitungan dapat berubah apabila fitur atau kebutuhan sistem mengalami perubahan.
3. Data sensor pada tahap prototipe dapat menggunakan data simulasi sebelum integrasi sensor secara langsung.
4. Perhitungan Function Point perlu disesuaikan kembali apabila dosen memberikan aturan khusus dalam menentukan I/O/Q/F/E/T/R.
5. Nilai Function Point untuk Sprint berikutnya dapat dihitung kembali setelah fitur dan kebutuhan sistem dirinci.
6. Perhitungan ini menggunakan model **3D Function Point** sesuai materi yang digunakan dalam proyek.
