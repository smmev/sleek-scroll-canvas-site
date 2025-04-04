
import React from 'react';
import { Button } from "@/components/ui/button";
import Profile from '@/sections/Profile/Profile';
import Hobbies from '@/sections/Hobbies/Hobbies';
import FooterLinks from '@/sections/Footer/Footer';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Profile Section */}
        <Profile />
        
        {/* Hobbies Section */}
        <Hobbies />
        
        {/* Contact Section */}
        <section id="contact-info" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center md:text-left">Contact</h2>
          <div className="max-w-lg mx-auto md:mx-0">
            <p className="text-gray-600 mb-6">
              Feel free to reach out to me through any of the following channels. I'm always open to discussing new opportunities and projects.
            </p>
            <div className="flex items-center text-gray-700 hover:text-black mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <a href="mailto:sev.adrianm02@gmail.com" className="hover:underline">sev.adrianm02@gmail.com</a>
            </div>
            <div className="flex space-x-4">
              <Button 
                onClick={() => window.open('https://github.com', '_blank')}
                variant="outline"
                size="icon"
                className="rounded-full border-black hover:bg-black hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </Button>
              <Button 
                onClick={() => window.open('https://linkedin.com', '_blank')}
                variant="outline"
                size="icon"
                className="rounded-full border-black hover:bg-black hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Button>
              <Button 
                onClick={() => window.open('https://instagram.com', '_blank')}
                variant="outline"
                size="icon"
                className="rounded-full border-black hover:bg-black hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Footer Links and Copyright */}
        <FooterLinks />
      </div>
    </footer>
  );
};

export default Footer;
