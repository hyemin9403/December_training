const musicContainer = document.getElementById("music-container");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const title = document.getElementById("title");
const cover = document.getElementById("cover");

// Song titles
const songs = [
  "Justin Bieber - Off My Face",
  "Katie Sky - Monsters",
  "The Kid LAROI - WITHOUT YOU",
];

const images = ["offmyface", "monsters", "withoutyou"];

// Keep track of song
let songIndex = 2;

// Initially load song details into DOM
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  // cover이미지는 랜덤으로 선택한다.
  let randomImage = images[Math.floor(Math.random() * images.length)];
  cover.src = `image/${randomImage}.jpeg`;
}

// Play Song
function playSong() {
  musicContainer.classList.add("play");
  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");

  audio.play();
}

// Pause Song
function pauseSong() {
  musicContainer.classList.remove("play");
  playBtn.querySelector("i.fas").classList.remove("fa-pause");
  playBtn.querySelector("i.fas").classList.add("fa-play");

  audio.pause();
}

// Previous song
function prevSong() {
  songIndex--;
  //첫번쨰 곡이면 array의 마지막으로 가라
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// next song
function nextSong() {
  songIndex++;
  // 마지막 곡이면 array의 첫번째로 가라
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Update progress bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

// Set progress bar
function setProgress(e) {
  //progress container(bar)의 길이 (총 236)
  const width = this.clientWidth;
  // 내가 클릭한 위치
  const clickX = e.offsetX;
  const duration = audio.duration;

  // 1분짜리 노래면 50% * 1분 = 0.5분(30초)
  audio.currentTime = (clickX / width) * duration;
}

// Event Listeners
playBtn.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play");

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// Change song
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);

// Time/Song update
audio.addEventListener("timeupdate", updateProgress);

// Click on progress bar
progressContainer.addEventListener("click", setProgress);

// Song Ends
audio.addEventListener("ended", nextSong);
