// Data awal SmartBin
let persentase = 65;


// Menampilkan monitoring
function updateMonitoring() {

    const persentaseElement =
        document.getElementById("persentase");

    const summaryElement =
        document.getElementById("persentaseSummary");

    const detailPersentase =
        document.getElementById("detailPersentase");

    const progress =
        document.getElementById("progress");

    const sampah =
        document.getElementById("sampah");

    const status =
        document.getElementById("status");

    const detailStatus =
        document.getElementById("detailStatus");


    // Menampilkan persentase
    persentaseElement.textContent = persentase;

    summaryElement.textContent =
        persentase + "%";

    detailPersentase.textContent =
        persentase + "%";


    // Progress bar
    progress.style.width =
        persentase + "%";


    // Tinggi visual sampah pada Digital Twin
    sampah.style.height =
        persentase + "%";


    // Menentukan status
    let statusText;


    if (persentase >= 90) {

        statusText = "PENUH";

        status.className =
            "status penuh";

        status.textContent =
            "🔴 PENUH";

        detailStatus.textContent =
            "Penuh";

        progress.style.background =
            "#ef4444";

        sampah.style.background =
            "#ef4444";

    }

    else if (persentase >= 75) {

        statusText = "HAMPIR PENUH";

        status.className =
            "status hampir";

        status.textContent =
            "🟠 HAMPIR PENUH";

        detailStatus.textContent =
            "Hampir Penuh";

        progress.style.background =
            "#f59e0b";

        sampah.style.background =
            "#f59e0b";

    }

    else {

        statusText = "NORMAL";

        status.className =
            "status normal";

        status.textContent =
            "🟢 NORMAL";

        detailStatus.textContent =
            "Normal";

        progress.style.background =
            "#22c55e";

        sampah.style.background =
            "#22c55e";
    }


    // Waktu update
    const sekarang =
        new Date();

    document.getElementById(
        "waktuUpdate"
    ).textContent =
        sekarang.toLocaleString(
            "id-ID"
        );
}


// Tombol lihat monitoring
function lihatMonitoring() {

    document
        .getElementById("monitoring")
        .scrollIntoView({
            behavior: "smooth"
        });
}


// Jalankan saat halaman dibuka
updateMonitoring();
