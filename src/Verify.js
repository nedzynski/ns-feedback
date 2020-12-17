import React from "react";
import Sound from "react-sound";
// import AudioFeedback from "./AudioFeedback";

class Verify extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playStatus: Sound.status.STOPPED
    };
  }

  componentDidMount() {
    soundManager.setup({debugMode: false});
  }

  verify() {
    this.setState({ playStatus: Sound.status.PLAYING });
  }
  render() {
    return (
      <button className="verify" onClick={() => this.verify()}>
        Verify
        <Sound
          url="https://freesound.org/data/previews/173/173000_2193194-lq.mp3"
          playStatus={this.state.playStatus}
          autoLoad={true}
        />
      </button>
    );
  }
}

export default Verify;
