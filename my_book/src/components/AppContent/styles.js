const styles = theme => ({
    root: theme.mixins.gutters({
        paddingTop: 80,
        flex: '1 1 100%',
        maxWidth: '100%',
        margin: '0 auto',
    }),
    [theme.breakpoints.up('md')]: {
        root: {
            maxWidth: theme.breakpoints.values.md,
        },
    },
});

export default styles;