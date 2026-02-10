import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TechBar from './components/TechBar';
import Projects from './components/Projects';
import Terminal from './components/Terminal';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen text-white selection:bg-primary selection:text-white overflow-hidden relative">
      {/* Background Ambient Glows */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full mix-blend-screen animate-pulse-slow"></div>
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-secondary/20 blur-[100px] rounded-full mix-blend-screen animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full mix-blend-screen animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
      </div>

      <Header />
      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
