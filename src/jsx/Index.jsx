import React from 'react';
import ReactDOM from 'react-dom';
import {Appbar, Form, Container, Panel, Input, Button} from 'muicss/react';

import Login from './Login.jsx';
import Register from './Register.jsx';

import '../less/Index.less';

export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //TODO
        };
    }
    render() {
        return (
            <Container>
                <Panel className='header'>
                    <h2>今天的风儿好喧嚣</h2>
                    <Login className='login mui-form--inline' />
                </Panel>
                <Panel className='main'>
                    <img src='/res/img/maccode.jpg' className='left' />
                    <Register className='right' />
                </Panel>
                <Panel className='footer'>
                    Power by SpringHack
                </Panel>
            </Container>
        );
    }
}
