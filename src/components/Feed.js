import React, { Component } from 'react';
import axios from 'axios';
import FeedItem from './FeedItem';

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
                this.setState({
                    feedItems: response.data.items,
                    isLoaded: true
                })
            })
            .catch((error) => { 
                this.setState({
                    isLoaded: true,
                    error
                })
            }
        )
    }

    render() {
        return (
            <div className="App">
                <header>
                    <h1>Flickr public feed</h1>
                </header>
                <div className="feed-wrapper">
                    <ul>
                        {this.state.feedItems.map((item, index) => (
                                <FeedItem 
                                    key={index} 
                                    feedItem={item}
                                    id={index}
                                />
                            )
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Feed;