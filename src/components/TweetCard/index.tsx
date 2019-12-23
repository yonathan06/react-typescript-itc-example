import React from 'react';
import { Tweet } from '../../lib/api';
import './style.css';

const TweetCard = (props: { tweet: Tweet }) => {
  const { tweet } = props;
  return (
    <div className="tweet-card">
      <div className="tweet-info">
        <span>
          {tweet.userName}
        </span>
        <span>
          {tweet.date}
        </span>
      </div>
      <div>
        {tweet.content}
      </div>
    </div>
  );
}

export default TweetCard;