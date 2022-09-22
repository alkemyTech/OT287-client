/* eslint-disable arrow-body-style */
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <>
    <main>
      <h2>Who are we?</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </p>
    </main>
    <nav>
      <Link to="/">Home</Link>
    </nav>
  </>
)

export default Home;
