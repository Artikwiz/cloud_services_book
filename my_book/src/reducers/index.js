import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import navigation from './navigation';

const appReducer = combineReducers({
    navigation,
    router: routerReducer,
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;