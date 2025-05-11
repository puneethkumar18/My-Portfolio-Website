import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Qualifications from './components/Qualifications';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          // Add a small delay to ensure smooth scrolling after page load
          setTimeout(() => {
            window.scrollTo({
              top: element.getBoundingClientRect().top + window.scrollY - 80, // Account for header height
              behavior: 'smooth',
            });
          }, 100);
        }
      }
    };

    // Handle hash in URL on initial page load
    handleHashChange();

    // Add event listener for hash changes
    window.addEventListener('hashchange', handleHashChange);

    // Update page title
    document.title = 'John Doe | Frontend Developer';

    // Clean up event listener
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="dark:bg-gray-900 min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Qualifications />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;