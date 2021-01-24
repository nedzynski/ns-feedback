import FeedbackArray from "./FeedbackArray";

class SuccessFeedback {
  constructor() {
    // this.feedbackArrays = [];
    this.sound = "https://drive.google.com/uc?id=1zcAlo31nPmOlS3Fu1BjbJRJwn1esg-1Z"; //"https://freesound.org/data/previews/173/173000_2193194-lq.mp3";
    this.feedbacks = new FeedbackArray([
      "https://freesound.org/data/previews/182/182271_84709-lq.mp3",
      "https://freesound.org/data/previews/33/33276_286533-lq.mp3",
      "https://freesound.org/data/previews/35/35679_35187-lq.mp3",
      "https://freesound.org/data/previews/382/382735_954919-lq.mp3",
      "https://freesound.org/data/previews/219/219456_71257-lq.mp3",
      "https://freesound.org/data/previews/476/476740_8074450-lq.mp3",
      "https://freesound.org/data/previews/266/266916_4657534-lq.mp3"
    ]);
    this.gaps = [0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.gapIndex = 0;
    this.gapCount = 0;
  }

  isVoiceFeedbackRequired() {
    /* Special feedback checking first */
    if (this.gapCount === this.gaps[this.gapIndex]) {
      this.gapIndex++;
      this.gapCount = 0;
      return true;
    } else {
      this.gapCount++;
      return false;
    }
  }

  getSounds() {
    var res = [];
    res.push(this.sound);
    if (this.isVoiceFeedbackRequired()) {
      res.push(
        this.feedbacks.pickRandom(this.feedbacks)
      );
    }
    return res;
  }
}

export default SuccessFeedback;