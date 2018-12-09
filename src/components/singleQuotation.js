import React, { Component } from 'react';
import Button from './myButton';
import DateField from './dateField';
import Label from './label'
import Grid from '@material-ui/core/Grid';
import NavBar from './navBar';


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
            var dateSplitted = this.formatDate(this.state["date"]).split('-')
            console.log(dateSplitted)
            axios.get('http://142.93.249.9:8080/quotation-day/?day='+ dateSplitted[0] + '&month=' + dateSplitted[1] +'&year=' + dateSplitted[2])
                .then(response => this.setState({ quotation: response.data }));

        }
    }

    formatDate = function (date) {
        var day = date.getDate()
        var month = date.getMonth() + 1
        var year = date.getFullYear()
    
        if(day < 10) {
            day = '0' + day
        } 
    
        if(month < 10) {
            month = '0' + month
        } 
    
        return day + "-" + month + "-" + year
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
            <NavBar></NavBar>
            <br/>
            <br/>
            <Grid container className="date-field" spacing={16}>
                <Grid item xs={12}>
                    <Grid container key="initial" justify="center">
                        <h2>Checar Cotação Euro em um Único Dia</h2>
                        <DateField name="date" text="Data: " value={this.state.date} onChange={this.handleChange}/>
                        <Button handleClick={this.getQuotation} label="Pesquisar" />
                        
                        <Grid container key="label" justify="center">
                            {label}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
        ); 
    } 

}

export default SingleQuotation;
