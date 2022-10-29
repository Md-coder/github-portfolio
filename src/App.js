import './App.css';
import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Repositories from './components/pages/Repositories';
import RepoDetails from './components/pages/RepoDetails';
import NotFound from './components/pages/NotFound';
import DonaldTrump from './components/pages/DonaldTrump';
import ErrorPage from './components/pages/ErrorBoundary';

function App() {
  const [repoUrl, setRepoUrl] = useState('');
  const [singleRepo, setSingleRepo] = useState({});

  const handleUpdateSingleRepo = (repo) => {
    setSingleRepo(repo);
  };

  const ErrorFallback = ({ error, resetErrorBoundary }) => {
    return (
      <div role='alert'>
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    );
  };

  return (
    <div className='App'>
      <Router>
        <Nav />
        <div className='body'>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Routes>
              <Route path='/' element={<Home setUrl={setRepoUrl} />} />
              <Route path='/errorBoundary' element={<ErrorPage />} />
              <Route path='/notFound' element={<NotFound />} />
              <Route path='/donaldTrump' element={<DonaldTrump />} />
              <Route
                path='/repositories'
                element={
                  <Repositories url={repoUrl} handleUpdateSingleRepo={handleUpdateSingleRepo} />
                }
              >
                <Route path='repoDetails' element={<RepoDetails singleRepo={singleRepo} />} />
              </Route>
            </Routes>
          </ErrorBoundary>
        </div>
      </Router>
    </div>
  );
}

export default App;
