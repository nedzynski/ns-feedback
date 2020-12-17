import React, { isValidElement } from "react";
import Sound from "react-sound";

import AudioFeedback from "./AudioFeedback";

class Verify extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      audioFeedbackSelector: new AudioFeedback(),
      url: "",
      playStatus: Sound.status.STOPPED
    };
  }

  componentDidMount() {
    soundManager.setup({ debugMode: false });
  }

  play() {
    var feedbackPiece = this.state.audioFeedbackSelector.selectFeedback();
    if (feedbackPiece) {
      this.setState({ 
        url: feedbackPiece,
        playStatus: Sound.status.PLAYING 
      });  
    } else {
      this.setState({ playStatus: Sound.status.STOPPED })
    }
  }
  
  verify() {
    console.log(this.props.result);
    var isSuccess = this.props.result === "success";
    this.state.audioFeedbackSelector.wipeFeedback();
    this.state.audioFeedbackSelector.queueFeedback(isSuccess);
    this.play();
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
