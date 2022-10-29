import React from 'react';
import { Link } from 'react-router-dom';
import fork from './assets/icons/fork.svg';
import spinner from './assets/icons/spinner.gif';

const RepoList = ({ repos, handleUpdateSingleRepo, loading }) => {
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
      <div>
        <ul>
          {repos.map((repo) => (
            <li className='list' key={repo.id} onClick={() => handleUpdateSingleRepo(repo)}>
              <Link className='linkList' to='repoDetails'>
                <span>{repo.full_name}</span>
                <span style={{ display: 'flex' }}>
                  <img src={fork} alt='fork_icon' style={{ paddingRight: '5px', color: 'white' }} />
                  {repo.forks}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default RepoList;
