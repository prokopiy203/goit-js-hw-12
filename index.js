import{a as y,S as q,i as n}from"./assets/vendor-C9vNCoLC.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&u(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function u(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();y.defaults.baseURL="https://pixabay.com/api/";async function g(t,r){try{return(await y("",{params:{q:t,key:"50178649-88518a6762b6816f005eeb1ba",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}})).data}catch(a){return a}}const b=new q(".js-gallery a",{captionsData:"alt",captionDelay:250}),v=document.querySelector(".js-gallery");function w(t){const r=t.map(({tags:a,largeImageURL:u,webformatURL:e,likes:s,views:l,comments:L,downloads:S})=>`<li class="gallery-item ">
                <div>
                    <a href="${u}" class="link">
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
                            <p class="label" data-views>${l}</p>
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
            </li>`).join("");v.insertAdjacentHTML("beforeend",r)}function f(t){t.classList.remove("hidden")}function i(t){t.classList.add("hidden")}function m(){v.innerHTML=""}const h=document.querySelector(".js-form"),o=document.querySelector(".button-search"),p=document.querySelector(".loader");let d="",c=1;h.addEventListener("submit",$);async function $(t){if(t.preventDefault(),c=1,d=t.target.elements["search-text"].value.trim(),d===""){n.warning({title:"Warning!",message:"Please enter the correct query!",position:"topRight"}),m(),i(o),h.reset();return}m(),f(p),i(o);try{const r=await g(d,c);if(r.hits.length===0){n.warning({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),m(),i(o);return}r.totalHits>15&&f(o),w(r.hits),b.refresh()}catch(r){n.error({position:"topCenter",message:`Error: ${r}`})}finally{i(p),h.reset()}}o.addEventListener("click",E);async function E(){f(p),c+=1;try{const t=await g(d,c);c*15>=t.totalHits&&(i(o),n.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})),w(t.hits);const a=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:a*3,behavior:"smooth"}),b.refresh()}catch(t){n.error({position:"topCenter",message:`Error: ${t}`})}finally{i(p)}}
//# sourceMappingURL=index.js.map
