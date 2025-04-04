
import React from 'react';
import { Button } from "@/components/ui/button";

const Profile = () => {
  return (
    <section id="profile" className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-center md:text-left">Profile</h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <p className="text-gray-600 mb-4">
            I'm Sev Mallabo, a Computer Science graduate with a passion for creating 
            efficient and innovative technological solutions. I specialize in software 
            development, algorithms, and problem-solving.
          </p>
          <p className="text-gray-600">
            My academic background has equipped me with a strong foundation in 
            programming principles, data structures, and system design. I'm constantly 
            looking to expand my knowledge and take on new challenges in the tech industry.
          </p>
          <Button 
            onClick={() => window.open('/resume.pdf', '_blank')}
            className="mt-6 bg-[#D46FDB] hover:bg-[#B85DAC]"
          >
            Download Resume
          </Button>
        </div>
        <div className="flex justify-center order-1 md:order-2">
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-yellow-500 shadow-lg">
            <img 
              src="/lovable-uploads/8ae21fd7-1e84-4c35-b1f2-5b56efcdfc74.png" 
              alt="Sev Mallabo" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
