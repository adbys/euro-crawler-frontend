import React, { Component } from 'react';
import Button from './myButton';
import DateField from './dateField';
import Chart from './chart'
import Grid from '@material-ui/core/Grid';
import NavBar from './navBar';

import axios from 'axios'



class PeriodQuotation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            initialDate: undefined,
            finalDate: undefined,
            chartData: undefined
        };

        this.getQuotation = this.getQuotation.bind(this)
        this.handleChangeInitialDate = this.handleChangeInitialDate.bind(this)
        this.handleChangeFinalDate = this.handleChangeFinalDate.bind(this)
    }


    getQuotation () {
        this.chart = undefined
        if(this.state["initialDate"] !== undefined && this.state["finalDate"] !== undefined) {
            console.log(this.state["quotations"])
            axios.get('http://localhost:8080/quotation-period/?iniDay='+ this.formatDate(this.state["initialDate"]) 
            + '&finDay=' + this.formatDate(this.state["finalDate"]))
                .then(response => {
                    var labels = []
                    var values = []
                    for (var i = 0; i < response.data.length; i++) {
                        labels.push(response.data[i].date);
                        values.push(parseFloat(response.data[i].real.split(" ")[1].replace(",", ".")))
                    }
                    this.setState({ chartData: {
                        labels,
                        datasets: [
                            {
                                label: "Valor em reais (R$)",
                                data: values,
                                backgroundColor: ['rgb(0, 188, 212)']
                            }
                        ]

                    }
                });
            });
        };

    }

  
    handleChangeInitialDate = function (event, date) {
        this.setState({initialDate: date})
    }

    handleChangeFinalDate = function (event, date) {
        this.setState({finalDate: date})
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


      
      render() {
          
        let chart;
        if (this.state["chartData"] !== undefined) {
            console.log(this.state["chartData"])
        chart = <Grid container key="chart" justify="center">
                 <h2>Cotação Euro</h2>
                 <br/>
                 <br/>
                 <Chart chartData={this.state["chartData"]} /> 
                 </Grid>
        }

        return (
            <div>
                <NavBar></NavBar>
                <br/>
                <br/>
                <Grid container className="date-field" spacing={16}>
                    <Grid item xs={12}>
                        <Grid container key="initial" justify="center">
                            <h2>Checar Cotação Euro em um Período de Dias</h2>
                            <DateField name='date-id1' text="Data Inicial: " value={this.state.initialDate} onChange={this.handleChangeInitialDate}/>
                            <DateField name='date-id2' text="Data Final: " value={this.state.finalDate} onChange={this.handleChangeFinalDate}/>
                            <Button handleClick={this.getQuotation} label="Pesquisar" />
                            
                                {chart}
                
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        ); 
    } 

}

export default PeriodQuotation;
