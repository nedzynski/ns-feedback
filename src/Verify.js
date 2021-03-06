import React from "react";
import Sound from "react-sound";

import AudioFeedback from "./AudioFeedback";

class Verify extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      audioFeedback: new AudioFeedback(),
      url: "",
      playStatus: Sound.status.STOPPED,
      // attempts: 0,
    };
  }

  componentDidMount() {
    soundManager.setup({ debugMode: false });
  }

  play() {
    this.setState({ playStatus: Sound.status.STOPPED });
    var feedbackPiece = this.state.audioFeedback.getFeedback();
    if (feedbackPiece) {
      this.setState({
        url: feedbackPiece,
        playStatus: Sound.status.PLAYING
      });
    }
  }

  verify() {
    console.debug("Verification result: " + this.props.result);
    var isSuccess = this.props.result === "success";
    this.state.audioFeedback.wipeFeedbackQueue();
    this.state.audioFeedback.queueFeedback(isSuccess);
    this.play();

    // var attemptNo = this.state.attempts + 1;
    // console.debug("Attempt number: " + attemptNo);
    // this.setState(() => ({
    //   attempts: attemptNo
    // }));
  }
  render() {
    return (
      <button onClick={() => this.verify()}>
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
