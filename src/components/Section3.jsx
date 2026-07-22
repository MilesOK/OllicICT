import about from '../assets/about.svg'

function Section3() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="heading-xl text-center mb-12 md:mb-16">
          <span className="text-gray-800">Who We Are @ </span>
          <span className="gradient-text">OLLIC</span>
        </h1>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 md:gap-16 items-center">
          {/* Image with gradient ring */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Gradient ring */}
              <div className="absolute -inset-3 bg-gradient-to-br from-teal-400 via-teal-600 to-orange-400 rounded-full opacity-20 blur-sm" />
              <img
                src={about.src}
                alt="About Ollic ICT Academy"
                className="relative h-[300px] w-[300px] md:h-[420px] md:w-[420px] rounded-full object-cover shadow-2xl shadow-teal-900/10 border-4 border-white"
              />
              {/* Floating accent */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-orange-300 to-orange-400 rounded-full opacity-40 blur-lg animate-float pointer-events-none" />
            </div>
          </div>

          {/* Text content */}
          <div className="space-y-5">
            {[
              'At Ollic ICT Academy, we aim to empower people of different backgrounds with premium tech skills for financial independence.',
              'Our Courses are designed to make our students tech experts and the best fit in start ups, silicon valley companies, fintech companies and organizations',
              'We coach and empower our students with the practical experience and strategies needed to start earning big after their training.',
              'We have a team of industry experts and passionate instructors.',
              'Join us at Ollic ICT Academy where knowledge meets opportunity, and let us embark you on a journey of growth and financial success.',
            ].map((text, i) => (
              <div key={i} className="flex gap-4 group">
                <div className="flex-shrink-0 w-1 rounded-full bg-gradient-to-b from-teal-500 to-orange-400 group-hover:from-orange-400 group-hover:to-teal-500 transition-all duration-500" />
                <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section3
