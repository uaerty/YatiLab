import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Research from './components/Research';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Users from './components/Users';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Research />
      <Users />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
