import React from 'react';
import './styles.css';

import Navbar from 'src/components/Navbar';
import Homepage from 'src/components/Homepage';
import Footer from 'src/components/Footer';

// == Composant
const App = () => (
  <div className="app">
    <Navbar />
    <Homepage />
    <Footer />
  </div>
);

export default App;
