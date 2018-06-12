import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import drawer from './drawer';
import navigation from './navigation';

const appReducer = combineReducers({
    drawer,
    navigation,
    router: routerReducer,
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;