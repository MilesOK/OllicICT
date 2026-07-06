import { Link } from 'react-router-dom'

const secondary = () => {

  return (
    <section className="relative overflow-hidden py-20 md:py-28 px-4">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-800 via-teal-900 to-emerald-900 pointer-events-none" />
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center gap-5">
        <span className="inline-block text-sm font-semibold text-teal-200 bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full border border-white/10">
          🎒 For Recent School Leavers
        </span>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Just Finished Secondary School?
        </h1>
        <p className="text-base md:text-lg text-white/80 max-w-2xl leading-relaxed">
          While awaiting university admission, enroll in our program to become proficient with computers and build a solid foundation in Software Development
        </p>
        <Link to="https://wa.link/wj8kss">
          <button className="gradient-btn text-white font-semibold px-9 py-3.5 rounded-full text-base mt-2 shadow-lg">
            Enroll Now
          </button>
        </Link>
      </div>
    </section>
  )
}

export default secondary