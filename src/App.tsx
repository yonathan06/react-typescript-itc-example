import React, { useState, useEffect } from 'react';
import './App.css';
import { getTweets, Tweet } from './lib/api';
import TweetCard from './components/TweetCard';

const App: React.FC = () => {
  const [tweets, setTweets] = useState([] as Tweet[]);
  const updateTweets = () => {
    getTweets().then(data => {
      const sortedTweets = data.tweets
        .sort((a, b) =>
          new Date(b.date).getTime() - new Date(a.date).getTime()
        );
      setTweets(sortedTweets);
    })
  }
  useEffect(() => {
    updateTweets();
    const interval = setInterval(() => {
      updateTweets();
    }, 2000);
    return () => clearInterval(interval);
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {tweets.map(tweet =>
            <TweetCard key={tweet.date} tweet={tweet} />
          )}
        </ul>
      </header>
    </div>
  );
}

export default App;
