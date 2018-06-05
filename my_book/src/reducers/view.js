import { OPEN_DRAWER, CLOSE_DRAWER } from '../actions/view';

const defaultState = {
    drawer_open: false,
};

export default function viewReducer(state = defaultState, action) {
    switch (action.type) {
        case 'OPEN_DRAWER':
            return {
                ...state,
                drawer_open: true,
            };
        case 'CLOSE_DRAWER':
            return {
                ...state,
                drawer_open: false,
            };
        default:
            return state;
    }
}