import whotoenroll from '../assets/whotoenroll.svg'
import { FiArrowRight, FiCheck } from 'react-icons/fi'

function Section4() {
  const enrollList = [
    'Graduates',
    'Job Seekers',
    'Those interested in travelling abroad',
    'Tech enthusiast',
    'Students',
    'Working class - who wants to earn extra income',
    'Business owners - who want to learn how to scale their business digitally',
  ];

  const whyUsList = [
    'Easy Certification with CISCO',
    'Conducive Learning Environment',
    'Uninterrupted Power Supply',
    '100% Practical Training',
    '24/7 Free and Fast WiFi',
    'Guaranteed Internship after Training',
    'Lifetime Career Support',
    '100% Money Back Guarantee',
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 lg:gap-10">
          {/* Who Can Enroll */}
          <div className="glass-card rounded-2xl p-6 md:p-8 gradient-border card-hover">
            <h1 className="font-bold text-2xl md:text-3xl text-gray-900 mb-6 flex items-center gap-2">
              <span className="text-2xl">🎓</span> Who can enroll?
            </h1>
            <ul className="space-y-3">
              {enrollList.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600 text-sm md:text-[15px] group">
                  <span className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FiArrowRight className="w-3 h-3 text-white" strokeWidth={3} />
                  </span>
                  <span className="group-hover:text-gray-800 transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Center Image */}
          <div className="flex items-center justify-center md:order-none order-first">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-teal-100 to-orange-100 rounded-3xl opacity-50 blur-md pointer-events-none" />
              <img
                src={whotoenroll}
                alt="Who can enroll illustration"
                className="relative w-full max-w-sm drop-shadow-lg"
              />
            </div>
          </div>

          {/* Why Us */}
          <div className="glass-card rounded-2xl p-6 md:p-8 gradient-border card-hover">
            <h1 className="font-bold text-2xl md:text-3xl text-gray-900 mb-6 flex items-center gap-2">
              <span className="text-2xl">⭐</span> Why Us?
            </h1>
            <ul className="space-y-3">
              {whyUsList.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600 text-sm md:text-[15px] group">
                  <span className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FiCheck className="w-3 h-3 text-white" strokeWidth={3} />
                  </span>
                  <span className="group-hover:text-gray-800 transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section4