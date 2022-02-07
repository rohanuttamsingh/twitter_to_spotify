import React, {useState} from 'react';
import TwitterAccountLookup from './TwitterAccountLookup';
import './App.css';

function App() {
  const [twitterUserId, setTwitterUserId] = useState(-1);

  return (
    <div className='container my-4'>
      <h1>Twitter to Spotify</h1>
      <TwitterAccountLookup setTwitterUserId={setTwitterUserId} />
    </div>
  );
}

export default App;
