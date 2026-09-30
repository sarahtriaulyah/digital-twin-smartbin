# PROJECT CHARTER
## Digital Twin Monitoring Tong Sampah Otomatis

---

## 1. Latar Belakang

Tong sampah di lingkungan kampus atau fasilitas umum perlu dipantau agar tidak meluap. Pemeriksaan secara manual membutuhkan petugas untuk mengecek setiap tong secara berkala.

Proyek ini mengusulkan sistem monitoring berbasis sensor yang mengukur jarak permukaan sampah dari bagian atas tong. Data pengukuran dikirim ke aplikasi dashboard untuk dihitung menjadi estimasi tingkat kepenuhan dan ditampilkan melalui representasi digital tong sampah.

Digital Twin pada proyek ini merupakan representasi digital dari tong sampah fisik yang diperbarui menggunakan data sensor. Pada tahap prototipe, sistem difokuskan pada satu tong sampah. Rancangan dapat dikembangkan untuk beberapa tong pada tahap berikutnya.

---

## 2. Identifikasi Permasalahan

1. Petugas belum dapat mengetahui kondisi tong sampah dari jarak jauh.
2. Tong yang hampir penuh atau penuh berpotensi terlambat dikosongkan.
3. Informasi kondisi tong perlu disajikan secara ringkas dan mudah dipahami.
4. Pemantauan secara manual membutuhkan waktu dan tenaga petugas.

---

## 3. Rumusan Masalah

1. Bagaimana merancang sistem yang dapat memantau tingkat kepenuhan tong sampah menggunakan sensor?
2. Bagaimana menampilkan kondisi tong pada dashboard dan representasi Digital Twin?
3. Bagaimana memberikan indikator ketika tong berada pada kondisi hampir penuh atau penuh?
4. Bagaimana menampilkan informasi hasil monitoring secara sederhana dan mudah dipahami?

---

## 4. Tujuan

Proyek ini memiliki tujuan sebagai berikut:

1. Membaca jarak permukaan sampah menggunakan sensor.
2. Mengubah hasil pembacaan sensor menjadi persentase kepenuhan berdasarkan tinggi tong yang telah dikalibrasi.
3. Menampilkan status **Normal, Hampir Penuh, atau Penuh** pada dashboard.
4. Menyediakan representasi digital tong sampah yang menggambarkan kondisi tong secara aktual.
5. Menampilkan informasi waktu pembaruan data monitoring.
6. Memberikan indikator atau notifikasi ketika tingkat kepenuhan melewati ambang batas yang telah ditentukan.

---

## 5. Ruang Lingkup

### 5.1 Termasuk dalam Ruang Lingkup

| No. | Fitur/Kegiatan |
|---|---|
| 1 | Rancangan prototipe tong sampah dan sensor tingkat kepenuhan |
| 2 | Dashboard web untuk menampilkan status dan persentase kepenuhan |
| 3 | Model digital/visual tong sampah yang merepresentasikan status |
| 4 | Monitoring data tingkat kepenuhan tong |
| 5 | Informasi waktu pembaruan data |
| 6 | Notifikasi atau indikator status penuh sebagai rancangan fitur |

### 5.2 Di Luar Ruang Lingkup

| No. | Fitur/Kegiatan |
|---|---|
| 1 | Pemilahan jenis sampah secara otomatis |
| 2 | Pengangkutan sampah secara otomatis |
| 3 | Prediksi waktu penuh berbasis Machine Learning |
| 4 | Penerapan dalam skala kota atau banyak lokasi pada tahap awal |
| 5 | Pengembangan sistem untuk banyak tong pada tahap prototipe |

---

## 6. Stakeholder

| No. | Stakeholder | Kebutuhan |
|---|---|---|
| 1 | Petugas/Pengelola | Memantau persentase, status, waktu pembaruan, dan peringatan kondisi tong |
| 2 | Admin | Mengatur ambang batas dan mengelola data tong |
| 3 | Tim Pengembang | Merancang, mengimplementasikan, menguji, dan mendokumentasikan sistem |
| 4 | Dosen/Pembimbing | Memberikan arahan, evaluasi, dan masukan terhadap pengembangan proyek |

---

## 7. Agile Methodology

Pengembangan sistem **Digital Twin Monitoring Tong Sampah Otomatis** menggunakan pendekatan **Agile** dengan kerangka kerja **Scrum**.

