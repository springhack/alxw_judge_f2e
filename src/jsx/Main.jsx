import React from 'react';
import ReactDOM from 'react-dom';
import {Appbar, Form, Container, Panel, Input, Button} from 'muicss/react';

import Layout from './Layout.jsx';

import menu from '../config/Menu.js';

//Map menu here, do it later...

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menu
        };
    }
    render() {
        //Fetch data here...
        return (
            <Layout menu={this.state.menu}>
                //Show data here
            </Layout>
        );
    }
}
