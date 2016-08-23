import React from 'react';
import {Appbar} from 'muicss/react';

import './Layout.less';

export default class Layout extends React.Component {
    constructor(props) {
        super();
        this.state = {};
    }
    render() {
        return (
            <section className='main'>
                <aside className='main-aside'>
                    <div className='mui--text-white mui--text-display1 mui--align-vertical main-title'>Alxw Judge</div>
                    <ul>
                        <strong>System</strong>
                        <li><a href='Main'>Main</a></li>
                        <li><a href='Problems'>Problems</a></li>
                        <li><a href='Contests'>Contests</a></li>
                        <li><a href='Status'>Status</a></li>
                        <li><a href='Talk'>Talk</a></li>
                    </ul>
                    <ul>
                        <strong>User</strong>
                        <li><a href='Infomation'>Infomation</a></li>
                        <li><a href='Logout'>Logout</a></li>
                    </ul>
                </aside>
                <section className='main-content'>
                    <Appbar className='mui--align-vertical'>
                        <h3>One more problem, one more success.</h3>
                    </Appbar>
                    <div className='main-content-content'>
                        {this.props.children}
                    </div>
                </section>
            </section>
        );
    }
}
