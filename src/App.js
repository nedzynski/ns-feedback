import React from "react";
import "./styles.css";

import Verify from "./Verify";

export default function App() {
  return (
    <div className="App">
      <Challenge />
    </div>
  );
}

class Challenge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "failure"
    };
  }
  handleChange=(e)=>{
    this.setState({
      result: e.target.value
    })
  }
  render() {
    return (
      <div>
        <input type="radio" name="result" value="success" id="success" onChange={this.handleChange}/>
        <label htmlFor="success">Success</label>
        <input type="radio" name="result" value="failure" id="failure" onChange={this.handleChange} defaultChecked />
        <label htmlFor="failure">Failure</label>
        <Verify result={this.state.result} />
      </div>
    );
  }
}