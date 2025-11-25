// TEAM MODAL JS
export function setupTeamModal() {
  const footerBtn = document.querySelector('.footer__link');
  const backdrop = document.querySelector('.team__backdrop');
  const closeBtn = document.querySelector('.team__modal-close-btn');

  console.log('TEAM MODAL BAŞLATILDI ✔');
  console.log('footerBtn:', footerBtn);
  console.log('backdrop:', backdrop);

  if (!footerBtn || !backdrop) return;

  // Modal aç
  footerBtn.addEventListener('click', () => {
    console.log('➡ FOOTER BUTON TIKLANDI');
    backdrop.classList.remove('is-hidden'); // KAPALI sınıfı kaldır
    backdrop.classList.add('active'); // AÇIK sınıfı ekle
  });

  // Modal kapat
  function closeModal() {
    backdrop.classList.remove('active');
    backdrop.classList.add('is-hidden');
  }

  closeBtn.addEventListener('click', closeModal);

  backdrop.addEventListener('click', e => {
    if (e.target === backdrop) closeModal();
  });

  document.addEventListener('keydown', e => {
    if (e.code === 'Escape') closeModal();
  });

  console.log('Team modal fully loaded ✔');
}
