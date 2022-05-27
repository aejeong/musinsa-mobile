import { TABS } from '../index';

const tabsWrapper = document.querySelector('.main-tabs'); 
const productsContainer = document.querySelector('.products-container');
const filterContainer = document.querySelector('.filter-container');

export let currentMainTabIdx = 0;
export let currentSubIdx = 0;
export let currentSubItemIdx = 0;

let event = new Event('tabChanged');

init();

function init(){
  settingTabs();
  settingSubTabs(currentMainTabIdx);
  tabEvent();
  subTabEvent();
}

function settingTabs(){
  for(let mainIdx =0; mainIdx < TABS.length; mainIdx++){
    tabsWrapper.insertAdjacentHTML('beforeend',`
    <div class="tab-item"><button type="button" class="btn-tab ${currentMainTabIdx === mainIdx && 'active' }">${TABS[mainIdx].title}</button></div>
    `)
  }
}

function settingSubTabs(_currentIdx){
  const targetTab = TABS[_currentIdx].subTabs;

  if(_currentIdx !== currentMainTabIdx || !targetTab.length) return;

  for(let subIdx=0; subIdx < targetTab.length; subIdx++){
    const subTabsWrapper = document.createElement('div');
    subTabsWrapper.classList.add('sub-tabsWrapper');
    for(let idx=0; idx < targetTab[subIdx].length; idx++){
      subTabsWrapper.insertAdjacentHTML('beforeend',`
      <div class="tab-item ${currentSubItemIdx === idx && 'active'}"><button type="button" class="btn-tab btn-subTab">${targetTab[subIdx][idx]}</button></div>
      `)
    }
    productsContainer.insertAdjacentElement('beforeend',subTabsWrapper);
  }
}

function removeSubTabs(){
  const subTabs = document.querySelectorAll('.sub-tabsWrapper');
  
  subTabs.forEach((ele,idx)=>{
    ele.remove();
  })
}

function updateTabs(tabElement, idx){
  const isActivatedMainItem = document.querySelector('.main-tabs .btn-tab.active');

  // default active 제거
  isActivatedMainItem.classList.remove('active');
  filterContainer.classList.remove('active');
  removeSubTabs();

  currentSubItemIdx = 0;

  // target main tab 활성화
  tabElement.children[0].classList.add('active');
  settingSubTabs(idx);
  
  document.dispatchEvent(event);

  if(idx === 0){
    filterContainer.classList.add('active');
  }
}

function updateSubTabs(subElement, idx){
  const isActivatedSubItem = document.querySelector('.sub-tabsWrapper .tab-item.active');

  // active된 subTabs 비활성화
  isActivatedSubItem.classList.remove('active');

  // target된 subTab 활성화
  subElement.classList.add('active');
}

  function tabEvent(){

 for(let i=0; i < tabsWrapper.children.length; i++){
   tabsWrapper.children[i].onclick = (e) =>{
    _tabHandler(e, tabsWrapper.children[i], i);
  }
 }
}

function subTabEvent(){
  const subTabsWrapper = [...document.querySelectorAll('.sub-tabsWrapper')];

  for(let subIdx=0; subIdx < subTabsWrapper.length; subIdx++){
    for(let itemIdx=0; itemIdx < subTabsWrapper[subIdx].children.length; itemIdx++){
      subTabsWrapper[subIdx].children[itemIdx].onclick = (e)=> {
        _subTabHandler(e, subTabsWrapper[subIdx].children[itemIdx],subIdx, itemIdx);
      }
    }
  }
}

function _tabHandler(e, tabElement, idx){
  if(!e.target || currentMainTabIdx === idx) return;

  currentMainTabIdx = idx;
  updateTabs(tabElement, currentMainTabIdx);
}

function _subTabHandler(e, subItemElement, subIdx, itemdx){
  if(!e.target || currentSubItemIdx === itemdx) return;

  currentSubIdx = subIdx;
  currentSubItemIdx = itemdx;
  updateSubTabs(subItemElement, currentSubItemIdx);
  _subTabScrollUpdate(e, subItemElement)
}

function _subTabScrollUpdate(e, subItemElement){
  console.dir(subItemElement.parentElement);
  
  const moveToX = e.target.offsetLeft;
  if(e.target.offsetLeft >= 16 ) return subItemElement.parentElement.scrollTo(moveToX - 16,0);
}