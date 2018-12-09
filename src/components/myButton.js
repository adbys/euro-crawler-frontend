import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton'

const style = {
    margin: 12,
    color: "rgb(51, 204, 204) !important"
  };

class MyButton extends Component {
    
    render () {
         return <RaisedButton style={style} onClick={() => {this.props.handleClick(this.props.label)} }>
             {this.props.label}
         </RaisedButton>
    }

}

export default MyButton;