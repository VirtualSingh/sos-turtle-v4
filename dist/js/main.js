"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,r){if(e){if("string"==typeof e)return _arrayLikeToArray(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(e,r):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,o=new Array(r);t<r;t++)o[t]=e[t];return o}var body=document.querySelector("body"),mobileNav=document.querySelector(".mobile-nav"),menuBtn=document.querySelector(".menu-btn"),closeNav=document.querySelector(".close");menuBtn.addEventListener("click",(function(){mobileNav.classList.toggle("active"),mobileNav.classList.contains("active")?(menuBtn.style.display="none",body.classList.add("scroll-lock")):body.classList.remove("scroll-lock")})),closeNav.addEventListener("click",(function(){mobileNav.classList.remove("active"),menuBtn.style.display="inline-block"}));var header=document.querySelector("header");window.addEventListener("scroll",(function(){var e=window.scrollY>0;header.classList.toggle("on-scroll",e)}));var digits=document.querySelectorAll(".digit");digits.forEach((function(e){e.innerText="0",function r(){var t=Number(e.getAttribute("data-target")),o=Number(e.innerText),n=t/1e3;o<t?(e.innerText="".concat(Math.ceil(o+n)),setTimeout(r,1)):e.innerText=t}()}));var videoWrapper=document.querySelector(".video-wrapper"),videoBtn=document.querySelector(".video-popup"),closeBtn=videoWrapper.querySelector(".close-btn");videoBtn.addEventListener("click",(function(){videoWrapper.classList.toggle("show"),videoWrapper.classList.contains("show")&&body.classList.add("scroll-lock")})),closeBtn.addEventListener("click",(function(){videoWrapper.classList.remove("show"),body.classList.remove("scroll-lock")}));var track=document.querySelector(".carousel__track"),slides=_toConsumableArray(track.children),dotNav=document.querySelector(".dot__nav"),dots=_toConsumableArray(dotNav.children),slideWidth=slides[0].getBoundingClientRect().width;slides.forEach((function(e,r){e.style.left="".concat(slideWidth*r,"px")}));var moveToSlide=function(e,r,t){e.style.transform="translateX(-".concat(t.style.left,")"),r.classList.remove("current__slide"),t.classList.add("current__slide")};dotNav.addEventListener("click",(function(e){var r=e.target.closest("span");if(r){var t=track.querySelector(".current__slide"),o=dotNav.querySelector(".current__slide"),n=dots.findIndex((function(e){return e===r})),a=slides[n];moveToSlide(track,t,a),o.classList.remove("current__slide"),r.classList.add("current__slide")}}));
//# sourceMappingURL=main.js.map