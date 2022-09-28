/* eslint-disable arrow-body-style */
import React from 'react';
import { Link } from 'react-router-dom';
import FooterContainer from '../../components/Footer/FooterContainer'

const Home = () => (
  <>
    <main>
      <h2>Welcome to the homepage!</h2>
      <p>You can do this, I believe in you.</p>
    </main>
    <nav>
      <Link to="/about">About</Link>
    </nav>
    <FooterContainer />
  </>
)

export default Home;
