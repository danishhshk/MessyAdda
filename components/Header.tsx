
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-2 sm:py-3 shadow-md' : 'bg-transparent py-3 sm:py-5'}`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <h1 className={`text-lg sm:text-2xl font-serif font-bold ${scrolled ? 'text-olive-900' : 'text-cream'}`}>
              MESSY ADDA
            </h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-8 lg:ml-10 flex items-baseline space-x-4 lg:space-x-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`${scrolled ? 'text-olive-700 hover:text-olive-950' : 'text-cream/90 hover:text-white'} transition-colors font-medium text-sm lg:text-base`}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex gap-2">
                <a href="https://www.zomato.com/mumbai/messy-adda-sion/" target="_blank" rel="noopener noreferrer" className="bg-olive-600 text-white px-3 lg:px-4 py-2 rounded-full font-medium hover:bg-olive-700 transition-all text-xs lg:text-sm active:scale-95">
                  🍔 Zomato
                </a>
                <a href="https://www.swiggy.com/city/mumbai/messy-addaa-wadala-west-sion-rest133403" target="_blank" rel="noopener noreferrer" className="bg-orange-500 text-white px-3 lg:px-4 py-2 rounded-full font-medium hover:bg-orange-600 transition-all text-xs lg:text-sm active:scale-95">
                  🛵 Swiggy
                </a>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-3 lg:px-4 py-2 rounded-full font-medium hover:bg-green-500 transition-all text-xs lg:text-sm active:scale-95">
                  📱 WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-olive-900' : 'text-cream'} focus:outline-none p-2`}
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden absolute w-full transition-all duration-300 ease-in-out ${isOpen ? 'top-full opacity-100 pointer-events-auto' : 'top-[-500px] opacity-0 pointer-events-none'} bg-cream shadow-xl`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-olive-900 block px-3 py-3 sm:py-4 text-sm sm:text-base font-medium border-b border-olive-100 active:bg-olive-100"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 pb-2 px-3 space-y-2">
            <a href="https://www.zomato.com/mumbai/messy-adda-sion/" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="w-full bg-olive-600 text-white py-3 rounded-lg font-bold text-sm sm:text-base active:scale-95 transition-transform block text-center">
              🍔 Order via Zomato
            </a>
            <a href="https://www.swiggy.com/city/mumbai/messy-addaa-wadala-west-sion-rest133403" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="w-full bg-orange-500 text-white py-3 rounded-lg font-bold text-sm sm:text-base active:scale-95 transition-transform block text-center">
              🛵 Order via Swiggy
            </a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="w-full bg-green-600 text-white py-3 rounded-lg font-bold text-sm sm:text-base active:scale-95 transition-transform block text-center">
              📱 Order via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
