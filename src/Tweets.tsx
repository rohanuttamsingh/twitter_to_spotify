import React from 'react';

interface TweetsProps {
  tweets: {id: string, text: string}[];
}

function Tweets(props: TweetsProps) {
  const list = props.tweets.map((tweet, idx) => 
    <li key={idx}>{tweet.text}</li>
  )

  let intro = null;
  if (props.tweets.length > 0) {
    intro = <h4>Most Recent 10 Tweets</h4>;
  }

  return (
    <div className='row my-2'>
      {intro}
      <ol>{list}</ol>
    </div>
  );
}

export default Tweets;