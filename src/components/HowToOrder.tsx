import { useRef, useEffect } from "react";
import { Search, MessageCircle, Package } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Pilih Menu Favorit",
    desc: "Temukan berbagai pilihan makanan dan minuman favorit dengan cita rasa autentik yang siap menemani setiap momen Anda.",
    color: "from-sage to-olive",
  },
  {
    step: "02",
    icon: MessageCircle,
    title: "Pesan Dengan Mudah",
    desc: "Lakukan pemesanan langsung melalui WhatsApp atau telepon untuk kebutuhan harian maupun pre-order acara spesial.",
    color: "from-gold to-muted-orange",
  },
  {
    step: "03",
    icon: Package,
    title: "Nikmati Hidangan Anda",
    desc: "Pesanan dapat diambil langsung di lokasi atau diantar hangat hingga sampai ke tangan Anda dengan aman dan praktis.",
    color: "from-muted-orange to-gold",
  },
];

export default function HowToOrder() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 150);
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
      id="HowToOrder"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #F8F6F2 0%, #E9DFC8 50%, #F8F6F2 100%)",
      }}
    >
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-sage/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-gold/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-flex items-center gap-2 bg-sage/12 text-sage-dark px-4 py-1.5 rounded-full font-inter text-xs font-600 tracking-wider uppercase mb-5">
            Cara Pemesanan
          </span>

          <h2 className="font-montserrat font-800 text-3xl sm:text-4xl lg:text-5xl text-dark-brown leading-[1.15]">
            Pesan Dalam
            <span className="text-gradient-green"> 3 Langkah Mudah</span>
          </h2>

          <p className="font-inter text-base text-dark-brown/60 mt-4 max-w-lg mx-auto leading-relaxed">
            Nikmati proses pemesanan yang praktis, cepat, dan nyaman untuk
            berbagai kebutuhan Anda.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div
            className="hidden lg:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sage/30 to-transparent"
            style={{ top: "64px" }}
          />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, i) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.step}
                  className="reveal text-center group"
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  {/* Icon */}
                  <div className="relative inline-flex flex-col items-center mb-8">
                    <div
                      className={`w-[72px] h-[72px] rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl shadow-dark-brown/10 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1 mx-auto`}
                    >
                      <Icon
                        size={30}
                        className="text-white"
                        strokeWidth={1.8}
                      />
                    </div>

                    <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-dark-brown flex items-center justify-center shadow">
                      <span className="font-montserrat font-800 text-gold text-[10px]">
                        {step.step}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-poppins font-700 text-dark-brown text-xl mb-3 group-hover:text-sage-dark transition-colors duration-300">
                    {step.title}
                  </h3>

                  <p className="font-inter text-sm text-dark-brown/60 leading-[1.8] max-w-xs mx-auto">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-14 reveal">
          <a
            href="https://wa.me/6281235028932?text=Halo%20Takeway%20Resto,%20saya%20ingin%20bertanya%20mengenai%20menu."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2.5 font-poppins text-sm relative z-10"
          >
            <MessageCircle size={18} />
            Pesan Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
