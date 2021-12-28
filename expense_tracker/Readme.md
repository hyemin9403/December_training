<h1>Project : Expense Tracker</h1>

<h3>✅  구현하고자 하는 기능</h3>
    <ul>
        <li>검색, 랜던 검색 가능한 UI</li>  
        <li>reduce()로 잔액, 비용 및 수입 합계 표시</li>
        <li>map() callback function과 사용하기 </li>
        <li>local storage활용해서 데이터 저장 및 불러오기</li>
    </ul>
<br>
<h3>✅  What I Learned</h3>
<h4>Javascript</h4>
<ol>
    <li>append() vs appendChild()</li>
    - append: DOM string 넣을 수 있고, return값이 없다.<br>
    - appendChild: DOM string 넣을 수 없고, return값이 있다.<br>
    - 참고: https://webruden.tistory.com/634<br>
    <li>absolute value로 만들기</li>
    - Math.abs()를 사용해서 할 수 있다.
    <li>map() 메서드(callback function)</li>
    <li>reduce(callbackFn, initialValue)</li>
    - 초기값은 0으로 하고 acc(accumulator)에 현재값(item)을 하나씩 더해가면서 마지막 반환 값을 return.<br>
    - const total = amounts.reduce((acc, item) => (acc += item), 0)<br>
    - 참고: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce<br>
    <li>랜덤 아이디값 만들기</li>
    - Math.random에 100만 정도를 곱해서 쉽게 만들 수 있다.
    <li>아이디값 활용해서 삭제하기</li>
    - 필터를 활용해서 해당 아이디값을 제외하고 다시 어레이를 만들어준다.<br>
    - transactions = transactions.filter((transaction) => transaction.id !== id);<br>
    <li>localStorage</li>
    - getItem, setItem으로 값 저장하고 불러오기<br>
</ol>

================================================<br>

<h3>map() 메서드 callback function 추가</h3><br>
const dummyTransactions = [<br>
{ id: 1, text: "Flower", amount: -20 },<br>
{ id: 2, text: "Salary", amount: 300 },<br>
{ id: 3, text: "Book", amount: -10 },<br>
{ id: 4, text: "Camera", amount: 150 },<br>
];<br>
<br>
const amounts = transactions.map((transaction) => transaction.amount);<br>
<br>
const amounts = transactions.map(function(transaction) <br>
{return transaction.amount})<br>
<br>
console.log(amounts)<br>
[-20, 300, -10, 150]<br>
