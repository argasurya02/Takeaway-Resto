import { Utensils, Instagram, MessageCircle, ExternalLink } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  {
    icon: Instagram,
    label: 'Instagram',
    href: 'https://instagram.com',
    color: 'hover:text-muted-orange',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    href: 'https://wa.me/1234567890',
    color: 'hover:text-sage',
  },
  {
    icon: ExternalLink,
    label: 'TikTok',
    href: 'https://tiktok.com',
    color: 'hover:text-gold',
  },
];

export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      className="relative overflow-hidden pt-16 pb-8 px-4 sm:px-6 lg:px-8"
      style={{ background: 'linear-gradient(160deg, #1F1F1F 0%, #2B2623 100%)' }}
    >
      {/* Ambient */}
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-sage/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12 pb-12 border-b border-beige-sand/10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-gold to-muted-orange flex items-center justify-center shadow-lg">
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
            </div>
            <p className="font-inter text-sm text-beige-sand/50 leading-[1.8] mb-6 max-w-xs">
              Premium takeaway dining crafted with passion. Fresh ingredients, unforgettable flavors, delivered to you.
            </p>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-10 h-10 rounded-xl glass-dark flex items-center justify-center text-beige-sand/50 ${color} transition-all duration-200 hover:-translate-y-0.5`}
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-poppins font-700 text-beige-light text-sm mb-5 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={e => { e.preventDefault(); handleNav(link.href); }}
                    className="font-inter text-sm text-beige-sand/50 hover:text-gold transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-0 h-px bg-gold group-hover:w-3 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact snippet */}
          <div>
            <h4 className="font-poppins font-700 text-beige-light text-sm mb-5 tracking-wide">
              Contact
            </h4>
            <ul className="space-y-3 font-inter text-sm text-beige-sand/50">
              <li>123 Culinary Street, Gourmet District</li>
              <li>San Francisco, CA 94102</li>
              <li>
                <a href="tel:+12345678900" className="hover:text-gold transition-colors">+1 (234) 567-8900</a>
              </li>
              <li>
                <a href="mailto:hello@takeway.com" className="hover:text-gold transition-colors">hello@takeway.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="font-inter text-xs text-beige-sand/30">
            &copy; {new Date().getFullYear()} Takeway Resto. All rights reserved.
          </p>
          <p className="font-inter text-xs text-beige-sand/30">
            Crafted with passion, served with love.
          </p>
        </div>
      </div>
    </footer>
  );
}
