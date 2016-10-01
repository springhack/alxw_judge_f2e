import ReactDOM from 'react-dom';
import React from 'react';
import {Router, Route, IndexRoute, IndexRedirect, hashHistory} from 'react-router';

import Index from './jsx/Index.jsx';

let App = (
    <Router history={hashHistory}>
        <Route path='/'>
            <IndexRoute component={Index} />
        </Route>
    </Router>
);

ReactDOM.render(App, document.body);
