import { FETCH_FEED_PENDING, FETCH_FEED_SUCCESS, FETCH_FEED_ERROR } from '../actions/fetch-feed';

const initialState = {
    pending: false,
    feed: [],
    error: null
}

export function feedReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_FEED_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_FEED_SUCCESS:
            return {
                ...state,
                pending: false,
                feed: action.feed
            }
        case FETCH_FEED_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
}

export default feedReducer;