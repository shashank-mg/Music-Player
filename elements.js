let songs = [
  ["Boyfriend.mp3", "Justin Bieber"],
  ["Catching-Feelings.mp3", "Justin Bieber"],
  ["Cold-Water.mp3", "Justin Bieber"],
  ["Forever.mp3", "Justin Bieber"],
  ["Freeze.mp3", "T Pain"],
  ["I-Would.mp3", "Justin Bieber"],
  ["Out-Of-Town-Girl.mp3", "Justin Bieber"],
  ["Take-You.mp3", "Justin Bieber"],
  ["What-Do-You-Mean.mp3", "Justin Bieber"],
  ["Yellow-Raincoat.mp3", "Justin Bieber"],
];

const play_pause = document.querySelector(".play");
const play_prev = document.querySelector(".prev");
const play_next = document.querySelector(".next");
const song_name = document.querySelector(".name");
const artist = document.querySelector(".artist");

play_pause.addEventListener("click", () => media_player.playTheSong());

play_prev.addEventListener("click", () => media_player.playThePrevSong());

play_next.addEventListener("click", () => media_player.playTheNextSong());

song_name.textContent = `Unknown`;
const displayName = (name, duration, artists) => {
  song_name.innerHTML = `
  <p>
  <br/>  
    Song: ${name.replace(".mp3", "").replace("-", " ")}
    <br/><br/>
    Duration: ${Math.ceil(duration / 60)}:00 min
  </p>`;

  artist.innerHTML = `
    <p>
      Artist: ${artists}
    </p>
  `;
};
