import { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleNav = () => setNav(!nav);
  const closeNav = () => setNav(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 1, text: 'Home', href: '#home' },
    { id: 2, text: 'About', href: '#about' },
    { id: 3, text: 'Courses', href: '#courses' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-black/[0.03]'
            : 'bg-white/70 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            {/* <img
              src={'/logo.png'}
              alt="Ollic Logo"
              className="h-7 md:h-10 transition-transform duration-300 hover:scale-105"
            /> */}
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tighter bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent drop-shadow-sm">Ollic <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">ICT</span></h2>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                href={item.href}
                key={item.id}
                className="nav-link px-5 py-2 text-gray-700 font-medium text-[15px] tracking-wide"
              >
                {item.text}
              </a>
            ))}
            <a href="https://wa.link/wj8kss">
            <button className="ml-6 gradient-btn-teal text-white font-semibold h-11 px-7 rounded-full text-sm tracking-wide">
              Register
            </button>
            </a>
          </div>

          {/* Mobile Navigation Icon */}
          <button
            onClick={handleNav}
            className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-all duration-300 focus:outline-none"
            aria-label="Toggle Navigation"
          >
            <div className="relative w-6 h-6 flex items-center justify-center">
              <span className={`absolute transform transition-all duration-300 ease-in-out ${nav ? 'rotate-90 opacity-0 scale-50' : 'rotate-0 opacity-100 scale-100'}`}>
                <AiOutlineMenu size={24} className="text-gray-800" />
              </span>
              <span className={`absolute transform transition-all duration-300 ease-in-out ${nav ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-50'}`}>
                <AiOutlineClose size={24} className="text-gray-800" />
              </span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] transition-opacity duration-300 md:hidden ${
          nav ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeNav}
      />

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed top-0 left-0 w-[80%] max-w-sm h-full bg-white/95 backdrop-blur-xl z-[70] shadow-2xl border-r border-white/20 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] md:hidden flex flex-col ${
          nav ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100/50">
          <Link href="/" onClick={closeNav}>
            <h2 className="text-2xl font-extrabold tracking-tighter bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent drop-shadow-sm">Ollic <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">ICT</span></h2>
          </Link>
          <button
            onClick={closeNav}
            className="p-2 rounded-full hover:bg-gray-100 transition-all duration-200 focus:outline-none"
          >
            <AiOutlineClose size={20} className="text-gray-600" />
          </button>
        </div>

        {/* Drawer Nav Items */}
        <div className="py-6 flex-1 overflow-y-auto">
          {navItems.map((item, index) => (
            <a
              href={item.href}
              key={item.id}
              onClick={closeNav}
              className={`block transform transition-all duration-500 ease-out ${
                nav ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              }`}
              style={{ transitionDelay: `${nav ? index * 100 + 150 : 0}ms` }}
            >
              <div className="mx-4 px-4 py-4 mb-2 rounded-2xl text-gray-700 font-semibold text-[17px] hover:bg-gradient-to-r hover:from-teal-50 hover:to-orange-50 hover:text-teal-800 transition-all duration-300">
                {item.text}
              </div>
            </a>
          ))}
        </div>

        {/* Drawer CTA */}
        <div 
          className={`p-6 border-t border-gray-100/50 bg-gray-50/30 transform transition-all duration-500 ease-out ${
            nav ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: `${nav ? navItems.length * 100 + 150 : 0}ms` }}
        >
          <a href="https://wa.link/wj8kss" onClick={closeNav}>
            <button className="w-full gradient-btn-teal text-white font-semibold h-12 rounded-xl text-base tracking-wide shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 transition-all duration-300 transform hover:-translate-y-0.5">
              Register Now
            </button>
          </a>
        </div>
      </div>

      {/* Spacer for fixed navbar */}
      <div className="h-16 md:h-20" />
    </>
  );
};

export default Navbar;
