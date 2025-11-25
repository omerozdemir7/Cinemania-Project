// Gerekli modülleri import et
import { fetchMovieDetails, getImageUrl } from './movies-data.js';

export function setupModal() {
  const backdrop = document.querySelector('.backdrop');
  const closeBtn = document.querySelector('.modal-close-btn');

  if (!backdrop || !closeBtn) {
    console.warn('Movie modal: HTML elemanları bulunamadı.');
    return { openModal: () => {} };
  }

  function openModal() {
    backdrop.classList.remove('is-hidden');
    document.body.classList.add('no-scroll');
    document.addEventListener('keydown', onEsc);
  }

  function closeModal() {
    backdrop.classList.add('is-hidden');
    document.body.classList.remove('no-scroll');
    document.removeEventListener('keydown', onEsc);
  }

  function onEsc(e) {
    if (e.code === 'Escape') closeModal();
  }

  backdrop.addEventListener('click', e => {
    if (e.target === backdrop) closeModal();
  });

  closeBtn.addEventListener('click', closeModal);

  return { openModal };
}
