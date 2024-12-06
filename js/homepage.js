// Fungsi untuk menambahkan kelas "visible" ke section
const sections = document.querySelectorAll('section');
const ctaButton = document.getElementById('ctaButton');
const backButton = document.getElementById('backButton');

// Mengaktifkan animasi untuk section saat scroll atau interaksi
window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const sectionPosition = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (sectionPosition < windowHeight * 0.8) {  // Jika section cukup terlihat di layar
      section.classList.add('visible');
    }
  });
});

// Menambahkan event listener untuk tombol CTA
ctaButton.addEventListener('click', (event) => {
    event.preventDefault();
    const skillsSection = document.getElementById('skills');
    skillsSection.classList.remove('hidden');  // Menghapus kelas 'hidden' untuk menampilkan section
    skillsSection.classList.add('visible');   // Menambahkan kelas 'visible' untuk efek animasi
    backButton.classList.add('visible');
  });
  
  // Menambahkan event listener untuk tombol Back
  backButton.addEventListener('click', () => {
    const skillsSection = document.getElementById('skills');
    skillsSection.classList.remove('visible');  // Menghapus kelas 'visible' untuk efek animasi
    skillsSection.classList.add('hidden');     // Menambahkan kelas 'hidden' untuk menyembunyikan section
    backButton.classList.remove('visible');
  });

  document.getElementById("ctaButton").addEventListener("click", function(e) {
    e.preventDefault();  // Mencegah perilaku default (scrolling)
    
    // Menyembunyikan gambar hero
    document.querySelector(".hero-image img").classList.add("hidden");
    
    // Menampilkan skill section
    document.getElementById("skills").classList.add("visible");
  });

  document.getElementById("ctaButton").addEventListener("click", function(e) {
    e.preventDefault();  // Mencegah perilaku default (scrolling)
    
    // Menyembunyikan gambar hero
    document.querySelector(".hero-image img").classList.add("hidden");
    
    // Menampilkan skill section
    document.getElementById("skills").classList.add("visible");
  });
  
// Menambahkan fungsi untuk tombol "BACK" untuk kembali ke gambar
document.getElementById("backButton").addEventListener("click", function() {
    // Menampilkan kembali gambar hero
    document.querySelector(".hero-image img").classList.remove("hidden");
    
    // Menyembunyikan skill section
    document.getElementById("skills").classList.remove("visible");
    document.getElementById("skills").classList.add("hidden");
  });
  
  // Ambil elemen tombol dan bagian skills
const skillButton = document.getElementById('ctaButton');
const skillsSection = document.getElementById('skills');

// Tambahkan event listener untuk klik pada tombol skill
skillButton.addEventListener('click', function (event) {
  event.preventDefault(); // Mencegah scroll default ke anchor
  
  // Menyembunyikan gambar atau konten lainnya
  const heroImage = document.getElementById('heroImage');
  heroImage.classList.add('hidden');
  
  // Scroll ke bagian skills dengan sedikit penyesuaian scroll
  skillsSection.classList.remove('hidden'); // Menampilkan skill section
  skillsSection.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Scroll ke bagian skills
});

// Tombol kembali untuk scroll ke atas
backButton.addEventListener('click', function (event) {
    event.preventDefault(); // Mencegah scroll default ke anchor
    
    // Menyembunyikan skill section dan scroll kembali ke atas
    skillsSection.classList.add('hidden'); // Menyembunyikan skill section
    heroImage.classList.remove('hidden'); // Menampilkan hero image
    
    // Scroll ke atas halaman
    heroImage.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  // Memastikan halaman kembali ke atas saat direload
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
  });
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
   console.log("Hamburger clicked"); // Debug log
  navLinks.classList.toggle("nav-links-active");
  console.log(navLinks.classList); // Debug log
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  let lastScrollTop = 0;

  window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      navbar.style.top = '-100px'; // Hide navbar on scroll down
    } else {
      navbar.style.top = '0'; // Show navbar on scroll up
    }
    lastScrollTop = scrollTop;
  });
});

  
