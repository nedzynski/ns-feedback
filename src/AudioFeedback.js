import SuccessFeedback from "./SuccessFeedback";

const failureSound =
  "https://drive.google.com/uc?id=1jq3MWFpScan58Nzp6Nj1v8Axjybq1LKt"; //"https://freesound.org/data/previews/342/342756_5260872-lq.mp3";

const standardFailures = ["", ""];

class AudioFeedback {
  constructor() {
    this.playQueue = [];
    this.successFeedback = new SuccessFeedback();
    this.failureFeedbacks = standardFailures.concat([]);
    // this.resetAvailableFeedbacks(this.failureFeedbacks);
  }
  resetAvailableFeedbacks(feedbackArray) {
    if (feedbackArray === this.failureFeedbacks) {
      this.failureFeedbacks = standardFailures.concat([]);
      return this.failureFeedbacks;
    } else {
      console.warn("WARNING: resetting unspecified feedback array.");
    }
  }
  queueFeedback(isSuccess) {
    if (isSuccess) {
      var sounds = this.successFeedback.getFeedbackSounds();
      for (let i = 0; i < sounds.length; i++) {
        this.playQueue.push(sounds[i]); 
      }
    } else {
      this.playQueue.push(failureSound);
    }
  }


  wipeFeedbackQueue() {
    this.playQueue = [];
  }
  getFeedback() {
    return this.playQueue.shift();
  }
}

export default AudioFeedback;
