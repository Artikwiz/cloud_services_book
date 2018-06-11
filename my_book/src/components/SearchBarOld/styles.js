const styles = {
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
    iconButtonDisabled: {
        opacity: 0.38
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
    defaultStyleClearIcon: {
        color: 'grey[500]',
    },
    defaultStyleSearchIcon: {
        color: 'grey[500]',
    },
};

export default styles;