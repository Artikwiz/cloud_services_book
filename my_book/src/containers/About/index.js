import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import styles from './styles';

import AppContent from '../../components/AppContent/index';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <AppContent className={this.props.classes.root}>
                <h1>About</h1>
            </AppContent>
        )
    }
}

About.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);