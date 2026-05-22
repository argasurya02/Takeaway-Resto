import { useRef, useEffect } from "react";
import { CheckCircle2, Award, Users, Clock } from "lucide-react";
import FotoPiagam from "../assets/Foto_Piagam.png";
import Lalapan from "../assets/Lalapan.jpg";

const highlights = [
  "Menggunakan bahan berkualitas dan segar setiap hari",
  "Diolah secara higienis dengan cita rasa autentik",
  "Melayani pemesanan harian hingga acara besar",
  "Siap antar langsung ke lokasi pelanggan",
];

const stats = [
  { icon: Users, value: "1K+", label: "Pelanggan Puas" },
  { icon: Award, value: "5+", label: "Varian Menu" },
  { icon: Clock, value: "Fast", label: "Delivery Service" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target
              .querySelectorAll(".reveal, .reveal-left, .reveal-right")
              .forEach((el, i) => {
                setTimeout(() => el.classList.add("visible"), i * 120);
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
      id="about"
      ref={sectionRef}
      className="section-padding bg-cream relative overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-sage/8 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/8 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <div className="reveal-left relative">
            <div className="relative">
              <img
                src={FotoPiagam}
                alt="Takeway Resto"
                className="w-full rounded-3xl object-cover h-[440px] shadow-2xl shadow-dark-brown/15"
              />

              {/* Overlapping accent image */}
              <div className="absolute -bottom-8 -right-6 w-52 h-52 rounded-2xl overflow-hidden border-4 border-cream shadow-xl shadow-dark-brown/20">
                <img
                  src={Lalapan}
                  alt="Fresh Food"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Badge */}
              <div className="absolute -top-5 -left-4 glass-light rounded-2xl p-4 shadow-xl shadow-dark-brown/10">
                <div className="font-montserrat font-900 text-3xl text-gradient leading-none">
                  Takeway
                </div>

                <div className="font-inter text-xs text-dark-brown/70 mt-0.5 leading-tight">
                  Kuliner untuk
                  <br />
                  Keluarga Indonesia
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="pb-8 lg:pb-0">
            <div className="reveal">
              <span className="inline-flex items-center gap-2 bg-sage/10 text-sage-dark px-4 py-1.5 rounded-full font-inter text-xs font-600 tracking-wider uppercase mb-5">
                Tentang Kami
              </span>

              <h2 className="font-montserrat font-800 text-3xl sm:text-4xl lg:text-5xl text-dark-brown leading-[1.15] mb-5">
                Menghadirkan
                <span className="text-gradient-green"> Rasa Terbaik </span>
                dalam Setiap Momen
              </h2>

              <p className="font-inter text-base text-dark-brown/65 leading-[1.8] mb-6">
                Takeway Resto hadir dari semangat sekelompok sahabat SMA di
                Malang yang ingin tumbuh bersama melalui dunia kuliner. Berawal
                di tengah pandemi, kami terus berkembang dengan menghadirkan
                layanan pemesanan online dan delivery yang praktis untuk
                memenuhi kebutuhan pelanggan.
              </p>

              <p className="font-inter text-base text-dark-brown/65 leading-[1.8] mb-8">
                Bagi kami, makanan bukan hanya soal rasa, tetapi juga tentang
                kebersamaan, kepercayaan, dan perjalanan untuk terus tumbuh
                bersama masyarakat serta UMKM lokal di sekitar kami.
              </p>
            </div>

            {/* Highlights */}
            <ul className="space-y-3 mb-10">
              {highlights.map((item, i) => (
                <li
                  key={item}
                  className="reveal flex items-start gap-3"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <CheckCircle2
                    size={20}
                    className="text-sage mt-0.5 flex-shrink-0"
                  />

                  <span className="font-inter text-sm text-dark-brown/75">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Stats */}
            <div className="reveal flex flex-wrap gap-6">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-sage/12 flex items-center justify-center">
                    <Icon size={20} className="text-sage" />
                  </div>

                  <div>
                    <div className="font-montserrat font-800 text-xl text-dark-brown leading-none">
                      {value}
                    </div>

                    <div className="font-inter text-xs text-dark-brown/55 mt-0.5">
                      {label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
