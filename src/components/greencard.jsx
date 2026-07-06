import { Link } from "react-router-dom";
import { FiCheck, FiArrowRight } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";

const Greencard = () => {
  return (
    <div>
      {/* ──────────── CTA Banner ──────────── */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden bg-gradient-to-br from-brand-teal-900 via-brand-teal-800 to-brand-teal-700 text-white rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 shadow-2xl shadow-brand-teal-900/40">

            {/* ── Decorative blobs ── */}
            <div className="absolute top-0 right-0 w-64 sm:w-80 h-64 sm:h-80 bg-gradient-to-bl from-white/[0.06] to-transparent rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 sm:w-60 h-48 sm:h-60 bg-gradient-to-tr from-brand-orange-500/10 to-transparent rounded-full translate-y-1/3 -translate-x-1/4 pointer-events-none animate-float" />
            <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-brand-teal-500/10 rounded-full blur-2xl pointer-events-none animate-float-delayed" />

            {/* ── Content: stacks on mobile, side-by-side on lg ── */}
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

              {/* Text column */}
              <div className="flex flex-col gap-5 text-center lg:text-left lg:flex-1">
                <div>
                  <span
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-widest text-brand-orange-300 mb-3"
                  >
                    <HiOutlineSparkles className="w-4 h-4" />
                    Limited‑Time Offer
                  </span>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug max-w-2xl mx-auto lg:mx-0">
                    We Are Offering Digital Skills Training That Is{" "}
                    <span className="text-brand-orange-400">Affordable</span> And{" "}
                    <span className="text-brand-orange-400">Accessible</span>
                  </h2>
                </div>

                <p className="text-white/75 max-w-2xl mx-auto lg:mx-0 text-sm sm:text-base leading-relaxed">
                  Acquiring high‑demand digital skills has never been easier. Our
                  training program is designed to be both affordable and accessible,
                  ensuring that anyone can gain the knowledge and experience needed
                  to succeed in the tech industry.
                </p>

                <p className="text-white/60 text-sm sm:text-base">
                  Enroll now and take the first step towards a successful career in
                  technology!
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 mt-1">
                  <Link to="https://wa.link/wj8kss">
                    <button className="gradient-btn text-white px-8 py-3.5 text-sm sm:text-base font-semibold rounded-full shadow-lg inline-flex items-center gap-2 group">
                      Enroll Now
                      <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </Link>
                </div>
              </div>

              {/* Image column */}
              <div className="flex-shrink-0 w-full max-w-[220px] sm:max-w-[260px] lg:max-w-[320px] mx-auto lg:mx-0">
                <img
                  className="w-full rounded-2xl shadow-2xl shadow-black/30 animate-float hover:scale-105 transition-transform duration-500 object-cover"
                  src="/discount.jpg"
                  alt="Discount offer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────── Virtual & Physical Classes ──────────── */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mb-16">

            {/* Heading side */}
            <div className="animate-fade-in-up">
              <h1 className="heading-xl text-gray-900 mb-5">
                Physical &amp; Virtual Classes{" "}
                <span className="gradient-text">Are Available</span>
              </h1>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Worried about attending classes in person? Our virtual classes
                provide the same quality education from the comfort of your home!
              </p>
            </div>

            {/* Feature card */}
            <div className="glass-card rounded-2xl p-6 md:p-8 card-hover">
              <h3 className="font-bold text-gray-800 text-lg mb-5">
                Here&rsquo;s Why Our Virtual Classes Are As Effective As Our
                Physical Classes:
              </h3>

              <ul className="space-y-4">
                {[
                  "Live interactive sessions with experienced instructors",
                  "Access to recorded lectures for review",
                  "Online discussion forums for collaboration and support",
                  "Hands‑on projects and assignments to reinforce learning",
                  "Flexible scheduling to accommodate your lifestyle",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-gray-600 text-sm md:text-base group"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <span className="flex-shrink-0 w-6 h-6 mt-0.5 rounded-full bg-gradient-to-br from-brand-teal-500 to-brand-teal-700 flex items-center justify-center shadow-md shadow-brand-teal-500/20 group-hover:scale-110 transition-transform duration-300">
                      <FiCheck className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                    </span>
                    <span className="group-hover:text-gray-800 transition-colors duration-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        
          <div className="relative overflow-hidden bg-gradient-to-r from-brand-orange-500 via-brand-orange-400 to-brand-teal-500 rounded-3xl p-8 sm:p-10 md:p-14 text-center text-white shadow-xl">

            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.12),transparent)] pointer-events-none" />
            <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-brand-teal-400/20 rounded-full blur-3xl pointer-events-none animate-float-delayed" />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-widest text-white/80 mb-4">
                <HiOutlineSparkles className="w-4 h-4" />
                Community
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Join Our Community of Learners!
              </h2>

              <p className="text-white/85 max-w-xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
                Become part of a vibrant community of learners and professionals
                who are passionate about technology and innovation.
              </p>

              <Link to="https://wa.link/wj8kss">
                <button className="bg-white text-brand-orange-600 font-bold px-9 py-3.5 rounded-full text-sm sm:text-base hover:bg-gray-50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-pulse-glow inline-flex items-center gap-2 group">
                  Join Our Community
                  <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Greencard;
