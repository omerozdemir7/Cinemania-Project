import{f as w,g as M}from"./api-Dh70rJD-.js";const i=document.getElementById("upcoming-content");if(i){let b=function(){return JSON.parse(localStorage.getItem("library"))||[]},h=function(n){return b().includes(n)},y=function(n,e){let t=JSON.parse(localStorage.getItem("library"))||[];t.some(o=>o.id===n.id)?(t=t.filter(o=>o.id!==n.id),e.textContent="Add to my library",e.classList.remove("upcoming__btn--remove"),e.classList.add("upcoming__btn--add")):(t.push(n),e.textContent="Remove from my library",e.classList.remove("upcoming__btn--add"),e.classList.add("upcoming__btn--remove")),localStorage.setItem("library",JSON.stringify(t))},v=function(n){return n.map(e=>{var t;return(t=l.find(a=>a.id===e))==null?void 0:t.name}).filter(Boolean).join(", ")},f=function(n){var g,d;const e=n.backdrop_path?`https://image.tmdb.org/t/p/original/${n.backdrop_path}`:"https://via.placeholder.com/500x300?text=No+Image",t=h(n.id),a=t?"Remove from my library":"Add to my library",o=t?"upcoming__btn--remove":"upcoming__btn--add",L=v(n.genre_ids||[]);i.innerHTML=`
      <div class="upcoming__card">
        <img src="${e}" alt="${n.title}" />
        <div class="upcoming__info">
          <h3 class="upcoming__movie-name">${n.title}</h3>
          <div class="upcoming__details-wrapper">
            <p class="upcoming__movie-detail">
              <span>Release date</span>
              <span class="upcoming__highlight">${n.release_date||"Unknown"}</span>
            </p>

            <p class="upcoming__movie-detail">
              <span>Vote / Votes</span>
         
              <span>
                <span class="upcoming__vote-box">${((g=n.vote_average)==null?void 0:g.toFixed(1))||"-"}</span>
                <span>/</span>
                <span class="upcoming__vote-box">${n.vote_count||"-"}</span> 
              </span>
        
            </p>

            <p class="upcoming__movie-detail">
              <span>Popularity</span>
              <span>${((d=n.popularity)==null?void 0:d.toFixed(1))||"-"}</span>
            </p>

            <p class="upcoming__movie-detail">
              <span>Genre</span>
              <span>${L||"Unknown"}</span>
            </p>
          </div>
          <h4 class="upcoming__about-title">ABOUT</h4>
          <p class="upcoming__movie-overview">${n.overview||"No description available."}</p>

          <button id="library-btn" class="upcoming__btn ${o}">${a}</button>
        </div>
      </div>
    `;const s=document.getElementById("library-btn");s==null||s.addEventListener("click",()=>y(n,s))};const r=new Date,c=r.getFullYear(),p=String(r.getMonth()+1).padStart(2,"0"),m=new Date(c,r.getMonth()+1,0).getDate(),_=`${c}-${p}-01`,u=`${c}-${p}-${m}`;let l=[];async function $(){try{l=(await w()).genres||[];const t=(await M(_,u,{region:"TR"})).results||[];if(!t.length){i.innerHTML=`<p>${t.length} movies this month.</p>`;return}const a=t[Math.floor(Math.random()*t.length)];f(a)}catch(n){console.error("upcoming init error:",n),i.innerHTML="<p>Error while fetching movie data.</p>"}}$()}
//# sourceMappingURL=upcoming-BNupen0o.js.map
