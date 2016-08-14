import React from 'react';
import {Appbar, Form, Container, Panel, Input, Button} from 'muicss/react';

export default class Dialog extends React.Component {
    constructor(props) {
        super();
        this.state = {
            style : {
                zIndex : '10',
                width : '400px',
                position : 'fixed',
                margin : 'auto',
                left : '0px',
                right : '0px',
                top : '0px',
                display : props.display,
                marginTop : '170px'
            }
        };
    }
    render() {
        return (
            <section style={this.state.style}>
                <Panel>
                    <h3>{this.props.title}</h3>
                    <h5>{this.props.content}</h5>
                    <div>
                        <Button onClick={this.props.onClick} style={{float: 'right'}}>OK</Button>
                    </div>
                </Panel>
            </section>
        );
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            style : {
                zIndex : '10',
                width : '400px',
                position : 'fixed',
                margin : 'auto',
                left : '0px',
                right : '0px',
                top : '0px',
                display : nextProps.display,
                marginTop : '170px'
            }
        });
    }
}

