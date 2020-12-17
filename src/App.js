import React from "react";
import "./styles.css";

import Verify from "./Verify";

export default function App() {
  return (
    <div className="App">
      <Result />
      <Verify />
    </div>
  );
}

class Result extends React.Component {
  render() {
    return (
      <form>
        <input type="radio" name="result" id="success" value="1" />
        <label htmlFor="success">Success</label>
        <input type="radio" name="result" id="failure" value="0" />
        <label htmlFor="failure">Failure</label>
      </form>
    );
  }
}