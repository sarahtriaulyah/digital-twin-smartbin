# 🛠️ Project Setup Guide: Digital Twin Tong Sampah

Panduan ini berisi langkah-langkah detail untuk menginisialisasi dan menyiapkan lingkungan kerja (development environment) untuk proyek **Digital Twin Tong Sampah**.

## 📋 0. Prasyarat (Prerequisites)
Sebelum memulai, pastikan perangkat Anda telah terinstal:
- [Node.js & npm](https://nodejs.org/) (v18 atau lebih baru)
- [VS Code](https://code.visualstudio.com/) (Text Editor)
- [PlatformIO Extension](https://platformio.org/install/ide?install=vscode) (di VS Code, untuk coding ESP32)
- [Blender](https://www.blender.org/) (Untuk editing 3D model - opsional di awal)
- [Git](https://git-scm.com/)

---

## 📂 1. Inisialisasi Root & Git
Buka terminal/command prompt, lalu jalankan perintah berikut untuk membuat folder utama dan menginisialisasi Git:

```bash
# Buat folder utama
mkdir digital-twin-trash-can
cd digital-twin-trash-can

# Inisialisasi Git
git init

# Buat file .gitignore dasar
echo "node_modules/" > .gitignore
echo ".env" >> .gitignore
echo "*.log" >> .gitignore
echo ".DS_Store" >> .gitignore

# Buat folder-folder utama
mkdir hardware backend frontend 3d-models docs
```

---

## 🖥️ 2. Setup Backend (Node.js + MQTT Broker)
Kita akan menggunakan `aedes` agar Node.js sekaligus berfungsi sebagai MQTT Broker internal (tidak perlu install Mosquitto secara terpisah).

```bash
cd backend
npm init -y

# Install dependencies
npm install express aedes mongoose cors dotenv
npm install --save-dev nodemon
```

### Buat file `backend/server.js` (Boilerplate Dasar)
```javascript
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const aedes = require('aedes')();
const { createServer } = require('net');

const app = express();
app.use(cors());
app.use(express.json());

// --- MQTT BROKER SETUP ---
const mqttPort = process.env.MQTT_PORT || 1883;
const mqttServer = createServer(aedes.handle);

aedes.on('clientConnected', (client) => {
    console.log(`✅ Tong Sampah Terhubung: ${client.id}`);
});

aedes.on('publish', (packet, client) => {
    if (client && packet.topic === 'trashcan/data') {
        console.log('📥 Data Diterima:', packet.payload.toString());
        // TODO: Simpan data ke database (MongoDB) di sini
    }
});

mqttServer.listen(mqttPort, () => {
    console.log(`📡 MQTT Broker berjalan di port ${mqttPort}`);
});

// --- EXPRESS API SETUP ---
const apiPort = process.env.API_PORT || 3000;
app.get('/api/status', (req, res) => {
    res.json({ status: 'online', message: 'Digital Twin API is running' });
});

app.listen(apiPort, () => {
    console.log(`🚀 REST API berjalan di http://localhost:${apiPort}`);
});
```

### Buat file `backend/.env`
```env
MQTT_PORT=1883
API_PORT=3000
MONGO_URI=mongodb://localhost:27017/digital_twin_trash
```

### Update `backend/package.json` scripts
```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

---

## 📱 3. Setup Frontend (React + Vite + 3D)
Kita akan menggunakan Vite untuk kecepatan build, dan React-Three-Fiber untuk render 3D.

```bash
# Kembali ke root folder
cd ..

# Buat project React dengan Vite
npm create vite@latest frontend -- --template react
cd frontend

# Install dependencies dasar & 3D
npm install
npm install three @react-three/fiber @react-three/drei axios
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Buat struktur folder tambahan di `frontend/src/`
```bash
mkdir src/components src/pages src/viewer3d src/services
```

### Buat file `frontend/src/viewer3d/TrashCanModel.jsx` (Boilerplate 3D)
```jsx
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function TrashCanModel({ isFull }) {
  const group = useRef()

  useFrame((state, delta) => {
    // Animasi rotasi otomatis
    if(group.current) group.current.rotation.y += delta * 0.2 
  })

  return (
    <group ref={group}>
      {/* Placeholder kotak sementara */}
      <mesh>
        <boxGeometry args={[1, 2, 1]} />
        <meshStandardMaterial color={isFull ? "red" : "green"} />
      </mesh>
    </group>
  )
}
```

---

## 🤖 4. Setup Hardware (PlatformIO / ESP32)
Sangat disarankan menggunakan **PlatformIO** di dalam VS Code agar struktur folder rapi untuk Git.

1. Buka VS Code, klik ikon **PlatformIO** di sidebar kiri.
2. Pilih **New Project**.
3. Nama: `firmware`, Board: `ESP32 Dev Module`, Framework: `Arduino`.
4. Pilih *Location* ke folder `hardware/firmware` yang sudah dibuat di Step 1.

### Edit `hardware/firmware/platformio.ini`
```ini
[env:esp32dev]
platform = espressif32
board = esp32dev
framework = arduino
lib_deps = 
    knolleary/PubSubClient@^2.8
    adafruit/DHT sensor library@^1.4.4
monitor_speed = 115200
```

### Edit `hardware/firmware/src/main.cpp` (Boilerplate Dasar)
```cpp
#include <Arduino.h>
#include <WiFi.h>
#include <PubSubClient.h>

const char* ssid = "YOUR_WIFI_SSID";
const char* password = "YOUR_WIFI_PASSWORD";
const char* mqtt_server = "YOUR_PC_IP_ADDRESS"; // IP Laptop yang menjalankan Backend

WiFiClient espClient;
PubSubClient client(espClient);

void setup_wifi() {
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) { delay(500); Serial.print("."); }
  Serial.println("WiFi connected");
}

void setup() {
  Serial.begin(115200);
  setup_wifi();
  client.setServer(mqtt_server, 1883);
}

void loop() {
  if (!client.connected()) {
    client.connect("TrashCan_ESP32");
  }
  client.loop();

  // TODO: Baca sensor ultrasonik & DHT11 di sini
  // client.publish("trashcan/data", "{\"level\": 50, \"temp\": 28}");
  
  delay(2000);
}
```

---

## 🗑️ 5. Setup 3D Models & Docs
Buat file placeholder agar folder tidak kosong (karena Git tidak meng-track folder kosong).

```bash
# Kembali ke root
cd ..

# Buat file placeholder
touch 3d-models/source/.gitkeep
touch 3d-models/export/.gitkeep
touch docs/architecture.md
```

---

## 📝 6. Environment Variables & Root README
Di folder paling luar (`digital-twin-trash-can/`), buat file konfigurasi global.

### Buat `.env.example` di root
```env
# Backend
MQTT_PORT=1883
API_PORT=3000
MONGO_URI=mongodb://localhost:27017/digital_twin_trash

# Hardware (Untuk firmware ESP32)
WIFI_SSID=YourSSID
WIFI_PASS=YourPassword
MQTT_BROKER_IP=192.168.1.100
```

### Buat `README.md` di root
*(Salin template README utama proyek Anda ke file ini)*

---

## 🚀 7. Initial Git Commit
Simpan semua setup awal ke repositori lokal Anda.

```bash
# Pastikan Anda berada di root folder
cd ..

# Tambahkan semua file
git add .

# Commit
git commit -m "feat: initial project setup for Digital Twin Trash Can"

# (Opsional) Jika sudah buat repo di GitHub, hubungkan dan push:
# git remote add origin https://github.com/username/digital-twin-trash-can.git
# git branch -M main
# git push -u origin main
```

---

## ✅ Checklist Verifikasi Setup
- [ ] Backend bisa dijalankan dengan `npm run dev` (MQTT Broker aktif di port 1883, API di 3000).
- [ ] Frontend bisa dijalankan dengan `npm run dev` (React + Vite aktif di port 5173).
- [ ] Hardware (PlatformIO) berhasil di-compile tanpa error.
- [ ] Struktur folder Git rapi dan file sensitif (`.env`) sudah diabaikan oleh `.gitignore`.
