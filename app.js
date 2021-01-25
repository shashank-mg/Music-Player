class MediaPlayer {
  constructor() {
    this.tracker = 0;
    this.playing = 0;
    this.getId = false;
    this.seek = null;
    this.artist = songs[this.tracker][1];
    this.path = songs[this.tracker][0];
  }

  loadTrack = (path) => {
    if (~this.getID) {
      this.tracksPlaying = new Howl({
        src: [`./playlist/${path}`],
      });
      return this.tracksPlaying;
    } else {
      return this.tracksPlaying;
    }
  };

  changeIcon = () => {
    if (this.playing) playButton.src = "pause.png";
    else playButton.src = "https://img.icons8.com/android/24/000000/play.png";
  };

  playTheSong = () => {
    if (this.playing) {
      this.pauseTheSong(this.getID);
      this.playing = 0;
      this.changeIcon();
    } else if (this.playing === 0) {
      if (!this.getID) this.getID = this.loadTrack(this.path).play();
      else this.resumePlaying(this.getID);
      this.playing = 1;
      this.changeIcon();
    }
    let duration = this.tracksPlaying._sounds[0];
    displayName(this.path, duration._parent._duration, this.artist);
  };

  resumePlaying = (id) => {
    this.tracksPlaying.play(id);
    this.tracksPlaying.seek(this.seek, id);
  };

  stopTheSong = (id) => this.tracksPlaying.stop(id);

  playTheNextSong = () => {
    if (!this.playing) {
      if (this.tracker < songs.length - 1) {
        this.tracker++;
        this.path = songs[this.tracker][0];
        this.artist = songs[this.tracker][1];
        this.getID = false;
        this.playTheSong();
      }
    } else {
      if (this.tracker < songs.length - 1) {
        this.tracker++;
        this.stopTheSong(this.getID);
        this.path = songs[this.tracker][0];
        this.artist = songs[this.tracker][1];
        this.playing = 0;
        this.getID = false;
        this.playTheSong();
      }
    }
  };

  playThePrevSong = () => {
    if (!this.playing) {
      if (this.tracker > 0) {
        this.tracker--;
        this.path = songs[this.tracker][0];
        this.artist = songs[this.tracker][1];
        this.getID = false;
        this.playTheSong();
      }
    } else {
      if (this.tracker > 0) {
        this.tracker--;
        this.stopTheSong(this.getID);
        this.path = songs[this.tracker][0];
        this.artist = songs[this.tracker][1];
        this.playing = 0;
        this.getID = false;
        this.playTheSong();
      }
    }
  };

  pauseTheSong = (id) => {
    this.tracksPlaying.pause();
    this.seek = this.tracksPlaying.seek(id);
  };
}

const media_player = new MediaPlayer();
