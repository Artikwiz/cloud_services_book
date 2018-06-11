import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';

import { closeDrawer } from '../../actions/drawer';
import { mailFolderListItems, otherMailFolderListItems } from './tileData';
import styles from './styles';

class AppDrawer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const sideList = (
            <div className={this.props.list}>
                <List>
                    <ListItem button component={Link} to="/">
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button component={Link} to="/about-us">
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="About" />
                    </ListItem>
                </List>
            </div>
        );

        return (
            <div>
                <Drawer open={this.props.open_drawer}
                    onClose={() => { this.props.dispatch(closeDrawer()); }}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={() => { this.props.dispatch(closeDrawer()); }}
                        onKeyDown={() => { this.props.dispatch(closeDrawer()); }}
                    >
                        {sideList}
                    </div>
                </Drawer>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        open_drawer: state.drawer.drawer_open,
    };
};

export default connect(mapStateToProps)(withStyles(styles)(AppDrawer));
