import React, { Component } from 'react';
import Label from './label';
import Input from './input';

class DateField extends Component {
    render () {
         return (
            <div>
                <Label text={this.props.text}/>
                <Input value={this.props.value} onChange={this.props.onChange}/>
            </div>
        );
    }

}

export default DateField;