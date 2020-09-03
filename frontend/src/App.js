import React from 'react';
import './App.css';
import Welcome from './components/Welcome.js'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Welcome />
      <About />
      <Footer />
    </div>
  );
}

export default App;
