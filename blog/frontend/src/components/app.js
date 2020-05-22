import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import Header from './layout/Header';
import Dashboard from './posts/Dashboard';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

//Alert Options
const alertOptions = {
    timeout: 3000,
    postiton: 'top center'
}

import { Provider } from 'react-redux';
import store from '../store';

class App extends Component {
    render() {
        return(
            <Provider store={store}>
                <Fragment>
                    <Header />
                    <div className="container">
                        <Dashboard />
                    </div> 
                </Fragment>
            </Provider>
            
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));