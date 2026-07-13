import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Daniel Anthony",
    role: "Frontend Developer",
    text: "Ollic ICT completely transformed my career path. The instructors are top-notch and the curriculum is constantly updated with modern tech stacks.",
    image: "/Dan.jpeg",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "UI/UX Designer",
    text: "The web design courses offered by Ollic ICT gave me the practical skills I needed to land my dream job. Highly recommend their hands-on approach!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Amanda Ross",
    role: "Data Analyst",
    text: "I was amazed by the depth of the data analytics program. The supportive community and expert mentors made learning complex concepts a breeze.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden" id="testimonials">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading-xl heading-gradient-underline mb-6 text-gray-900">What Our Students Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover how Ollic ICT has empowered individuals to achieve their tech career goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="glass-card rounded-2xl p-8 card-hover flex flex-col h-full relative border border-white/40 shadow-xl shadow-black/5">
              <div className="absolute -top-6 -right-6 text-orange-400/20 text-8xl font-serif"></div>
              <div className="flex-grow">
                <p className="text-gray-700 italic leading-relaxed mb-8 relative z-10">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-teal-500/30 relative flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-teal-600 font-medium">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
