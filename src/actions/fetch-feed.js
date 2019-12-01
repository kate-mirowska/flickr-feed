import axios from 'axios';

export const FETCH_FEED_PENDING = 'FETCH_FEED_PENDING';
export const FETCH_FEED_SUCCESS = 'FETCH_FEED_SUCCESS';
export const FETCH_FEED_ERROR = 'FETCH_FEED_ERROR';

function fetchFeedPending() {
    return {
        type: FETCH_FEED_PENDING
    }
}

function fetchFeedSuccess(feed) {
    return {
        type: FETCH_FEED_SUCCESS,
        feed
    }
}

function fetchFeedError(error) {
    return {
        type: FETCH_FEED_ERROR,
        error
    }
}

function fetchFeed() {
    const urlEndpoint = `https://api.flickr.com/services/feeds/photos_public.gne?tags=space&tagmode=all&format=json&nojsoncallback=1`;
    
    return dispatch => {
        dispatch(fetchFeedPending());

        return axios.get(urlEndpoint)
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }

                dispatch(fetchFeedSuccess(res.data.items));
                
                return res.data.items;
            })
            .catch(error => {
                dispatch(fetchFeedError(error));
            })
    }
}

export default fetchFeed;