import Image from "next/image";

const images = [
  "/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg",
  "/img5.jpg", "/img6.jpg", "/img7.jpg", "/img8.jpg",
  "/img9.jpg", "/img10.jpg", "/img11.jpg", "/img12.jpg",
];

function Section5() {
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
              <Image
                src={img}
                alt={`Ollic ICT Gallery ${i + 1}`}
                width={400}
                height={300}
                className="w-full h-40 sm:h-48 md:h-52 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section5;
