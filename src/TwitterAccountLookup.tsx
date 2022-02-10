import React, { useState } from 'react';

interface TwitterAccountLookupProps {
  setTwitterAccountId: (accountId: number) => void;
  invalidUsername: boolean;
}

function TwitterAccountLookup(props: TwitterAccountLookupProps) {
  const [input, setInput] = useState('');

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    setInput(e.currentTarget.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    fetch('/api/username_to_id/' + input)
      .then(res => res.json())
      .then(res => props.setTwitterAccountId(res))
      .catch(err => console.log(err));
    e.preventDefault();
  }

  /*
  async function getTweets() {
    console.log(twitterAccountId);
    await fetch('/api/user_tweets/' + twitterAccountId + '/' + numTweets)
      .then(res => res.json())
      .then(res => props.setTweets(res))
      .catch(err => console.log(err))
  }
  */

  return (
    <div className='row my-2'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='twitterUsername' className='form-label'>Twitter Username</label>
        <input type='text' className='form-control' style={props.invalidUsername ? {borderColor: 'red'} : {}} id='twitterUsername' value={input} onChange={handleChange} />
        {props.invalidUsername ? <p>No account found with that username</p> : <></>}
        <button type='submit' className='btn btn-primary my-1'>Submit</button>
      </form>
    </div>
  )
}

export default TwitterAccountLookup;