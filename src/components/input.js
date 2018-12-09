import React, { Component } from 'react';
import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Input extends Component {
    render () {
         return <MuiThemeProvider><DatePicker style={this.props.style} name={this.props.name} type={this.props.type} value={this.props.value} onChange={this.props.onChange}></DatePicker></MuiThemeProvider>
    }

}

export default Input;