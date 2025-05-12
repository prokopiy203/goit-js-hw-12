import{a as u,S as d,i as o}from"./assets/vendor-C9vNCoLC.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();u.defaults.baseURL="https://pixabay.com/api/";function f(s){return u("",{params:{q:s,key:"50178649-88518a6762b6816f005eeb1ba",image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data).catch(r=>r)}const g=new d(".js-gallery a",{captionsData:"alt",captionDelay:250}),y=document.querySelector(".js-gallery");function h(s){return s.map(({tags:r,largeImageURL:i,webformatURL:l,likes:e,views:t,comments:a,downloads:m})=>`<li class="gallery-item ">
                <div>
                    <a href="${i}" class="link">
                        <img src="${l}" alt="${r}" class="gallery-image">
                    </a>
                </div>
                <div>
                    <ul class="wrapper-box">
                        <li class="list-item">
                            <p class="value-tittle">Likes</p>
                            <p class="label" data-likes>${e}</p>
                        </li>
                        <li class="list-item">
                            <p class="value-tittle">Views</p>
                            <p class="label" data-views>${t}</p>
                        </li>
                        <li class="list-item">
                            <p class="value-tittle">Comments</p>
                            <p class="label" data-comments>${a}</p>
                        </li>
                        <li class="list-item">
                            <p class="value-tittle">Downloads</p>
                            <p class="label" data-downloads>${m}</p>
                        </li>
                    </ul>
                </div>
            </li>`).join("")}function b(s){s.classList.remove("hidden")}function v(s){s.classList.add("hidden")}function n(){y.innerHTML=""}const p=document.querySelector(".js-form"),L=document.querySelector(".gallery"),c=document.querySelector(".loader");p.addEventListener("submit",w);function w(s){s.preventDefault();const r=s.target.elements["search-text"].value.trim();if(r===""){o.warning({title:"Warning!",message:"Please enter the correct query!",position:"topRight"});return}n(),b(c),f(r).then(i=>{if(i.hits.length===0){o.warning({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),n();return}L.innerHTML=h(i.hits),g.refresh()}).catch(i=>{o.error({position:"topCenter",message:`Error: ${i}`})}).finally(()=>{v(c),p.reset()})}
//# sourceMappingURL=index.js.map
