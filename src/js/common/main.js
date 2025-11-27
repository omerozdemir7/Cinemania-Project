// src/js/main.js

// === 1. ORTAK MODÜLLERİ İÇERİ AL ===
import { setupModal } from '../components/modal.js'; // Bu yol doğru görünüyor
import { setupTeamModal } from '../components/team-modal.js'; // Bu yol doğru görünüyor
import '../header/mobile-nav.js'; // Düzeltildi: ./ -> ../header/
import './theme-toggle.js'; // Düzeltildi: ../common/ -> ./

document.addEventListener('DOMContentLoaded', () => {
  // --- A. Ortak Bileşenleri Başlat ---
  const { openModal } = setupModal();
  window.openMovieModal = openModal;
  setupTeamModal();

  // --- B. Sayfa Yönlendirme (Routing) ---
  const path = window.location.pathname;
  let moduleName = null;

  if (path.includes('catalog.html')) {
    moduleName = 'catalog.js';
  } else if (path.includes('my-library.html')) {
    moduleName = 'my-library.js';
  } else if (path === '/' || path.endsWith('index.html') || path.endsWith('/Cinemania-Project/')) {
    moduleName = 'index.js';
  }

  // --- C. Navbar Aktif Link Ayarı (EKLENEN KISIM) ---
  // Hangi sayfadaysak o linke 'active' sınıfını ekle
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.classList.remove('active'); // Önce hepsini temizle
    const href = link.getAttribute('href');

    // 1. Home Kontrolü (Ana sayfa veya index.html)
    if ((path === '/' || path.includes('index.html')) && href.includes('index.html')) {
      link.classList.add('active');
    }
    // 2. Catalog Kontrolü
    else if (path.includes('catalog') && href.includes('catalog')) {
      link.classList.add('active');
    }
    // 3. Library Kontrolü
    else if (path.includes('library') && href.includes('library')) {
      link.classList.add('active');
    }
  });

  // --- D. Modülü Yükle ---
  if (moduleName) {
    import(/* @vite-ignore */ `../pages/${moduleName}`)
      .then(() => console.log(`${moduleName} yüklendi.`))
      .catch(err => console.error(`${moduleName} yüklenirken hata:`, err));
  }
});