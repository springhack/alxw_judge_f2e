import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import Config from './config/Config.js';
import App from './jsx/App.jsx';

import './less/App.less';

ReactDOM.render(<App />, document.getElementById('app'));
