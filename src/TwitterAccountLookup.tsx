import React, { useState } from 'react';

function TwitterAccountLookup() {
  const [input, setInput] = useState('');

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    setInput(e.currentTarget.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    console.log(e);
    e.preventDefault();
  }

  return (
    <div className='row'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='twitterUsername' className='form-label'>Twitter Username</label>
        <input type='text' className='form-control' id='twitterUsername' value={input} onChange={handleChange} />
        <button type='submit' className="btn btn-primary my-1">Submit</button>
      </form>
    </div>
  )
}

export default TwitterAccountLookup;