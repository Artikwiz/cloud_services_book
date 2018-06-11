import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';

import styles from './styles';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { classes, ref, clearIcon, searchIcon, value, onClear, ...other } = this.props.inputProps;

        return (
            <Paper
                className={classes.root}>
                <div className={classes.searchContainer}>
                    <TextField
                        fullWidth
                        value={value}
                        InputProps={{
                            inputRef: ref,
                            disableUnderline: true,
                            classes: {
                                input: classes.input,
                            },
                            ...other,
                        }}
                    />
                </div>
                <IconButton
                    classes={{
                        root: classNames(classes.iconButton, classes.searchIconButton, {
                            [classes.iconButtonHidden]: value !== ''
                        }),
                    }}
                >
                    {React.cloneElement(searchIcon, {
                        classes: { root: classes.icon }
                    })}
                </IconButton>
                <IconButton
                    onClick={onClear}
                    classes={{
                        root: classNames(classes.iconButton, {
                            [classes.iconButtonHidden]: value === ''
                        }),
                    }}
                >
                    {React.cloneElement(clearIcon, {
                        classes: { root: classes.icon }
                    })}
                </IconButton>
            </Paper >
        );
    }
}

SearchBar.propTypes = {
    inputProps: PropTypes.shape({
        /** Override or extend the styles applied to the component. */
        classes: PropTypes.object.isRequired,
        /** input ref */
        ref: PropTypes.func,
        /** Override the clear icon. */
        clearIcon: PropTypes.node,
        /** Sets placeholder for the embedded text field. */
        placeholder: PropTypes.string,
        /** Fired when the text value changes. */
        onChange: PropTypes.func,
        /** Override the search icon. */
        searchIcon: PropTypes.node,
        /** Override the inline-styles of the root element. */
        iconStyle: PropTypes.object,
        /** The value of the text field. */
        value: PropTypes.string,
    }),
}

export default withStyles(styles)(SearchBar);