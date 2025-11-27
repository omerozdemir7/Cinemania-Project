(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function o(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(i){if(i.ep)return;i.ep=!0;const a=o(i);fetch(i.href,a)}})();const R="362ee522f1af2dedac989b8df9cfb4eb",U="https://api.themoviedb.org/3",j="https://image.tmdb.org/t/p/w500",P="https://image.tmdb.org/t/p/original";async function M(e,n={}){const o=new URL(`${U}${e}`);o.searchParams.append("api_key",R),o.searchParams.append("language","en-US");for(const t in n)n[t]&&o.searchParams.append(t,n[t]);try{const t=await fetch(o);if(!t.ok)throw new Error(`API Error: ${t.status}`);return await t.json()}catch(t){return console.error("API Request Failed:",t),null}}async function Y(e=1){return await M("/movie/popular",{page:e})}async function q(e="week",n=1){return await M(`/trending/movie/${e}`,{page:n})}async function z(e=1){return await M("/movie/upcoming",{page:e,region:"US"})}async function W(e,n=1,o=""){return await M("/search/movie",{query:e,page:n,primary_release_year:o})}async function A(e){return await M(`/movie/${e}`)}async function J(e){return await M(`/movie/${e}/videos`)}function H(e){return e?`${j}${e}`:"https://via.placeholder.com/500x750?text=No+Poster"}function D(e){return e?`${P}${e}`:"https://via.placeholder.com/1920x1080?text=No+Image"}function K(){const e=document.querySelector("#movie-modal-backdrop");if(!e)return console.error("Modal backdrop '#movie-modal-backdrop' not found."),{openModal:()=>{},closeModal:()=>{}};const n=e.querySelector("#modal-close-btn"),o=e.querySelector("#modal-poster"),t=e.querySelector("#modal-title"),i=e.querySelector("#modal-vote-avg"),a=e.querySelector("#modal-vote-count"),s=e.querySelector("#modal-popularity"),d=e.querySelector("#modal-genre"),c=e.querySelector("#modal-description"),m=e.querySelector("#modal-add-btn");function f(){return JSON.parse(localStorage.getItem("myLibrary"))||[]}function b(u){localStorage.setItem("myLibrary",JSON.stringify(u))}async function g(u){const p=await A(u);if(p){if(o&&(o.src=H(p.poster_path)),t&&(t.textContent=p.title.toUpperCase()),i&&(i.textContent=p.vote_average.toFixed(1)),a&&(a.textContent=p.vote_count),s&&(s.textContent=p.popularity.toFixed(1)),d&&(d.textContent=p.genres.map(v=>v.name).join(", ")||"N/A"),c&&(c.textContent=p.overview||"No description available."),m){const v=f(),L=Number(p.id);m.textContent=v.includes(L)?"Remove from my library":"Add to my library",m.dataset.id=L}e.classList.remove("is-hidden"),document.body.classList.add("modal-open")}}function h(){e.classList.add("is-hidden"),document.body.classList.remove("modal-open")}return n&&n.addEventListener("click",h),e.addEventListener("click",u=>{u.target===e&&h()}),window.addEventListener("keydown",u=>{u.key==="Escape"&&!e.classList.contains("is-hidden")&&h()}),m&&m.addEventListener("click",()=>{const u=Number(m.dataset.id);if(!u)return;const p=f(),v=p.indexOf(u);v>-1?(p.splice(v,1),m.textContent="Add to my library"):(p.push(u),m.textContent="Remove from my library"),b(p)}),{openModal:g,closeModal:h}}function V(){const e=document.querySelector(".footer-link"),n=document.getElementById("team-modal-backdrop"),o=document.getElementById("team-modal-close-btn");if(!e||!n)return;function t(s){s.preventDefault(),n.classList.remove("is-hidden"),document.body.classList.add("modal-open"),window.addEventListener("keydown",a)}function i(){n.classList.add("is-hidden"),document.body.classList.remove("modal-open"),window.removeEventListener("keydown",a)}function a(s){s.code==="Escape"&&i()}e.addEventListener("click",t),o&&o.addEventListener("click",i),n.addEventListener("click",s=>{s.target===n&&i()})}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".main-nav"),n=document.querySelector(".logo"),o=document.querySelector(".mobile-menu-btn");let t=null;if(!e||!n)return;const i=()=>window.innerWidth<=768;function a(c){i()&&(c&&c.preventDefault(),t||(t=document.createElement("div"),t.className="mobile-overlay",t.addEventListener("click",s),document.body.appendChild(t)),e.classList.add("is-open"),document.body.classList.add("menu-open"))}function s(){e.classList.remove("is-open"),document.body.classList.remove("menu-open"),t&&(t.removeEventListener("click",s),t.remove(),t=null)}let d=e.querySelector(".mobile-nav-close");d||(d=document.createElement("button"),d.type="button",d.className="mobile-nav-close",d.innerHTML="&times;",e.appendChild(d)),d.addEventListener("click",s),n.addEventListener("click",a),o&&o.addEventListener("click",a),e.querySelectorAll("a.nav-link").forEach(c=>{c.addEventListener("click",s)}),window.addEventListener("resize",()=>{i()||s()})});document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("theme-toggle-checkbox"),n=document.body;if(!e)return;localStorage.getItem("theme")==="light"&&(n.classList.add("light-mode"),e.checked=!0),e.addEventListener("change",()=>{e.checked?(n.classList.add("light-mode"),localStorage.setItem("theme","light")):(n.classList.remove("light-mode"),localStorage.setItem("theme","dark"))})});function C(){if(document.getElementById("loader"))return;const e=document.createElement("div");e.id="loader",e.style.cssText=`
    position: fixed; inset: 0; background: rgba(0,0,0,0.7);
    display: flex; justify-content: center; align-items: center;
    z-index: 99999; color: white; font-size: 18px; flex-direction: column;
    backdrop-filter: blur(3px);
  `,e.innerHTML=`
    <div class="spinner" style="
      border: 6px solid #333; border-top: 6px solid var(--primary-orange, orange);
      border-radius: 50%; width: 60px; height: 60px; animation: spin 1s linear infinite; margin-bottom: 10px;
    "></div><p>Loading...</p>
    <style>@keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}</style>
  `,document.body.appendChild(e)}function T(){document.getElementById("loader")?.remove()}function Q(e){const n=document.getElementById("trailer-modal-backdrop");if(!n)return;const o=document.getElementById("trailer-iframe"),t=document.getElementById("trailer-modal-close-btn");o&&(o.src=`https://www.youtube.com/embed/${e}?autoplay=1&rel=0&showinfo=0`),n.classList.remove("is-hidden"),document.body.classList.add("modal-open"),t&&(t.onclick=()=>S()),n.onclick=a=>{a.target===n&&S()};const i=a=>{a.key==="Escape"&&(S(),window.removeEventListener("keydown",i))};window.addEventListener("keydown",i)}function S(){const e=document.getElementById("trailer-modal-backdrop"),n=document.getElementById("trailer-iframe");e&&(e.classList.add("is-hidden"),document.body.classList.remove("modal-open"),n&&(n.src=""))}function O(){const e=document.getElementById("trailer-error-backdrop");if(!e)return;const n=document.getElementById("trailer-error-close-btn");e.classList.remove("is-hidden"),document.body.classList.add("modal-open");const o=()=>{e.classList.add("is-hidden"),document.body.classList.remove("modal-open"),window.removeEventListener("keydown",t)};n&&(n.onclick=o),e.onclick=i=>{i.target===e&&o()};const t=i=>{i.key==="Escape"&&o()};window.addEventListener("keydown",t)}function G(e){if(!e)return"N/A";if(Array.isArray(e)&&e.length>0&&typeof e[0]=="object")return e.map(o=>o.name).slice(0,2).join(", ");const n={28:"Action",12:"Adventure",16:"Animation",35:"Comedy",80:"Crime",99:"Documentary",18:"Drama",10751:"Family",14:"Fantasy",36:"History",27:"Horror",10402:"Music",9648:"Mystery",10749:"Romance",878:"Sci-Fi",10770:"TV Movie",53:"Thriller",10752:"War",37:"Western"};return Array.isArray(e)?e.map(t=>n[t]).filter(Boolean).slice(0,2).join(", ")||"Other":"N/A"}function F(e){const n=Math.round((e||0)/2);let o="";for(let t=1;t<=5;t++)o+=`<i class="fa-star ${t<=n?"fas active":"far"}"></i>`;return o}function N(e){const n=e.genres||e.genre_ids,o=e.release_date?new Date(e.release_date).getFullYear():"N/A";return`
    <div class="movie-card" data-id="${e.id}">
        <img src="${H(e.poster_path)}" alt="${e.title}" class="movie-card-poster" loading="lazy">
        <div class="movie-card-overlay">
            <h3 class="movie-title">${e.title}</h3>
            <div class="movie-meta">
                <span class="movie-genre">${G(n)} | ${o}</span>
                <div class="movie-rating">${F(e.vote_average)}</div>
            </div>
        </div>
    </div>
  `}async function w(e,n,o){if(!(!n||!o))try{const t=await A(e);if(!t)return;const i=D(t.backdrop_path||t.poster_path);n.style.backgroundImage=`
      linear-gradient(to right, 
        #111 0%, 
        rgba(17, 17, 17, 1) 30%, 
        rgba(17, 17, 17, 0.5) 50%, 
        transparent 100%),
      url('${i}')
    `,o.innerHTML=`
      <h1 class="hero-title">${t.title}</h1>
      <div class="star-rating hero-stars">
        ${F(t.vote_average)}
      </div>
      <p class="hero-description">${t.overview||"No description available."}</p>
      <div class="hero-buttons">
        <button class="btn btn-primary" id="hero-watch-trailer" data-id="${t.id}">Watch Trailer</button>
        <button class="btn btn-secondary" id="hero-details-btn" data-id="${t.id}">More details</button>
      </div>
    `;const a=o.querySelector("#hero-watch-trailer");a&&(a.onclick=async d=>{d.preventDefault();const c=d.target.dataset.id;try{const f=(await J(c))?.results?.find(b=>b.type==="Trailer"&&b.site==="YouTube");f?Q(f.key):O()}catch(m){console.error(m),O()}});const s=o.querySelector("#hero-details-btn");s&&(s.onclick=d=>{d.preventDefault();const c=d.target.dataset.id;window.openMovieModal&&window.openMovieModal(c)})}catch(t){console.error("Hero update error:",t)}}function X(e,n){if(!e||!n)return;const o=new Date(e.release_date).toLocaleDateString("en-US"),t=e.vote_average?e.vote_average.toFixed(1):"N.A",i=e.vote_count||0,a=e.popularity?e.popularity.toFixed(1):"N.A",s=G(e.genre_ids),d=D(e.backdrop_path||e.poster_path),f=(JSON.parse(localStorage.getItem("myLibrary"))||[]).includes(Number(e.id))?"Remove from my library":"Add to my library";n.innerHTML=`
    <div class="upcoming-image">
      <img src="${d}" alt="${e.title}" loading="lazy" />
    </div>
    <div class="upcoming-info">
      <h3>${e.title}</h3>
      <div class="movie-details-list">
        <div class="detail-item">
          <span class="detail-key">Release date</span>
          <span class="detail-history">${o}</span>
        </div>
        <div class="detail-item">
          <span class="detail-key">Vote / Votes</span>
          <span class="detail-value">
            <span class="rating-badge">${t}</span> / ${i}
          </span>
        </div>
        <div class="detail-item">
          <span class="detail-key">Popularity</span>
          <span class="detail-value">${a}</span>
        </div>
        <div class="detail-item">
          <span class="detail-key">Genre</span>
          <span class="detail-value">${s}</span>
        </div>
      </div>
      <h4>ABOUT</h4>
      <p class="about-text">${e.overview||"No description available."}</p>
      <button class="btn btn-primary btn-add-library" id="upcoming-add-btn" data-id="${e.id}">
        ${f}
      </button>
    </div>
  `;const b=n.querySelector("#upcoming-add-btn");b&&(b.onclick=()=>{const g=JSON.parse(localStorage.getItem("myLibrary"))||[],h=Number(b.dataset.id),u=g.indexOf(h);u>-1?(g.splice(u,1),b.textContent="Add to my library"):(g.push(h),b.textContent="Remove from my library"),localStorage.setItem("myLibrary",JSON.stringify(g))})}const Z=async()=>{const e=document.getElementById("home-hero"),n=e?.querySelector(".hero-content"),o=document.getElementById("weekly-trends-grid"),t=document.getElementById("upcoming-container");if(!(!e&&!o)){C();try{const[i,a,s]=await Promise.all([q("day"),q("week"),z()]);let d=null;if(i?.results?.length){const c=Math.floor(Math.random()*Math.min(5,i.results.length));d=i.results[c]}else a?.results?.length&&(d=a.results[0]);if(d?await w(d.id,e,n):(e.style.backgroundImage="",n.innerHTML=`
        <h1 class="hero-title">Let's Make Your Own Cinema</h1>
        <p class="hero-description">
          Is a guide to creating a personalized movie theater experience.
          You'll need a projector, screen, and speakers. Decorate your
          space, choose your films, and stock up on snacks for the full experience.
        </p>
        <div class="hero-buttons">
           <a href="/catalog.html" class="btn btn-primary">Get Started</a>
        </div>
      `),a?.results?.length&&o&&(o.innerHTML=a.results.slice(0,3).map(c=>N(c)).join(""),o.addEventListener("click",c=>{const m=c.target.closest(".movie-card");m&&m.dataset.id&&(w(m.dataset.id,e,n),window.scrollTo({top:0,behavior:"smooth"}))})),s?.results?.length&&t){const c=Math.floor(Math.random()*Math.min(10,s.results.length)),m=s.results[c];X(m,t)}}catch(i){console.error("Anasayfa yükleme hatası:",i),e&&n&&(e.style.backgroundImage="",n.innerHTML=`
        <h1 class="hero-title">Let's Make Your Own Cinema</h1>
        <p class="hero-description">
          Is a guide to creating a personalized movie theater experience.
          You'll need a projector, screen, and speakers. Decorate your
          space, choose your films, and stock up on snacks for the full experience.
        </p>
        <div class="hero-buttons">
           <a href="/catalog.html" class="btn btn-primary">Get Started</a>
        </div>
      `)}finally{T()}}};Z();function ee(e,n,o,t){if(!e||n<=1){e&&(e.innerHTML="");return}e.innerHTML="";const i=5;let a=Math.max(o-2,1),s=Math.min(a+i-1,n);s-a<i-1&&(a=Math.max(s-i+1,1));const d=document.createElement("button");d.className="pagination-arrow",d.innerHTML="&laquo;",d.disabled=o===1,d.addEventListener("click",()=>t(o-1)),e.appendChild(d),a>1&&(e.appendChild(B(1,t)),a>2&&e.appendChild(_()));for(let m=a;m<=s;m++){const f=B(m,t,m===o);e.appendChild(f)}s<n&&(s<n-1&&e.appendChild(_()),e.appendChild(B(n,t)));const c=document.createElement("button");c.className="pagination-arrow",c.innerHTML="&raquo;",c.disabled=o===n,c.addEventListener("click",()=>t(o+1)),e.appendChild(c)}function B(e,n,o=!1){const t=document.createElement("button");return t.className="pagination-btn",o&&t.classList.add("active"),t.textContent=e,t.addEventListener("click",()=>n(e)),t}function _(){const e=document.createElement("span");return e.className="pagination-dots",e.textContent="...",e}const te=async()=>{const e=document.getElementById("search-form"),n=document.getElementById("search-input"),o=document.getElementById("movie-grid"),t=document.querySelector(".pagination"),i=document.getElementById("catalog-hero"),a=document.getElementById("catalog-hero-content"),s=document.getElementById("year-dropdown"),d=document.getElementById("dropdown-header"),c=document.getElementById("dropdown-list"),m=document.getElementById("selected-year"),f=document.getElementById("year-input");if(!o)return;const b=new Date().getFullYear();if(c){const r=document.createElement("li");r.classList.add("dropdown-item"),r.textContent="Year",r.onclick=()=>{f&&(f.value=""),m&&(m.textContent="Year",m.style.color=""),h()},c.appendChild(r);for(let l=b;l>=1950;l--){const y=document.createElement("li");y.classList.add("dropdown-item"),y.textContent=l,y.onclick=()=>{f&&(f.value=l),m&&(m.textContent=l,m.style.color="var(--primary-orange)"),h()},c.appendChild(y)}}function g(){s&&s.classList.toggle("active"),c&&c.classList.toggle("is-hidden")}function h(){s&&s.classList.remove("active"),c&&c.classList.add("is-hidden")}d&&d.addEventListener("click",r=>{r.stopPropagation(),g()}),document.addEventListener("click",r=>{s&&!s.contains(r.target)&&h()});let u=1,p="",v="",L=1;async function x(){C();const r=await Y(1);T(),r?.results?.length&&(k(r.results),r.results[0]&&await w(r.results[0].id,i,a))}e&&e.addEventListener("submit",async r=>{r.preventDefault();const l=n.value.trim(),y=f?f.value:"";l&&(u=1,p=l,v=y,h(),await I(l,y,u))});async function I(r,l,y){C();const E=await W(r,y,l);if(T(),!E?.results?.length){o.innerHTML=`
        <div class="no-results-container">
          <h2 class="no-results-title">OOPS...</h2>
          <h3 class="no-results-text">We are very sorry!</h3>
          <h3 class="no-results-text">We don’t have any results matching your search.</h3>
        </div>
      `,t.innerHTML="",a.innerHTML="",i.style.backgroundImage="none";return}L=E.total_pages,k(E.results),E.results[0]&&await w(E.results[0].id,i,a),ee(t,L,y,$=>{u=$,I(p,v,$),window.scrollTo({top:0,behavior:"smooth"})})}function k(r){o.innerHTML=r.map(l=>N(l)).join("")}o.addEventListener("click",r=>{const l=r.target.closest(".movie-card");l&&l.dataset.id&&(w(l.dataset.id,i,a),window.scrollTo({top:0,behavior:"smooth"}))}),await x()};te();const ne=async()=>{const e=document.getElementById("library-grid"),n=document.getElementById("library-hero"),o=document.getElementById("library-hero-content"),t=document.getElementById("genre-filter-container"),i=document.getElementById("genre-header"),a=document.getElementById("selected-genre-text"),s=document.getElementById("genre-list"),d=document.getElementById("load-more-container"),c=document.getElementById("load-more-btn");if(!e)return;const m=JSON.parse(localStorage.getItem("myLibrary")||"[]"),f=(Array.isArray(m)?m:[]).map(r=>Number(r)).filter(r=>Number.isFinite(r)&&r>0);if(!f.length){e.innerHTML=`
      <div class="library-message">
        <p style="font-size: 24px; font-weight: 500; margin-bottom: 10px;">OOPS...</p>
        <p>Henüz bir film eklemediniz!</p>
        <a href="/catalog.html" class="btn btn-primary" style="margin-top:20px; display:inline-block;">Kataloğa Git</a>
      </div>`,t&&(t.style.display="none"),d&&d.classList.add("is-hidden");return}const b=await Promise.allSettled(f.map(r=>A(r))),g=[],h=[];b.forEach((r,l)=>{const y=f[l];r.status==="fulfilled"&&r.value&&(g.push(r.value),h.push(y))}),localStorage.setItem("myLibrary",JSON.stringify(h)),g.length>0&&await w(g[0].id,n,o);const u=new Map;if(g.forEach(r=>{r.genres&&r.genres.forEach(l=>u.set(l.id,l.name))}),s){const r=document.createElement("div");r.className="genre-item active",r.textContent="All Genres",r.dataset.id="all",s.appendChild(r),u.forEach((l,y)=>{const E=document.createElement("div");E.className="genre-item",E.textContent=l,E.dataset.id=y,s.appendChild(E)})}i&&i.addEventListener("click",r=>{r.stopPropagation(),s.classList.toggle("is-hidden"),t.classList.toggle("is-open")}),document.addEventListener("click",r=>{t&&!t.contains(r.target)&&(s.classList.add("is-hidden"),t.classList.remove("is-open"))});let p="all",v=[...g];s&&s.addEventListener("click",r=>{if(r.target.classList.contains("genre-item")){p=r.target.dataset.id;const l=r.target.textContent;a&&(a.textContent=l==="All Genres"?"Genre":l),document.querySelectorAll(".genre-item").forEach(y=>y.classList.remove("active")),r.target.classList.add("active"),s.classList.add("is-hidden"),t.classList.remove("is-open"),I()}});let L=0;const x=6;function I(){p==="all"?v=[...g]:v=g.filter(r=>r.genres.some(l=>l.id.toString()===p.toString())),L=0,e.innerHTML="",v.length===0?(e.innerHTML='<div class="library-message">Bu türde film bulunamadı.</div>',d&&d.classList.add("is-hidden")):k()}function k(){const r=v.slice(L,L+x),l=r.map(y=>N(y)).join("");e.insertAdjacentHTML("beforeend",l),L+=r.length,L>=v.length?d&&d.classList.add("is-hidden"):d&&d.classList.remove("is-hidden")}c&&c.addEventListener("click",k),k(),e.addEventListener("click",r=>{const l=r.target.closest(".movie-card");l&&l.dataset.id&&(w(l.dataset.id,n,o),window.scrollTo({top:0,behavior:"smooth"}))})};ne();document.addEventListener("DOMContentLoaded",()=>{const{openModal:e}=K();window.openMovieModal=e,V();const n=window.location.pathname;n.includes("catalog.html")||n.includes("my-library.html")||n==="/"||n.endsWith("index.html")||n.endsWith("/Cinemania-Project/"),document.querySelectorAll(".nav-link").forEach(t=>{t.classList.remove("active");const i=t.getAttribute("href");((n==="/"||n.includes("index.html"))&&i.includes("index.html")||n.includes("catalog")&&i.includes("catalog")||n.includes("library")&&i.includes("library"))&&t.classList.add("active")})});
//# sourceMappingURL=main-zL7dp_19.js.map
