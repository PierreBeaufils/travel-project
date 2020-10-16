import React from 'react';
import './styles.css';

import Navbar from 'src/components/Navbar';
import Homepage from 'src/components/Homepage';

// == Composant
const App = () => (
  <div className="app">
    <Navbar />
    <Homepage />
  </div>
);

export default App;
