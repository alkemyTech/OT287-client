import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './app/components/home/home'
import About from './app/components/about/about'
import logo from './logo.svg'
import Counter from './features/counter/Counter'

import './App.css'

const App = () => (
  <>
    <h1>Welcome to learn React Router!</h1>
    <Routes>
      <Route
        path="/"
        element={(
          <Home>
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Counter />
                <p>
                  Edit
                  {' '}
                  <code>src/App.js</code>
                  {' '}
                  and save to reload.
                </p>
                <span>
                  <span>Learn </span>
                  <a
                    className="App-link"
                    href="https://reactjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    React
                  </a>
                  <span>, </span>
                  <a
                    className="App-link"
                    href="https://redux.js.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Redux
                  </a>
                  <span>, </span>
                  <a
                    className="App-link"
                    href="https://redux-toolkit.js.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Redux Toolkit
                  </a>
                  ,
                  <span> and </span>
                  <a
                    className="App-link"
                    href="https://react-redux.js.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    React Redux
                  </a>
                </span>
              </header>
            </div>
          </Home>
)}
      />
      <Route path="about" element={<About />} />
    </Routes>
  </>
)

export default App
