import { useEffect, useState } from "react";
import {
  ArrowRight,
  Star,
  Leaf,
  Zap,
  TrendingUp,
  ChevronDown,
} from "lucide-react";

// IMPORT GAMBAR AYAM GEPREK
import ayamGeprek from "../assets/Ayam_Geprek.jpg";
import Salad from "../assets/Kunir.jpg";
import Foto from "../assets/Bule.png";

const badges = [
  { icon: Leaf, label: "Fresh Ingredients", color: "from-sage to-olive" },
  { icon: Zap, label: "Fast Delivery", color: "from-gold to-muted-orange" },
  {
    icon: TrendingUp,
    label: "Best Seller",
    color: "from-muted-orange to-gold",
  },
];

const floatingCards = [
  {
    img: ayamGeprek,
    label: "Nasi Ayam Geprek",
    rating: "4.9",
    price: "Rp12K",
    delay: "0s",
  },
  {
    img: Salad,
    label: "Kunir Asem",
    rating: "4.8",
    price: "Rp6K",
    delay: "1.5s",
  },
];

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollDown = () => {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${ayamGeprek})`,
        }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-brown via-dark-brown/85 to-olive/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/80 via-transparent to-dark-brown/30" />

      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sage/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div
            className={`transition-all duration-1000 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Badges */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {badges.map(({ icon: Icon, label, color }) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 glass px-3.5 py-1.5 rounded-full"
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-gradient-to-br ${color} flex items-center justify-center`}
                  >
                    <Icon size={11} className="text-white" />
                  </div>
                  <span className="text-beige-light text-xs font-inter font-500 tracking-wide">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Headline */}
            <h1 className="font-montserrat font-900 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-beige-light leading-[1.1] mb-6">
              Kuliner Berkualitas
              <span className="block mt-1">
                <span className="text-gradient">untuk Keluarga</span>
              </span>
              <span className="block">Indonesia</span>
            </h1>

            <p className="font-inter text-base sm:text-lg text-beige-sand/80 leading-relaxed mb-10 max-w-lg">
              Melayani pemesanan langsung dan pre-order dengan cita rasa
              autentik yang terjaga
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#HowToOrder"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("HowToOrder")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-primary flex items-center gap-2.5 font-poppins group relative z-10"
              >
                Order Now
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="#menu"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("menu")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-secondary flex items-center gap-2.5 font-poppins"
              >
                Lihat Menu
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12">
              {[
                { value: "1K+", label: "Happy Customers" },
                {
                  value: "4.9",
                  label: "Average Rating",
                  sub: (
                    <span className="flex ml-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={10}
                          fill="#C8A96B"
                          className="text-gold"
                        />
                      ))}
                    </span>
                  ),
                },
                { value: "5+", label: "Menu Varieties" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-montserrat font-800 text-2xl text-gradient">
                    {stat.value}
                  </div>
                  <div className="font-inter text-xs text-beige-sand/70 flex items-center mt-0.5 whitespace-nowrap">
                    {stat.label}
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Floating Cards */}
          <div
            className={`hidden lg:block relative h-[520px] transition-all duration-1200 delay-300 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Main hero image card */}
            <div className="absolute inset-8 rounded-3xl overflow-hidden shadow-2xl shadow-black/40">
              <img
                src={Foto}
                alt="Hero Foto"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/60 to-transparent" />
            </div>

            {/* Floating mini cards */}
            {floatingCards.map((card, i) => (
              <div
                key={card.label}
                className="absolute glass-dark rounded-2xl p-3 shadow-xl shadow-black/30 animate-float"
                style={{
                  animationDelay: card.delay,
                  ...(i === 0
                    ? { bottom: "60px", left: "-10px", width: "190px" }
                    : { top: "50px", right: "-10px", width: "180px" }),
                }}
              >
                <img
                  src={card.img}
                  alt={card.label}
                  className="w-full h-24 object-cover rounded-xl mb-3"
                />
                <div className="font-poppins font-600 text-beige-light text-xs leading-snug">
                  {card.label}
                </div>
                <div className="flex items-center justify-between mt-1.5">
                  <span className="text-gold font-inter font-700 text-sm">
                    {card.price}
                  </span>
                  <span className="flex items-center gap-1 text-beige-sand/70 text-xs">
                    <Star size={10} fill="#C8A96B" className="text-gold" />
                    {card.rating}
                  </span>
                </div>
              </div>
            ))}

            {/* Glow orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gold/8 rounded-full blur-[80px] pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-beige-sand/50 hover:text-gold transition-colors group"
      >
        <span className="font-inter text-xs tracking-[0.2em] uppercase">
          Scroll
        </span>
        <ChevronDown size={18} className="animate-bounce" />
      </button>
    </section>
  );
}
