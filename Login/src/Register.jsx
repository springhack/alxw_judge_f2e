import React from 'react';
import ReactDOM from 'react-dom';
import {Appbar, Form, Container, Panel, Input, Button} from 'muicss/react';

import Dialog from './Dialog.jsx';

export default class Register extends React.Component {
    constructor(props) {
        super();
        this.state = {
            vimg : '/ValidationCode',
            display : 'none',
            content : ''
        };
    }
    render() {
        return (
            <section className={this.props.className}>
                <h4>Register now</h4>
                <Input ref='nick' label='Nickname' floatingLabel={true} required={true} />
                <Input ref='user' label='Username' floatingLabel={true} required={true} />
                <Input ref='pass' label='Password' type='password' floatingLabel={true} required={true} />
                <Input ref='pass_r' label='Password Repeat' type='password' floatingLabel={true} required={true} />
                <section className='mui-form--inline'>
                    <Input ref='verify' label='Veridy Code' floatingLabel={true} required={true} />
                    <img src={this.state.vimg} onClick={this.verifyClick.bind(this)} />
                </section>
                <Button onClick={this.onRegister.bind(this)}>Register</Button>
                <Dialog display={this.state.display} title='Login Info' content={this.state.content} onClick={this.onRegisterClick.bind(this)} />
            </section>
        );
    }
    onRegister() {
        let user = ReactDOM.findDOMNode(this.refs.user).getElementsByTagName('input')[0].value;
        let nick = ReactDOM.findDOMNode(this.refs.nick).getElementsByTagName('input')[0].value;
        let pass = ReactDOM.findDOMNode(this.refs.pass).getElementsByTagName('input')[0].value;
        let pass_r = ReactDOM.findDOMNode(this.refs.pass_r).getElementsByTagName('input')[0].value;
        let verify = ReactDOM.findDOMNode(this.refs.verify).getElementsByTagName('input')[0].value;
        if (pass != pass_r)
        {
            this.setState({
                display : 'block',
                content : 'Password not match !',
                vimg : `/${new Date()}/ValidationCode`
            });
            return;
        }
        fetch('Status', {
            method : 'POST',
            credentials : 'include',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded'
            },
            body : `action=register&user=${user}&pass=${pass}&nick=${nick}&verify=${verify}`
        }).then(res => {
            if (res.ok)
                return res.json()
            else
                this.setState({
                    display : 'block',
                    content : 'Network error !',
                    vimg : `/${new Date()}/ValidationCode`
                });
        }).then(json => {
                if (json.result == 'success')
                {
                    this.setState({
                        display : 'block',
                        content : 'Success'
                    });
                    //TODO
                } else
                    this.setState({
                        display : 'block',
                        content : json.reason,
                        vimg : `/${new Date()}/ValidationCode`
                    });
        }).catch(err => {
            console.log(err);
        });
    }
    onRegisterClick (){
        this.setState({
            display : 'none'
        });
    }
    verifyClick() {
        this.setState({
            vimg : `/${new Date()}/ValidationCode`
        });
    }
}

