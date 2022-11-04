import './App.css';
import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import { useState } from 'react';
import Repositories from './components/pages/Repositories';
import RepoDetails from './components/pages/RepoDetails';
import NotFound from './components/pages/NotFound';
import DonaldTrump from './components/pages/DonaldTrump';
import ErrorPage from './components/pages/ErrorPage';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  const [repoUrl, setRepoUrl] = useState('');
  const [singleRepo, setSingleRepo] = useState({});

  const handleUpdateSingleRepo = (repo) => {
    setSingleRepo(repo);
  };

  return (
    <div className='App'>
      <Router>
        <Nav />
        <div className='body'>
          <Routes>
            <Route path='/' element={<Home setUrl={setRepoUrl} />} />
            <Route
              path='/errorBoundary'
              element={
                <ErrorBoundary>
                  <ErrorPage />
                </ErrorBoundary>
              }
            />
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
        </div>
      </Router>
    </div>
  );
}

export default App;
