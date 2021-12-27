<h1>Project : DOM Array Methods</h1>

<h3>✅  구현하고자 하는 기능</h3>
    <ul>
        <li>검색, 랜던 검색 가능한 UI</li>  
        <li>API로 조건에 맞는 음식 가져오기</li>
        <li>hover와 opacity활용해서 이미지 위에 이름 표시</li>
        <li>이미지 클릭시 상세 정보 불러오기</li>
    </ul>
<br>
<h3>✅  What I Learned</h3>
<h4>HTML&CSS</h4>
<ol>
    <li>grid</li>
    - 웹페이지를 쉽게 디자인 할 수 있는 방법 중 하나
    <li>opacity</li>
    - 투명도를 설정. 0일경우 완전투명(안보임), 1일경우 완전히 보임
</ol>
<h4>Javascript</h4>
<ol>
    <li>(Falsy)If문 without operator</li>
    - Falsy : 거짓으로 간주되는 값
    - 왜 이런식으로 쓸까 했는데, 괄호 안의 표현식이 false, null, 0, "" 또는 undefined가 아닌 다른 것을 반환하는 한 if 문의 블록이 실행되기 때문
    - 예시 : if (term.trim()), if (item.classList)
    참고: https://stackoverflow.com/questions/3494614/javascript-if-statement-condition-with-no-operator-what-does-it-do
    참고: https://developer.mozilla.org/en-US/docs/Glossary/Falsy
    <li>find 메서드</li>
    -

mealsEl.addEventListener("click", (e) => {
const mealInfo = e.path.find(item => console.log(item));
});

해당 item을 클릭할때까지의 html path를 document부터 써준다.

find()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

contains와 getAttribute의 차이

api를 갖고 작업할때는 console.log로 계속 찍어보고
api 예시를 하나 켜놓고 작업하는 게 좋다.
