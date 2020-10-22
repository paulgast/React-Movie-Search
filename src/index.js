import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Components/searchMovies'
import SearchMovies from './Components/searchMovies';

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">React Movie Search</h1>
        <SearchMovies/>
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Main/>
  </React.StrictMode>,
  document.getElementById('root')
);

