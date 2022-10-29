import React from 'react';
import './style.css';

const Pagination = ({
  reposPerPage,
  totalRepos,
  handlePageChange,
  handlePrev,
  handleNext,
  pageNumber,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalRepos / reposPerPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <ul className='flex_numbers'>
          <button className='btn' onClick={() => handlePrev()} disabled={pageNumber === 1}>
            Prev &#8592;
          </button>
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={`page_numbers ${pageNumber === number ? 'is_active' : ''}`}
              onClick={() => handlePageChange(number)}
            >
              <span style={{ textDecoration: 'none', color: 'black' }}>{number}</span>
            </li>
          ))}
          <button
            className='btn'
            onClick={() => handleNext(pageNumbers.length)}
            disabled={pageNumber === pageNumbers.length}
          >
            Next &#8594;
          </button>
        </ul>
      </div>
    </>
  );
};

export default Pagination;
