import React from 'react';
import ReactDOM from 'react-dom';
import {Appbar, Form, Container, Panel, Input, Button} from 'muicss/react';

import Dialog from './Dialog.jsx';

export default class Login extends React.Component {
    constructor(props) {
        super();
        this.state = {
            display : 'none',
            content : ''
        };
    }
    render() {
        return (
            <section className={this.props.className}>
                <Input ref='user' label='Username' floatingLabel={true} required={true} />
                <Input ref='pass' type='password' label='Password' floatingLabel={true} required={true} />
                <Button onClick={this.onLogin.bind(this)}>Login</Button>
                <Dialog display={this.state.display} title='Login Info' content={this.state.content} onClick={this.onLoginClick.bind(this)} />
            </section>
        );
    }
    onLogin() {
        let user = ReactDOM.findDOMNode(this.refs.user).getElementsByTagName('input')[0].value;
        let pass = ReactDOM.findDOMNode(this.refs.pass).getElementsByTagName('input')[0].value;
        fetch('Index', {
            method : 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded'
            },
            body : `action=login&user=${user}&pass=${pass}`
        }).then(res => {
            if (res.ok)
                return res.json()
            else
                this.setState({
                    display : 'block',
                    content : 'Network error !'
                });
        }).then(json => {
                if (json.result == 'success')
                    this.setState({
                        display : 'block',
                        content : 'Success'
                    });
                else
                    this.setState({
                        display : 'block',
                        content : json.reason
                    });
        }).catch(err => {
            console.log(err);
        });
    }
    onLoginClick (){
        this.setState({
            display : 'none'
        });
    }
}

