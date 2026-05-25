import { useRef, useEffect } from "react";
import {
  MapPin,
  Instagram,
  Clock,
  Phone,
  MessageCircle,
  Navigation,
  Mail,
} from "lucide-react";

const hours = [
  { day: "Senin – Sabtu", time: "09:00 – 21:00" },
  { day: "Minggu", time: "09:00 – 20:00" },
];

export default function Location() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target
              .querySelectorAll(".reveal, .reveal-left, .reveal-right")
              .forEach((el, i) => {
                setTimeout(() => el.classList.add("visible"), i * 100);
              });
          }
        });
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding bg-beige-light relative overflow-hidden"
    >
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-sage/6 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-gold/6 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-flex items-center gap-2 bg-sage/10 text-sage-dark px-4 py-1.5 rounded-full font-inter text-xs font-600 tracking-wider uppercase mb-5">
            Lokasi Kami
          </span>

          <h2 className="font-montserrat font-800 text-3xl sm:text-4xl lg:text-5xl text-dark-brown leading-[1.15]">
            Datang Langsung atau
            <span className="text-gradient-green"> Pesan dari Rumah</span>
          </h2>

          <p className="font-inter text-base text-dark-brown/60 mt-4 max-w-lg mx-auto leading-relaxed">
            Nikmati kemudahan memesan makanan favorit dengan layanan cepat, dan
            siap menemani setiap momen kebersamaan Anda.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Map */}
          <div className="reveal-left rounded-3xl overflow-hidden shadow-xl shadow-dark-brown/10 h-[420px] relative">
            <iframe
              title="Takeway Resto Location"
              src="https://www.google.com/maps?q=-7.981744,112.626503&output=embed"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "sepia(20%) hue-rotate(10deg) saturate(90%)",
              }}
              allowFullScreen
              loading="lazy"
            />

            <div className="absolute bottom-4 left-4 right-4">
              <a
                href="https://maps.app.goo.gl/yn8akMhPFsX32RZ68?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 glass-light text-dark-brown font-poppins font-600 text-sm px-5 py-3 rounded-2xl shadow-lg hover:bg-white/90 transition-all duration-200"
              >
                <Navigation size={16} className="text-sage" />
                Lihat Rute Lokasi
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
                <div className="font-poppins font-700 text-dark-brown text-sm mb-1">
                  Lokasi
                </div>

                <div className="font-inter text-sm text-dark-brown/65 leading-relaxed">
                  Indah E5, Jl. Perum Asrikaton Jl. Kebun Cengkeh 4 No.2,
                  RT.4/RW.9 Bunut Kidul, Asrikaton, Kec. Pakis Kabupaten Malang,
                  Jawa Timur 65154 Malang, Jawa Timur
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
                  <div className="font-poppins font-700 text-dark-brown text-sm">
                    Jam Operasional
                  </div>
                </div>
              </div>

              <div className="space-y-2 ml-[60px] -mt-2">
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex items-center justify-between"
                  >
                    <span className="font-inter text-xs text-dark-brown/60">
                      {h.day}
                    </span>

                    <span className="font-inter text-xs font-600 text-dark-brown">
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://wa.me/6281235028932?text=Halo%20Takeway%20Resto,%20saya%20ingin%20bertanya%20mengenai%20menu."
                target="_blank"
                rel="noopener noreferrer"
                className="glass-light rounded-2xl p-5 flex flex-col items-center gap-2.5 text-center hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-xl bg-sage/15 flex items-center justify-center group-hover:bg-sage/25 transition-colors">
                  <MessageCircle size={18} className="text-sage" />
                </div>

                <div>
                  <div className="font-poppins font-700 text-dark-brown text-xs">
                    WhatsApp
                  </div>

                  <div className="font-inter text-xs text-dark-brown/55 mt-0.5">
                    Hubungi Kami
                  </div>
                </div>
              </a>

              <a
                href="mailto:takewayresto@gmail.com"
                className="glass-light rounded-2xl p-5 flex flex-col items-center gap-2.5 text-center hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/12 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Mail size={18} className="text-gold" />
                </div>

                <div>
                  <div className="font-poppins font-700 text-dark-brown text-xs">
                    Email
                  </div>

                  <div className="font-inter text-xs text-dark-brown/55 mt-0.5">
                    takewayresto@gmail.com
                  </div>
                </div>
              </a>
            </div>

            {/* Phone */}
            {/* Phone & Instagram */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone */}
              <a
                href="tel:+62 812-3502-8932"
                className="glass-light rounded-2xl p-5 flex gap-4 items-center hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-11 h-11 rounded-xl bg-muted-orange/12 flex items-center justify-center group-hover:bg-muted-orange/20 transition-colors flex-shrink-0">
                  <Phone size={20} className="text-muted-orange" />
                </div>

                <div>
                  <div className="font-poppins font-700 text-dark-brown text-sm">
                    Telepon
                  </div>

                  <div className="font-inter text-sm text-dark-brown/65">
                    +62 812-3502-8932
                  </div>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/takewayresto/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-light rounded-2xl p-5 flex gap-4 items-center hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-11 h-11 rounded-xl bg-pink-500/10 flex items-center justify-center group-hover:bg-pink-500/20 transition-colors flex-shrink-0">
                  <Instagram size={20} className="text-pink-500" />
                </div>

                <div>
                  <div className="font-poppins font-700 text-dark-brown text-sm">
                    Instagram
                  </div>

                  <div className="font-inter text-sm text-dark-brown/65">
                    @takewayresto
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
