// DOM
const wordEl = document.getElementById("word");
const wrongLettersEl = document.getElementById("wrong-letters");
const playAgainBtn = document.getElementById("play-again");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");

const figureParts = document.querySelectorAll(".figure-part");

const words = ["christmas", "programming", "santa", "rudolf", "grinch"];

let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = [];
const wrongLetters = [];

// Show hidden world
function displayWord() {
  wordEl.innerHTML = `
  ${selectedWord
    .split("") //한 글자씩 쪼개기
    .map(
      // looping하고 있는 current letter가 correctLetters안에 포함되어있는지
      (letter) => `
        <span class="letter"> 
        ${correctLetters.includes(letter) ? letter : ""}
        </span>`
    )
    .join("")}`;

  // innerWord에 입력된 단어를 집어넣음, regex로 엔터를 ""로 바꿔서 글자가 붙여서 나오게 함
  const innerWord = wordEl.innerText.replace(/\n/g, "");

  if (innerWord === selectedWord) {
    finalMessage.innerHTML =
      "Congratulations! </br>🎅🏽 You won! 🎄 </br> Merry Christmas";
    popup.style.display = "flex";
  }
}

// Update the wrong letters
function updateWrongLettersEl() {
  // Display wrong letters
  wrongLettersEl.innerHTML = `
    ${wrongLetters.length > 0 ? "<p>Wrong</p>" : ""}
    ${wrongLetters.map((letter) => `<span>${letter}</span>`)}
    `;

  // Display parts
  figureParts.forEach((part, index) => {
    const errors = wrongLetters.length;
    // figure part하나씩 돌아가면서 display block으로 만듬.
    // 모든 파트에 대해 루프 돌기 때문에 다른건 display none으로 해줘야함(안해줘도 상관은 없는듯?)
    if (index < errors) {
      part.style.display = "block";
      //   console.log(part);
    } else {
      part.style.display = "none";
    }
  });

  // Check if lost
  if (wrongLetters.length === figureParts.length) {
    finalMessage.innerText = "Unfortunately you lost. 😣";
    popup.style.display = "flex";
  }
}

// Show notification
function showNotification(message) {
  notification.innerText = `${message}`;
  notification.classList.add("show");

  setTimeout(() => {
    notification.classList.remove("show");
  }, 2000);
}

// Keydown letter press
window.addEventListener("keydown", (e) => {
  //console.log(e.keyCode);
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    const letter = e.key.toLowerCase();
    // 만약 선택된 단어가 입력한 알파벳을 포함하고 있다면,correctLetter arr에 없으면 push로 추가하고 displayWorld함수를 실행해서 화면에서 보여줘라.
    // 여러번 같은 키를 입력했다면 Notification을 보여줘라
    if (selectedWord.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        correctLetters.push(letter);

        displayWord();
      } else {
        showNotification("You have already entered this letter");
      }
      //   선택된 단어가 입력한 알파벳을 포함하고 있지 않다면 wrongLetters arr에 추가하고 화면에서 보여줘라.
    } else {
      if (!wrongLetters.includes(letter)) {
        wrongLetters.push(letter);

        updateWrongLettersEl();
      } else {
        showNotification("You have already entered this letter");
      }
    }
  }
});

// Restart game and play again
playAgainBtn.addEventListener("click", () => {
  //Empty arrays
  correctLetters.splice(0);
  wrongLetters.splice(0);

  // 새로운 단어를 선택하기
  selectedWord = words[Math.floor(Math.random() * words.length)];

  //displayWord에서 map으로 루핑하면서 밑줄 만들기
  displayWord();

  // Wrong 부분 없어주기
  updateWrongLettersEl();

  //팝업 없애기
  popup.style.display = "none";
});

displayWord();
