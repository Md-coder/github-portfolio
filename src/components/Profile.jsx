import React from 'react';
import twitter from './assets/icons/twitter.svg';
import { Link } from 'react-router-dom';
import spinner from './assets/icons/spinner.gif';
import './style.css';

const Profile = ({ user, loading }) => {
  if (loading) {
    return (
      <>
        <div style={{ margin: 'auto' }}>
          <img
            title='loading'
            src={spinner}
            width='100'
            height='100'
            alt='spinner'
            allowFullScreen
            style={{ margin: 'auto' }}
          />
        </div>
      </>
    );
  }
  return (
    <>
      <div className='profile'>
        <div className='img'>
          <img src={user.avatar_url} alt='avatar' style={{ width: '250px' }} />
        </div>
        <div style={{ textAlign: 'left' }}>
          <h1>{user.name}</h1>
          <h3>{user.login}</h3>
          <p>{user.bio}</p>
          <p>
            <img
              src={twitter}
              alt='twitter_icon'
              style={{ width: '20px', paddingRight: '1rem', color: 'white' }}
            />
            {user.twitter_username}
            <Link to='/errorBoundary' className='smallButton'>
              Error
            </Link>
          </p>
          <div>
            <Link to='/repositories' className='button btnGreen'>
              repositories
            </Link>
            <a href={user.html_url} className='button btnYellow'>
              visit profile
            </a>
            <Link to='/donaldTrump' className='button btnBlue'>
              Donald Trump
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
