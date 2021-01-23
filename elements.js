let songs = [
  "Boyfriend.mp3",
  "Catching-Feelings.mp3",
  "Cold-Water.mp3",
  "Forever.mp3",
  "Freeze.mp3",
  "I-Would.mp3",
  "Out-Of-Town-Girl.mp3",
  "Take-You.mp3",
  "What-Do-You-Mean.mp3",
  "Yellow-Raincoat.mp3",
];

const play_pause = document.querySelector(".play");
const play_prev = document.querySelector(".prev");
const play_next = document.querySelector(".next");

play_pause.addEventListener("click", () => media_player.playTheSong());

play_prev.addEventListener("click", () => {});

play_next.addEventListener("click", () => media_player.playTheNextSong());
