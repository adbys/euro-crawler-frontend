import React, { Component } from 'react';

class Label extends Component {
    render () {
         return (
        <div>
            <h3>
                {this.props.text}
            </h3>
        </div>
            )
    }

}

export default Label;