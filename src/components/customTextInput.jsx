import React, { Component } from "react";

class CustomTextInput extends Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
    this.state = {
      focusFlag: 0
    };
  }

  focusTextInput = () => {
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    if (this.state.focusFlag === 0 || this.state.focusFlag === 2) {
      this.textInput.current.focus();
    } else this.textInput.current.blur();
    this.setState({ focusFlag: this.state.focusFlag + 1 });
  };

  render() {
    // tell React that we want to associate the <input> ref
    // with the `textInput` that we created in the constructor
    return (
      <div>
        <input type="text" ref={this.textInput} />

        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}

export default CustomTextInput;
