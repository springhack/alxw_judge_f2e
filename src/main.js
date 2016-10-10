import ReactDOM from 'react-dom';
import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Index from './jsx/Index.jsx';
import Main from './jsx/Main.jsx';

let App = (
    <Router history={hashHistory}>
        <Route path='/'>
            <IndexRoute component={Index} />
            <Route path='Main' component={Main} />
        </Route>
    </Router>
);

ReactDOM.render(App, document.body);
