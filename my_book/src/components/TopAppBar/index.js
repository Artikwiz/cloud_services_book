import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './styles.js';

import AutoSuggestSearchBar from '../AutoSuggestSearchBar/index';
import { openDrawer } from '../../actions/drawer';

class TopAppBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleClickDrawer = this.handleClickDrawer.bind(this);
    }

    handleClickDrawer() {
        this.props.onClickDrawerButton();
    }

    render() {
        const { classes, roots, onClickDrawerButton } = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="static" className={classes.appBar}>
                    <Toolbar>
                        <IconButton className={classes.menuButton}
                            color="inherit"
                            onClick={this.handleClickDrawer}
                            aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <AutoSuggestSearchBar />
                    </Toolbar>
                </AppBar>
            </div >
        )
    }
}

TopAppBar.propTypes = {
    roots: PropTypes.array.isRequired,
    onClickDrawerButton: PropTypes.func.isRequired,
}

export default withStyles(styles)(TopAppBar);