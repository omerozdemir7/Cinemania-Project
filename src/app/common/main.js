// src/app/common/main.js

// Ortak modalleri ve temayı hazırla
import { setupModal } from '../components/modal/modal.js';
import { setupTeamModal } from '../components/team-modal/team-modal.js';
import '../layout/mobile-nav/mobile-nav.js';
import './theme-toggle.js';

document.addEventListener('DOMContentLoaded', () => {
  const { openModal } = setupModal();
  window.openMovieModal = openModal;
  setupTeamModal();

  // Sayfa türünü URL'e göre belirle (Pages alt yolu dâhil)
  const currentUrl = window.location.href;
  const path = window.location.pathname;
  const isCatalog = currentUrl.includes('catalog');
  const isLibrary = currentUrl.includes('my-library');
  const isHome =
    !isCatalog &&
    !isLibrary &&
    (currentUrl.endsWith('/') ||
      currentUrl.includes('index.html') ||
      path === '/' ||
      path === '/Cinemania-Project/' ||
      path === '/Cinemania-Project');

  let moduleName = null;
  let modulePath = null;

  if (isCatalog) {
    moduleName = 'catalog.js';
    modulePath = '../pages/catalog/catalog.js';
  } else if (isLibrary) {
    moduleName = 'my-library.js';
    modulePath = '../pages/my-library/my-library.js';
  } else if (isHome) {
    moduleName = 'index.js';
    modulePath = '../pages/home/index.js';
  }

  // Navbar aktif linki işaretle
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href') || '';

    if (isHome && href.includes('index')) {
      link.classList.add('active');
    } else if (isCatalog && href.includes('catalog')) {
      link.classList.add('active');
    } else if (isLibrary && href.includes('library')) {
      link.classList.add('active');
    }
  });

  // Sayfa modülünü yükle
  if (modulePath) {
    import(modulePath)
      .then(() => console.log(`${moduleName} yüklendi.`))
      .catch(err => console.error(`${moduleName} yüklenirken hata:`, err));
  }
});
