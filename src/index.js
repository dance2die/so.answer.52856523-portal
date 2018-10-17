import React, { Component } from "react";
import ReactDOM from "react-dom";

class ValuePortal extends Component {
  constructor(props) {
    super(props);
    this.el = document.getElementById(props.elementID);
  }

  render() {
    return ReactDOM.createPortal(this.props.value, this.el);
  }
}

function App() {
  return (
    <div className="App">
      <ValuePortal elementID="value1" value="for value1" />
      <ValuePortal elementID="value2" value="for value2" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
