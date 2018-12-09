import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SingleQuotation from './components/singleQuotation';
import PeriodQuotation from './components/periodQuotation';
import NavBar from './components/navBar';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      page: "singleDay"
    };

    this.changePage = this.changePage.bind(this);
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

  changePage = function (page) {
    this.setState({page})
  }

  
  render() {
    
    let page
    
    if(this.state["page"] === "singleDay") {
      page =  <SingleQuotation formatDate={this.formatDate} />
    } else {
      page = <PeriodQuotation formatDate={this.formatDate} />
    }
 
    return (
      <div>
        <NavBar changePage={this.changePage}></NavBar>
        <br/>
        <br/>
        <MuiThemeProvider>
          {page}
        </MuiThemeProvider>
      </div>

    ); 
  }
}

export default App;
