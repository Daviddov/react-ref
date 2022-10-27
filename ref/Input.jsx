import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
    }
   
    render() { 
        return  <input ref={this.props.re}  type="text" /> ;
    }
}
 
export default Input;