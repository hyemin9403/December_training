<h1>Project : Movie Seat Booking</h1>

<h3>✅  구현하고자 하는 기능</h3>
    <ul>
        <li>영화와 좌석을 고르고 가격을 확인한다</li>
        <li>영화와 좌석 선택지를 기억하고 불러올 수 있다.</li>
    </ul>
<br>
<h3>✅  What I Learned</h3>
<br>
<h4>HTML&CSS</h4>
<ol>
    <li>apperance: 네이티브(=OS/브라우저 자체 테마) 요소 디자인 해제/변경</li>
- 크로스브라우징(=모든 브라우저에 동일한 화면 구현)에 유용<br>
  예시:
  select {<br>
  -moz-appearance: none;<br>
  -webkit-appearance: none;<br>
  appearance: none;<br>
  }<br>

참고: https://homzzang.com/b/css-247

<li>pseudo class</li>
selector:pseudo-class {<br>
  property: value;<br>
}<br>
<br>
selector(선택자): 꾸미고자 하는 컨텐츠를 선택할 때 쓰인다. id, class, type, attribute 등이 있다.<br>
<br>
pseudo class: selector에 추가하는 키워드로 선택한 요소가 특별한 상태여야 만족할 수 있다.

예시: :hover, :visited, :active

참고: https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes

</ol>
<h4>Javascrpit</h4>

<ol>
    <li>string을 number로 바꾸는 방법</li>
const ticketPrice = parseInt.movieSelect.value;<br>
const ticketPrice = +movieSelect.value;<br>
<br>
<li>node list vs array</li>
  - NodeList는 JavaScript API가 아닌 browser가 제공하는 API<br>
  - NodeLists는 DOM 요소에 액세스하는 언어(JS와 같은..)에 구애받지 않는 방법이며 Arrays는 요소의 Collection으로 사용하는 JavaScript 객체이다.<br>
  - NodeList와 Array각각 고유한 속성과 메서드가 있고, 필요한 경우에 NodeList를 Array로 변환할 수 있다.<br>
  <br>
<li>spread array: arr의 내부의 값을 가져와서 사용할 수 있다</li>
예시: <br>
const arr = [1,2,3]<br>
const arr2 = [...arr,4,5]<br>
<br>
console.log(arr2) = Array [1,2,3,4,5]<br>
<br>
<li>forEach vs map</li>
const arr = [1,2,3]<br>
const arr2 = [...arr,4,5]<br>
<br>
forEach의 경우<br>
<br>
arr2.forEach(function(item) {<br>
console.log(item+'Hello')<br>
})<br>
<br>
결과값 : "1Hello" "2Hello" ...<br>
<br>
map의 경우<br>
결과값을 array로 반환하며 return을 사용해야 한다.<br>
<br>
const arr3 = arr2.map(function(item) {<br>
return item \* 2;<br>
})<br>
<br>
console.log(arr3)<br>
<br>
결과값: Array [2,4,6,8,10]
<br>
<br>
<li>indexOf</li><br>

const arr2 = [1,2,3,4,5]<br>

console.log(arr2.indexOf(3))<br>
<br>
결과값: 2<br>
<br>
index는 0에서 시작하니까 위 arr2에서 1의 index는 0<br>
indexOf(1) = 0 = arr2[0], indexOf(2) = 1, indexOf(3) = 2...<br>

array에 없는 값을 검색할 경우 -1을 반환
