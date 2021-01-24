class FeedbackArray {
  constructor(template) {
    this.template = template;
    this.feedbacksAvailable = this.template.concat([]);
  }
  pickRandom() {
    var f = this.feedbacksAvailable
    if (f.length === 0) {
      f = this.template.concat([]);
    }
    var res = f.splice(
      Math.floor(Math.random() * f.length),
      1
    )[0];
    console.debug("Such feedbacks left: " + f.length);

    return res;
  }
}

export default FeedbackArray;