import React from 'react';
import ReactDOM from 'react-dom';
import {Appbar, Form, Container, Panel, Input, Button} from 'muicss/react';

import '../less/Layout.less';

export default class Layout extends React.Component {
    constructor (props) {
        super(props);
    }
    render() {
        return (
            <section id='container'>
                <aside>
                    {this.props.menu}
                </aside>
                <section id='main'>
                    {this.props.children}
                </section>
            </section>
        );
    }
}
