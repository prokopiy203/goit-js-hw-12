import{a as y,S as q,i as l}from"./assets/vendor-C9vNCoLC.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();y.defaults.baseURL="https://pixabay.com/api/";async function g(t,r){try{return(await y("",{params:{q:t,key:"50178649-88518a6762b6816f005eeb1ba",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}})).data}catch(a){return a}}const b=new q(".js-gallery a",{captionsData:"alt",captionDelay:250}),v=document.querySelector(".js-gallery");function w(t){const r=t.map(({tags:a,largeImageURL:n,webformatURL:e,likes:s,views:i,comments:L,downloads:S})=>`<li class="gallery-item ">
                <div>
                    <a href="${n}" class="link">
                        <img src="${e}" alt="${a}" class="gallery-image">
                    </a>
                </div>
                <div>
                    <ul class="wrapper-box">
                        <li class="list-item">
                            <p class="value-tittle">Likes</p>
                            <p class="label" data-likes>${s}</p>
                        </li>
                        <li class="list-item">
                            <p class="value-tittle">Views</p>
                            <p class="label" data-views>${i}</p>
                        </li>
                        <li class="list-item">
                            <p class="value-tittle">Comments</p>
                            <p class="label" data-comments>${L}</p>
                        </li>
                        <li class="list-item">
                            <p class="value-tittle">Downloads</p>
                            <p class="label" data-downloads>${S}</p>
                        </li>
                    </ul>
                </div>
            </li>`).join("");v.insertAdjacentHTML("beforeend",r)}function m(t){t.classList.remove("hidden")}function u(t){t.classList.add("hidden")}function h(){v.innerHTML=""}const f=document.querySelector(".js-form"),d=document.querySelector(".button-search"),p=document.querySelector(".loader");let c="",o=1;f.addEventListener("submit",$);async function $(t){if(t.preventDefault(),c=t.target.elements["search-text"].value.trim(),c===""){l.warning({title:"Warning!",message:"Please enter the correct query!",position:"topRight"});return}h(),m(p),u(d);try{const r=await g(c,o);if(r.hits.length===0){l.warning({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),h();return}r.totalHits>15&&m(d),w(r.hits),b.refresh()}catch(r){l.error({position:"topCenter",message:`Error: ${r}`})}finally{u(p),f.reset()}}d.addEventListener("click",E);async function E(){m(p);try{o+=1;const t=await g(c,o);o*15>=t.totalHits&&(o=1,u(d),l.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})),w(t.hits);const a=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:Math.round(a)*3,behavior:"smooth"}),b.refresh()}catch(t){l.error({position:"topCenter",message:`Error: ${t}`})}finally{u(p),f.reset()}}
//# sourceMappingURL=index.js.map
