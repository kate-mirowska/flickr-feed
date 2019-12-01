import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import moment from 'moment';
import PropTypes from 'prop-types';

class FeedItem extends Component {   
    truncateString(string, length) {
        return string.length >= 50 ? `${string.substring(0, length)}...` : string
    }

    formatDate(date) {
        let dateArr = date.split('T');
        let dateFormatted = moment(dateArr[0]).format('Do, MMM, YYYY');
        let timeFormatted = dateArr[1].slice(0, dateArr[1].length - 4);

       return `${dateFormatted} at ${timeFormatted}`;
    }

    render() {
        const { media, title, published, author_id, link } = this.props.feedItem;
        this.formatDate(published);

        return (
            <li className="feed-item-wrapper">
                <div>
                    <Link to={{
                        pathname: `/post/${this.props.id}`, 
                        feedItem: this.props.feedItem,
                        formattedDate: this.formatDate(published),
                        id: this.props.id
                    }}>
                        <div className="feed-item-image">
                            <img src={media.m} alt=""/>
                        </div>
                    </Link>
                </div>
                <div className="feed-item-content">
                    <h2>{this.truncateString(title, 50)}</h2>
                    <div className="feed-item-info">
                        <div className="feed-item-date">Published: {this.formatDate(published)}</div>
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
            </li>
        )
    }
}

FeedItem.propTypes = {
    feedItem: PropTypes.object.isRequired
}

export default FeedItem;