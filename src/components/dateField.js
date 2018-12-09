import React, { Component } from 'react';
import Label from './label';
import Input from './input';
import Grid from '@material-ui/core/Grid';


class DateField extends Component {
    render () {
         return (
            <Grid container className="date-field" spacing={16}>
                <Grid item xs={12}>
                    <Grid container key="initial" justify="center">
                        <Label text={this.props.text}/>
                        <Input name={this.props.name} value={this.props.value} onChange={this.props.onChange}/>
                    </Grid>
                </Grid>
            </Grid>
        );
    }

}

export default DateField;