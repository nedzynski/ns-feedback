const successSound =
  "https://freesound.org/data/previews/173/173000_2193194-lq.mp3";
const failureSound =
  "https://freesound.org/data/previews/342/342756_5260872-lq.mp3";

const standardFailures = [
  "https://freesound.org/data/previews/182/182271_84709-lq.mp3",
  "https://freesound.org/data/previews/33/33276_286533-lq.mp3",
  "https://freesound.org/data/previews/35/35679_35187-lq.mp3",
  "https://freesound.org/data/previews/382/382735_954919-lq.mp3",
  "https://freesound.org/data/previews/219/219456_71257-lq.mp3",
  "https://freesound.org/data/previews/476/476740_8074450-lq.mp3",
  "https://freesound.org/data/previews/266/266916_4657534-lq.mp3"
];

class AudioFeedback {
  constructor() {
    this.playQueue = [];
    this.failureFeedbacks = standardFailures.concat([]);
    // this.resetAvailableFeedbacks(this.failureFeedbacks);
  }
  resetAvailableFeedbacks(feedbackArray) {
    if (feedbackArray === this.failureFeedbacks) {
      this.failureFeedbacks = standardFailures.concat([]);
    } else {
      console.log("WARNING");
    }
  }
  wipeFeedback() {
    this.playQueue = [];
  }
  queueFeedback(isSuccess) {
    if (isSuccess) {
      this.playQueue.push(successSound);
    } else {
      this.playQueue.push(failureSound);
      this.playQueue.push(
        this.failureFeedbacks.splice(
          Math.floor(Math.random() * this.failureFeedbacks.length),
          1
        )[0]
      );
      if (this.failureFeedbacks.length === 0) {
        this.resetAvailableFeedbacks(this.failureFeedbacks);
      }
      console.log("Failure feedbacks left: " + this.failureFeedbacks.length);
    }
  }
  selectFeedback() {
    return this.playQueue.shift();
  }
}

export default AudioFeedback;