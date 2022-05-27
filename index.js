const baseDatas = require('./db.json');

export const VISUAL_BANNERS = baseDatas.visualBanners;
export const TABS = baseDatas.tabs;

init();

function init(){
  load();
}

async function load(){
  const swiper = await import('./js/swiper');
  const tabs = await import('./js/tabs')
  .then(async(next) => {
    await import('./js/products');
  })
}