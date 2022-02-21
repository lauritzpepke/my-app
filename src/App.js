import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'


function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to class 02363
        </p>
        <button type="button" onClick={() => setCount(count + 1)}>Click Me</button>
        <p>Clicks: <a id="clicks">{count}</a></p>

      
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}



export default App;