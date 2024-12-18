document.addEventListener('DOMContentLoaded', () => {
  const ctaButton = document.getElementById('ctaButton');
  const closeButton = document.getElementById('closeButton');
  const skillsPopup = document.getElementById('skillsPopup');
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navbar = document.querySelector('.navbar');
  let lastScrollTop = 0;

  // Tombol CTA untuk menampilkan pop-up skill
  ctaButton.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('CTA Button Triggered');
    skillsPopup.classList.add('visible'); // Tampilkan pop-up
    skillsPopup.classList.remove('hidden'); // Hapus kelas hidden
  });

  // Tombol Close untuk menutup pop-up skill
  closeButton.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Close Button Clicked');
    skillsPopup.classList.add('hidden'); // Sembunyikan pop-up
    skillsPopup.classList.remove('visible'); // Hapus animasi
  });

   // Menutup pop-up saat area luar pop-up ditekan
  skillsPopup.addEventListener('click', (event) => {
    if (event.target === skillsPopup) {
      skillsPopup.classList.add('hidden');
      skillsPopup.classList.remove('visible');
    }
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
