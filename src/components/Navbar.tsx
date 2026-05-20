import { useState, useEffect } from 'react';
import { Menu, X, Utensils } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map(l => l.href.slice(1));
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-dark-brown/95 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-gold/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={e => { e.preventDefault(); handleNav('#home'); }}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-gold to-muted-orange flex items-center justify-center shadow-lg group-hover:shadow-gold/30 transition-shadow">
              <Utensils size={18} className="text-dark-brown" strokeWidth={2.5} />
            </div>
            <div>
              <span className="font-montserrat font-800 text-lg text-beige-light leading-none block tracking-wide">
                Takeway
              </span>
              <span className="font-inter text-[10px] tracking-[0.2em] text-gold uppercase leading-none">
                Resto
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={e => { e.preventDefault(); handleNav(link.href); }}
                className={`relative px-4 py-2 font-inter text-sm font-500 transition-all duration-300 rounded-full group ${
                  active === link.href.slice(1)
                    ? 'text-gold'
                    : 'text-beige-sand hover:text-beige-light'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-gold transition-all duration-300 ${
                    active === link.href.slice(1) ? 'w-4' : 'w-0 group-hover:w-4'
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#menu"
              onClick={e => { e.preventDefault(); handleNav('#menu'); }}
              className="btn-primary text-sm font-poppins relative z-10"
            >
              Order Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-beige-light rounded-xl"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-400 overflow-hidden ${
          open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-dark-brown/98 backdrop-blur-xl border-t border-gold/10 px-4 py-4 space-y-1">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={e => { e.preventDefault(); handleNav(link.href); }}
              className={`block px-4 py-3 font-inter text-sm font-500 rounded-xl transition-all duration-200 ${
                active === link.href.slice(1)
                  ? 'text-gold bg-gold/10'
                  : 'text-beige-sand hover:text-beige-light hover:bg-white/5'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 pb-1">
            <a
              href="#menu"
              onClick={e => { e.preventDefault(); handleNav('#menu'); }}
              className="btn-primary text-sm font-poppins block text-center relative z-10"
            >
              Order Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
