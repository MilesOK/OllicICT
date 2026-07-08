
import backend from '../assets/backend.jpg'
import frontend from '../assets/frontend.svg'
import fullstack from '../assets/fullstack.jpg'
import mobile from '../assets/mobile.jpg'
import { Link } from 'react-router-dom'


function Section2() {
  const courses = [
    {
      title: 'Frontend Engineering',
      description: 'Become a frontend engineer amd build seamless user interface and user experience logic.',
      duration: '4 Months',
      students: '120+',
      image: frontend,
    },
    {
      title: 'Backend Engineering',
      description: 'Build powerful web applications using our tailored backend engineering course outline.',
      duration: '4 Months',
      students: '100+',
      image: backend,
    },
    {
      title: 'Full Stack Web Development',
      description: 'Become a FullStack web developer Maestro with building fully functional web apps.',
      duration: '6 Months',
      students: '50+',
      image: fullstack,
    },
    {
      title: 'Mobile App Development',
      description: 'Build Robust and highly functional apps for iOS and Android using Flutter or React Native.',
      duration: '5 Months',
      students: '90+',
      image: '/mobileApp.jpg',
    },

    {
      title: 'Python Development',
      description: 'Everything can be done using python - Web, Mobile, AI, Data! Get started Today!',
      duration: '5 Months',
      students: '80+',
      image: mobile,
    },
    {
      title: 'Cloud Computing',
      description: 'Join our Cloud Computing course and learn the skills to store, manage and process data through powerful internet technologies',
      duration: '5 Months',
      students: '20+',
      image: '/cloud22.jpg',
    },
    {
      title: 'Machine Learning / AI Automation',
      description: 'Join our Machine Learning course ad discover how computers learn from data to make smart decisions.',
      duration: '5 Months',
      students: '20+',
      image: '/machine.jpg',
    },
    {
      title: 'AI Prompt Engineering',
      description: 'With good AI prompting skill, you can build tools and products without knowing how to code',
      duration: '3 Months',
      students: '20+',
      image: '/cloud.jpg',
    },
  ];

  return (
    <section id="courses" className="bg-gradient-to-b from-gray-50 to-white section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h1 className="heading-xl gradient-text-teal heading-gradient-underline mb-6">Our Courses</h1>
          <p className="text-gray-600 mt-8 max-w-2xl mx-auto text-base md:text-lg font-medium leading-relaxed">
            We provide comprehensive training in computer programming, equipping individuals with a solid foundation in
            software Development to position them as sought-after professionals in the tech industry.
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group glass-card rounded-2xl overflow-hidden card-hover gradient-border"
            >
              {/* Card Image */}
              <div className="relative overflow-hidden h-44">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Card Body */}
              <div className="p-4 md:p-5">
                <span className="inline-block text-white text-xs font-semibold bg-gradient-to-r from-teal-600 to-teal-500 rounded-full px-3.5 py-1 mb-3">
                  {course.students} students
                </span>
                <h2 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-teal-700 transition-colors duration-300">
                  {course.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">{course.description}</p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className="text-gray-600 font-semibold text-sm flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {course.duration}
                  </span>
                  <Link to="https://wa.link/wj8kss">
                  <button className="gradient-btn text-white text-sm px-5 py-2 rounded-full font-semibold">
                    Enroll Now
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section2;
