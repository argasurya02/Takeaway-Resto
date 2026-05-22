import { useRef, useEffect } from "react";
import { Leaf, Shield, Truck, Star, DollarSign, Heart } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Kualitas Terjaga",
    desc: "Setiap hidangan dibuat menggunakan bahan pilihan dengan proses pengolahan yang higienis untuk menjaga rasa dan kualitas terbaik.",
    color: "from-sage to-olive",
    bg: "bg-sage/8",
  },
  {
    icon: Heart,
    title: "Memberdayakan Lokal",
    desc: "Kami melibatkan masyarakat sekitar dan mendukung kolaborasi bersama UMKM lokal dalam proses produksi pesanan besar.",
    color: "from-sage-light to-sage",
    bg: "bg-sage/8",
  },
  {
    icon: Star,
    title: "Cita Rasa Autentik",
    desc: "Menghadirkan resep tradisional dengan sentuhan modern yang tetap mempertahankan kelezatan khas di setiap sajian.",
    color: "from-gold to-muted-orange",
    bg: "bg-gold/8",
  },
  {
    icon: Leaf,
    title: "Pemesanan Langsung",
    desc: "Nikmati pengalaman datang langsung ke lokasi kami untuk menikmati hidangan hangat maupun membawa pulang makanan favorit Anda.",
    color: "from-muted-orange to-gold",
    bg: "bg-muted-orange/8",
  },
  {
    icon: Truck,
    title: "Pemesanan Online",
    desc: "Pesan dengan mudah melalui WhatsApp atau telepon untuk kebutuhan harian, pre-order, hingga pesanan dalam jumlah besar.",
    color: "from-gold to-sage",
    bg: "bg-gold/8",
  },
  {
    icon: DollarSign,
    title: "Pesanan Besar & Pre-Order",
    desc: "Melayani paket khusus untuk acara keluarga, kantor, gathering, dan berbagai event dengan kualitas rasa yang tetap terjaga. Disarankan melakukan pre-order minimal H-1.",
    color: "from-sage to-gold",
    bg: "bg-sage/8",
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll(".reveal").forEach((el, i) => {
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
      id="why"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #2B2623 0%, #1F1F1F 50%, #2B2623 100%)",
      }}
    >
      {/* Ambient glows */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-sage/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gold/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-flex items-center gap-2 border border-gold/30 text-gold px-4 py-1.5 rounded-full font-inter text-xs font-600 tracking-wider uppercase mb-5">
            Why Choose Us
          </span>

          <h2 className="font-montserrat font-800 text-3xl sm:text-4xl lg:text-5xl text-beige-light leading-[1.15]">
            Alasan Pelanggan
            <span className="text-gradient block sm:inline">
              {" "}
              Memilih Takeway
            </span>
          </h2>

          <p className="font-inter text-base text-beige-sand/60 mt-4 max-w-xl mx-auto leading-relaxed">
            Bukan hanya menghadirkan makanan lezat, tetapi juga pengalaman,
            kualitas, dan pelayanan terbaik dalam setiap pesanan.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feat, i) => {
            const Icon = feat.icon;

            return (
              <div
                key={feat.title}
                className="reveal card-hover glass-dark rounded-2xl p-7 group cursor-default"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Icon */}
                <div
                  className={`w-[52px] h-[52px] rounded-2xl ${feat.bg} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${feat.color} flex items-center justify-center shadow-lg`}
                  >
                    <Icon size={20} className="text-white" strokeWidth={2} />
                  </div>
                </div>

                <h3 className="font-poppins font-700 text-beige-light text-lg mb-3 group-hover:text-gold transition-colors duration-300">
                  {feat.title}
                </h3>

                <p className="font-inter text-sm text-beige-sand/55 leading-[1.8]">
                  {feat.desc}
                </p>

                {/* Bottom accent */}
                <div
                  className={`mt-5 h-0.5 w-0 group-hover:w-12 bg-gradient-to-r ${feat.color} rounded-full transition-all duration-500`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
