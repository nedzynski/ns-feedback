class AudioFeedback {
  constructor() {
    this.failureFeedbacks = [
      "https://freesound.org/data/previews/182/182271_84709-lq.mp3",
      "https://freesound.org/data/previews/33/33276_286533-lq.mp3",
      "https://freesound.org/data/previews/35/35679_35187-lq.mp3",
      "https://freesound.org/data/previews/382/382735_954919-lq.mp3",
      "https://freesound.org/data/previews/219/219456_71257-lq.mp3",
      "https://freesound.org/data/previews/476/476740_8074450-lq.mp3",
      "https://freesound.org/data/previews/266/266916_4657534-lq.mp3"
    ];
  }
  selectFeedback () {
    return this.failureFeedbacks[Math.floor(Math.random() * this.failureFeedbacks.length)]
  }
};

export default AudioFeedback;