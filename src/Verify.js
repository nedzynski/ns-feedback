import React from "react";
import Sound from "react-sound";

const successSound = "https://freesound.org/data/previews/173/173000_2193194-lq.mp3";
const failureSound = "https://freesound.org/data/previews/342/342756_5260872-lq.mp3"

class Verify extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: failureSound,
      playStatus: Sound.status.STOPPED
    };
  }

  componentDidMount() {
    soundManager.setup({ debugMode: false });
  }

  verify() {
    console.log(this.props.result);
    this.setState({ 
      url: this.props.result === "success" ? successSound : failureSound,
      playStatus: Sound.status.PLAYING 
    });
  }
  render() {
    return (
      <button className="verify" onClick={() => this.verify()}>
        Verify
        <Sound
          url={this.state.url}
          playStatus={this.state.playStatus}
          autoLoad={true}
          onFinishedPlaying={() => this.setState({ playStatus: Sound.status.STOPPED })}
        />
      </button>
    );
  }
}

export default Verify;
