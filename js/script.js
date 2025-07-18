// Mengganti nama secara dinamis
function setWelcomeName() {
    let name = prompt("Masukkan nama Anda:", "");
    if (name) {
        document.getElementById("welcome-text").innerHTML = `Halo ${name} <br> Selamat Datang di Websiteku`;
    }
}
window.onload = setWelcomeName;

// Toggle hamburger menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Close navbar when clicking outside on mobile
function closeNavbarOnOutsideClick() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');
    
    // Close when clicking outside navbar
    document.addEventListener('click', function(event) {
        // Check if click is outside navbar and menu is open
        if (!navbar.contains(event.target) && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
    
    // Close when clicking on navigation links
    const navLinkItems = document.querySelectorAll('.nav-links a');
    navLinkItems.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Initialize outside click functionality when page loads
document.addEventListener('DOMContentLoaded', function() {
    closeNavbarOnOutsideClick();
});

// Validasi formulir
function validateForm() {
    const nama = document.forms["messageForm"]["nama"].value;
    const tanggalLahir = document.forms["messageForm"]["tanggal-lahir"].value;
    const jenisKelamin = document.forms["messageForm"]["jenis-kelamin"].value;
    const pesan = document.forms["messageForm"]["pesan"].value;

    if (nama == "" || tanggalLahir == "" || jenisKelamin == "" || pesan == "") {
        alert("Semua field harus diisi!");
        return false;
    }

    // Menampilkan hasil submit
    document.getElementById("current-time").innerText = new Date();
    document.getElementById("output-nama").innerText = nama;
    document.getElementById("output-tanggal-lahir").innerText = tanggalLahir;
    document.getElementById("output-jenis-kelamin").innerText = jenisKelamin;
    document.getElementById("output-pesan").innerText = pesan;
    
    return false; // Mencegah form untuk submit
}