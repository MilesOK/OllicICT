
import hero from '../assets/hero.png'
import { useEffect, useRef, useState } from 'react'

function AnimatedStat({ value, label, color }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const numericValue = parseInt(value);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 1500;
          const increment = numericValue / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= numericValue) {
              setCount(numericValue);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [numericValue]);

  return (
    <div ref={ref} className="text-center glass-card rounded-2xl p-4 md:p-5">
      <div className={`text-3xl md:text-4xl font-bold ${color}`}>
        {count}+
      </div>
      <p className="text-xs md:text-sm text-gray-500 mt-1.5 font-medium">{label}</p>
    </div>
  );
}

function Section1() {
  return (
    <>
      <main id="home" className="relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-orange-100/60 to-teal-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-teal-100/50 to-orange-50/30 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

        <div className="relative section-padding max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Column */}
            <div className="animate-fade-in-up">
              <h2 className="inline-block text-sm md:text-base text-gray-700 font-semibold bg-gradient-to-r from-orange-100 via-white to-teal-50 border border-orange-200/80 rounded-full py-2 px-5 mb-8 shadow-sm">
                🚀 Your Path To Financial Stability
              </h2>
              <h1 className="text-3xl md:text-[42px] lg:text-[48px] font-bold text-gray-900 lg:leading-[60px] md:leading-[52px] leading-[44px]">
                <span>
                  <span className="bg-gradient-to-r from-green-300 to-orange-500 px-4 py-1 rounded-xl text-white">Digital Skills</span>
                 <h2 className='mt-2'>Training Program.</h2>
                </span>
                  {/* <span className="absolute bottom-0.5 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-orange-400 rounded-full" /> */}
              
              </h1>
              <br />
              <h4 className="text-lg md:text-2xl text-gray-800 font-semibold">Learn Digital Skills And Qualify For Well-Paying Remote Jobs</h4>
              <br />
              <p className="text-gray-600 leading-relaxed text-[15px] md:text-base max-w-lg">
                With our hands-on training, personalized career coaching, and a network of industry connections, we'll
                have you ready to launch your Tech career in just 6 months
              </p>
              <a href="https://wa.link/wj8kss">
                <button className="gradient-btn mt-7 text-white px-9 py-3.5 text-base font-semibold rounded-full shadow-lg">
                  Enroll Now
                </button>
              </a>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 md:gap-5 pt-8 md:pt-10">
                <AnimatedStat value="10" label="Professional Courses to choose from" color="gradient-text-teal" />
                <AnimatedStat value="200" label="Students trained" color="text-orange-500" />
                <AnimatedStat value="5" label="Professional Trainers" color="gradient-text-teal" />
              </div>
            </div>

            {/* Right Column */}
            <div className="relative flex justify-center lg:justify-end">
              {/* Floating blobs */}
              <div className="absolute top-10 -right-5 w-20 h-20 bg-orange-300/30 rounded-full blur-xl animate-float pointer-events-none" />
              <div className="absolute bottom-10 -left-5 w-28 h-28 bg-teal-300/30 rounded-full blur-xl animate-float-delayed pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gradient-to-br from-orange-200/40 to-teal-200/40 rounded-full blur-2xl pointer-events-none" />

              <div className="relative">
                <img
                  src={hero.src}
                  alt="Student with laptop"
                  className="w-full max-w-md lg:max-w-lg h-auto relative z-10 drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Section1
