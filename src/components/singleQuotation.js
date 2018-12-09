import React, { Component } from 'react';
import Button from './myButton';
import DateField from './dateField';
import Label from './label'
import Grid from '@material-ui/core/Grid';

import axios from 'axios'



class SingleQuotation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: undefined,
            quotation: [],
            page: "singleDay"
        };

        this.getQuotation = this.getQuotation.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }


    getQuotation () {
        if(this.state["date"] !== undefined) {
            var dateSplitted = this.props.formatDate(this.state["date"]).split('-')
            console.log(dateSplitted)
            axios.get('http://localhost:8080/quotation-day/?day='+ dateSplitted[0] + '&month=' + dateSplitted[1] +'&year=' + dateSplitted[2])
                .then(response => this.setState({ quotation: response.data }));

        }
    }
  
    handleChange = function (event, date) {
        this.setState({date})
    }
  
    render() {
    
        let label
        if (this.state["quotation"].date !== undefined) {
            label = <Label text={"Valor do EURO em " + this.state["quotation"].date + " é " + this.state["quotation"].real}/>
        } else {
            label = undefined
        }
        return (
        <div>
            <Grid container className="date-field" spacing={16}>
                <Grid item xs={12}>
                    <Grid container key="initial" justify="center">
                        <h2>Checar Cotação Euro em um Único Dia</h2>
                        <DateField name="date" text="Data: " value={this.state.date} onChange={this.handleChange}/>
                        <Button handleClick={this.getQuotation} label="Pesquisar" />
                        {label}
                    </Grid>
                </Grid>
            </Grid>
        </div>
        ); 
    } 

}

export default SingleQuotation;
