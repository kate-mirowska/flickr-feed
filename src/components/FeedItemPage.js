import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';

class FeedItemPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          feedItems: []
        };
    }

    render() {
        const { media, title, author_id, link } = this.props.location.feedItem;
        const formattedDate = this.props.location.formattedDate;
        return (
            <>
                {
                    !this.props.location.feedItem ? 
                        <Redirect to="/" />
                    :
                    <div className="App">
                        <div className="feed-item-wrapper">
                            <div>
                                <div className="feed-item-image">
                                    <img src={media.m} alt=""/>
                                </div>
                            </div>
                            <div className="feed-item-content">
                                <h2>{title}</h2>
                                <div className="feed-item-date">Published: {formattedDate}</div>
                                <div className="feed-item-author">
                                    <a 
                                        href={`https://www.flickr.com/${author_id}`} 
                                        title="Photo author"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        Photo author
                                    </a>
                                </div>
                                <div className="feed-item-link">
                                    <a 
                                        href={link} 
                                        title="View on Flickr"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        View on Flickr
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </>
        )
    }
}

export default withRouter(FeedItemPage);