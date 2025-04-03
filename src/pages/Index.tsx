
import React from 'react';
import Sidebar from '@/components/Sidebar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />
      <main className="main-content">
        <Hero />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
