import{c as b}from"./api-DdP_p3xO.js";import{Modal as v}from"./modal-BzXhaMjf.js";import"https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/+esm";const y=document.getElementById("library-list"),g=document.getElementById("empty-library"),s=document.getElementById("genre-filter"),a=document.getElementById("load-more-btn");let c={},d=[],l=0;const _=9;function E(r){const e=(Number(r)||0)/2;let t="";for(let i=1;i<=5;i++)e>=i?t+=`
        <svg class="library__icon--star-full" width="20" height="20">
          <use xlink:href="/images/icon.svg#icon-full-star"></use>
        </svg>`:e>=i-.5?t+=`
        <svg class="library__icon--star-half" width="20" height="20" viewBox="0 0 32 32">
          <path fill="none" stroke="#f87719" stroke-linejoin="round" stroke-linecap="butt"
                stroke-miterlimit="4" stroke-width="2"
                d="M30 13h-10.75l-3.25-10-3.25 10h-10.75l8.75 6-3.375 10 8.625-6.25 8.625 6.25-3.375-10 8.75-6z"></path>
          <path d="M16 3v19.75l-8.625 6.25 3.375-10-8.75-6h10.75l3.25-10z" fill="#f87719"></path>
        </svg>`:t+=`
        <svg class="library__icon--star-empty" width="20" height="20">
          <use xlink:href="/images/icon.svg#icon-empty-star"></use>
        </svg>`;return t}function k(r){const e=r.match(/\d+/g);if(!e)return 255;const[t,i,n]=e.map(Number);return(t*299+i*587+n*114)/1e3}function f(r,e=!0){e&&(y.innerHTML="",l=0,d=Array.isArray(r)?r:[]);const t=d.slice(l,l+_),i=t.map(n=>{if(!n.poster_path)return"";const o=n.release_date?n.release_date.slice(0,4):"—",u=(n.genre_ids||[]).map(h=>c[h]).filter(Boolean).join(", ")||"—",m=E(n.vote_average);return`
      <li id="${n.id}" class="library__card"
          style="
            background-image:url(https://image.tmdb.org/t/p/w500${n.poster_path});
            background-size:cover;background-position:center;
            width:100%;max-width:395px;aspect-ratio:395/574;border-radius:12px;overflow:hidden;position:relative;">
        <div class="library__card-content"
             style="position:absolute;bottom:0;width:100%;
                    background:linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0));
                    color:#fff;padding:10px;box-sizing:border-box;">
          <h3 style="margin:0;font-size:18px;">${n.title}</h3>
          <p style="margin:2px 0;font-size:14px; color: #fff;">${u} | ${o}</p>
          <div>${m}</div>
        </div>
      </li>`}).join("");y.insertAdjacentHTML("beforeend",i),l+=t.length,l<d.length?a.classList.remove("hidden"):a.classList.add("hidden"),L()}function p(){const r=JSON.parse(localStorage.getItem("library"))||[];if(!r.length){g.style.display="flex",y.innerHTML="",s!=null&&s.parentElement&&(s.parentElement.style.display="none"),a==null||a.classList.add("hidden");return}g.style.display="none",s!=null&&s.parentElement&&(s.parentElement.style.display="flex");const e=new Set;r.forEach(t=>(t.genre_ids||[]).forEach(i=>c[i]&&e.add(c[i]))),s&&(s.innerHTML='<option value="all">Genre</option>'+[...e].map(t=>`<option value="${t}">${t}</option>`).join("")),f(r)}function L(){document.querySelectorAll(".library__card").forEach(r=>{r.removeEventListener("click",r._clickHandler);const e=()=>{const t=Number(r.id),n=(JSON.parse(localStorage.getItem("library"))||[]).find(o=>Number(o.id)===t);n&&v.renderMovie(n)};r._clickHandler=e,r.addEventListener("click",e)})}document.addEventListener("click",r=>{var e,t;(t=(e=r.target)==null?void 0:e.matches)!=null&&t.call(e,'[data-action="toggle-library"]')&&setTimeout(()=>p(),0)});a==null||a.addEventListener("click",()=>f(d,!1));s==null||s.addEventListener("change",r=>{const e=r.target.value,t=JSON.parse(localStorage.getItem("library"))||[];if(e==="all")return f(t);const i=t.filter(n=>(n.genre_ids||[]).some(o=>c[o]===e));f(i)});(function(){if(!s)return;const e=window.getComputedStyle(document.body).backgroundColor,t=k(e),i=t<128?"#fff":"#000";s.style.backgroundColor=e,s.style.color=i,s.style.border=`1px solid ${t<128?"#fff":"#000"}`})();(async function(){try{const e=await b();c=((e==null?void 0:e.genres)||[]).reduce((i,n)=>(i[n.id]=n.name,i),{}),p()}catch(e){console.error("Library init error:",e)}})();
//# sourceMappingURL=library-BleRREzd.js.map
