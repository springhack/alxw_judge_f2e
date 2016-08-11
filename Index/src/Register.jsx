import React from 'react';
import {Appbar, Form, Container, Panel, Input, Button} from 'muicss/react';

export default class Register extends React.Component {
    constructor(props) {
        super();
        this.state = {
            vimg : '/ValidationCode'
        };
    }
    render() {
        return (
            <section className={this.props.className}>
                <h4>Register now</h4>
                <Input label='Username' floatingLabel={true} required={true} />
                <Input label='Nickname' floatingLabel={true} required={true} />
                <Input label='Password' type='password' floatingLabel={true} required={true} />
                <Input label='Password Repeat' type='password' floatingLabel={true} required={true} />
                <section className='mui-form--inline'>
                    <Input label='Veridy Code' floatingLabel={true} required={true} />
                    <img src={this.state.vimg} onClick={this.verifyClick.bind(this)} />
                </section>
                <Button onClick={this.onRegister.bind(this)}>Register</Button>
            </section>
        );
    }
    onRegister() {
        //TODO
    }
    verifyClick() {
        this.setState({
            vimg : `/${new Date()}/ValidationCode`
        });
    }
}

