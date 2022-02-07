import React, {useState} from 'react';
import TwitterAccountLookup from './TwitterAccountLookup';
import './App.css';

function App() {
  const [twitterUserLookup, setTwitterUserLookup] = useState('');

  return (
    <div className='container my-4'>
      <h1>Twitter to Spotify</h1>
      <TwitterAccountLookup />
    </div>
  );
}

export default App;
