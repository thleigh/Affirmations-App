import React from 'react';
import './App.css';
import Welcome from './components/Welcome.js'
import About from './components/About'
import Footer from './components/Footer'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Welcome />
      <About />
      <Footer />
    </div>
  );
}

export default App;
