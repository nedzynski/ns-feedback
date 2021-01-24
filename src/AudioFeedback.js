import SuccessFeedback from "./SuccessFeedback";
import FailureFeedback from "./FailureFeedback";

class AudioFeedback {
  constructor() {
    this.playQueue = [];
    this.successFeedback = new SuccessFeedback();
    this.failureFeedback = new FailureFeedback();
  }
  
  queueFeedback(isSuccess) {
    var sounds = isSuccess ? this.successFeedback.getSounds() : this.failureFeedback.getSounds();
    for (let i = 0; i < sounds.length; i++) {
      this.playQueue.push(sounds[i]); 
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