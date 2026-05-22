import { useState, useRef, useEffect } from "react";
import { Plus, BadgeCheck } from "lucide-react";
import ayamGeprek from "../assets/Ayam_Geprek.jpg";
import Salad from "../assets/Salad.jpg";
import Kunir from "../assets/Kunir.jpg";
import Lalapan from "../assets/Lalapan.jpg";
import AyamCrispy from "../assets/Ayam_Crispy.jpg";

const categories = ["Semua Menu", "Makanan", "Minuman"];

const menuItems = [
  {
    id: 1,
    category: "Makanan",
    name: "Nasi Ayam Geprek",
    desc: "Ayam goreng krispy yang digeprek dengan sambal bawang pedas khas, disajikan bersama nasi hangat dan lalapan segar.",
    price: "Rp12.000",
    badge: true,
    img: ayamGeprek,
  },
  {
    id: 2,
    category: "Makanan",
    name: "Nasi Lalapan",
    desc: "Perpaduan ayam goreng bumbu kuning, tempe goreng renyah, nasi hangat, dan sambal terasi matang yang menggugah selera.",
    price: "Rp15.000",
    badge: true,
    img: Lalapan,
  },
  {
    id: 3,
    category: "Minuman",
    name: "Kunir Asem",
    desc: "Minuman tradisional segar berbahan kunyit pilihan dan asam jawa alami yang menyehatkan serta menyegarkan tubuh.",
    price: "Rp6.000",
    badge: false,
    img: Kunir,
  },
  {
    id: 4,
    category: "Makanan",
    name: "Ayam Krispy",
    desc: "Potongan ayam goreng dengan balutan tepung berbumbu rahasia yang renyah di luar dan tetap juicy di dalam.",
    price: "Rp10.000",
    badge: true,
    img: AyamCrispy,
  },
  {
    id: 5,
    category: "Makanan",
    name: "Salad Buah",
    desc: "Potongan buah segar pilihan yang dipadukan dengan saus creamy manis dan taburan keju melimpah.",
    price: "Rp15.000",
    badge: false,
    img: Salad,
  },
];

export default function Menu() {
  const [activeTab, setActiveTab] = useState("Semua Menu");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("visible");
              }, i * 80);
            });
          }
        });
      },
      { threshold: 0.05 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const filtered =
    activeTab === "Semua Menu"
      ? menuItems
      : menuItems.filter((item) => item.category === activeTab);

  return (
    <section
      id="menu"
      ref={sectionRef}
      className="section-padding bg-beige-light relative overflow-hidden"
    >
      {/* Background Blur */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-sage/6 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold/6 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 reveal visible">
          <span className="inline-flex items-center gap-2 bg-sage/10 text-sage-dark px-4 py-1.5 rounded-full font-inter text-xs font-600 tracking-wider uppercase mb-5">
            Menu Pilihan
          </span>

          <h2 className="font-montserrat font-800 text-3xl sm:text-4xl lg:text-5xl text-dark-brown leading-[1.15]">
            Hidangan Terbaik
            <span className="text-gradient-green"> Kami</span>
          </h2>

          <p className="font-inter text-base text-dark-brown/60 mt-4 max-w-lg mx-auto leading-relaxed">
            Nikmati berbagai pilihan makanan dan minuman dengan cita rasa
            autentik Indonesia.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10 reveal visible">
          <div className="glass-light rounded-2xl p-1.5 flex gap-1 flex-wrap justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2.5 rounded-xl font-poppins text-sm font-600 transition-all duration-300 ${
                  activeTab === cat
                    ? "bg-dark-brown text-gold shadow-lg"
                    : "text-dark-brown/60 hover:text-dark-brown"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {filtered.map((item, i) => (
            <div
              key={item.id}
              className="reveal visible card-hover bg-white rounded-3xl overflow-hidden shadow-lg shadow-dark-brown/6 group w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-sm"
              style={{
                transitionDelay: `${i * 80}ms`,
              }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/30 to-transparent" />

                {item.badge && (
                  <div className="absolute top-3 left-3 flex items-center gap-1 bg-gold text-dark-brown text-[10px] font-poppins font-700 px-2.5 py-1 rounded-full shadow">
                    <BadgeCheck size={11} />
                    Favorit
                  </div>
                )}

                <button className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-dark-brown/80 backdrop-blur-sm flex items-center justify-center text-gold opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gold hover:text-dark-brown shadow-lg">
                  <Plus size={17} strokeWidth={2.5} />
                </button>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-poppins font-700 text-dark-brown text-base leading-snug mb-1.5">
                  {item.name}
                </h3>

                <p className="font-inter text-xs text-dark-brown/55 leading-relaxed mb-4 line-clamp-3">
                  {item.desc}
                </p>

                <div className="flex items-center justify-between">
                  <span className="font-montserrat font-800 text-lg text-gradient leading-none">
                    {item.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
