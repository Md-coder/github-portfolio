import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Pagination from '../pagination';
import RepoList from '../RepoList';
import { Outlet } from 'react-router-dom';

const Repositories = ({ url, handleUpdateSingleRepo }) => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [repoPerPage] = useState(5);

  const indexOfLastRepoPost = pageNumber * repoPerPage;
  const indexOfFirstRepoPost = indexOfLastRepoPost - repoPerPage;
  const currentRepos = repositories.slice(indexOfFirstRepoPost, indexOfLastRepoPost);

  const handleNext = (pageLength) => {
    if (pageNumber === pageLength) return;
    setPageNumber(pageNumber + 1);
  };

  const handlePrev = () => {
    if (pageNumber === 1) return;
    setPageNumber(pageNumber - 1);
  };

  const handlePageChange = (number) => {
    setPageNumber(number);
  };

  useEffect(() => {
    const fetchRepositories = async () => {
      setLoading(true);
      const response = await fetch(`${url}`);

      if (response.status === 404) {
        window.location = '/notFound';
      } else {
        await response.json().then((data) => {
          setLoading(false);
          setRepositories(data);
        });
      }
    };
    fetchRepositories();
  }, []);
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h1 style={{ color: 'white', textAlign: 'center' }}>My Repositories</h1>
        <RepoList
          repos={currentRepos}
          handleUpdateSingleRepo={handleUpdateSingleRepo}
          loading={loading}
        />
        <Pagination
          reposPerPage={repoPerPage}
          totalRepos={repositories.length}
          pageNumber={pageNumber}
          handleNext={handleNext}
          handlePrev={handlePrev}
          handlePageChange={handlePageChange}
        />
        <Outlet />
      </div>
    </>
  );
};

export default Repositories;
