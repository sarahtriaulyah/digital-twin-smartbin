<div align="center">

# 🗑️ DIGITAL TWIN

### SMARTBIN TWIN

**Monitoring Kondisi dan Kepenuhan Tong Sampah Secara Digital**

<br>

![Project](https://img.shields.io/badge/PROJECT-DIGITAL%20TWIN-0077B6)
![Sprint](https://img.shields.io/badge/SPRINT-1-00A6D6)
![Status](https://img.shields.io/badge/STATUS-DEVELOPMENT-orange)
![GitHub](https://img.shields.io/badge/GITHUB-REPOSITORY-black)

</div>

---

<div align="center">

# 🗑️ DIGITAL TWIN MONITORING TONG SAMPAH

### Sistem Monitoring Tingkat Kepenuhan dan Kondisi Tong Sampah

Sistem ini merupakan prototipe **Digital Twin** yang digunakan untuk
memantau kondisi tong sampah berdasarkan data tingkat kepenuhan.

Representasi digital digunakan untuk memberikan gambaran kondisi
tong sampah secara sederhana dan mudah dipahami oleh petugas.

</div>

---

## 📡 TENTANG SISTEM

Tong sampah perlu dipantau agar tidak mengalami kondisi penuh atau meluap.

Pada sistem ini, data tingkat kepenuhan diperoleh dari sensor yang
mengukur jarak permukaan sampah dari bagian atas tong.

Data tersebut kemudian diolah menjadi **persentase kepenuhan**
dan ditampilkan pada dashboard sebagai representasi digital.

### Alur Sistem

```text
        ┌──────────────────────┐
        │    TONG SAMPAH       │
        │       FISIK          │
        └──────────┬───────────┘
                   │
                   ▼
        ┌──────────────────────┐
        │       SENSOR         │
        │ Mengukur jarak sampah│
        └──────────┬───────────┘
                   │
                   ▼
        ┌──────────────────────┐
        │   DATA KEPUENUHAN    │
        │       0 - 100%       │
        └──────────┬───────────┘
                   │
                   ▼
        ┌──────────────────────┐
        │    DIGITAL TWIN      │
        │ Representasi Digital │
        └──────────┬───────────┘
                   │
                   ▼
        ┌──────────────────────┐
        │      DASHBOARD       │
        │ Monitoring Kondisi   │
        └──────────────────────┘
