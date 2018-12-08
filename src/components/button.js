import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    margin: 12,
    color: "white"
  };

class Button extends Component {
    
    render () {
         return <RaisedButton primary={true} style={style} onClick={() => {this.props.handleClick(this.props.label)} }>
             {this.props.label}
         </RaisedButton>
    }

}

export default Button;