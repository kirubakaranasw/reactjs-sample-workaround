import React, { Component } from "react";

// console.log(doubled);
class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      isToggleOn: false,
      showBlock: true,
      inputName: "",
      inputDesc: "Write few words about you!"
    };
  }
  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(),
      this.props.interval ? this.props.interval * 1000 : 1000
    );
  }
  componentWillMount() {
    clearInterval(this.timerId);
  }
  tick() {
    this.setState({ date: new Date() });
  }
  handleClick(e) {
    e.preventDefault();
    console.log("Link clicked");
  }
  //   handleButtonClick = () => {
  //     this.setState({ isToggleOn: !this.state.isToggleOn });
  //   };
  handleButtonClick = () => {
    this.setState({
      isToggleOn: !this.state.isToggleOn,
      showBlock: !this.state.showBlock
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.inputName);
  };
  handleInputChange = e => {
    this.setState({ inputName: e.target.value.toUpperCase() });
  };
  handleInputDescChange = e => {
    this.setState({ inputDesc: e.target.value });
  };
  render() {
    const numbers = [1, 2, 3, 4, 5];

    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <a href="#" onClick={this.handleClick}>
          Click me!
        </a>
        <ShowClick showBlock={this.state.showBlock} />
        <button onClick={this.handleButtonClick}>
          {this.state.isToggleOn ? "On" : "Off"}
        </button>
        <ul className="hahaha">
          {numbers.map((num, index) => (
            <li key={index}>{num * 2}</li>
          ))}
        </ul>

        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input
            value={this.state.inputName}
            onChange={this.handleInputChange}
          />
          <label>Description</label>
          <textarea
            value={this.state.inputDesc}
            onChange={this.handleInputDescChange}
          />
          <button>Submit</button>
        </form>

        {/* <input value="hi" /> */}
      </div>
    );
  }
}

function ShowClick(props) {
  if (!props.showBlock) return null;
  return <div>Warning Block</div>;
}

export default Clock;
