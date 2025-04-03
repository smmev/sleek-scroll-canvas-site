
import React from 'react';
import { Link } from 'react-router-dom';

// Save image to public folder
const profileImage = '/lovable-uploads/7b5f73eb-9dd9-40c8-95be-609c91c6daae.png';

const Sidebar = () => {
  return (
    <div className="sidebar bg-white">
      <div className="flex flex-col items-center mb-8">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-gray-200">
          <img 
            src={profileImage} 
            alt="Sev Mallabo" 
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-xl font-semibold">Sev Mallabo</h2>
        <p className="text-sm text-gray-500 text-center mt-1">
          Computer Science Graduate | Developer | Tech Enthusiast
        </p>
      </div>

      <nav className="mt-8">
        <ul className="space-y-2">
          <li className="flex items-center">
            <span className="mr-2">•</span>
            <a href="#home" className="nav-link">Home</a>
          </li>
          <li>
            <a href="#about" className="nav-link ml-6">About</a>
          </li>
          <li>
            <a href="#services" className="nav-link ml-6">Services</a>
          </li>
          <li>
            <a href="#skills" className="nav-link ml-6">Skills</a>
          </li>
          <li>
            <a href="#experience" className="nav-link ml-6">Experience</a>
          </li>
          <li>
            <a href="#portfolio" className="nav-link ml-6">Portfolio</a>
          </li>
          <li>
            <a href="#blog" className="nav-link ml-6">Blog</a>
          </li>
          <li>
            <a href="#contact" className="nav-link ml-6">Contact</a>
          </li>
        </ul>
      </nav>

      <div className="mt-auto pt-8">
        <div className="flex space-x-4 mb-4 justify-center">
          <a href="#" className="social-icon" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a href="#" className="social-icon" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="#" className="social-icon" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a href="#" className="social-icon" aria-label="Email">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
        </div>
        <div className="text-center text-xs text-gray-400">
          <p>© 2025 Sev Mallabo.</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
