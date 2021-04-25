import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Routes from './view/Routes';
// import TodoPage from './page/TodoPage';
// import PostPage from './page/PostPage';

class App extends Component {
  
  render() {
    return (
      <div> <hr/>
        <Link to="/">todo</Link> | 
        <Link to="/post"> post</Link> |
        <Routes/>
      </div>
    );
  }
}

export default App;