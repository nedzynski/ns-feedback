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

var lastVoiceFeedbackDate = new Date(0);
var voiceFeedbacksGiven = 0;

class AudioFeedback {
  constructor() {
    this.playQueue = [];
    this.failureFeedbacks = standardFailures.concat([]);
    // this.resetAvailableFeedbacks(this.failureFeedbacks);
  }
  resetAvailableFeedbacks(feedbackArray) {
    if (feedbackArray === this.failureFeedbacks) {
      this.failureFeedbacks = standardFailures.concat([]);
      return this.failureFeedbacks;
    } else {
      console.log("WARNING");
    }
  }
  wipeFeedbackQueue() {
    this.playQueue = [];
  }
  queueFeedback(isSuccess) {
    if (isSuccess) {
      this.playQueue.push(successSound);
    } else {
      this.playQueue.push(failureSound);
      var sinceLastVoiceFeedbackGiven = new Date() - lastVoiceFeedbackDate;
      if (voiceFeedbacksGiven < 3 || sinceLastVoiceFeedbackGiven > 4000) {
        this.playQueue.push(
          this.pickRandomVoiceFeedback(this.failureFeedbacks)
        );
      }
    }
  }
  pickRandomVoiceFeedback(feedbackArray) {
    if (feedbackArray.length === 0) {
      feedbackArray = this.resetAvailableFeedbacks(feedbackArray);
    }
    var f = feedbackArray.splice(
      Math.floor(Math.random() * feedbackArray.length),
      1
    )[0];
    console.log("Such feedbacks left: " + feedbackArray.length);

    lastVoiceFeedbackDate = new Date();
    voiceFeedbacksGiven++;
    return f;
  }
  getFeedback() {
    return this.playQueue.shift();
  }
}

export default AudioFeedback;
