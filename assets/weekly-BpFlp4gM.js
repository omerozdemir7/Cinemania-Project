import{b as k,g as w,c as v}from"./api-DdP_p3xO.js";import{Modal as S}from"./modal-BzXhaMjf.js";import"https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/+esm";let i,c,u=[],d=!1;function y(){const t=window.innerWidth;return t<768?1:(t<1280,3)}function $(t){const r=Math.floor(t/2),n=t%2>=1,a=5-r-(n?1:0);let l=[];for(let s=0;s<r;s++)l.push('<svg class="weekly__icon--full-star"><use xlink:href="/Cinemania-Project/images/icon.svg#icon-full-star"></use></svg>');n&&l.push('<svg class="weekly__icon--half-star"><use xlink:href="/Cinemania-Project/images/icon.svg#icon-half-star"></use></svg>');for(let s=0;s<a;s++)l.push('<svg class="weekly__icon--empty-star"><use xlink:href="/Cinemania-Project/images/icon.svg#icon-empty-star"></use></svg>');return l.join("")}async function p(t=y()){try{const[r,n]=await Promise.all([w(),v()]);u=r.results;const a=n.genres.reduce((e,o)=>(e[o.id]=o.name,e),{}),s=u.slice(0,t).map(e=>{const o=e.poster_path?`https://image.tmdb.org/t/p/w500${e.poster_path}`:"https://via.placeholder.com/500x750?text=No+Image",f=e.genre_ids.map(m=>a[m]).slice(0,1).join(", "),_=e.release_date?e.release_date.slice(0,4):"N/A",h=$(e.vote_average);return`
          <li class="weekly__card" data-id="${e.id}">
            <div class="poster-wrapper">
              <img class="weekly__card-img" src="${o}" alt="${e.title}" />
              <div class="weekly__card-overlay">
                <h3 class="weekly__card-title">${e.title.toUpperCase()}</h3>
                <p class="weekly__card-info">${f} | ${_}</p>
                <div class="weekly__card-rating">${h}</div>
              </div>
            </div>
          </li>
        `}).join("");i.innerHTML=s}catch(r){console.error("Weekly trends fetch error:",r),i.innerHTML="<p>Veriler alınamadı.</p>"}}function g(){if(i=document.querySelector(".weekly__gallery"),c=document.querySelector(".weekly__see-all"),!i||!c){console.warn("weekly-gallery veya see-all bulunamadı.");return}c.addEventListener("click",()=>{d=!d;const t=d?u.length:y();p(t)}),i.addEventListener("click",async t=>{const r=t.target.closest(".weekly__card");if(!r)return;const n=r.dataset.id;try{const a=await k(n);S.renderMovie(a)}catch(a){console.error("Popup açılırken hata:",a)}}),p()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",g,{once:!0}):g();
//# sourceMappingURL=weekly-BpFlp4gM.js.map
