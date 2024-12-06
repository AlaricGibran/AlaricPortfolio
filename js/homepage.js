document.addEventListener('DOMContentLoaded', () => {
  const ctaButton = document.getElementById('ctaButton');
  const backButton = document.getElementById('backButton');
  const skillsSection = document.getElementById('skills');
  const heroImage = document.querySelector('.hero-image img');
  const hamburger = document.querySelector('.hamburger');
  const closeButton = document.getElementById('closeButton'); // Pastikan elemen ini ada di HTML
  const navLinks = document.querySelector('.nav-links');
  const navbar = document.querySelector('.navbar');
  let lastScrollTop = 0;

  // Tombol CTA untuk menampilkan skill section
  ctaButton.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('CTA Button Clicked');
    skillsSection.classList.remove('hidden'); // Tampilkan skill section
    skillsSection.classList.add('visible'); // Tambahkan animasi (jika ada)
    console.log('Skills Section Visible');
    heroImage.classList.add('hidden'); // Sembunyikan gambar hero
    skillsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  // Tombol Back untuk kembali ke hero section
  backButton.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Back Button Clicked');
    skillsSection.classList.add('hidden'); // Sembunyikan skill section
    skillsSection.classList.remove('visible'); // Hapus kelas visible
    console.log('Skill Section Hidden');
    heroImage.classList.remove('hidden'); // Tampilkan kembali gambar hero
    heroImage.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

  // Hamburger menu
  hamburger.addEventListener('click', () => {
    console.log('Hamburger Clicked');
    navLinks.classList.add('nav-links-active');
    hamburger.style.display = 'none'; // Sembunyikan tombol hamburger
    closeButton.style.display = 'block'; // Tampilkan tombol close
  });

  // Close menu
  closeButton.addEventListener('click', () => {
    console.log('Close Button Clicked');
    navLinks.classList.remove('nav-links-active');
    hamburger.style.display = 'block'; // Tampilkan tombol hamburger lagi
    closeButton.style.display = 'none'; // Sembunyikan tombol close
  });

  // Navbar sembunyi/muncul saat scroll
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      navbar.style.top = '-100px'; // Hide navbar saat scroll ke bawah
    } else {
      navbar.style.top = '0'; // Show navbar saat scroll ke atas
    }
    lastScrollTop = scrollTop;
  });

  // Pastikan halaman kembali ke atas saat reload
  window.addEventListener('load', () => {
    window.scrollTo(0, 0);
  });
});
