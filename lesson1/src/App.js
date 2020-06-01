import React from 'react';
import logo from './logo.svg';
import './App.css';
import Coworkers from './coworker';
import Comments from './components/comment';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Comments></Comments>      
      </header>
      
    </div>
  );
}

export default App;
