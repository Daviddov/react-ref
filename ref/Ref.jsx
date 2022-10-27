import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';

class Ref extends Component {
    constructor(props) {
        super(props);
    }

    input2 = React.createRef()

    createRef = element => {
        this.input = element
    }
    

    focusHendle = () => {
        console.log(this.input);
        this.input.focus()
        console.log(this.input1);
        console.log(this.input2.current);
    }

    render() {
        return (
            <div>
                <input placeholder='input1' type="text" ref={input => this.input1 = input} />
                <input placeholder='input2' type="text" ref={ this.rf} />
                <Input re={this.createRef} />
                <Button onClick={this.focusHendle} />

            </div>
        );
    }
}

export default Ref;