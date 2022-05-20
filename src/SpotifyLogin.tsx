import React, { useEffect } from 'react';

interface SpotifyLoginProps {
  setSpotifyToken: (spotifyToken: string) => void;
  loggedIn: boolean;
}

function SpotifyLogin(props: SpotifyLoginProps) {
  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem('spotifyToken');

    if (!token && hash) {
      token = hash.substring(1).split('&').find(elem => elem.startsWith('access_token'))!.split('=')[1];
      window.location.hash = '';
      window.localStorage.setItem('spotifyToken', token!);
    }

    props.setSpotifyToken(token!);
  }, []);

  function spotifyLogout() {
    props.setSpotifyToken('');
    window.localStorage.removeItem('spotifyToken');
  }

  return (
    <div className='row my-2'>
      <form>
        {props.loggedIn ?
        <button onClick={spotifyLogout} className='btn btn-danger my-1'>Logout of Spotify</button> :
        <button className='btn btn-success my-1'>
          <a href={`https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&redirect_uri=http://localhost:3000&response_type=token`}>
            Login to Spotify
          </a>
        </button>
        }
      </form>
    </div>
  )
}

export default SpotifyLogin;