import { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

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
          <Link to="/" className="flex-shrink-0">
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
            <Link to="https://wa.link/wj8kss">
            <button className="ml-6 gradient-btn-teal text-white font-semibold h-11 px-7 rounded-full text-sm tracking-wide">
              Register
            </button>
            </Link>
          </div>

          {/* Mobile Navigation Icon */}
          <button
            onClick={handleNav}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle Navigation"
          >
            {nav ? (
              <AiOutlineClose size={22} className="text-gray-800" />
            ) : (
              <AiOutlineMenu size={22} className="text-gray-800" />
            )}
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
        className={`fixed top-0 left-0 w-[75%] max-w-xs h-full bg-white z-[70] shadow-2xl transition-transform duration-400 ease-out md:hidden ${
          nav ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <Link to="/" onClick={closeNav}>
            <img src={logo} alt="Website Logo" className="h-7" />
          </Link>
          <button
            onClick={closeNav}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <AiOutlineClose size={20} className="text-gray-600" />
          </button>
        </div>

        {/* Drawer Nav Items */}
        <div className="py-4">
          {navItems.map((item, index) => (
            <a
              href={item.href}
              key={item.id}
              onClick={closeNav}
              className="block"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="mx-3 px-4 py-3.5 rounded-xl text-gray-700 font-medium hover:bg-gradient-to-r hover:from-teal-50 hover:to-orange-50 hover:text-teal-800 transition-all duration-200">
                {item.text}
              </div>
            </a>
          ))}
        </div>

        {/* Drawer CTA */}
        <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-gray-100 bg-gray-50/50">
          <button className="w-full gradient-btn-teal text-white font-semibold h-12 rounded-xl text-sm tracking-wide">
            Register
          </button>
        </div>
      </div>

      {/* Spacer for fixed navbar */}
      <div className="h-16 md:h-20" />
    </>
  );
};

export default Navbar;
