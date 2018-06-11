const styles = theme => ({
    container: {
        margin: '0 auto',
        maxWidth: 800,
        position: 'absolute',
        right: '50px',
    },
    suggestionsContainerOpen: {
        position: 'absolute',
        zIndex: 1,
        marginTop: theme.spacing.unit,
        left: 0,
        right: 0,
    },
    suggestion: {
        display: 'block',
    },
    suggestionsList: {
        margin: 0,
        padding: 0,
        listStyleType: 'none',
    },

    // Input
    root: {
        height: 48,
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
    },
    iconButton: {
        opacity: 0.54,
        transform: 'scale(1, 1)',
        transition: 'transform 200ms cubic-bezier(0.4, 0.0, 0.2, 1)'
    },
    iconButtonHidden: {
        transform: 'scale(0, 0)',
        '& > $icon': {
            opacity: 0
        }
    },
    searchIconButton: {
        marginRight: -48
    },
    icon: {
        // opacity: 0.54,
        transition: 'opacity 200ms cubic-bezier(0.4, 0.0, 0.2, 1)'
    },
    input: {
        width: '100%',
    },
    searchContainer: {
        margin: 'auto 16px',
        width: '100%'
    },
});

export default styles;