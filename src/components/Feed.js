import React, { Component } from 'react';
import axios from 'axios';
import FeedItem from './FeedItem';

import PropTypes from 'prop-types';

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          feedItems: []
        };
    }
    
    componentDidMount() {
        const urlEndpoint = `https://api.flickr.com/services/feeds/photos_public.gne?tags=space&tagmode=all&format=json&nojsoncallback=1`;

        axios.get(urlEndpoint)
            .then((response) => { 
                console.log(response.data)
                this.setState({
                    feedItems: response.data.items,
                    isLoaded: true
                })
            })
            .catch((error) => { 
                console.log(error)
                this.setState({
                    isLoaded: true,
                    error
                })
            }
        )
    }

    render() {
        return (
            <div className="feed-wrapper">
                <ul>
                    {this.state.feedItems.map((item, index) => (
                            <FeedItem 
                                key={index} 
                                feedItem={item}
                            />
                        )
                    )}
                </ul>
            </div>
        )
    }
}

Feed.propTypes = {
}

export default Feed;