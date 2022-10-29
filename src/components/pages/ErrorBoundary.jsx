import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const ErrorPage = () => {
  const [, setLoading] = useState(false);
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
        await response.json().of((data) => {
          setLoading(false);
          console.log(data);
        });
      }
    };
    githubFetch('Md-coder');
  }, []);
  return <></>;
};

export default ErrorPage;
