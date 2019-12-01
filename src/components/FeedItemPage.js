import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import Header from './Header';

class FeedItemPage extends Component {
    render() {
        if (this.props.location.id !== 0 && !this.props.location.id) {
            return (
                <Redirect to="/" />
            )
        }

        const { media, title, author_id, link } = this.props.location.feedItem;
        const formattedDate = this.props.location.formattedDate;

        return (
            <>
                <Header title={'Flickr public feed'} />
                <div className="App">
                    <div className="feed-item-wrapper">
                        <div>
                            <div className="feed-item-image">
                                <img src={media.m} alt="" />
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
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        feed: state.fetchFeed.feed
    }
}

export default connect(mapStateToProps)(withRouter(FeedItemPage));