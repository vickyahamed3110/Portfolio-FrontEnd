import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="p-4 fixed w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* portfolio */}
        <div className="text-white text-2xl font-semibold ">
          <a href="/">PORTFOLIO</a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="text-white hover:text-gray-300">Home</a>
          <a href="/about" className="text-white hover:text-gray-300">About</a>
          <a href="/skills" className="text-white hover:text-gray-300">Skills</a>
          <a href="/projects" className="text-white hover:text-gray-300">Projects</a>
          <a href="/contact" className="text-white hover:text-gray-300">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="flex w-full justify-center">
      <div
        className={`md:hidden ${isMenuOpen ? 'flex' : 'hidden'} flex-col items-center w-9/12 text-white p-4 border rounded-md backdrop-blur bg-white/10`}
      >
        <a href="/" className="block py-2">Home</a>
        <a href="/about" className="block py-2">About</a>
        <a href="/skills" className="block py-2">Skills</a>
        <a href="/projects" className="block py-2">Projects</a>
        <a href="/contact" className="block py-2">Contact</a>
      </div>
      </div>
      
    </nav>
  );
};

export default Navbar;
