import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img6.jpg'
import img7 from '../assets/img7.jpg'
import img8 from '../assets/img8.jpg'
import img9 from '../assets/img9.jpg'
import img10 from '../assets/img10.jpg'
import img11 from '../assets/img11.jpg'
import img12 from '../assets/img12.jpg'

function Section5() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="heading-xl gradient-text-teal text-center heading-gradient-underline mb-12 md:mb-16">
          Gallery
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="gallery-item rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-400 group"
            >
              <img
                src={img}
                alt={`Ollic ICT Gallery ${i + 1}`}
                className="w-full h-40 sm:h-48 md:h-52 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Section5