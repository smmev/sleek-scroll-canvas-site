
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center p-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col justify-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            I am a Computer<br />Science Graduate
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Leveraging a strong foundation in algorithms, software development, 
            and problem-solving to create efficient and innovative technological 
            solutions.
          </p>
          <div>
            <Button 
              className="rounded-full px-8 py-6 bg-black text-white hover:bg-gray-800 transition-all"
              asChild
            >
              <a href="#portfolio">
                View Portfolio &nbsp;→
              </a>
            </Button>
          </div>
        </div>
        <div className="relative animate-fade-in">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Abstract technology pattern"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
