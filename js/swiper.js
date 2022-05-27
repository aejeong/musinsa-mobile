import { VISUAL_BANNERS } from '../index';

const bannerSlot = document.querySelector('#banner-slot');

init();

function init(){
  visualSwiperInit();
  setBannerImg();
}

function visualSwiperInit(){
  initSwiper('.visual-banner-wrapper',{
    pagination: {
      el: '.visual-pagination'
  }})

}

function setBannerImg(){
  for(let i=0; i < VISUAL_BANNERS.length; i++){
    const div = document.createElement('div');
    div.insertAdjacentHTML('afterBegin',
     `<img src='${VISUAL_BANNERS[i].imageUrl}' alt="main-banner" />

     <div class="slot-info-wrapper">
      <span class="slot-desc-type">${VISUAL_BANNERS[i].type}</span>
      <p class="slot-desc">
      ${VISUAL_BANNERS[i].title}
      <span class="slot-sub-desc">${VISUAL_BANNERS[i].description}</span>
      </p>
      </div>
     `);
    div.classList.add('swiper-slide','slot');
    bannerSlot.appendChild(div);
  }
}

export function initSwiper(selectorName, options){
  return new Swiper(selectorName, options)
}