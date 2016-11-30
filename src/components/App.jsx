import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Nav from './Nav.jsx';

import './App.less'

const App = props => (
    <MuiThemeProvider>
        <div className="page-wrapper">
            <h1 className="heading">Messages App</h1>
            <div className="messages-app">
                <Nav />
                <div className="app-body">
                    {props.children}
                </div>
            </div>
        </div>
    </MuiThemeProvider>
);

export default App;
