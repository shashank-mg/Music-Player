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
    } else if (this.playing === 0) {
      if (!this.getID) this.getID = this.loadTrack(this.path).play();
      else this.resumePlaying(this.getID);
      this.playing = 1;
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
    if (this.tracker < songs.length - 1) {
      this.tracker++;
      this.stopTheSong(this.getID);
      this.path = songs[this.tracker][0];
      this.artist = songs[this.tracker][1];
      this.playing = 0;
      this.getID = undefined;
      this.playTheSong();
    }
  };

  playThePrevSong = () => {
    if (this.tracker > 0) {
      this.tracker--;
      this.stopTheSong(this.getID);
      this.path = songs[this.tracker][0];
      this.artist = songs[this.tracker][1];
      this.playing = 0;
      this.getID = undefined;
      this.playTheSong();
    }
  };

  pauseTheSong = (id) => {
    this.tracksPlaying.pause();
    this.seek = this.tracksPlaying.seek(id);
  };
}

const media_player = new MediaPlayer();
