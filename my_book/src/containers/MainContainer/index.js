import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import Home from '../../containers/Home';
import About from '../../containers/About';

function build(key) {
    switch (key) {
        case 'About':
            return About;
        default:
            return Home;
    }
}

class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        const { activeRoot } = this.props;
        return (
            <main>
                <Switch>
                    <Route exact path={activeRoot.pathname}
                        component={build(activeRoot.label)} />
                </Switch>
            </main>
        )
    }
}

MainContainer.propTypes = {
    activeRoot: PropTypes.object,
}

export default MainContainer;