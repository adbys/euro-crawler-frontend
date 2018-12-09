import React, { Component } from 'react';
import Label from './label';
import Input from './input';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

class DateField extends Component {
    
    render () {
         return (
             <Grid container className="date-field" spacing={16}>
                <Grid item xs={12}>
                    <Paper style={{width: "100%", height: "60px", margin: "10px auto", textAlign: "center"}} elevation={1}>
                        <Grid container key="initial" justify="center" style={{alignItems: "center"}}>
                            <Label style={{paddingRight: "0.5rem"}} text={this.props.text}/>
                            <Input style={{paddingLeft: "0.5rem", textAlign: "center"}} name={this.props.name} value={this.props.value} onChange={this.props.onChange}/>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        );
    }

}

export default DateField;