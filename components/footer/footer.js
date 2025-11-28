const students = [
  {
    name: 'Rıdvan KESKEN',
    role: 'Developer',
    img: `${import.meta.env.BASE_URL}images/our-teams/ridvan-kesken.jpeg`,
    github: 'https://github.com/KeskenRidvan',
    linkedin: 'https://www.linkedin.com/in/ridvankesken/',
  },
];

function createStudentItem(student) {
  return `
    <li class="footer__student-item">
      <img class="footer__student-photo" src="${student.img}" alt="${
    student.name
  }" />
      <div class="footer__student-info">
        <h3>${student.name}</h3>
        <p>${student.role}</p>
        <a class="footer__icon-link" href="${
          student.github
        }" target="_blank" aria-label="GitHub">
          <svg class="footer__icon" width="30" height="30">
            <use xlink:href="${import.meta.env.BASE_URL}images/icon.svg#icon-github"></use>
          </svg>
        </a>
        ${
          student.linkedin !== '#'
            ? `
        <a class="footer__icon-link" href="${student.linkedin}" target="_blank" aria-label="LinkedIn">
          <svg class="footer__icon" width="30" height="30">
            <use xlink:href="${import.meta.env.BASE_URL}images/icon.svg#icon-linkedin"></use>
          </svg>
        </a>`
            : ''
        }
      </div>
    </li>
  `;
}

function ensureFooter() {
  let footer = document.querySelector('footer.footer');
  if (!footer) {
    footer = document.createElement('footer');
    footer.className = 'footer goit-footer';
    document.body.appendChild(footer);
  } else {
    footer.classList.add('goit-footer');
  }
  footer.innerHTML = `
    <p class="footer__description">
      © 2025 | All Rights Reserved | Developed with <span aria-label="love">🧡</span> by <button class="footer__students-btn" id="openFooterModalBtn" type="button">GoIT Students</button>
    </p>
  `;
  return footer;
}

function renderFooterModal() {
  let modal = document.getElementById('footerModal');
  if (modal) return modal;
  modal = document.createElement('div');
  modal.className = 'footer__modal-overlay';
  modal.id = 'footerModal';
  modal.innerHTML = `
    <div class="footer__modal-content">
      <span class="footer__modal-close-btn" id="closeFooterModalBtn">&times;</span>
      <h2 class="footer__modal-title">TEAM CINECODE</h2>
      <ul class="footer__student-list">
        ${students.map(createStudentItem).join('')}
      </ul>
    </div>
  `;
  document.body.appendChild(modal);
  return modal;
}

function applyFooterModalResponsiveStyles() {
  const modalContent = document.querySelector('.footer__modal-content');
  const footer = document.querySelector('.footer');
  if (!modalContent || !footer) return;
  if (window.matchMedia('(max-width: 768px)').matches) {
    modalContent.style.maxWidth = '300px';
    footer.style.paddingBottom = '100px';
  } else if (window.matchMedia('(max-width: 1279px)').matches) {
    modalContent.style.maxWidth = '720px';
    footer.style.paddingBottom = '80px';
  } else {
    modalContent.style.maxWidth = '1200px';
    footer.style.paddingBottom = '50px';
  }
}

function initFooterModal() {
  ensureFooter();
  const modal = renderFooterModal();
  const modalContent = modal.querySelector('.footer__modal-content');
  const openBtn = document.getElementById('openFooterModalBtn');
  const closeBtn = document.getElementById('closeFooterModalBtn');

  if (!openBtn || !closeBtn) {
    console.warn('Modal tetikleyici veya kapatma butonu bulunamadı.');
    return;
  }

  openBtn.addEventListener('click', () => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  });

  modal.addEventListener('click', e => {
    if (!modalContent.contains(e.target)) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  applyFooterModalResponsiveStyles();
  window.addEventListener('resize', applyFooterModalResponsiveStyles);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initFooterModal, {
    once: true,
  });
} else {
  initFooterModal();
}
