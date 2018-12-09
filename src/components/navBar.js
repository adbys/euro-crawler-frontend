import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'

class NavBar extends Component {

    render() {
        return(
            <div>
                <AppBar color="default" position="static" >
                    <Toolbar>
                        <Button >Cotação Diária</Button>
                        <Button >Cotação por Período</Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default NavBar;