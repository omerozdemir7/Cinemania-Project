import { setupModal } from '../components/modal/modal.js';
import { setupTeamModal } from '../components/team-modal/team-modal.js';
import '../layout/mobile-nav/mobile-nav.js';
import './theme-toggle.js';

const pageModules = import.meta.glob('../pages/**/{index,catalog,my-library}.js');

document.addEventListener('DOMContentLoaded', () => {
  const { openModal } = setupModal();
  window.openMovieModal = openModal;
  setupTeamModal();

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

  const moduleLoaders = {
    home: () => pageModules['../pages/home/index.js']?.(),
    catalog: () => pageModules['../pages/catalog/catalog.js']?.(),
    library: () => pageModules['../pages/my-library/my-library.js']?.(),
  };

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

  const loader = isCatalog
    ? moduleLoaders.catalog
    : isLibrary
      ? moduleLoaders.library
      : isHome
        ? moduleLoaders.home
        : null;

  if (loader) {
    loader().catch(err => console.error('Sayfa modülü yüklenirken hata:', err));
  }
});
