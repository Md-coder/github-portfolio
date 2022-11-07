import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import spinner from '../assets/icons/spinner.gif';

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const DonaldTrump = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const githubFetch = async (text) => {
      setLoading(true);
      const response = await fetch(`${GITHUB_URL}/users/${text}`);

      if (response.status === 404) {
        window.location = '/notFound';
      } else {
        await response.json().then((data) => {
          setLoading(false);
        });
      }
    };
    githubFetch('donaldTrumpzzzzzzz');
  }, []);

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
  return <div></div>;
};

export default DonaldTrump;
