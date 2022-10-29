import React from 'react';

const RepoDetails = ({ singleRepo }) => {
  return (
    <>
      <div className='repoDetails'>
        <span>{singleRepo.name}</span>
        <span>
          Has isuues:{singleRepo.has_issues ? <span>&#x2713;</span> : <span>&#x2717;</span>}
        </span>
        <span>forked:{singleRepo.fork ? <span>&#x2713;</span> : <span>&#x2717;</span>}</span>
        <span>
          Has downloads:{singleRepo.has_downloads ? <span>&#x2713;</span> : <span>&#x2717;</span>}
        </span>
      </div>
    </>
  );
};

export default RepoDetails;
