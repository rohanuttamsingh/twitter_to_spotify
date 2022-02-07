import React, { useState } from 'react';

interface TwitterAccountLookupProps {
  setTwitterUserId: (userId: number) => void;
}

function TwitterAccountLookup(props: TwitterAccountLookupProps) {
  const [input, setInput] = useState('');

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    setInput(e.currentTarget.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    fetch('/api/username_to_id/' + input)
      .then(res => res.json())
      .then(res => props.setTwitterUserId(res))
      .catch(err => console.log(err));
    e.preventDefault();
  }

  return (
    <div className='row'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='twitterUsername' className='form-label'>Twitter Username</label>
        <input type='text' className='form-control' id='twitterUsername' value={input} onChange={handleChange} />
        <button type='submit' className='btn btn-primary my-1'>Submit</button>
      </form>
    </div>
  )
}

export default TwitterAccountLookup;