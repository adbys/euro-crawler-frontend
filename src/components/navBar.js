import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import { Link } from 'react-router-dom'


class NavBar extends Component {

    changePage (page) {
        
    }

    render() {
        return(
            <div>
                <AppBar color="default" position="static" >
                    <Toolbar>
                        <Button><Link to="/singleQuotation">Cotação Diária</Link></Button>
                        <Button><Link to="/periodQuotation">Cotação por Período</Link></Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default NavBar;