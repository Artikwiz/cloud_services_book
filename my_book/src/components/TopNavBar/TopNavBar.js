import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { connect } from 'react-redux';

import styles from './styles.css';

import { openDrawer } from '../../actions/view';

class TopNavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={this.props.root}>
                <AppBar position="static" style={{ backgroundColor: '#2196f3' }}>
                    <Toolbar>
                        <IconButton className={this.props.menuButton}
                            color="inherit"
                            onClick={() => { this.props.dispatch(openDrawer()); }}
                            aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" className={this.props.flex}>Title</Typography>
                    </Toolbar>
                </AppBar>
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        open_drawer: state.view.drawer_open,
    };
};

export default connect(mapStateToProps)(withStyles(styles)(TopNavBar));