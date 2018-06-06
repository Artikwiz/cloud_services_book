import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import view from './view';

const appReducer = combineReducers({
    view,
    router: routerReducer,
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;