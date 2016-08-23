import React from 'react';

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
                    <div className='main-title'>
                        Alxw
                    </div>
                    <a href='Main'>Main</a><br/>
                    <a href='Problems'>Problems</a><br/>
                    <a href='Contests'>Contests</a><br/>
                    <a href='Infomation'>Infomation</a><br/>
                    <a href='Talk'>Talk</a><br/>
                </aside>
                <content className='main-content'>
                    <div className='main-title'>
                        This is path.
                    </div>
                    {this.props.children}
                </content>
            </section>
        );
    }
}
