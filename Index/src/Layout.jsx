import React from 'react';

export default class Layout extends React.Component {
    constructor(props) {
        super();
        this.state = {};
    }
    render() {
        return (
            <section>
                {this.props.children}
            </section>
        );
    }
}
