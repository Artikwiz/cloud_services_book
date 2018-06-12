import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import Paper from '@material-ui/core/Paper';
import ClearIcon from '@material-ui/icons/Clear';
import SearchIcon from '@material-ui/icons/Search';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

import SearchBar from '../SearchBar/index';
// import suggestions from './suggestions';

function renderSuggestion(suggestion, { query, isHighlighted }) {
    const matches = match(suggestion.label, query);
    const parts = parse(suggestion.label, matches);

    return (
        <MenuItem selected={isHighlighted} component="div">
            <div>
                {parts.map((part, index) => {
                    return part.highlight ? (
                        <span key={String(index)} style={{ fontWeight: 300 }}>
                            {part.text}
                        </span>
                    ) : (
                            <strong key={String(index)} style={{ fontWeight: 500 }}>
                                {part.text}
                            </strong>
                        );
                })}
            </div>
        </MenuItem>
    );
}

function renderSuggestionsContainer(options) {
    const { containerProps, children } = options;

    return (
        <Paper {...containerProps} square>
            {children}
        </Paper>
    );
}


function getSuggestions(suggestions, value) {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    let count = 0;

    return inputLength === 0
        ? []
        : suggestions.filter(suggestion => {
            const keep =
                count < 5 && suggestion.label.toLowerCase().slice(0, inputLength) === inputValue;

            if (keep) {
                count += 1;
            }

            return keep;
        });
}

class AutoSuggestSearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            suggestions: [],
        };
    }

    getSuggestionValue(suggestion) {
        return suggestion.label;
    }

    handleSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: getSuggestions(this.props.suggestions, value),
        });
    };

    handleSuggestionsClearRequested = () => {
        this.setState({
            suggestions: [],
        });
    };

    handleChange = (event, { newValue }) => {
        this.setState({
            value: newValue,
        });
    };

    handleClear = () => {
        this.setState({
            value: '',
        });
    };

    handleSuggestionSelected = (event, { suggestion }) => {
        console.log("Value = " + suggestion.label);
        this.props.onItemSelected(suggestion.label, suggestion.pathname);
    }

    render() {
        const { classes } = this.props;

        return (
            <Autosuggest
                theme={{
                    container: classes.container,
                    suggestionsContainerOpen: classes.suggestionsContainerOpen,
                    suggestionsList: classes.suggestionsList,
                    suggestion: classes.suggestion,
                }}
                renderInputComponent={(inputProps) => { return (<SearchBar inputProps={inputProps} />); }}
                suggestions={this.state.suggestions}
                onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
                renderSuggestionsContainer={renderSuggestionsContainer}
                getSuggestionValue={this.getSuggestionValue}
                onSuggestionSelected={this.handleSuggestionSelected}
                renderSuggestion={renderSuggestion}
                inputProps={{
                    classes,
                    placeholder: 'Search',
                    value: this.state.value,
                    onChange: this.handleChange,
                    onClear: this.handleClear,
                    clearIcon: <ClearIcon style={styles.defaultStyleClearIcon} />,
                    searchIcon: <SearchIcon style={styles.defaultStyleSearchIcon} />,
                }}
            />
        );
    }
}

AutoSuggestSearchBar.propTypes = {
    classes: PropTypes.object.isRequired,
    suggestions: PropTypes.array.isRequired,
    onItemSelected: PropTypes.func,
};

export default withStyles(styles)(AutoSuggestSearchBar);
