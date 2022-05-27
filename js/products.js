import { TABS } from '../index';
import { initSwiper } from './swiper';
import { currentMainTabIdx, currentSubIdx } from './tabs';

let subTabs = document.querySelectorAll('.sub-tabsWrapper');
let productsWithBanner = [];

init();

function init(){
  document.addEventListener('tabChanged', (e)=> {
    resetProducts();

  subTabs = document.querySelectorAll('.sub-tabsWrapper');
  settingProductsBanner();
  settingTabProducts();
  })

  settingProductsBanner();
  settingTabProducts();
}

function settingProductsBanner(){
  let crrenTab = TABS[currentMainTabIdx]
  crrenTab.productsBannersIndex.map((hasBanner, idx)=>{
    if(hasBanner){
       productsWithBanner.push({'products': crrenTab.products[idx], 'banners': crrenTab.banners})
    }else{
      productsWithBanner.push({'products': crrenTab.products[idx], 'banners': []})
    }
  })
}

function settingTabProducts(){
  switch (currentMainTabIdx) {
    case 0:
    renderRankingProducts();
    break;
    case 1:
    renderCodiProducts();
    break;
    case 2:
      renderUpdateProducts();
      break;
    default: renderRankingProducts();
      break;
  }
}

function renderRankingProducts(){
  let productsWrapper;

  for(let idx = productsWithBanner.length-1 ; idx >= 0; idx--) {
     // products length 만큼 부모 wrapper 생성
     productsWrapper = document.createElement('div');
     productsWrapper.classList.add('products-wrapper');

     // 해당 부모에 item 갯수만큼 item 요소 생성
     createItemBox(productsWithBanner[idx].products, productsWrapper);
      subTabs[0].insertAdjacentElement('afterend', productsWrapper)
      
      // products-wrapper에 들어간 item이 마지막 요소이면 banner 생성 
      isLastProductItem(productsWithBanner[idx],idx) &&
      createBannerBox(productsWithBanner[idx].banners, productsWrapper, idx);

      // 배너별 스와이퍼 인스턴스 생성
      initSwiper(`.swiper.banners-container.banner-${idx}`, {
      pagination: {
      slidesPerView: 1,
      el: `.swiper-pagination.banners-pagination.banner-${idx}`
    }
  })
  }
}

function renderCodiProducts(){
  let codiWrapper;
  let sub = currentSubIdx;

  for(let idx = 0 ; idx < productsWithBanner.length; idx++) {
     // products length 만큼 부모 wrapper 생성
     codiWrapper = document.createElement('div');
     codiWrapper.classList.add('products-wrapper','codi-wrapper');

     // 해당 부모에 item 갯수만큼 item 요소 생성
     createCodiItemBox(productsWithBanner[idx].products, codiWrapper);

       subTabs[sub].insertAdjacentElement('afterend', codiWrapper)
       sub++;
       
      // products-wrapper에 들어간 item이 마지막 요소이면 banner 생성 
      isLastProductItem(productsWithBanner[idx],idx) &&
      createBannerBox(productsWithBanner[idx].banners, codiWrapper, idx);

      // 배너별 스와이퍼 인스턴스 생성
      initSwiper(`.swiper.banners-container.banner-${idx}`, {
      pagination: {
      slidesPerView: 1,
      el: `.swiper-pagination.banners-pagination.banner-${idx}`
    }
  })
  }
}

function renderUpdateProducts(){
  let updateWrapper;
  let sub = currentSubIdx;
  // to be continue...
}

function isLastProductItem(item){
  let isLast;
  
  for(let i=0; i < item.products.length; i++){
  isLast = item.banners.length > 0 && item.products.length -1 === i;
  }
  return isLast;
}

function createBannerBox(item, element, idx){
  const bannerContainer = document.createElement('div');
  bannerContainer.classList.add('banners-container', 'swiper',`banner-${idx}`);

  const bannerHtml = () => {
    let slides = '';
    for(let i=0; i< item.length; i++){
    slides += 
      `<div class="swiper-slide ${item[i].imgPosition}">
      <img src=${item[i].imgUrl} alt="banner image"/>
      <p>${item[i].desc}</p>
      </div>`;
     }

     return slides;
  }

  bannerContainer.insertAdjacentHTML('afterbegin',
  `<div class="banner-wrapper swiper-wrapper">
   ${bannerHtml()}
   </div>
   <div class="swiper-pagination banners-pagination banner-${idx}"></div>
  `
  )
  return element.insertAdjacentElement('afterend',bannerContainer)
}

function createItemBox(item ,element){
  for(let idx=0; idx < item.length; idx ++){
    element.insertAdjacentHTML('beforeend', `<div class='item-box'>
    <img src=${item[idx].imgUrl} alt='item' />
    <p class='item-desc'>
      <span class='item-title'>${item[idx].title}</span>
      <span class='item-price'>
        <strong class='price'>${item[idx].price}</strong>
        <span class='has-coupon'>${item[idx].hasCoupon ? '쿠폰' : ''}</span>
        <span class='percent'>${item[idx].salePercent ? item[idx].salePercent : ''}</span>
      </span>
    </p>
    </div>`)
   }
}

function createCodiItemBox(item ,element){
  for(let idx=0; idx < item.length; idx ++){
    element.insertAdjacentHTML('beforeend', `<div class='item-box
     ${ item[idx].thumbnailPath && 'has-thumbnail'}
     ${ item[idx].hasVideo && 'has-video'}
     '>
    <img src=${item[idx].imgUrl} alt='item' />
    ${ item[idx].price && item[idx].title &&
    (`<p class='item-desc'>
    ${ item[idx].thumbnailPath ? `<img src=${item[idx].thumbnailPath} alt='thumbnail'/>` : ''}
      <span class='item-title'>${item[idx].title}</span>
        <span class='item-price'>
        <strong class='price'>${item[idx].price}</strong>
        <span class='has-coupon'>${item[idx].hasCoupon ? '쿠폰' : ''}</span>
        <span class='percent'>${item[idx].salePercent ? item[idx].salePercent : ''}</span>
      </span>
    </p>`)
      }
    </div>`)
   }
}

function resetProducts(){
  productsWithBanner = [];
  const wrappers = document.querySelectorAll('.products-wrapper');
  const banners = document.querySelectorAll('.banners-container');
  if(wrappers.length > 0){
    wrappers.forEach((ele,idx) => {
      ele.remove();
      })
  }

  if(banners.length >0){
    banners.forEach((ele,idx) => {
      ele.remove();
      })
  }
}