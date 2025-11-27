// src/js/main.js

// === 1. ORTAK MODÜLLERİ İÇERİ AL ===
import { setupModal } from '/js/modal/modal.js';
import { setupTeamModal } from '/js/common/team-modal.js';
import { initHeader } from '/js/header/header.js'; // <-- Header modülünü çağırdık
import '/js/header/mobile-nav.js';
import '/js/common/theme-toggle.js';

document.addEventListener('DOMContentLoaded', () => {
  // --- A. Ortak Bileşenleri Başlat ---
  const { openModal } = setupModal();
  window.openMovieModal = openModal;
  
  setupTeamModal();
  initHeader(); // <-- Header active link ayarını çalıştır

  // --- B. Sayfa Yönlendirme (Routing) ---
  const path = window.location.pathname;
  let modulePath = null;

  if (path.includes('catalog.html')) {
    modulePath = '/js/catalog/catalog.js';
  } else if (path.includes('my-library.html')) {
    modulePath = '/js/my-library/my-library.js';
  } else if (path.endsWith('/') || path.endsWith('index.html')) {
    modulePath = '/js/home/index.js';
  }



  // --- C. Modülü Yükle ---
  if (modulePath) {
    import(modulePath)
      .then(() => console.log(`${modulePath} yüklendi.`))
      .catch(err => console.error(`${modulePath} yüklenirken hata:`, err));
  }
});