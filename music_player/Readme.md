<h1>Project : Music Plyer</h1>

<h3>✅  구현하고자 하는 기능</h3>
    <ul>
        <li>회전하는 이미지와 노래 제목을 보여주는 음악플레이어 UI</li>  
        <li>audio태그를 이용해 재생 및 일시 중지 기능 추가</li>
        <li>노래 변경하기 </li>
        <li>노래 progress bar에 현재 위치 표시 및 클릭한 위치로 이동</li>
    </ul>
<br>
<h3>✅  What I Learned</h3>
<h4>HTML&CSS</h4>
<ol>
    <li>linear gradient()</li>
    - 예시: background: linear-gradient(0deg,rgba(247, 247, 247, 1) 23.8%)<br>
    - deg: 각도, rgba(빨,초,파,불투명도), 23.8% 지점에서 색을 변경 <br><br>
    <li>Width의 속성</li>
    - width: object-fit 종횡비를 유지하면서 채운다<br>
    - width:inherit 모의 속성 값을 상속받는다<br>
    - width: calc(100% - 40px); 계산을 할 수 있다<br>
    <br>
    - 참고(overfit): https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit<br>
    - 참고(inherit): https://goodmemory.tistory.com/29<br>
    - 참고(calc): https://developer.mozilla.org/en-US/docs/Web/CSS/calc()<br>
    <br>
    <li>animation: rotate</li>
    - animation-play-state로 running, paused 등 상태를 조절할 수 있다.<br>
    -keyframe으로 회전하는 걱도를 조절할 수 있다<br>
    <br>
    <li>css 선택자</li>
    - css selector를 더 잘 활용하기 위한 공부 진행
    - ::after는 각각의 내용 뒤에 입력한 내용을 추가한다.
    - 참고: https://www.w3schools.com/cssref/css_selectors.asp<br>
    - 참고: https://www.w3schools.com/cssref/sel_after.asp<br>
    <br>
    <li>translateY의 값이 -면 위로 움직임</li>
    - 참고: https://www.w3schools.com/cssref/playit.asp?filename=playcss_transform_translatey<br>
</ol>
<h4>Javascript</h4>
<ol>
    <li>this 문법</li>
    - JavaScript this 키워드는 속한 객체를 참조한다.<br>
    - person 안에서 person.firstName을 쓰면 뭔가 꼬이니 this로 쓰게 된 것이 아닌가 한다.<br>
    const person = {<br>
        firstName: "John",<br>
        lastName : "Doe",<br>
        id: 5566,<br>
        fullName: function() {<br>
        return this.firstName + " " + this.lastName;<br>
  }<br>
};<br>
<br>
    <li>audio의 eventListener</li><br>
    <li>array 활용하기</li>
    - 첫번째 곡이면 array의 마지막으로 가라<br>
    if (songIndex < 0) {<br>
    songIndex = songs.length - 1;<br>
    }<br>
    -마지막 곡이면 array의 첫번째로 가라<br>
    if (songIndex > songs.length - 1) {<br>
    songIndex = 0;<br>
    }
</ol>

<h4>내가 추가한 기능</h4>
- 앨범커머이미지가 랜덤으로 생성되도록 함<br>
<br>
<h4>추가할만한 기능</h4>
- 전체 곡 리스트 보여주기<br>
- 리스트의 곡 누르면 해당 곡 재생하기<br>
- 현재 플레이되고 있는 곡 표시하기<br>
