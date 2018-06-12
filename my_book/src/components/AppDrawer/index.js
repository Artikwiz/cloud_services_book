import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import styles from './styles';

class AppDrawer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    handleClickItem(label, pathname) {
        this.props.onClickItem(label, pathname);
    }

    render() {
        const { roots } = this.props;
        const sideList = (
            <div className={this.props.list}>
                <List>
                    {
                        roots.map((root, index) => {
                            return (
                                <ListItem button
                                    key={index}
                                    onClick={this.handleClickItem.bind(this, root.label, root.pathname)}>
                                    <ListItemText primary={root.label} />
                                </ListItem>
                            );
                        }
                        )
                    }
                </List>
            </div>
        );

        return (
            <div>
                <Drawer open={this.props.open} onClose={this.props.onClick}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.props.onClick}
                        onKeyDown={this.props.onClick}
                    >
                        {sideList}
                    </div>
                </Drawer>
            </div>
        );
    }
}

AppDrawer.propTypes = {
    roots: PropTypes.array.isRequired,
    open: PropTypes.bool.isRequired,
    onClickItem: PropTypes.func.isRequired,
    onClick: PropTypes.func,
}


export default withStyles(styles)(AppDrawer);
