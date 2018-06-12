export const CHANGE_ROOT = 'CHANGE_ROOT';

export const changeRoot = (label, pathname) => ({
    type: CHANGE_ROOT,
    label: label,
    pathname: pathname,
});