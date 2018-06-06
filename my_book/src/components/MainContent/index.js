import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../../containers/Home';
import About from '../../containers/About';

class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about-us' component={About} />
                </Switch>
            </main>
        )
    }
}

export default MainContent;