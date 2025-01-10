import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href?.startsWith('#')) return;
    
    const element = document.querySelector(href);
    if (!element) return;

    const offset = 50; // Increased offset for better visibility
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white shadow-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="text-xl font-bold text-gray-800">Marco Ho</a>
          
          <div className="hidden md:flex space-x-8">
            <a href="#projects" onClick={handleNavClick} className="text-gray-600 hover:text-gray-900">Projects</a>
            <a href="#skills" onClick={handleNavClick} className="text-gray-600 hover:text-gray-900">Skills</a>
            <a href="#education" onClick={handleNavClick} className="text-gray-600 hover:text-gray-900">Education</a>
            <a href="#experience" onClick={handleNavClick} className="text-gray-600 hover:text-gray-900">Experience</a>
            <a href="#contact" onClick={handleNavClick} className="text-gray-600 hover:text-gray-900">Contact</a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#projects" onClick={handleNavClick} className="block px-3 py-2 text-gray-600 hover:text-gray-900">Projects</a>
            <a href="#skills" onClick={handleNavClick} className="block px-3 py-2 text-gray-600 hover:text-gray-900">Skills</a>
            <a href="#education" onClick={handleNavClick} className="block px-3 py-2 text-gray-600 hover:text-gray-900">Education</a>
            <a href="#experience" onClick={handleNavClick} className="block px-3 py-2 text-gray-600 hover:text-gray-900">Experience</a>
            <a href="#contact" onClick={handleNavClick} className="block px-3 py-2 text-gray-600 hover:text-gray-900">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;