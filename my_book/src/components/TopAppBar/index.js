import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { connect } from 'react-redux';

import styles from './styles.js';

import searchBarData from './searchBarData';
import AutoSuggestSearchBar from '../AutoSuggestSearchBar/index';
import { openDrawer } from '../../actions/drawer';

class TopAppBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="static" className={classes.appBar}>
                    <Toolbar>
                        <IconButton className={classes.menuButton}
                            color="inherit"
                            onClick={() => { this.props.dispatch(openDrawer()); }}
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

const mapStateToProps = (state) => {
    return {
        open_drawer: state.drawer.drawer_open,
    };
};

export default connect(mapStateToProps)(withStyles(styles)(TopAppBar));