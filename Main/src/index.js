import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './Layout.jsx';

class App extends React.Component {
    constructor(props) {
        super();
        this.state = {
            //TODO
        };
    }
    render() {
        return (
            <Layout>
                This is content.
            </Layout>
        );
    }
}

ReactDOM.render(<App />, document.body);
