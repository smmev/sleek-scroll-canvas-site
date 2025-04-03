
import React from 'react';
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-8">
      <div className="max-w-6xl mx-auto px-8">
        {/* Profile Section */}
        <section id="profile" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Profile</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
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
                className="mt-4 bg-black hover:bg-gray-800"
              >
                Download Resume
              </Button>
            </div>
            <div className="flex justify-center">
              <div className="w-56 h-56 rounded-full overflow-hidden border-2 border-gray-200">
                <img 
                  src="/lovable-uploads/8ae21fd7-1e84-4c35-b1f2-5b56efcdfc74.png" 
                  alt="Sev Mallabo" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Hobbies Section */}
        <section id="skills" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Hobbies</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold mb-2">Gaming</h3>
              <p className="text-gray-600">
                I enjoy exploring virtual worlds and strategic gameplay. My favorite genres include RPGs and strategy games.
              </p>
              <Button 
                variant="outline" 
                className="mt-4 w-full"
                onClick={() => window.location.href = '#gaming'}
              >
                Learn More
              </Button>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold mb-2">Coding Projects</h3>
              <p className="text-gray-600">
                In my free time, I work on personal coding projects to explore new technologies and frameworks.
              </p>
              <Button 
                variant="outline" 
                className="mt-4 w-full"
                onClick={() => window.location.href = '#projects'}
              >
                See Projects
              </Button>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold mb-2">Reading</h3>
              <p className="text-gray-600">
                I'm an avid reader of tech blogs, science fiction, and books on emerging technologies.
              </p>
              <Button 
                variant="outline" 
                className="mt-4 w-full"
                onClick={() => window.location.href = '#reading'}
              >
                Book List
              </Button>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <div className="max-w-lg">
            <p className="text-gray-600 mb-4">
              Feel free to reach out to me through any of the following channels. I'm always open to discussing new opportunities and projects.
            </p>
            <div className="flex space-x-6 mb-6">
              <a href="mailto:contact@sevmallabo.com" className="flex items-center text-gray-700 hover:text-black">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                contact@sevmallabo.com
              </a>
            </div>
            <div className="flex space-x-4">
              <Button 
                onClick={() => window.open('https://github.com', '_blank')}
                variant="outline"
                size="icon"
                className="rounded-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </Button>
              <Button 
                onClick={() => window.open('https://linkedin.com', '_blank')}
                variant="outline"
                size="icon"
                className="rounded-full"
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
                className="rounded-full"
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
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <div className="grid grid-cols-3 gap-x-16 gap-y-4 mb-6 md:mb-0">
            <a href="#profile" className="text-sm hover:text-gray-900">Profile</a>
            <a href="#skills" className="text-sm hover:text-gray-900">Hobbies</a>
            <a href="#contact" className="text-sm hover:text-gray-900">Contact</a>
          </div>
          <div className="text-sm text-gray-500">
            © 2025 Sev Mallabo. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
