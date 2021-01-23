class MediaPlayer {
  constructor() {
    this.tracker = 0;
    this.playing = 0;
    this.getId = 0;
    this.path = songs[this.tracker];
  }

  loadTrack = (path) => {
    if (~this.getID) {
      this.tracksPlaying = new Howl({
        src: [`./playlist/${this.path}`],
      });
      console.log(this.tracksPlaying);
      return this.tracksPlaying;
    } else {
      return this.tracksPlaying;
    }
  };

  playTheSong = () => {
    if (this.playing) {
      this.pauseTheSong(this.getID);
      this.playing = 0;
      console.log(this.getId);
    } else if (this.playing === 0) {
      if (~this.getID) {
        this.getID = this.loadTrack(this.path).play();
        console.log(this.getId);
      } else {
        console.log(this.getID);
        this.resumePlaying(this.getID);
      }
      this.playing = 1;
    }
  };

  resumePlaying = (id) => this.tracksPlaying.playing(id);

  stopTheSong = (id) => this.tracksPlaying.stop(id);

  playTheNextSong = () => {
    if (this.tracker < songs.length) {
      this.tracker++;
      this.stopTheSong(this.getID);
    }
    this.path = songs[this.tracker];
    this.playing = 0;
    this.getID = 0;
    this.playTheSong();
  };

  playThePrevSong = () => {
    if (this.tracker > 0) this.tracker--;
    this.songList.play();
  };

  pauseTheSong(id) {
    this.tracksPlaying.pause(id);
  }
}

const media_player = new MediaPlayer();
