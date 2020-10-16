import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider as JotaiProvider } from "jotai";
import { Example } from "./Example";

function App() {
  return (
    <JotaiProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Example />
      </div>
    </JotaiProvider>
  );
}

export default App;
