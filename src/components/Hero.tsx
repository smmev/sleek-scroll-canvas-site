
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center p-6 md:p-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="flex flex-col justify-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            I am a Computer<br />Science Graduate
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Leveraging a strong foundation in algorithms, software development, 
            and problem-solving to create efficient and innovative technological 
            solutions.
          </p>
          <div>
            <Button 
              className="rounded-full px-6 md:px-8 py-5 md:py-6 bg-[#D46FDB] text-white hover:bg-[#B85DAC] transition-all"
              asChild
            >
              <a href="#portfolio">
                View Portfolio &nbsp;→
              </a>
            </Button>
          </div>
        </div>
        <div className="relative animate-fade-in">
          <div className="w-full h-auto aspect-square rounded-2xl shadow-lg overflow-hidden">
            <img
              src="/lovable-uploads/a68ac613-41cc-4453-bb59-d0e58bf35bb1.png"
              alt="Profile image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
