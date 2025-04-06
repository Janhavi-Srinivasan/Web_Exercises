import React, { Component } from "react";

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("Constructor: Component is initializing");
  }

  componentDidMount() {
    console.log("componentDidMount: Component mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate: State updated from", prevState.count, "to", this.state.count);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount: Component is being removed");
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div style={{ padding: "20px", border: "1px solid black", textAlign: "center" }}>
        <h2>Lifecycle Demo</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default LifecycleDemo;
