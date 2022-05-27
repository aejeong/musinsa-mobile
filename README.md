# musinsa-mobile
 무신사 모바일 과제
### 실행

1. download sources

```
$ git clone https://github.com/aejeong/musinsa-mobile.git
```

2. install dependencies

```
$ npm install

```

3. 실행

```
$ npm run dev

```

## 고민됬던 부분들

Icon 이용시 어떤 방법으로 이용할것인가
  - Icon font vs SVG
SVG로 이용한다면 어떤 방식을 이용할것인가
 - Img , Background-image, Img, inline SVG, Object 
 
무신사에서는 SEO를 얼마나 고려하고 있을까..? 하는 생각이 들어 SVG 접근성에 대해 찾아보게 되었고,
object 태그로 svg에 대한 정보 기입과 좀 더 flexible한 이용이 가능할 것이라는 생각이 들어 object 태그로 사용하였다.
Icon Font도 색상과 크기 변경 등에 자유롭지만 과제에 이용하는 아이콘 수가 많지 않다는 점도 object태그로 icon을 사용하게 된 이유 중 하나이다.

h1~h6에 대한 고민..

상품에 대한 정보를 어떻게 담아 보여줄 것인가
처음엔 json-server(https://www.npmjs.com/package/json-server)로 마치 진짜 서버를 사용해서
데이터를 주고 받는 역할을 할 수 있게끔 구성했다가 작업도중 네트워크 에러 (Error: getaddrinfo ENOTFOUND 오류발생)
2시간 가량 이것저것 서치해보며 따라해보았지만 해결되지않아 그냥 json 파일을 이용하는 것으로 변경하였다. 😭

작업을 하고보니 데이터를 잘못 엮은 것같다.
데이터를 잘못 엮어서 map으로 다시 데이터를 엮어 새 Object에 담아 사용해야했고,
element를 주로 타겟하다보니 for문을 많이 사용하게 되었다.
그러다보니 대부분의 모둔 iteration문을 for문을 사용하고 있는 것을 발견
for로 돌리지 않아도 되는 것들도 모두 for로 돌리고 있었다.

나무가 아니라 숲을 보고 전체적으로 작업했다면 같은 작업을 반복하는 것같은 느낌이 덜 했을 것 같다.


