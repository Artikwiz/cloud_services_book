import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory()

const middleware = routerMiddleware(history)

export default function configureStore(preloadedState) {
    return createStore(
        reducers,
        preloadedState,
        applyMiddleware(middleware),
    )
}