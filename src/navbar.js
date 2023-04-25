import React, { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav className="bg-gray-800">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* <div className="flex-shrink-0"> */}
              {/* <a href="#" className="text-xl font-bold text-white">Logo</a> */}
            {/* </div> */}
            <div className="hidden md:block">
              <div className="flex items-baseline ml-10 space-x-4">
                <a href="#" className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">Home</a>
                <a href="#" className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">About</a>
                <a href="#" className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">Services</a>
                <a href="#" className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">Contact</a>
              </div>
            </div>
          </div>
          <div className="flex -mr-2 md:hidden">
            <button type="button" className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded={isMenuOpen} onClick={toggleMenu}>
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed. */}
              {/* Heroicon name: outline/menu */}
              <svg className={`block h-6 w-6 ${isMenuOpen ? 'hidden' : 'block'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Icon when menu is open. */}
              {/* Heroicon name: outline/x */}
              <svg className={`block h-6 w-6 ${isMenuOpen ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a href="#" className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">Home</a>
    <a href="#" className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">About</a>
    <a href="#" className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">Services</a>
    <a href="#" className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">Contact</a>
  </div>
</div>
</nav>
  );
}
export default Navbar;