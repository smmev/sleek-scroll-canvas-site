
import React, { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

// Using the profile image
const profileImage = '/lovable-uploads/8ae21fd7-1e84-4c35-b1f2-5b56efcdfc74.png';

const Sidebar = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobile && isMenuOpen && !target.closest('.mobile-nav') && !target.closest('.menu-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobile, isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: "#home", label: "Home", className: "text-white" },
    { href: "#about", label: "About", className: "text-gray-200 hover:text-white" },
    { href: "#services", label: "Services", className: "text-gray-200 hover:text-white" },
    { href: "#hobbies", label: "Hobbies", className: "text-gray-200 hover:text-white" },
    { href: "#experience", label: "Experience", className: "text-gray-200 hover:text-white" },
    { href: "#portfolio", label: "Portfolio", className: "text-gray-200 hover:text-white" },
    { href: "#blog", label: "Blog", className: "text-gray-200 hover:text-white" },
    { href: "#contact", label: "Contact", className: "text-gray-200 hover:text-white" },
    { href: "#profile", label: "Profile", className: "text-gray-200 hover:text-white" },
  ];

  if (isMobile) {
    return (
      <>
        <div className="fixed top-0 left-0 right-0 z-50 bg-[#1A1F2C] text-white p-4 flex justify-between items-center shadow-md">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-yellow-500 mr-3">
              <img 
                src={profileImage} 
                alt="Sev Mallabo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-sm font-semibold">Sev Mallabo</h2>
              <p className="text-xs text-gray-300">Developer</p>
            </div>
          </div>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white menu-button"
            onClick={toggleMenu}
          >
            <Menu />
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="fixed top-[72px] left-0 right-0 bg-[#1A1F2C] text-white shadow-lg z-50 mobile-nav max-h-[80vh] overflow-auto">
            <nav className="py-2">
              <ul className="space-y-1 px-4">
                {navItems.map((item) => (
                  <li key={item.href} className="py-2 border-b border-gray-700 last:border-0">
                    <a 
                      href={item.href} 
                      className={`block px-4 py-2 rounded-md transition-colors hover:bg-[#D46FDB]/20 ${item.className}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            
            <div className="px-4 py-5 border-t border-gray-700">
              <div className="flex justify-center space-x-5 mb-4">
                <a href="#" className="text-gray-200 hover:text-white" aria-label="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-200 hover:text-white" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="text-gray-200 hover:text-white" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="#" className="text-gray-200 hover:text-white" aria-label="Email">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </a>
              </div>
              <p className="text-center text-xs text-gray-400">© 2025 Sev Mallabo. All rights reserved.</p>
            </div>
          </div>
        )}
        
        {/* This adds padding to push content down so it's not under the fixed header */}
        <div className="h-[72px]"></div>
      </>
    );
  }

  return (
    <div className="sidebar bg-[#D46FDB] text-white">
      <div className="flex flex-col items-center mb-8">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-yellow-500">
          <img 
            src={profileImage} 
            alt="Sev Mallabo" 
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-xl font-semibold text-white">Sev Mallabo</h2>
        <p className="text-sm text-gray-100 text-center mt-1">
          Computer Science Graduate | Developer | Tech Enthusiast
        </p>
      </div>

      <nav className="mt-8">
        <ul className="space-y-2">
          {navItems.map((item, index) => (
            <li key={index} className={index === 0 ? "flex items-center" : ""}>
              {index === 0 && <span className="mr-2">•</span>}
              <a 
                href={item.href} 
                className={`nav-link ${index === 0 ? "" : "ml-6"} ${item.className}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto pt-8">
        <div className="flex space-x-4 mb-4 justify-center">
          <a href="#" className="social-icon text-gray-200 hover:text-white" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a href="#" className="social-icon text-gray-200 hover:text-white" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="#" className="social-icon text-gray-200 hover:text-white" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a href="#" className="social-icon text-gray-200 hover:text-white" aria-label="Email">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
        </div>
        <div className="text-center text-xs text-gray-100">
          <p>© 2025 Sev Mallabo.</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