Pekerjaan dibagi ke dalam beberapa Sprint agar proyek dapat dikembangkan secara bertahap. Setiap Sprint memiliki tujuan, backlog, dan hasil yang harus dicapai.

Pada **Sprint 1**, fokus pekerjaan adalah perencanaan proyek, UX/UI Design, perancangan sistem awal, perhitungan Function Point, serta Project Setup.

Target Sprint 1 adalah menghasilkan dokumen perencanaan, rancangan UI/UX dan arsitektur, estimasi Function Point, repository GitHub, serta kerangka awal aplikasi.

### Penerapan Scrum pada Proyek

| No. | Kegiatan | Penerapan pada Proyek |
|---|---|---|
| 1 | Sprint Planning | Menentukan tujuan Sprint dan memilih backlog yang realistis untuk dikerjakan. |
| 2 | Daily Scrum / Koordinasi | Anggota menyampaikan progres, rencana pekerjaan, dan hambatan secara singkat. |
| 3 | Development | Mengerjakan dokumen, desain, kode, database, atau perangkat sesuai backlog. |
| 4 | Sprint Review | Menunjukkan hasil Sprint kepada dosen/kelompok dan menerima masukan. |
| 5 | Sprint Retrospective | Mengevaluasi proses kerja dan menentukan perbaikan untuk Sprint berikutnya. |

---

## 8. Target Sprint 1

Target yang ingin dicapai pada Sprint 1:

- Project Charter selesai.
- Product Backlog dan Sprint 1 Backlog selesai.
- Perhitungan Function Point selesai.
- Rancangan UX/UI awal selesai.
- Rancangan arsitektur sistem selesai.
- Rancangan database/ERD selesai.
- Repository GitHub dibuat.
- Struktur folder proyek dibuat.
- Kerangka awal aplikasi dibuat.
- Setiap anggota tim berkontribusi melalui GitHub.

---

## 9. Teknologi yang Digunakan

| Teknologi | Kegunaan |
|---|---|
| HTML | Membuat struktur halaman web |
| CSS | Mengatur tampilan dan desain dashboard |
| JavaScript | Mengatur interaksi dan logika pada halaman |
| PHP/Node.js | Backend dan pengolahan data |
| MySQL | Penyimpanan data monitoring |
| Sensor | Mengukur jarak permukaan sampah |
| GitHub | Version control dan penyimpanan repository |
| Figma | Perancangan UX/UI |

---

## 10. Output Proyek

Output yang diharapkan dari proyek Digital Twin Monitoring Tong Sampah adalah:

1. Dashboard monitoring tong sampah.
2. Informasi persentase kepenuhan tong.
3. Status kondisi tong.
4. Representasi digital tong sampah.
5. Informasi waktu pembaruan data.
6. Indikator/notifikasi kondisi penuh.
7. Database monitoring.
8. Dokumentasi proyek.
9. Repository GitHub sebagai tempat penyimpanan kode dan dokumen.

---

## 11. Definition of Done

Sprint 1 dinyatakan selesai apabila:

- [ ] Project Charter telah dibuat.
- [ ] Product Backlog telah dibuat.
- [ ] Sprint 1 Backlog telah dibuat.
- [ ] Function Point telah dihitung.
- [ ] Wireframe/UI awal telah dibuat.
- [ ] Arsitektur sistem telah dirancang.
- [ ] ERD/database awal telah dirancang.
- [ ] Repository GitHub telah dibuat.
- [ ] Struktur folder proyek telah tersedia.
- [ ] Kerangka awal aplikasi telah dibuat.
- [ ] Dokumentasi telah diunggah ke GitHub.
- [ ] Anggota tim telah melakukan kontribusi/commit pada repository.

---

## 12. Catatan

1. Sistem pada tahap prototipe difokuskan pada satu tong sampah.
2. Data sensor dapat disimulasikan terlebih dahulu pada tahap awal pengembangan.
3. Integrasi sensor secara langsung dapat dikembangkan pada Sprint berikutnya.
4. Fitur dan ruang lingkup dapat mengalami perubahan berdasarkan hasil Sprint Review dan evaluasi tim.
5. Pengembangan untuk beberapa tong sampah dapat dilakukan pada tahap berikutnya.
