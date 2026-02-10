import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TechBar from './components/TechBar';
import Terminal from './components/Terminal';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen text-white selection:bg-purple-500 selection:text-white">
      <Header />
      <main>
        <Hero />
        <TechBar />
        <Projects />
        <Terminal />
      </main>
      <Footer />
    </div>
  );
}

export default App;
