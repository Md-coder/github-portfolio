import React from 'react';
import { Link } from 'react-router-dom';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { errorMessage: '' };
  }

  static getDerivedStateFromError(error) {
    return { errorMessage: error.toString() };
  }

  componentDidCatch(error, info) {
    console.log(error.toString(), info.componentDidCatch);
  }

  render() {
    if (this.state.errorMessage) {
      return (
        <>
          <div>
            <h1 style={{ marginRight: '1rem', color: 'white' }}>Oops! Something went wrong</h1>
          </div>
          <div>
            <Link to='/' className='button btnYellow'>
              Home
            </Link>
          </div>
        </>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
