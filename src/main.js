import ReactDOM from 'react-dom';
import React from 'react';
import { Route, Router, browserHistory } from 'react-router';

import App         from './Components/App.jsx';
import About       from './Components/About.jsx';
import Inbox       from './Components/Inbox.jsx';
import MessageView from './Components/MessageView.jsx';
import NotFound    from './Components/NotFound.jsx';

// styles
import 'normalize.css';
import './assets/style.less';

const routes = (
    <Route path="/" component={App} >
        <Route path="/about" component={About} />
        <Route path="/inbox" component={Inbox}>
            <Route path="/inbox/:message" component={MessageView} />
        </Route>
        <Route path="*" component={NotFound} />
    </Route>
);

ReactDOM.render(
    <Router history={browserHistory}>
        {routes}
    </Router>,
    document.getElementById('root')
);
