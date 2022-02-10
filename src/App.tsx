import React, {useEffect, useState} from 'react';
import TwitterAccountLookup from './TwitterAccountLookup';
import Tweets from './Tweets';
import './App.css';

function App() {
  const [twitterAccountId, setTwitterAccountId] = useState(0);
  const [tweets, setTweets] = useState<{id: string, text: string}[]>([]);
  const numTweets = 10;

  useEffect(getTweets, [twitterAccountId]);

  function getTweets() {
    fetch('/api/user_tweets/' + twitterAccountId + '/' + numTweets)
      .then(res => res.json())
      .then(res => setTweets(res))
      .catch(err => console.log(err))
  }

  return (
    <div className='container my-4'>
      <h1>Twitter to Spotify</h1>
      <TwitterAccountLookup setTwitterAccountId={setTwitterAccountId} invalidUsername={twitterAccountId === -1} />
      <Tweets tweets={tweets} />
    </div>
  );
}

export default App;
