import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super();
        this.state = {
            face : {
                fontSize : '136px',
                padding : '50px'
            },
            prom : {
                padding : '50px'
            }
        };
    }
    render() {
        return (
        <div>
            <div style={this.state.face}>:)</div>
            <div style={this.state.prom}>
                <h1>欢迎使用Alxw CMS</h1>
                <p>SpringHack</p>
            </div>
        </div>
        );
    }
}

ReactDOM.render(<App />, document.body);
