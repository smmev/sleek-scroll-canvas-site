
import React from 'react';

const Footer = () => {
  return (
    <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
      <div className="grid grid-cols-3 gap-x-8 md:gap-x-16 gap-y-4 mb-6 md:mb-0">
        <a href="#profile" className="text-sm hover:text-gray-900">Profile</a>
        <a href="#hobbies" className="text-sm hover:text-gray-900">Hobbies</a>
        <a href="#contact" className="text-sm hover:text-gray-900">Contact</a>
      </div>
      <div className="text-sm text-gray-500">
        © {new Date().getFullYear()} Sev Mallabo. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
