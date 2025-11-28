const d=[{name:"Rıdvan KESKEN",role:"Developer",img:"/images/our-teams/ridvan-kesken.jpeg",github:"https://github.com/KeskenRidvan",linkedin:"https://www.linkedin.com/in/ridvankesken/"}];function l(e){return`
    <li class="footer__student-item">
      <img class="footer__student-photo" src="${e.img}" alt="${e.name}" />
      <div class="footer__student-info">
        <h3>${e.name}</h3>
        <p>${e.role}</p>
        <a class="footer__icon-link" href="${e.github}" target="_blank" aria-label="GitHub">
          <svg class="footer__icon" width="30" height="30">
            <use xlink:href="/images/icon.svg#icon-github"></use>
          </svg>
        </a>
        ${e.linkedin!=="#"?`
        <a class="footer__icon-link" href="${e.linkedin}" target="_blank" aria-label="LinkedIn">
          <svg class="footer__icon" width="30" height="30">
            <use xlink:href="/images/icon.svg#icon-linkedin"></use>
          </svg>
        </a>`:""}
      </div>
    </li>
  `}function r(){let e=document.querySelector("footer.footer");return e?e.classList.add("goit-footer"):(e=document.createElement("footer"),e.className="footer goit-footer",document.body.appendChild(e)),e.innerHTML=`
    <p class="footer__description">
      © 2025 | All Rights Reserved | Developed with <span aria-label="love">🧡</span> by <button class="footer__students-btn" id="openFooterModalBtn" type="button">GoIT Students</button>
    </p>
  `,e}function c(){let e=document.getElementById("footerModal");return e||(e=document.createElement("div"),e.className="footer__modal-overlay",e.id="footerModal",e.innerHTML=`
    <div class="footer__modal-content">
      <span class="footer__modal-close-btn" id="closeFooterModalBtn">&times;</span>
      <h2 class="footer__modal-title">TEAM CINECODE</h2>
      <ul class="footer__student-list">
        ${d.map(l).join("")}
      </ul>
    </div>
  `,document.body.appendChild(e),e)}function a(){const e=document.querySelector(".footer__modal-content"),t=document.querySelector(".footer");!e||!t||(window.matchMedia("(max-width: 768px)").matches?(e.style.maxWidth="300px",t.style.paddingBottom="100px"):window.matchMedia("(max-width: 1279px)").matches?(e.style.maxWidth="720px",t.style.paddingBottom="80px"):(e.style.maxWidth="1200px",t.style.paddingBottom="50px"))}function s(){r();const e=c(),t=e.querySelector(".footer__modal-content"),n=document.getElementById("openFooterModalBtn"),i=document.getElementById("closeFooterModalBtn");if(!n||!i){console.warn("Modal tetikleyici veya kapatma butonu bulunamadı.");return}n.addEventListener("click",()=>{e.classList.add("active"),document.body.style.overflow="hidden"}),i.addEventListener("click",()=>{e.classList.remove("active"),document.body.style.overflow=""}),e.addEventListener("click",o=>{t.contains(o.target)||(e.classList.remove("active"),document.body.style.overflow="")}),document.addEventListener("keydown",o=>{o.key==="Escape"&&(e.classList.remove("active"),document.body.style.overflow="")}),a(),window.addEventListener("resize",a)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",s,{once:!0}):s();
//# sourceMappingURL=footer-0h2izmYi.js.map
