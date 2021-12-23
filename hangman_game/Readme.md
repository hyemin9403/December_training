<h1>Project : Hangman Game</h1>

<h3>✅  구현하고자 하는 기능</h3>
    <ul>
    <li>SVG를 사용SVG로 한땀한땀 행맨 그리기</li>
    <li>랜덤 단어 생성</li>
    <li>단어에 포함된 알파벳 화면에 표시하기</li>
    <li>단어에 포함안된 알파벳 따로 표시하기</li>
    <li>같은 문자를 두 번 입력하면 알림</li>
    <li>승패시 팝업 표시</li>
    <li>play again 버튼을 눌러 게임 초기화</li>
    </ul>
<br>
<h3>✅  What I Learned</h3>
<h4>HTML&CSS</h4>
<ol>
    <li>input type submit</li>

SVG: SVG는 Scalable Vector Graphics라는 뜻인데, 번역하자면 확장가능한 벡터 그래픽이다.
SVG 이미지는 마크업으로 쓰이므로 텍스트 에디터로 작성하고 또 작성된 이미지를 수정할 수도 있다.

- Display hangman pole and figure using SVG

CSS left속성은 부모 요소의 크기를 기반으로 합니다. transform속성은 타겟 요소의 크기에 기초

array
join("")

= == ===
= in JavaScript is used for assigning values to a variable.

== in JavaScript is used for comparing two variables, but it ignores the datatype of variable.

=== is used for comparing two variables, but this operator also checks datatype and compares two values.

window.addEventListener("keydown", (e) => {
console.log(e.keyCode);
});

keyCode 65에서 90사이면 a-z다.
if (e.keyCode >= 65 && e.keyCode <= 90) {
console.log(123);
}
});

forEach와 map
forEach를 쓰면 undefined가 된다.

splice()
remove elements in array

개선할 수 있는 점

- 영어만 입력할 수 있도록 하기

내가 추가한 것

- 대문자를 입력할 경우 소문자로 변환해서 입력하기
- showNotification에 message를 인자로 넣고,
  notification.innerText = `${message}`로 처리해서
  다양한 메시지를 보낼 수 있다.
