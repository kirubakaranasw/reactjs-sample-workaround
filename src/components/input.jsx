import React, { Component } from 'react';

class Input extends Component {
    render() { 
        let {forwardedRef, ...otherProps} = this.props; 
        return <input {...otherProps} ref={forwardedRef} />;
    }
}
 
export default Input;