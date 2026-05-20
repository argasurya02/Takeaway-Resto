import { useRef, useEffect } from 'react';
import { Tag, MessageCircle, Sparkles } from 'lucide-react';

export default function Promo() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-cream">
      <div className="max-w-5xl mx-auto">
        <div
          className="reveal relative rounded-3xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #2B2623 0%, #3d3027 40%, #5F715D 100%)',
          }}
        >
          {/* Glowing orbs */}
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-gold/15 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-sage/15 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-muted-orange/8 rounded-full blur-[100px] pointer-events-none" />

          {/* Food image on the right */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 hidden lg:block overflow-hidden opacity-25">
            <img
              src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Promo food"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-dark-brown to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 px-8 sm:px-14 py-16 lg:py-20 lg:max-w-[65%]">
            <div className="reveal flex items-center gap-2 mb-5">
              <Sparkles size={16} className="text-gold" />
              <span className="font-inter text-gold text-xs font-600 tracking-[0.2em] uppercase">
                Limited Time Offer
              </span>
            </div>

            <div className="reveal">
              <h2 className="font-montserrat font-900 text-4xl sm:text-5xl lg:text-6xl text-beige-light leading-[1.1] mb-3">
                Get{' '}
                <span className="shimmer-gold">20% OFF</span>
              </h2>
              <h3 className="font-montserrat font-700 text-2xl sm:text-3xl text-beige-sand mb-5">
                Your First Order
              </h3>
            </div>

            <p className="reveal font-inter text-beige-sand/65 text-base leading-relaxed mb-8 max-w-md">
              New to Takeway Resto? Enjoy 20% off your entire first order. Use code{' '}
              <span className="text-gold font-600 bg-gold/10 px-2 py-0.5 rounded-lg">WELCOME20</span>{' '}
              at checkout or mention it on WhatsApp.
            </p>

            <div className="reveal flex flex-wrap gap-4">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="animate-glow inline-flex items-center gap-2.5 bg-gradient-to-r from-gold to-muted-orange text-dark-brown font-poppins font-700 text-sm px-7 py-3.5 rounded-full shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-gold/30 hover:shadow-2xl"
              >
                <Tag size={17} />
                Claim Promo
              </a>
              <div className="flex items-center gap-2 text-beige-sand/50 text-sm font-inter">
                <MessageCircle size={15} className="text-sage" />
                <span>Via WhatsApp · Code: WELCOME20</span>
              </div>
            </div>

            {/* Fine print */}
            <p className="reveal mt-6 font-inter text-xs text-beige-sand/35">
              *Valid for new customers only. One use per account. Cannot be combined with other offers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
