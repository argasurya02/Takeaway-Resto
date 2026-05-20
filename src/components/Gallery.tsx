import { useRef, useEffect } from 'react';
import { ZoomIn } from 'lucide-react';

const images = [
  {
    src: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Grilled salmon bowl',
    span: 'row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Premium burger',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/3727218/pexels-photo-3727218.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Matcha latte',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Chef cooking',
    span: 'col-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Truffle pasta',
    span: 'row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Loaded fries',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Cold brew coffee',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Takeaway packaging',
    span: '',
  },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 60);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="gallery" ref={sectionRef} className="section-padding bg-cream relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-gold/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span className="inline-flex items-center gap-2 bg-gold/10 text-dark-brown px-4 py-1.5 rounded-full font-inter text-xs font-600 tracking-wider uppercase mb-5">
            Gallery
          </span>
          <h2 className="font-montserrat font-800 text-3xl sm:text-4xl lg:text-5xl text-dark-brown leading-[1.15]">
            A Feast <span className="text-gradient">For The Eyes</span>
          </h2>
          <p className="font-inter text-base text-dark-brown/60 mt-4 max-w-lg mx-auto leading-relaxed">
            Every dish tells a story. Here's a glimpse behind the scenes and on the plate.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((img, i) => (
            <div
              key={i}
              className={`reveal relative rounded-2xl overflow-hidden group cursor-pointer ${img.span}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-dark-brown/0 group-hover:bg-dark-brown/40 transition-all duration-400" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center">
                  <ZoomIn size={20} className="text-beige-light" />
                </div>
              </div>
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
