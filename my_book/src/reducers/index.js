import { combineReducers } from 'redux';

import view from './view';

const rootReducer = combineReducers({
    view,
});

export default rootReducer;
// export default rootReducer = (state, action) => {
//     return appReducer(state, action);
// };