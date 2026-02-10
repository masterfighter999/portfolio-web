import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TechBar from './components/TechBar';
import AuthorizationLevels from './components/AuthorizationLevels';
import Projects from './components/Projects';
import Terminal from './components/Terminal';
import Footer from './components/Footer';
import BackgroundAnimation from './components/BackgroundAnimation';

function App() {
  return (
    <div className="min-h-screen text-white selection:bg-primary selection:text-white overflow-hidden relative">
      {/* Background Ambient Glows */}
      {/* Background Ambient Glows */}
      <BackgroundAnimation />

      <Header />
      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <TechBar />
        <AuthorizationLevels />
        <Projects />
        <Terminal />
      </main>
      <Footer />
    </div>
  );
}

export default App;
