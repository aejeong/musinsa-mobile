// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"server/db.json":[function(require,module,exports) {
module.exports = {
  "visualBanners": [{
    "id": 1,
    "type": "showcase",
    "title": "쿠어 21 S/S <br /> 신상품 한정 발매",
    "description": "신상품 증정 이벤트",
    "imageUrl": "https://image.msscdn.net/musinsaUI/homework/banner/img1.jpg"
  }, {
    "id": 2,
    "type": "showcase",
    "title": "인사일런스 우먼 <br /> 프로젝트 성수",
    "description": "성수 티셔츠 선발매 및 21 S/S 최대 15% 할인",
    "imageUrl": "https://image.msscdn.net/musinsaUI/homework/banner/img2.jpg"
  }, {
    "id": 3,
    "type": "open",
    "title": "BOUTIQUE <br /> Grand Open",
    "description": "무신사가 선보이는 럭셔리 편집숍 오픈 기념 이벤트",
    "imageUrl": "https://image.msscdn.net/musinsaUI/homework/banner/img3.jpg"
  }],
  "tabs": [{
    "title": "랭킹",
    "subTabs": [["전체", "상의", "아우터", "바지", "가방", "신발", "스니커즈", "양말", "모자", "레그웨어"]],
    "productsBannersIndex": [true, true, true, true, false],
    "products": [[{
      "title": "예일",
      "price": "55,200원",
      "salePercent": "20%",
      "hasCoupon": true,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/goods/img1.jpg",
      "thumbnailPath": null
    }, {
      "title": "엠엠지엘",
      "price": "269,000원",
      "salePercent": "20%",
      "hasCoupon": false,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/goods/img2.jpg",
      "thumbnailPath": null
    }, {
      "title": "알파 인더스트리",
      "price": "209,300원",
      "salePercent": "20%",
      "hasCoupon": false,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/goods/img3.jpg",
      "thumbnailPath": null
    }, {
      "title": "커버낫",
      "price": "77,400원",
      "salePercent": "20%",
      "hasCoupon": true,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/goods/img4.jpg",
      "thumbnailPath": null
    }, {
      "title": "코치넬레",
      "price": "530,000원",
      "salePercent": null,
      "hasCoupon": true,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/goods/img5.jpg",
      "thumbnailPath": null
    }], [{
      "title": "예일",
      "price": "55,200원",
      "salePercent": "20%",
      "hasCoupon": true,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/goods/img1.jpg",
      "thumbnailPath": null
    }, {
      "title": "엠엠지엘",
      "price": "269,000원",
      "salePercent": "20%",
      "hasCoupon": false,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/goods/img2.jpg",
      "thumbnailPath": null
    }, {
      "title": "알파 인더스트리",
      "price": "209,300원",
      "salePercent": "20%",
      "hasCoupon": false,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/goods/img3.jpg",
      "thumbnailPath": null
    }, {
      "title": "커버낫",
      "price": "77,400원",
      "salePercent": "20%",
      "hasCoupon": true,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/goods/img4.jpg",
      "thumbnailPath": null
    }, {
      "title": "코치넬레",
      "price": "530,000원",
      "salePercent": null,
      "hasCoupon": true,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/goods/img5.jpg",
      "thumbnailPath": null
    }, {
      "title": "스톤아일랜드",
      "price": "548,000원",
      "salePercent": null,
      "hasCoupon": true,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/goods/img6.jpg",
      "thumbnailPath": null
    }, {
      "title": "토피",
      "price": "39,000원",
      "salePercent": "20%",
      "hasCoupon": false,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/goods/img7.jpg",
      "thumbnailPath": null
    }, {
      "title": "엄브로",
      "price": "149,000원",
      "salePercent": null,
      "hasCoupon": true,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/goods/img8.jpg",
      "thumbnailPath": null
    }, {
      "title": "스톤아일랜드",
      "price": "548,000원",
      "salePercent": null,
      "hasCoupon": true,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/goods/img6.jpg",
      "thumbnailPath": null
    }], [{
      "title": "예일",
      "price": "55,200원",
      "salePercent": "20%",
      "hasCoupon": true,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/goods/img1.jpg",
      "thumbnailPath": null
    }, {
      "title": "엠엠지엘",
      "price": "269,000원",
      "salePercent": "20%",
      "hasCoupon": false,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/goods/img2.jpg",
      "thumbnailPath": null
    }, {
      "title": "알파 인더스트리",
      "price": "209,300원",
      "salePercent": "20%",
      "hasCoupon": false,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/goods/img3.jpg",
      "thumbnailPath": null
    }, {
      "title": "커버낫",
      "price": "77,400원",
      "salePercent": "20%",
      "hasCoupon": true,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/goods/img4.jpg",
      "thumbnailPath": null
    }, {
      "title": "코치넬레",
      "price": "530,000원",
      "salePercent": null,
      "hasCoupon": true,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/goods/img5.jpg",
      "thumbnailPath": null
    }, {
      "title": "스톤아일랜드",
      "price": "548,000원",
      "salePercent": null,
      "hasCoupon": true,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/goods/img6.jpg",
      "thumbnailPath": null
    }, {
      "title": "토피",
      "price": "39,000원",
      "salePercent": "20%",
      "hasCoupon": false,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/goods/img7.jpg",
      "thumbnailPath": null
    }, {
      "title": "엄브로",
      "price": "149,000원",
      "salePercent": null,
      "hasCoupon": true,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/goods/img8.jpg",
      "thumbnailPath": null
    }, {
      "title": "스톤아일랜드",
      "price": "548,000원",
      "salePercent": null,
      "hasCoupon": true,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/goods/img6.jpg",
      "thumbnailPath": null
    }], [{
      "title": "예일",
      "price": "55,200원",
      "salePercent": "20%",
      "hasCoupon": true,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/goods/img1.jpg",
      "thumbnailPath": null
    }, {
      "title": "엠엠지엘",
      "price": "269,000원",
      "salePercent": "20%",
      "hasCoupon": false,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/goods/img2.jpg",
      "thumbnailPath": null
    }, {
      "title": "알파 인더스트리",
      "price": "209,300원",
      "salePercent": "20%",
      "hasCoupon": false,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/goods/img3.jpg",
      "thumbnailPath": null
    }, {
      "title": "커버낫",
      "price": "77,400원",
      "salePercent": "20%",
      "hasCoupon": true,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/goods/img4.jpg",
      "thumbnailPath": null
    }, {
      "title": "코치넬레",
      "price": "530,000원",
      "salePercent": null,
      "hasCoupon": true,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/goods/img5.jpg",
      "thumbnailPath": null
    }, {
      "title": "스톤아일랜드",
      "price": "548,000원",
      "salePercent": null,
      "hasCoupon": true,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/goods/img6.jpg",
      "thumbnailPath": null
    }, {
      "title": "토피",
      "price": "39,000원",
      "salePercent": "20%",
      "hasCoupon": false,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/goods/img7.jpg",
      "thumbnailPath": null
    }, {
      "title": "엄브로",
      "price": "149,000원",
      "salePercent": null,
      "hasCoupon": true,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/goods/img8.jpg",
      "thumbnailPath": null
    }, {
      "title": "스톤아일랜드",
      "price": "548,000원",
      "salePercent": null,
      "hasCoupon": true,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/goods/img6.jpg",
      "thumbnailPath": null
    }], [{
      "title": "예일",
      "price": "55,200원",
      "salePercent": "20%",
      "hasCoupon": true,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/goods/img1.jpg",
      "thumbnailPath": null
    }, {
      "title": "엠엠지엘",
      "price": "269,000원",
      "salePercent": "20%",
      "hasCoupon": false,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/goods/img2.jpg",
      "thumbnailPath": null
    }, {
      "title": "알파 인더스트리",
      "price": "209,300원",
      "salePercent": "20%",
      "hasCoupon": false,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/goods/img3.jpg",
      "thumbnailPath": null
    }, {
      "title": "커버낫",
      "price": "77,400원",
      "salePercent": "20%",
      "hasCoupon": true,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/goods/img4.jpg",
      "thumbnailPath": null
    }, {
      "title": "코치넬레",
      "price": "530,000원",
      "salePercent": null,
      "hasCoupon": true,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/goods/img5.jpg",
      "thumbnailPath": null
    }, {
      "title": "스톤아일랜드",
      "price": "548,000원",
      "salePercent": null,
      "hasCoupon": true,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/goods/img6.jpg",
      "thumbnailPath": null
    }, {
      "title": "토피",
      "price": "39,000원",
      "salePercent": "20%",
      "hasCoupon": false,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/goods/img7.jpg",
      "thumbnailPath": null
    }, {
      "title": "엄브로",
      "price": "149,000원",
      "salePercent": null,
      "hasCoupon": true,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/goods/img8.jpg",
      "thumbnailPath": null
    }, {
      "title": "스톤아일랜드",
      "price": "548,000원",
      "salePercent": null,
      "hasCoupon": true,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/goods/img6.jpg",
      "thumbnailPath": null
    }]],
    "banners": [{
      "desc": "손 피부를 보호해줄 핸드크림 추천 랭킹",
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/banner/sub1.jpg",
      "imgPosition": "left"
    }, {
      "desc": "<strong>아디다스 운동화 4,900원 <br/> <span>신규 회원 가입 이벤트 참여하기</span></strong>",
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/banner/sub3.png",
      "imgPosition": "right"
    }, {
      "desc": "마르지엘라 서머 페스티벌 컬렉션 <span class='date'>6.28 - 7.23</span>",
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/banner/sub2.jpg",
      "imgPosition": "left"
    }]
  }, {
    "title": "코디",
    "subTabs": [["무신사 스탠다드", "나이키", "247 서울", "비슬로우", "아크네", "tabText", "tabText", "tabText", "tabText", "tabText"], ["스포츠&아웃도어", "포멀&어반 캐주얼", "뷰티", "하이 패션", "tabText", "tabText", "tabText", "tabText", "tabText"], ["스포츠&아웃도어", "포멀&어반 캐주얼", "뷰티", "하이 패션", "tabText", "tabText", "tabText", "tabText", "tabText"]],
    "productsBannersIndex": [true, true, true],
    "products": [[{
      "title": "무신사 스탠다드",
      "price": "45,900원",
      "salePercent": "40%",
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/coordi/img1.jpg",
      "thumbnailPath": "https://image.msscdn.net/musinsaUI/homework/coordi/img1.jpg",
      "hasVideo": false
    }, {
      "title": "무신사 스탠다드",
      "price": "45,900원",
      "salePercent": "40%",
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/coordi/img2.jpg",
      "thumbnailPath": "https://image.msscdn.net/musinsaUI/homework/coordi/img2.jpg",
      "hasVideo": false
    }, {
      "title": "무신사 스탠다드",
      "price": "45,900원",
      "salePercent": "40%",
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/coordi/img3.jpg",
      "thumbnailPath": "https://image.msscdn.net/musinsaUI/homework/coordi/img3.jpg",
      "hasVideo": false
    }, {
      "title": "무신사 스탠다드",
      "price": "45,900원",
      "salePercent": "40%",
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/coordi/img4.jpg",
      "thumbnailPath": "https://image.msscdn.net/musinsaUI/homework/coordi/img4.jpg",
      "hasVideo": false
    }], [{
      "title": "",
      "price": "",
      "salePercent": null,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/coordi/img5.jpg",
      "thumbnailPath": null,
      "hasVideo": false
    }, {
      "title": "",
      "price": "",
      "salePercent": null,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/coordi/img6.jpg",
      "thumbnailPath": null,
      "hasVideo": true
    }, {
      "title": "",
      "price": "",
      "salePercent": null,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/coordi/img7.jpg",
      "thumbnailPath": null,
      "hasVideo": false
    }, {
      "title": "",
      "price": "",
      "salePercent": null,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/coordi/img8.jpg",
      "thumbnailPath": null,
      "hasVideo": true
    }, {
      "title": "",
      "price": "",
      "salePercent": null,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/coordi/img5.jpg",
      "thumbnailPath": null,
      "hasVideo": false
    }, {
      "title": "",
      "price": "",
      "salePercent": null,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/coordi/img1.jpg",
      "thumbnailPath": null,
      "hasVideo": true
    }, {
      "title": "",
      "price": "",
      "salePercent": null,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/coordi/img2.jpg",
      "thumbnailPath": null,
      "hasVideo": false
    }, {
      "title": "",
      "price": "",
      "salePercent": null,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/coordi/img3.jpg",
      "thumbnailPath": null,
      "hasVideo": true
    }], [{
      "title": "",
      "price": "",
      "salePercent": null,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/coordi/img5.jpg",
      "thumbnailPath": null,
      "hasVideo": false
    }, {
      "title": "",
      "price": "",
      "salePercent": null,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/coordi/img6.jpg",
      "thumbnailPath": null,
      "hasVideo": true
    }, {
      "title": "",
      "price": "",
      "salePercent": null,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/coordi/img7.jpg",
      "thumbnailPath": null,
      "hasVideo": false
    }, {
      "title": "",
      "price": "",
      "salePercent": null,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/coordi/img8.jpg",
      "thumbnailPath": null,
      "hasVideo": true
    }, {
      "title": "",
      "price": "",
      "salePercent": null,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/coordi/img5.jpg",
      "thumbnailPath": null,
      "hasVideo": false
    }, {
      "title": "",
      "price": "",
      "salePercent": null,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/coordi/img1.jpg",
      "thumbnailPath": null,
      "hasVideo": true
    }, {
      "title": "",
      "price": "",
      "salePercent": null,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/coordi/img2.jpg",
      "thumbnailPath": null,
      "hasVideo": false
    }, {
      "title": "",
      "price": "",
      "salePercent": null,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/coordi/img3.jpg",
      "thumbnailPath": null,
      "hasVideo": true
    }]],
    "banners": [{
      "desc": "<strong>아디다스 운동화 4,900원 <br/> <span>신규 회원 가입 이벤트 참여하기</span></strong>",
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/banner/sub2.jpg",
      "imgPosition": "right"
    }, {
      "desc": "손 피부를 보호해줄 핸드크림 추천 랭킹",
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/banner/sub1.jpg",
      "imgPosition": "left"
    }, {
      "desc": "마르지엘라 서머 페스티벌 컬렉션 <span class='date'>6.28 - 7.23</span>",
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/banner/sub3.png",
      "imgPosition": "left"
    }]
  }, {
    "title": "업데이트",
    "subTabs": [["MD추천", "재입고", "세일 소식", "인기 상품", "신상품", "이벤트", "입점"]],
    "productsBannersIndex": [false, true, false, false],
    "products": [{
      "title": "스웨트셔츠 & 슬랙스 신상품 발매",
      "subTitle": "마땡킴",
      "price": "",
      "salePercent": null,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/goods/img2.jpg",
      "thumbnailPath": null,
      "hasVideo": false,
      "comments": 133
    }, {
      "title": "이벳필드 협업 컬렉션 워셔블 니트 한정 발매",
      "subTitle": "니티드 외",
      "price": "",
      "salePercent": null,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/goods/img3.jpg",
      "thumbnailPath": null,
      "hasVideo": false,
      "comments": 133
    }, {
      "title": "스웨트셔츠 & 슬랙스 신상품 발매",
      "subTitle": "마땡킴",
      "price": "",
      "salePercent": null,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/goods/img4.jpg",
      "thumbnailPath": null,
      "hasVideo": false,
      "comments": 133
    }, {
      "title": "뉴 체리라인 스웨트셔츠 & 액세서리 신상품 선발매",
      "subTitle": "키르시",
      "price": "",
      "salePercent": null,
      "imgUrl": "https://image.msscdn.net/musinsaUI/homework/goods/img5.jpg",
      "thumbnailPath": null,
      "hasVideo": false,
      "comments": 133
    }]
  }]
};
},{}],"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/bundle-loader.js":[function(require,module,exports) {
var getBundleURL = require('./bundle-url').getBundleURL;

function loadBundlesLazy(bundles) {
  if (!Array.isArray(bundles)) {
    bundles = [bundles];
  }

  var id = bundles[bundles.length - 1];

  try {
    return Promise.resolve(require(id));
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return new LazyPromise(function (resolve, reject) {
        loadBundles(bundles.slice(0, -1)).then(function () {
          return require(id);
        }).then(resolve, reject);
      });
    }

    throw err;
  }
}

function loadBundles(bundles) {
  return Promise.all(bundles.map(loadBundle));
}

var bundleLoaders = {};

function registerBundleLoader(type, loader) {
  bundleLoaders[type] = loader;
}

module.exports = exports = loadBundlesLazy;
exports.load = loadBundles;
exports.register = registerBundleLoader;
var bundles = {};

function loadBundle(bundle) {
  var id;

  if (Array.isArray(bundle)) {
    id = bundle[1];
    bundle = bundle[0];
  }

  if (bundles[bundle]) {
    return bundles[bundle];
  }

  var type = (bundle.substring(bundle.lastIndexOf('.') + 1, bundle.length) || bundle).toLowerCase();
  var bundleLoader = bundleLoaders[type];

  if (bundleLoader) {
    return bundles[bundle] = bundleLoader(getBundleURL() + bundle).then(function (resolved) {
      if (resolved) {
        module.bundle.register(id, resolved);
      }

      return resolved;
    }).catch(function (e) {
      delete bundles[bundle];
      throw e;
    });
  }
}

function LazyPromise(executor) {
  this.executor = executor;
  this.promise = null;
}

LazyPromise.prototype.then = function (onSuccess, onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.then(onSuccess, onError);
};

LazyPromise.prototype.catch = function (onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.catch(onError);
};
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"js/main.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VISUAL_BANNERS = exports.TABS = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var baseDatas = require('../server/db.json');

var VISUAL_BANNERS = baseDatas.visualBanners;
exports.VISUAL_BANNERS = VISUAL_BANNERS;
var TABS = baseDatas.tabs;
exports.TABS = TABS;
init();

function init() {
  load();
}

function load() {
  return _load.apply(this, arguments);
}

function _load() {
  _load = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var swiper, tabs;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return require("_bundle_loader")(require.resolve('./swiper'));

          case 2:
            swiper = _context2.sent;
            _context2.next = 5;
            return require("_bundle_loader")(require.resolve('./tabs')).then( /*#__PURE__*/function () {
              var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(next) {
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return require("_bundle_loader")(require.resolve('./products'));

                      case 2:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x) {
                return _ref.apply(this, arguments);
              };
            }());

          case 5:
            tabs = _context2.sent;

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _load.apply(this, arguments);
}
},{"../server/db.json":"server/db.json","_bundle_loader":"node_modules/parcel-bundler/src/builtins/bundle-loader.js","./swiper":[["swiper.08bec4ff.js","js/swiper.js"],"swiper.08bec4ff.js.map","js/swiper.js"],"./tabs":[["tabs.ac0aca24.js","js/tabs.js"],"tabs.ac0aca24.js.map","js/tabs.js"],"./products":[["products.556f8683.js","js/products.js"],"products.556f8683.js.map","js/products.js"]}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58382" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}],"node_modules/parcel-bundler/src/builtins/loaders/browser/js-loader.js":[function(require,module,exports) {
module.exports = function loadJSBundle(bundle) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement('script');
    script.async = true;
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.src = bundle;

    script.onerror = function (e) {
      script.onerror = script.onload = null;
      reject(e);
    };

    script.onload = function () {
      script.onerror = script.onload = null;
      resolve();
    };

    document.getElementsByTagName('head')[0].appendChild(script);
  });
};
},{}],0:[function(require,module,exports) {
var b=require("node_modules/parcel-bundler/src/builtins/bundle-loader.js");b.register("js",require("node_modules/parcel-bundler/src/builtins/loaders/browser/js-loader.js"));
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js",0,"js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map