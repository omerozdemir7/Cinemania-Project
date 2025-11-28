import{f as c,a as d,b as h}from"./api-C-8Ffavt.js";import{Modal as i}from"./modal-BzXhaMjf.js";import"https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/+esm";const u="https://image.tmdb.org/t/p/original";async function n(){const t=document.getElementById("hero");if(t)try{const e=await c(),r=(e==null?void 0:e.results)||[];if(!r.length){l(t);return}const s=r[Math.floor(Math.random()*r.length)];g(t,s)}catch(e){console.error("Movie init error:",e),l(t)}}function _(t){const e=Math.floor(t/2),r=t%2>=1,s=5-e-(r?1:0);let o=[];for(let a=0;a<e;a++)o.push('<svg class="hero__icon--full-star"><use xlink:href="/images/icon.svg#icon-full-star"></use></svg>');r&&o.push('<svg class="hero__icon--half-star"><use xlink:href="/images/icon.svg#icon-half-star"></use></svg>');for(let a=0;a<s;a++)o.push('<svg class="hero__icon--empty-star"><use xlink:href="/images/icon.svg#icon-empty-star"></use></svg>');return o.join("")}function g(t,e){const r=_(e.vote_average);t.innerHTML=`
    <div class="hero__bg" style="background-image:url('${u}${e.backdrop_path||e.poster_path||""}')"></div>
    <div class="hero__scrim"></div>

    <div class="hero__inner">
    <div class="hero__badge">
      <h2 class="hero__title">${e.title??e.name??"Untitled"}</h2>
      <span class="hero__rating">${r}</span>
      </div>
      <p class="hero__subtitle">
        ${e.overview||"No description available."}
      </p>

      <div class="hero__ctas">
        <button class="hero__btn--play" id="play-trailer-btn">Watch Trailer</button>
        <button class="hero__btn--info" id="more-info-btn">More Info</button>
      </div>
    </div>
  `;const s=t.querySelector("#play-trailer-btn"),o=t.querySelector("#more-info-btn");s==null||s.addEventListener("click",()=>f(e.id)),o==null||o.addEventListener("click",()=>v(e.id))}function l(t){t.innerHTML=`
    <div class="hero__bg" style="background-image:linear-gradient(90deg,#000,#111)"></div>
    <div class="hero__scrim"></div>

    <div class="hero__inner">
      <h2 class="hero__title">Let's Make Your Own Cinema</h2>
      <p class="hero__subtitle">
        A guide to creating a personalized movie experience.
        Decorate your space, choose your films, and enjoy the show!
      </p>

      <div class="hero__ctas">
        <a href="/pages/catalog/catalog.html" class="hero__btn--play">Get Started</a>
      </div>
    </div>
  `}async function f(t){var e;try{const r=await d(t),s=Array.isArray((e=r==null?void 0:r.data)==null?void 0:e.results)?r.data.results:r==null?void 0:r.results,o=s==null?void 0:s.find(a=>a.type==="Trailer"&&a.site==="YouTube");o?i.showTrailer(o.key):i.showMessage("Trailer not available.","Info")}catch(r){console.error("Play trailer error:",r),i.showMessage("Error fetching trailer.","Error")}}async function v(t){try{const e=await h(t),r=(e==null?void 0:e.data)??e;i.renderMovie(r)}catch(e){console.error("Movie details error:",e),i.showMessage("Movie details could not be loaded.","Error")}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n):n();
//# sourceMappingURL=hero-CFY_BX3H.js.map
