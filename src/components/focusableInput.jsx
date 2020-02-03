import React, { Component } from "react";

class Input extends React.PureComponent {
  render() {
    let { forwardedRef, ...otherProps } = this.props;
    return <input {...otherProps} ref={forwardedRef} />;
  }
}

const TextInput = React.forwardRef((props, ref) => {
  return <Input {...props} forwardedRef={ref} />;
});

class FocusableInput extends Component {
  ref = React.createRef();

  render() {
    return <TextInput ref={this.ref} />;
  }

  // When the focused prop is changed from false to true,
  // and the input is not focused, it should receive focus.
  // If focused prop is true, the input should receive the focus.
  // Implement your solution below:
  componentDidUpdate(prevProps) {}

  componentDidMount() {
    // this.ref.current.focus();
    const { focused } = this.props;
    console.log(focused);
    if (focused) {
      console.log("if");
      this.ref.current.focus();
    } else {
      console.log("else");
      this.ref.current.blur();
    }
  }
}

export default FocusableInput;
