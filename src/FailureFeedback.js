import FeedbackArray from "./FeedbackArray";

class FailureFeedback {
  constructor() {
    this.sound = "https://drive.google.com/uc?id=1jq3MWFpScan58Nzp6Nj1v8Axjybq1LKt"; //"https://freesound.org/data/previews/342/342756_5260872-lq.mp3";
    this.step1 = new FeedbackArray([
      "https://freesound.org/data/previews/182/182271_84709-lq.mp3",
      "https://freesound.org/data/previews/33/33276_286533-lq.mp3"
    ]);
    this.step2 = new FeedbackArray([
      "https://freesound.org/data/previews/35/35679_35187-lq.mp3",
      "https://freesound.org/data/previews/382/382735_954919-lq.mp3",
      "https://freesound.org/data/previews/219/219456_71257-lq.mp3"
    ]);
    this.step3 = new FeedbackArray([
      "https://freesound.org/data/previews/476/476740_8074450-lq.mp3",
      "https://freesound.org/data/previews/266/266916_4657534-lq.mp3"
    ]);
  }

  getSounds() {
    var res = [];
    res.push(this.sound);
    
    res.push(
      this.step1.pickRandom(),
      this.step2.pickRandom(),
      this.step3.pickRandom()
    );

    return res;
  }
}

export default FailureFeedback;