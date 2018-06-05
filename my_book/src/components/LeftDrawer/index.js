import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { connect } from 'react-redux';

import { closeDrawer } from '../../actions/view';
import { mailFolderListItems, otherMailFolderListItems } from './tileData';

const styles = {
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
};

class LeftDrawer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const sideList = (
            <div className={this.props.list}>
                <List>{mailFolderListItems}</List>
                <Divider />
                <List>{otherMailFolderListItems}</List>
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
        open_drawer: state.view.drawer_open,
    };
};

export default connect(mapStateToProps)(withStyles(styles)(LeftDrawer));
