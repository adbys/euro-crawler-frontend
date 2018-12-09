import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SingleQuotation from './components/singleQuotation';
import PeriodQuotation from './components/periodQuotation';
import NavBar from './components/navBar';
import './App.css';


class App extends Component {

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

  changePage = function (page) {
    this.setState({page})
  }

  
  render() {
    
    return (
      <div>
        <NavBar changePage={this.changePage}></NavBar>
        <SingleQuotation formatDate={this.formatDate} />
        <PeriodQuotation formatDate={this.formatDate} />
      
       
      </div>

    ); 
  }
}

export default App;
