import { useState, useEffect } from "react";
import { ShoppingBag } from "lucide-react";

export default function FloatingOrderButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="#menu"
      onClick={(e) => {
        e.preventDefault();
        document
          .getElementById("HowToOrder")
          ?.scrollIntoView({ behavior: "smooth" });
      }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-gradient-to-r from-gold to-muted-orange text-dark-brown font-poppins font-700 text-sm px-5 py-3.5 rounded-full shadow-2xl shadow-gold/25 hover:shadow-gold/40 hover:-translate-y-1 transition-all duration-300 animate-glow"
      aria-label="Order Now"
    >
      <ShoppingBag size={18} strokeWidth={2.5} />
      <span className="hidden sm:inline">Order Now</span>
    </a>
  );
}
