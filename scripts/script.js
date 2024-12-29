let $ = document;
let musics = $.querySelectorAll(".music");
let mainMusic = musics[0];
let songName = $.querySelector(".music_card__song_name");
let singerName = $.querySelector(".music_card__singer_name");
let buttonPrevious = $.querySelector(".button__previous");
let buttonPlay = $.querySelector(".button__play");
let buttonNext = $.querySelector(".button__next");
let passedTime = $.querySelector(".passed_time");
let allTime = $.querySelector(".all_time");
let cover = $.querySelector(".music_card__cover");
let pauseButton = $.querySelector(".button__pause--icon");
let playButton = $.querySelector(".button__play--icon");
let currentSongId = 0;
let allTimeMinute;
let allTimeSecond;
let passedTimeMinute;
let passedTimeSecond;
let pausePlayFlag = 1;
function initialization() {
  songName.innerHTML = mainMusic.dataset.song_name;
  singerName.innerHTML = mainMusic.dataset.singer_name;
  allTimeMinute = Math.floor(mainMusic.duration / 60);
  allTimeSecond = Math.floor(mainMusic.duration % 60);
  allTime.innerHTML = `${appendZero(allTimeMinute)} : ${appendZero(
    allTimeSecond
  )}`;
  cover.style.backgroundImage = `linear-gradient(to right bottom, #dedaf1, #6d649c), ${mainMusic.dataset.cover}`;
}

buttonPlay.addEventListener("click", () => {
  initialization();
  if (pausePlayFlag % 2) {
    mainMusic.play();
    playButton.style.display = "none";
    pauseButton.style.display = "initial";
  } else {
    playButton.style.display = "initial";
    pauseButton.style.display = "none";
    mainMusic.pause();
  }
  pausePlayFlag++;
  setInterval(() => {
    passedTimeMinute = Math.floor(mainMusic.currentTime / 60);
    passedTimeSecond = Math.floor(mainMusic.currentTime % 60);
    passedTime.innerHTML = `${appendZero(passedTimeMinute)} : ${appendZero(
      passedTimeSecond
    )}`;
  }, 1000);
});
buttonNext.addEventListener("click", function () {
  currentSongId++;
  playButton.style.display = "initial";
  pauseButton.style.display = "none";
  pausePlayFlag++;
  mainMusic.pause();
  mainMusic.currentTime = 0;
  if (currentSongId > 2) {
    currentSongId = 0;
  }
  mainMusic = musics[currentSongId];
  initialization();
});
buttonPrevious.addEventListener("click", function () {
  currentSongId--;
  playButton.style.display = "initial";
  pauseButton.style.display = "none";
  pausePlayFlag++;
  mainMusic.pause();
  mainMusic.currentTime = 0;
  if (currentSongId < 0) {
    currentSongId = 2;
  }
  mainMusic = musics[currentSongId];
  initialization();
});
function appendZero(number) {
  if (number < 10) {
    return `0${number}`;
  }
  return number;
}
