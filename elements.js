let songs = [
  ["Cozy-Sofa.mp3", "Ilomilo"],
  ["Goodnight-Fire-Flies.mp3", "Ilomilo"],
  ["Me-and-My-Paper-Plane.mp3", "Ilomilo"],
  ["Music-School.mp3", "Ilomilo"],
  ["Once-Upon.mp3", "Ilomilo"],
  ["RedGreen-and-Blue-Doodles.mp3", "Ilomilo"],
  ["Shuffle-Theme.mp3", "Ilomilo"],
  ["Theme-of-Ilomilo.mp3", "Ilomilo"],
  ["Twinkly-Ladybugs.mp3", "Ilomilo"],
];

const play_pause = document.querySelector(".play");
const play_prev = document.querySelector(".prev");
const play_next = document.querySelector(".next");
const song_name = document.querySelector(".name");
const artist = document.querySelector(".artist");
const playButton = document.querySelector(".play-icon");
const atBeginning = `
  <p>
  <br/>  
    Song: ${songs[0][0].replace(".mp3", "").replace(/-/g, " ")}
    <br/><br/>
  </p>`;

play_pause.addEventListener("click", () => media_player.playTheSong());
play_prev.addEventListener("click", () => media_player.playThePrevSong());
play_next.addEventListener("click", () => media_player.playTheNextSong());
song_name.innerHTML = atBeginning;
artist.innerHTML = `
    <p>
      Artist: ${songs[0][1]}
    </p>
  `;

const displayName = (name, duration, artists) => {
  song_name.innerHTML = `
  <p>
  <br/>  
    Song: ${name.replace(".mp3", "").replace(/-/g, " ")}
    <br/><br/>
    
  </p>`;

  artist.innerHTML = `
    <p>
      Artist: ${artists}
    </p>
  `;
};

// Duration: ${Math.ceil(duration / 60)}:00 min
