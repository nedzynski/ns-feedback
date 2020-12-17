import React from "react";
import Sound from "react-sound";

class AudioFeedback extends React.Component {
  render() {
    return (
      function play() {
        this.playStatus = Sound.status.PLAYING;
      },
      (
        <Sound
          url="https://freesound.org/data/previews/173/173000_2193194-lq.mp3"
          playStatus={Sound.status.PLAYING}
          autoLoad={true}
          // position={this.state.position}
          // volume={this.volume}
          // playbackRate={this.playbackRate}
          // loop={this.loop}
          // onLoading={({ bytesLoaded, bytesTotal }) => console.log(`${bytesLoaded / bytesTotal * 100}% loaded`)}
          // onLoad={() => console.log('Loaded')}
          // onPlaying={({ position }) => this.setState({ position })}
          // onPause={() => console.log('Paused')}
          // onResume={() => console.log('Resumed')}
          // onStop={() => console.log('Stopped')}
          // onFinishedPlaying={() => this.setState({ playStatus: Sound.status.STOPPED })}
        />
      )
    );
  }
}
export default AudioFeedback;
