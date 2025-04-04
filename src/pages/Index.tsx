
import React from 'react';
import Sidebar from '@/components/Sidebar';
import Hero from '@/sections/Hero/Hero';
import About from '@/sections/About/About';
import Portfolio from '@/sections/Portfolio/Portfolio';
import Contact from '@/sections/Contact/Contact';
import Footer from '@/components/Footer';
import Services from '@/sections/Services/Services';
import Experience from '@/sections/Experience/Experience';
import Blog from '@/sections/Blog/Blog';

const Index = () => {
  // Ensure we're using client-side routing properly for static export
  React.useEffect(() => {
    // Scroll to hash on load if present
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        element.scrollIntoView();
      }
    }
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />
      <main className="main-content">
        <Hero />
        <About />
        <Services />
        <Experience />
        <Portfolio />
        <Blog />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
