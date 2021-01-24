const successSound =
  "https://drive.google.com/uc?id=1zcAlo31nPmOlS3Fu1BjbJRJwn1esg-1Z"; //"https://freesound.org/data/previews/173/173000_2193194-lq.mp3";

const standardSuccesses = [
  "https://freesound.org/data/previews/182/182271_84709-lq.mp3",
  "https://freesound.org/data/previews/33/33276_286533-lq.mp3",
  "https://freesound.org/data/previews/35/35679_35187-lq.mp3",
  "https://freesound.org/data/previews/382/382735_954919-lq.mp3",
  "https://freesound.org/data/previews/219/219456_71257-lq.mp3",
  "https://freesound.org/data/previews/476/476740_8074450-lq.mp3",
  "https://freesound.org/data/previews/266/266916_4657534-lq.mp3"
];
const gaps = [0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

class SuccessFeedback {
  constructor() {
    // this.feedbackArrays = [];
    this.successFeedbacks = standardSuccesses.concat([]);
    this.gapIndex = 0;
    this.gapCount = 0;
  }
  resetAvailableFeedbacks(feedbackArray) {
    // for (var i=0; i<this.feedbackArrays.length;i++)
    if (feedbackArray === this.successFeedbacks) {
      this.successFeedbacks = standardSuccesses.concat([]);
      return this.successFeedbacks;
    } else {
      console.warn("WARNING: resetting unspecified feedback array.");
    }
  }

  isVoiceFeedbackRequired() {
    /* Special feedback checking first */
    if (this.gapCount === gaps[this.gapIndex]) {
      this.gapIndex++;
      this.gapCount = 0;
      return true;
    } else {
      this.gapCount++;
      return false;
    }
  }

  getFeedbackSounds() {
    var res = [];
    res.push(successSound);
    if (this.isVoiceFeedbackRequired()) {
      res.push(
        this.pickRandomVoiceFeedback(this.successFeedbacks)
      );
    }
    return res;
  }
  
  pickRandomVoiceFeedback(feedbackArray) {
    if (feedbackArray.length === 0) {
      feedbackArray = this.resetAvailableFeedbacks(feedbackArray);
    }
    var f = feedbackArray.splice(
      Math.floor(Math.random() * feedbackArray.length),
      1
    )[0];
    console.debug("Such feedbacks left: " + feedbackArray.length);

    return f;
  }
}

export default SuccessFeedback;