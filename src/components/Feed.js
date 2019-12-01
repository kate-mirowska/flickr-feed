import React, { Component } from 'react';
import { connect } from "react-redux";
import Header from './Header';
import fetchFeed from "../actions/fetch-feed";
import FeedItem from './FeedItem';

class ConnectedFeed extends Component {
    componentDidMount() {
        this.props.dispatch(fetchFeed())
    }

    render() {
        if (this.props.pending) {
            return (
                <div>Loading....</div>
            ) 
        }

        if (this.props.error) {
            return (
                <div>There was an error while fetching the data.</div>
            )
        }

        if (this.props.feed === null) {
            return (
                <div className="no-feed-message">
                    <span>No feed to show</span>
                </div>
            )
        }

        return (
            <>
                <Header title={'Flickr public feed'}/>
                <div className="feed-wrapper">
                    <ul>
                        {
                            this.props.feed.map((item, index) => (
                                <FeedItem
                                    key={index}
                                    feedItem={item}
                                    id={index}
                                />
                            ))
                        }
                    </ul>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        feed: state.fetchFeed.feed,
        pending: state.pending,
        error: state.error
    }
}

export default connect(mapStateToProps)(ConnectedFeed)