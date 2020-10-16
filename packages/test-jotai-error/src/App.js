import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { atom, Provider, useAtom } from "jotai";

export const countAtom = atom(0);

export function Example() {
  const [count, setCount] = useAtom(countAtom);

  return (
    <div>
      {count}
      <button onClick={() => setCount((c) => c + 1)}>one up</button>
    </div>
  );
}


function App() {
  return (
    <Provider>
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
    </Provider>
  );
}

export default App;
