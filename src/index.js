import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SingleQuotation from './components/singleQuotation';
import PeriodQuotation from './components/periodQuotation';


ReactDOM.render(<BrowserRouter>
                    <Switch>
                        <Route path="/" exact={true} component={SingleQuotation} />
                        <Route path="/singleQuotation" component={SingleQuotation} />
                        <Route path="/periodQuotation" component={PeriodQuotation} />
                    </Switch>
                </BrowserRouter>
    , document.getElementById('root'));

serviceWorker.unregister();
