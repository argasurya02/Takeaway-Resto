import { useRef, useEffect } from "react";
import { ZoomIn } from "lucide-react";

// IMPORT GAMBAR LOKAL
import FotoPiagam from "../assets/Foto_Piagam.png";
import Bule from "../assets/Bule.png";
import Disneyland from "../assets/Galery/Disneyland.png";
import Halal from "../assets/Galery/Halal.png";
import juara from "../assets/Galery/Juara.png";
import masjid from "../assets/Galery/Masjid.png";
import ramean from "../assets/Galery/Ramean.png";
import workshop from "../assets/Galery/Workshop.png";

const images = [
  {
    src: Bule,
    alt: "Foto",
  },
  {
    src: Disneyland,
    alt: "Foto",
  },
  {
    src: Halal,
    alt: "Foto",
  },
  {
    src: FotoPiagam,
    alt: "Foto",
  },
  {
    src: juara,
    alt: "Foto",
  },
  {
    src: masjid,
    alt: "Foto",
  },
  {
    src: ramean,
    alt: "Foto",
  },
  {
    src: workshop,
    alt: "Foto",
  },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 60);
            });
          }
        });
      },
      { threshold: 0.05 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="section-padding bg-cream relative overflow-hidden"
    >
      {/* Background Blur */}
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-gold/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span className="inline-flex items-center gap-2 bg-gold/10 text-dark-brown px-4 py-1.5 rounded-full font-inter text-xs font-600 tracking-wider uppercase mb-5">
            Perjalanan Kami
          </span>

          <h2 className="font-montserrat font-800 text-3xl sm:text-4xl lg:text-5xl text-dark-brown leading-[1.15]">
            Aktif Berkarya,
            <span className="text-gradient"> Berbagi Inspirasi</span>
          </h2>

          <p className="font-inter text-base text-dark-brown/60 mt-4 max-w-lg mx-auto leading-relaxed">
            Tidak hanya berfokus pada kuliner, kami juga aktif dalam seminar,
            pelatihan, dan kegiatan komunitas untuk terus bertumbuh dan
            menginspirasi bersama.
          </p>
        </div>

        {/* GRID 4 x 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {images.map((img, i) => (
            <div
              key={i}
              className="reveal relative rounded-2xl overflow-hidden group cursor-pointer h-[250px] shadow-lg"
              style={{
                transitionDelay: `${i * 60}ms`,
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-dark-brown/0 group-hover:bg-dark-brown/40 transition-all duration-400" />

              {/* Zoom Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center">
                  <ZoomIn size={20} className="text-beige-light" />
                </div>
              </div>

              {/* Caption */}
              <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-inter text-xs text-beige-light/90 bg-dark-brown/60 backdrop-blur-sm px-2.5 py-1 rounded-full capitalize">
                  {img.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
