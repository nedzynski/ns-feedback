import React from "react";
import Sound from "react-sound";

import AudioFeedback from "./AudioFeedback";

class Verify extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attempts: 0,
      audioFeedbackSelector: new AudioFeedback(),
      url: "",
      playStatus: Sound.status.STOPPED
    };
  }

  componentDidMount() {
    soundManager.setup({ debugMode: false });
  }

  play() {
    this.setState({ playStatus: Sound.status.STOPPED });
    var feedbackPiece = this.state.audioFeedbackSelector.getFeedback();
    if (feedbackPiece) {
      this.setState({
        url: feedbackPiece,
        playStatus: Sound.status.PLAYING
      });
    }
  }

  verify() {
    console.log(this.props.result);
    var isSuccess = this.props.result === "success";
    this.state.audioFeedbackSelector.wipeFeedbackQueue();
    this.state.audioFeedbackSelector.queueFeedback(isSuccess);
    this.play();

    var attemptNo = this.state.attempts + 1;
    console.log("Attempt number: " + attemptNo);
    this.setState(() => ({
      attempts: attemptNo
    }));
  }
  render() {
    return (
      <button className="verify" onClick={() => this.verify()}>
        Verify
        <Sound
          url={this.state.url}
          playStatus={this.state.playStatus}
          autoLoad={true}
          onFinishedPlaying={() => this.play()}
        />
      </button>
    );
  }
}

export default Verify;
