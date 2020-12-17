import React from "react";
import "./styles.css";
import AudioFeedback from "./AudioFeedback";

export default function App() {
  return (
    <div className="App">
      <Result />
      <Verify />
      <AudioFeedback />
    </div>
  );
}

class Result extends React.Component {
  render() {
    return (
      <form>
        <input type="radio" name="result" id="success" value="1" />
        <label for="success">Success</label>
        <input type="radio" name="result" id="failure" value="0" />
        <label for="failure">Failure</label>
      </form>
    );
  }
}

class Verify extends React.Component {
  onClick(ev) {
    // AudioFeedback.play();
  }
  render() {
    return (
      <button className="verify" onClick={this.onClick}>
        Verify
      </button>
    );
  }
}
