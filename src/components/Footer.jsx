import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope } from 'react-icons/fa';
// import logo from '../assets/logo.jpg'
// import { Link } from 'react-router-dom';
// import logo from '../assets/'

function Footer() {
  return (
    <>
    <footer className="bg-gradient-to-b from-[#111111] to-[#0a0a0f] text-gray-300 pt-14 md:pt-20 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 pb-10 border-b border-white/10">

          {/* Brand Column */}
          <div>
            <img src={'/logo1.png'} alt="logo" className="md:h-[55px] h-[45px] mb-5" />
            <p className="text-gray-400 text-sm leading-6 max-w-sm">
              Edet Akpan Avenue, Uyo, Akwa Ibom State.
              Opening Hours: Monday - Friday (8am - 5pm)
            </p>
          </div>

          {/* Contact Column */}
          <div>
            <h2 className="text-orange-400 text-base font-bold mb-5 uppercase tracking-wider">Contact</h2>
            <div className="space-y-4">
              <a href="mailto:academy.onelegit@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-colors duration-300 group text-sm">
                <span className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-orange-500/10 transition-colors duration-300">
                  <FaEnvelope className="text-sm" />
                </span>
                academy.onelegit@gmail.com
              </a>

              <a href="tel:+2348053338642" className="flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-colors duration-300 group text-sm">
                <span className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-orange-500/10 transition-colors duration-300">
                  <FaPhone className="text-sm" />
                </span>
                +2348053338642
              </a>

              <div className="flex gap-3 pt-2">
                {[
                  { icon: FaFacebook, label: 'Facebook' },
                  { icon: FaInstagram, label: 'Instagram' },
                  { icon: FaTwitter, label: 'Twitter' },
                ].map(({ icon: Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-gradient-to-br hover:from-orange-500 hover:to-teal-500 hover:text-white hover:scale-110 transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter Column */}
          <div>
            <h2 className="text-orange-400 text-base font-bold mb-5 uppercase tracking-wider">Our Community</h2>
            <p className="mb-5 text-sm text-gray-400">Get regular updates.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Email address..."
                className="flex-1 rounded-l-xl bg-white/5 border border-white/10 h-11 pl-4 pr-3 outline-none text-white text-sm placeholder:text-gray-500 focus:border-orange-500/50 focus:bg-white/[0.08] transition-all duration-300"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 w-12 rounded-r-xl flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 rotate-45 text-white"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex items-center justify-between">
          <p className="text-xs text-gray-500 md:text-sm">
            Copyright © {new Date().getFullYear()} Ollic ICT. All Rights Reserved
          </p>
          <div className="w-20 h-1 rounded-full bg-gradient-to-r from-orange-500 to-teal-500 opacity-50" />
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer