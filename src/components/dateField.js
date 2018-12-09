import React, { Component } from 'react';
import Label from './label';
import Input from './input';
import Grid from '@material-ui/core/Grid';

const styleLabel = {
    "padding-right": "5px"
}


const styleInput = {
    "padding-left": "5px"
}
class DateField extends Component {
    
    render () {
         return (
            <Grid container className="date-field" spacing={16}>
                <Grid item xs={12}>
                    <Grid container key="initial" justify="center">
                        <Label style={styleLabel} text={this.props.text}/>
                        <Input style={styleInput} name={this.props.name} value={this.props.value} onChange={this.props.onChange}/>
                    </Grid>
                </Grid>
            </Grid>
        );
    }

}

export default DateField;