import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Profile from '../Profile';

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const Home = ({ setUrl }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const githubFetch = async (text) => {
      setLoading(true);

      const response = await fetch(`${GITHUB_URL}/users/${text}`, {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      });

      if (response.status === 404) {
        window.location = '/notFound';
      } else {
        await response.json().then((data) => {
          setLoading(false);
          setUser(data);
          setUrl(data.repos_url);
        });
      }
    };
    githubFetch('Md-coder');
  }, []);

  return (
    <>
      <Profile user={user} loading={loading} /> <br />
    </>
  );
};

export default Home;
