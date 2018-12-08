import React, { Component } from 'react';
import DatePicker from 'material-ui/DatePicker';

class Input extends Component {
    render () {
         return <DatePicker type={this.props.type} value={this.props.value} onChange={this.props.onChange}></DatePicker>
    }

}

export default Input;