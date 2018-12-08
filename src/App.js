import React, { Component } from 'react';
import Button from './components/button';
import DateField from './components/dateField';
import Label from './components/label'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import axios from 'axios'





class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      initialDate: "",
      finalDate: "",
      quotation: []
    };

    this.getQuotation = this.getQuotation.bind(this)
    this.handleChange = this.handleChange.bind(this)
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

  getQuotation () {
    console.log(this.state)
    console.log(this.state["initialDate"])
    if(this.state["initialDate"] !== "") {
      var dateSplitted = this.formatDate(this.state["initialDate"]).split('-')
      console.log(dateSplitted)
      axios.get('http://localhost:8080/quotation-day/?day='+ dateSplitted[0] + '&month=' + dateSplitted[1] +'&year=' + dateSplitted[2])
          .then(response => this.setState({ quotation: response.data }));

    }
  }
  
  handleChange = function (event, date) {
    this.setState({initialDate: date})
  }
  
  render() {
 
    let label
    if (this.state["quotation"].date !== undefined) {
      label = <Label text={"Valor do EURO em " + this.state["quotation"].date + " é " + this.state["quotation"].real}/>
    } else {
      label = undefined
    }
    return (
      <MuiThemeProvider>
      <div> 
        <DateField text="Data: " value={this.state.initialDate} onChange={this.handleChange}/>
        <Button handleClick={this.getQuotation} label="Pesquisar" />
        {label}
      </div>
        </MuiThemeProvider>
    ); 
  }
}

export default App;
