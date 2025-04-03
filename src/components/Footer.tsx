
import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-8">
      <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="grid grid-cols-3 gap-x-16 gap-y-4 mb-6 md:mb-0">
          <a href="#about" className="text-sm hover:text-gray-900">Profile</a>
          <a href="#skills" className="text-sm hover:text-gray-900">Hobbies</a>
          <a href="#contact" className="text-sm hover:text-gray-900">Contact</a>
        </div>
        <div className="text-sm text-gray-500">
          © 2025 Sev Mallabo. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
