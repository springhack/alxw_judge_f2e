import React from 'react';
import {Appbar, Form, Container, Panel, Input, Button} from 'muicss/react';

export default class Login extends React.Component {
    constructor(props) {
        super();
        this.state = {
            //TODO
        };
    }
    render() {
        return (
            <section className={this.props.className}>
                <Input ref='user' label='Username' floatingLabel={true} required={true} />
                <Input ref='pass' type='password' label='Password' floatingLabel={true} required={true} />
                <Button onClick={this.onLogin.bind(this)}>Login</Button>
            </section>
        );
    }
    onLogin() {
        //TODO
    }
}

