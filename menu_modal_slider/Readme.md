<h1>Project : Menu Modal Slider</h1>

<h3>✅  구현하고자 하는 기능</h3>
    <ul>
        <li>간단한 랜딩페이지 만들기</li>
        <li>버튼 클릭 시 메뉴 열기/닫기 기능 </li>
        <li>모달 열기/닫기 기능</li>
    </ul>
<br>
<h3>✅  What I Learned</h3>
<h4>HTML&CSS</h4>
<ol>
    <li>input type submit</li>
    - submit 유형의 input 요소는 버튼으로 렌더링됩니다. 클릭 이벤트가 발생하면 양식을 서버에 제출하려고 시도합니다.
    <br>
    <br>
    <li>transform 기능(+transition과 함께 쓴다)</li>
    - transform을 이용해서 먼저 숨겨놓고 클릭하면 nav의 width만큼 튀어나오게 활용할 수 있다.<br>
    - 예시) transform: translateX(-100%) > transform: translateX(200px); <br>
    - 예시) transition: transform 0.3s ease<br>
    - 참고: https://developer.mozilla.org/en-US/docs/Web/CSS/transform<br>
    <br>
    <li>rgba로 transparancy를 주기 위해 사용한다</li><br>
    <li>overflow: hidden으로 일정 범위 이상인 글씨는 보이지 않게하기.</li><br>
    <li>background vs background-color</li>
    - 백그라운드 칼라는 색상만 변경하고 백그라운드는 백그라운드 칼라와 더불어서 다양한 태그를 한 라인에 사용할 수 있다<br>
    - 예시) background: #ffffff url("img_tree.png") no-repeat right top;<br>
    <br>
    <li>animation: keyframe, opacity</li>
    - animation-name과 animation-duration을 지정해서 쓸 수 있다<br>
    - 참고: http://jjameson.mycpanel.princeton.edu/projects/2014/css-animations/presentation.html(opacity)<br>
    - 참고: https://www.w3schools.com/cssref/css3_pr_animation-keyframes.asp
</ol>
<h4>더 공부할 것</h4>
<ol>
    <li>css position relative 안에 absolute 를 쓰는 것</li>
    <li>event target</li>
</ol>
