(()=>{const e=document.querySelector(".burger"),t=document.querySelector(".burger-close"),s=document.querySelector(".menu");function o(){s.classList.remove("_open"),document.body.classList.remove("_block"),t.removeEventListener("click",o)}e.addEventListener("click",(function(){s.classList.add("_open"),document.body.classList.add("_block"),t.addEventListener("click",o)}));const r=document.querySelector(".reasons__btn");function n(){const e=window.scrollY,t=header.clientHeight,s=document.querySelector(".try").clientHeight-t-e;window.scrollBy({top:s,behavior:"smooth"})}"null"!=r&&r.addEventListener("click",n),r.addEventListener("click",n);const c=document.querySelectorAll(".feedbacks-slider__play-btn");for(let e=0;e<c.length;e++)c[e].addEventListener("click",i);function i(e){e.target.classList.add("_hidden"),e.target.removeEventListener("click",i)}class a{constructor(e,t,s,o,r,n){this.wrapper=e,this.slider=document.querySelector(t),this.sliderItems=document.querySelectorAll(s),this.nextBtn=document.querySelector(o),this.prevBtn=document.querySelector(r),this.paginationItems=document.querySelectorAll(n),this.count=this.paginationItems.length-1,this.currentNumber=0,this.nextSlide=this.nextSlide.bind(this),this.prevSlide=this.prevSlide.bind(this),this.rotateToSlide=this.rotateToSlide.bind(this),this.addListeners()}addListeners(){this.nextBtn.addEventListener("click",this.nextSlide),this.prevBtn.addEventListener("click",this.prevSlide);for(let e=0;e<this.paginationItems.length;e++)this.paginationItems[e].addEventListener("click",this.rotateToSlide)}nextSlide(){if(this.currentNumber<this.count){const e=++this.currentNumber;this.translateSlider(e),this.colorPag(e)}}prevSlide(){if(this.currentNumber>0){const e=--this.currentNumber;this.translateSlider(e),this.colorPag(e)}}rotateToSlide(e){const t=e.target.dataset.slide;this.colorPag(t),this.translateSlider(t),this.currentNumber=t}colorPag(e){const t=document.querySelector(`${this.wrapper} .feedbacks-slider__pagiination-item[data-slide="${e}"]`);t.parentElement.querySelector("._active").classList.remove("_active"),t.classList.add("_active")}translateSlider(e){const t=-100*e;this.slider.style.transform=`translate(${t}%,0px)`}touchStart(e){this.startPosition=e,this.slider.style.cursor="grab"}moveSlider(e){if(this.startPosition>e){if(this.startPosition-e>50)return this.nextSlide(),1}else if(e-this.startPosition>50)return this.prevSlide(),1}}const l=new a(".feedbacks__look",".feedbacks__look .feedbacks-slider__body",".feedbacks__look .feedbacks-slider__item",".feedbacks__look .feedbacks-slider__arrow-right",".feedbacks__look .feedbacks-slider__arrow-left",".feedbacks__look .feedbacks-slider__pagiination-item"),d=new a(".feedbacks__read",".feedbacks__read .feedbacks-slider__body",".feedbacks__read .feedbacks-slider__item",".feedbacks__read .feedbacks-slider__arrow-right",".feedbacks__read .feedbacks-slider__arrow-left",".feedbacks__read .feedbacks-slider__pagiination-item"),u=document.querySelector(".feedbacks__look .feedbacks-slider");u.ontouchstart=e=>{e.preventDefault(),l.touchStart(e.touches[0].clientX),u.addEventListener("touchmove",_)};const _=e=>{e.preventDefault();const t=e.touches[0].clientX;l.moveSlider(t)&&u.removeEventListener("touchmove",_)},m=document.querySelector(".feedbacks__read .feedbacks-slider");m.ontouchstart=e=>{e.preventDefault(),d.touchStart(e.touches[0].clientX),m.addEventListener("touchmove",h)};const h=e=>{e.preventDefault();const t=e.touches[0].clientX;d.moveSlider(t)&&m.removeEventListener("touchmove",h)},f=document.querySelector(".feedbacks__look"),v=document.querySelector(".feedbacks__read"),b=document.querySelector(".feedbacks .tab-look"),k=document.querySelector(".feedbacks .tab-read");b.addEventListener("click",(function(){k.classList.contains("_active")&&(k.classList.remove("_active"),b.classList.add("_active"),v.classList.add("_hidden"),f.classList.remove("_hidden"))})),k.addEventListener("click",(function(){b.classList.contains("_active")&&(b.classList.remove("_active"),k.classList.add("_active"),f.classList.add("_hidden"),v.classList.remove("_hidden"))})),function(){const e=new IntersectionObserver((e=>{e.forEach((e=>{const t=e.target.dataset.ref,s=document.querySelector('.navigation__item[data-ref="'+t+'"');e.isIntersecting&&(document.querySelector(".navigation__item._active").classList.remove("_active"),s.classList.add("_active"))}))}),{threshold:0,rootMargin:"-50px 0px -55% 0px"}),t=document.querySelectorAll(".navigation__item[data-ref]");for(let s=0;s<t.length;s++){const o=t[s].dataset.ref,r=document.querySelector('.wrapper [data-ref="'+o+'"');e.observe(r)}}();const S=document.querySelectorAll(".navigation__item[data-ref]");for(let e=0;e<S.length;e++)S[e].addEventListener("click",L);function L(e){const t=e.target;document.querySelector(".header .navigation__item._active").classList.remove("_active"),t.classList.add("_active");const r=t.dataset.ref,n=document.querySelector('section[data-ref="'+r+'"').getBoundingClientRect().top;topOffset=document.querySelector(".header").offsetHeight,s.classList.contains("_open")&&o();const c=n-topOffset;window.scrollBy({top:c,behavior:"smooth"})}const g=document.querySelectorAll(".course__image");function y(){if(window.matchMedia("(max-width: 768px)").matches){for(let e=0;e<g.length;e++){const t=g[e];t.closest(".course__row").querySelector(".course__title").insertAdjacentElement("afterend",t)}const e=document.querySelectorAll(".course__call-manager");for(let t=0;t<e.length;t++){const s=e[t];s.closest(".course__footer").insertAdjacentElement("afterbegin",s)}}}function p(e){const t=e.target.dataset.modal;document.querySelector(`.${t}`).classList.add("_open"),document.body.classList.add("_block")}y(),window.addEventListener("resize",y);const q=document.querySelectorAll(".close-modal");for(let e=0;e<q.length;e++)q[e].addEventListener("click",E);function E(e){e.target.closest(".modal").classList.remove("_open"),document.body.classList.remove("_block")}const w=document.querySelectorAll("button[data-modal");for(let e=0;e<w.length;e++){const t=w[e];t.classList.contains("_trial-lesson")||t.addEventListener("click",p)}const x=document.querySelectorAll(".form");async function A(e){e.preventDefault(),function(e){let t=0;const s=e.querySelector(".input-email");B(s),!/^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i.test(s.value)&&(P(s),t++);const o=e.querySelector(".input-phone");return B(o),function(e){return!/^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/.test(e.value)}(o)&&(P(o),t++),t}(e.target)||(e.target.reset(),e.target.classList.contains("_trial-lesson")&&p(e))}function P(e){e.classList.add("_error")}function B(e){e.classList.remove("_error")}document.addEventListener("DOMContentLoaded",(function(){for(let e=0;e<x.length;e++){const t=x[e];null!=t&&t.addEventListener("submit",A)}}));const I=document.querySelectorAll(".question__title");for(let e=0;e<I.length;e++)I[e].addEventListener("click",D);function D(e){e.target.closest(".question").classList.toggle("_open")}})();