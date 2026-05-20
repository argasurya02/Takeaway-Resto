import { useRef, useEffect } from 'react';
import { MapPin, Clock, Phone, MessageCircle, Navigation, Mail } from 'lucide-react';

const hours = [
  { day: 'Monday – Friday', time: '10:00 AM – 10:00 PM' },
  { day: 'Saturday', time: '09:00 AM – 11:00 PM' },
  { day: 'Sunday', time: '10:00 AM – 09:00 PM' },
];

export default function Location() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
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
    <section id="contact" ref={sectionRef} className="section-padding bg-beige-light relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-sage/6 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-gold/6 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-flex items-center gap-2 bg-sage/10 text-sage-dark px-4 py-1.5 rounded-full font-inter text-xs font-600 tracking-wider uppercase mb-5">
            Find Us
          </span>
          <h2 className="font-montserrat font-800 text-3xl sm:text-4xl lg:text-5xl text-dark-brown leading-[1.15]">
            Visit or <span className="text-gradient-green">Order Delivery</span>
          </h2>
          <p className="font-inter text-base text-dark-brown/60 mt-4 max-w-lg mx-auto leading-relaxed">
            We're conveniently located and always ready to serve you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Map */}
          <div className="reveal-left rounded-3xl overflow-hidden shadow-xl shadow-dark-brown/10 h-[420px] relative">
            <iframe
              title="Takeway Resto Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434508913!2d-122.41941518468262!3d37.77492977975881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5158c09!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1634000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'sepia(20%) hue-rotate(10deg) saturate(90%)' }}
              allowFullScreen
              loading="lazy"
            />
            <div className="absolute bottom-4 left-4 right-4">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 glass-light text-dark-brown font-poppins font-600 text-sm px-5 py-3 rounded-2xl shadow-lg hover:bg-white/90 transition-all duration-200"
              >
                <Navigation size={16} className="text-sage" />
                Get Directions
              </a>
            </div>
          </div>

          {/* Info Cards */}
          <div className="reveal-right space-y-5">
            {/* Address */}
            <div className="glass-light rounded-2xl p-6 flex gap-4 items-start">
              <div className="w-11 h-11 rounded-xl bg-sage/15 flex items-center justify-center flex-shrink-0">
                <MapPin size={20} className="text-sage" />
              </div>
              <div>
                <div className="font-poppins font-700 text-dark-brown text-sm mb-1">Our Location</div>
                <div className="font-inter text-sm text-dark-brown/65 leading-relaxed">
                  123 Culinary Street, Gourmet District<br />
                  San Francisco, CA 94102
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="glass-light rounded-2xl p-6">
              <div className="flex gap-4 items-start mb-4">
                <div className="w-11 h-11 rounded-xl bg-gold/12 flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-gold" />
                </div>
                <div>
                  <div className="font-poppins font-700 text-dark-brown text-sm">Opening Hours</div>
                </div>
              </div>
              <div className="space-y-2 ml-[60px] -mt-2">
                {hours.map(h => (
                  <div key={h.day} className="flex items-center justify-between">
                    <span className="font-inter text-xs text-dark-brown/60">{h.day}</span>
                    <span className="font-inter text-xs font-600 text-dark-brown">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-light rounded-2xl p-5 flex flex-col items-center gap-2.5 text-center hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-xl bg-sage/15 flex items-center justify-center group-hover:bg-sage/25 transition-colors">
                  <MessageCircle size={18} className="text-sage" />
                </div>
                <div>
                  <div className="font-poppins font-700 text-dark-brown text-xs">WhatsApp</div>
                  <div className="font-inter text-xs text-dark-brown/55 mt-0.5">+1 (234) 567-890</div>
                </div>
              </a>

              <a
                href="mailto:hello@takewayreso.com"
                className="glass-light rounded-2xl p-5 flex flex-col items-center gap-2.5 text-center hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/12 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Mail size={18} className="text-gold" />
                </div>
                <div>
                  <div className="font-poppins font-700 text-dark-brown text-xs">Email Us</div>
                  <div className="font-inter text-xs text-dark-brown/55 mt-0.5">hello@takeway.com</div>
                </div>
              </a>
            </div>

            {/* Phone */}
            <a
              href="tel:+12345678900"
              className="glass-light rounded-2xl p-5 flex gap-4 items-center hover:shadow-md transition-all duration-200 group"
            >
              <div className="w-11 h-11 rounded-xl bg-muted-orange/12 flex items-center justify-center group-hover:bg-muted-orange/20 transition-colors flex-shrink-0">
                <Phone size={20} className="text-muted-orange" />
              </div>
              <div>
                <div className="font-poppins font-700 text-dark-brown text-sm">Call Us</div>
                <div className="font-inter text-sm text-dark-brown/65">+1 (234) 567-8900</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
