import React from 'react';
import ReactDOM from 'react-dom';
import {Appbar, Form, Container, Panel, Input, Button} from 'muicss/react';

import './index.less';

class App extends React.Component {
    constructor(props) {
        super();
        this.state = {
            vimg : '/ValidationCode'
        };
    }
    render() {
        return (
            <Container>
                <Panel className='header'>
                    <h2>今天的风儿好喧嚣</h2>
                    <section className='login mui-form--inline'>
                        <Input ref='l_user' label='Username' floatingLabel={true} required={true} />
                        <Input type='password' ref='l_pass' label='Password' floatingLabel={true} required={true} />
                        <Button onClick={this.onLogin.bind(this)}>Login</Button>
                    </section>
                </Panel>
                <Panel className='main'>
                    <img src='/Static/maccode.jpg' className='left' />
                    <section className='right'>
                    <h4>Register now</h4>
                        <Input ref='r_user' label='Nickname' floatingLabel={true} required={true} />
                        <Input ref='r_nick' label='Username' floatingLabel={true} required={true} />
                        <Input type='password' ref='r_pass_1' label='Password' floatingLabel={true} required={true} />
                        <Input type='password' ref='r_pass_2' label='Password Repeat' floatingLabel={true} required={true} />
                        <section className='mui-form--inline'>
                            <Input ref='r_veri' label='Verify Code' floatingLabel={true} required={true} />
                            <img ref='r_vimg' src={this.state.vimg} onClick={this.verifyClick.bind(this)} />
                        </section>
                        <Button onClick={this.onRegister.bind(this)}>Register</Button>
                    </section>
                </Panel>
                <Panel>
                    Power by SpringHack
                </Panel>
            </Container>
        );
    }
    onSubmit() {
        return false;
    }
    onLogin() {}
    onRegister() {}
    verifyClick() {
        this.setState({
            vimg : `/${new Date()}/ValidationCode`
        });
    }
}

ReactDOM.render(<App />, document.body);
