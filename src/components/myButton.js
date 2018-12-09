import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class MyButton extends Component {
    
    render () {
         return (
            <MuiThemeProvider>
                <RaisedButton onClick={() => {this.props.handleClick(this.props.label)} }>
                    {this.props.label}
                </RaisedButton>
            </MuiThemeProvider>
         )
    }

}

export default MyButton;