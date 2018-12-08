import React, { Component } from 'react';
import Button from './button';
import DateField from './dateField';
import Chart from './chart'

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
        if(this.state["initialDate"] !== undefined && this.state["finalDate"] !== undefined) {
            console.log(this.state["quotations"])
            var initialDateSplitted = this.props.formatDate(this.state["initialDate"]).split('-')
            var finalDateSplitted = this.props.formatDate(this.state["finalDate"]).split('-')
            axios.get('http://localhost:8080/quotation-period/?iniDay='+ initialDateSplitted[0] + '&iniMonth=' + initialDateSplitted[1] +'&iniYear=' + initialDateSplitted[2] 
            + '&finDay=' + finalDateSplitted[0] + '&finMonth=' + finalDateSplitted[1] +'&finYear=' + finalDateSplitted[2])
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
                                backgroundColor: ['rgba(255, 99, 132, 0.6)']
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


  
    render() {
        let chart;

        if (this.state["chartData"] !== undefined) {
            console.log(this.state["chartData"])
        chart = <div>
                 <h2>Cotação Euro</h2>
                 <Chart chartData={this.state["chartData"]} /> 
                </div>
        }

        return (
            <div>
                <DateField text="Data Inicial: " value={this.state.initialDate} onChange={this.handleChangeInitialDate}/>
                <DateField text="Data Final: " value={this.state.finalDate} onChange={this.handleChangeFinalDate}/>
                <Button handleClick={this.getQuotation} label="Pesquisar" />
                <br></br>
                {chart}
            </div>
        ); 
    } 

}

export default PeriodQuotation;
