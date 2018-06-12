import { CHANGE_ROOT } from '../actions/navigation';

const defaultState = {
    activeRoot: {
        pathname: '/',
        label: 'Home',
    },
    roots: [
        {
            pathname: '/',
            label: 'Home',
        },
        {
            pathname: '/about-us',
            label: 'About',
        },
    ],
};

export default function navigationReducer(state = defaultState, action) {
    switch (action.type) {
        case 'CHANGE_ROOT':
            return {
                ...state,
                activeRoot: {
                    pathname: action.pathname,
                    label: action.label,
                }
            };
        default:
            return state;
    }
}