import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import fetchFeed from '../reducers/feed-reducer';

export default () => {
    return createStore(
        combineReducers({
            fetchFeed
        }),
        applyMiddleware(thunk)
    );
};