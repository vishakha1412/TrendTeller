 import { NavLink } from 'react-router';
import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-orange-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
         
        <div className="text-xl font-bold tracking-wide">
          <NavLink to='/'> TrendTeller</NavLink>

        </div>

        
        <div className="space-x-6 hidden md:flex">
          
           <NavLink  to="latestNews" className="hover:text-white-200 transition hover:bg-green-500  hover:px-2 hover:rounded-4xl font-bold">  Latest <span className='font-extrabold text-indigo-600'>News</span></NavLink> 
            
          <NavLink to="movie" className="hover:text-white-200 transition  hover:bg-green-500  hover:px-2 hover:rounded-4xl font-bold">Movie Club</NavLink>
        </div>

         
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-orange-500">
           <NavLink to="latestNews" className="hover:text-green-200 transition"> Latest <span className='font-extrabold text-indigo-600'>News</span></NavLink> 
 
           <NavLink to="movie" className="block hover:text-indigo-200">Movie Club</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Header