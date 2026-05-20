import { useState, useRef, useEffect } from 'react';
import { Star, Plus, BadgeCheck } from 'lucide-react';

const categories = ['Main Course', 'Snacks', 'Drinks'];

const menuItems = [
  // Main Course
  {
    id: 1,
    category: 'Main Course',
    name: 'Grilled Salmon Bowl',
    desc: 'Norwegian salmon over jasmine rice, miso glaze, pickled cucumber.',
    price: '$18.90',
    rating: 4.9,
    reviews: 312,
    badge: true,
    img: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 2,
    category: 'Main Course',
    name: 'Truffle Mushroom Pasta',
    desc: 'Hand-made fettuccine tossed in truffle oil with wild mushrooms.',
    price: '$16.50',
    rating: 4.8,
    reviews: 245,
    badge: true,
    img: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 3,
    category: 'Main Course',
    name: 'Herb-Crusted Chicken',
    desc: 'Free-range chicken breast with rosemary crust, roasted vegetables.',
    price: '$15.90',
    rating: 4.7,
    reviews: 189,
    badge: false,
    img: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 4,
    category: 'Main Course',
    name: 'Wagyu Beef Burger',
    desc: 'Wagyu patty, caramelized onion, aged cheddar, brioche bun.',
    price: '$22.00',
    rating: 4.9,
    reviews: 420,
    badge: true,
    img: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  // Snacks
  {
    id: 5,
    category: 'Snacks',
    name: 'Loaded Truffle Fries',
    desc: 'Crispy fries tossed in truffle oil, parmesan, fresh chives.',
    price: '$8.90',
    rating: 4.8,
    reviews: 531,
    badge: true,
    img: 'https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 6,
    category: 'Snacks',
    name: 'Avocado Toast Bites',
    desc: 'Sourdough toasts with smashed avo, cherry tomato, microgreens.',
    price: '$9.50',
    rating: 4.6,
    reviews: 198,
    badge: false,
    img: 'https://images.pexels.com/photos/1640776/pexels-photo-1640776.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 7,
    category: 'Snacks',
    name: 'Crispy Calamari',
    desc: 'Lightly battered calamari rings with lemon aioli dipping sauce.',
    price: '$11.00',
    rating: 4.7,
    reviews: 267,
    badge: false,
    img: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 8,
    category: 'Snacks',
    name: 'Cheese Spring Rolls',
    desc: 'Crispy rolls filled with mozzarella, herbs, and chili jam.',
    price: '$7.90',
    rating: 4.5,
    reviews: 145,
    badge: false,
    img: 'https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  // Drinks
  {
    id: 9,
    category: 'Drinks',
    name: 'Matcha Latte',
    desc: 'Ceremonial grade matcha, oat milk, light honey sweetness.',
    price: '$6.50',
    rating: 4.9,
    reviews: 389,
    badge: true,
    img: 'https://images.pexels.com/photos/3727218/pexels-photo-3727218.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 10,
    category: 'Drinks',
    name: 'Mango Passion Cooler',
    desc: 'Fresh mango, passion fruit, sparkling water, mint leaves.',
    price: '$5.90',
    rating: 4.7,
    reviews: 213,
    badge: false,
    img: 'https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 11,
    category: 'Drinks',
    name: 'Cold Brew Coffee',
    desc: 'Slow-steeped 18-hour cold brew with vanilla cream float.',
    price: '$6.00',
    rating: 4.8,
    reviews: 302,
    badge: true,
    img: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 12,
    category: 'Drinks',
    name: 'Tropical Smoothie Bowl',
    desc: 'Blended acai, banana, coconut milk, topped with granola & berries.',
    price: '$10.90',
    rating: 4.6,
    reviews: 174,
    badge: false,
    img: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function Menu() {
  const [activeTab, setActiveTab] = useState('Main Course');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filtered = menuItems.filter(item => item.category === activeTab);

  return (
    <section id="menu" ref={sectionRef} className="section-padding bg-beige-light relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-sage/6 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold/6 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span className="inline-flex items-center gap-2 bg-sage/10 text-sage-dark px-4 py-1.5 rounded-full font-inter text-xs font-600 tracking-wider uppercase mb-5">
            Our Menu
          </span>
          <h2 className="font-montserrat font-800 text-3xl sm:text-4xl lg:text-5xl text-dark-brown leading-[1.15]">
            Best Seller{' '}
            <span className="text-gradient-green">Favorites</span>
          </h2>
          <p className="font-inter text-base text-dark-brown/60 mt-4 max-w-lg mx-auto leading-relaxed">
            Hand-picked by our chefs and loved by thousands of customers.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-10 reveal">
          <div className="glass-light rounded-2xl p-1.5 flex gap-1">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2.5 rounded-xl font-poppins text-sm font-600 transition-all duration-300 ${
                  activeTab === cat
                    ? 'bg-dark-brown text-gold shadow-lg'
                    : 'text-dark-brown/60 hover:text-dark-brown'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((item, i) => (
            <div
              key={item.id}
              className="reveal card-hover bg-white rounded-3xl overflow-hidden shadow-lg shadow-dark-brown/6 group"
              style={{ transitionDelay: `${i * 80}ms` }}
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
                    <BadgeCheck size={11} /> Best Seller
                  </div>
                )}
                <button className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-dark-brown/80 backdrop-blur-sm flex items-center justify-center text-gold opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gold hover:text-dark-brown shadow-lg">
                  <Plus size={17} strokeWidth={2.5} />
                </button>
              </div>

              {/* Body */}
              <div className="p-5">
                <h3 className="font-poppins font-700 text-dark-brown text-base leading-snug mb-1.5">
                  {item.name}
                </h3>
                <p className="font-inter text-xs text-dark-brown/55 leading-relaxed mb-4 line-clamp-2">
                  {item.desc}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-montserrat font-800 text-lg text-gradient leading-none">{item.price}</span>
                  <div className="flex items-center gap-1">
                    <Star size={12} fill="#C8A96B" className="text-gold" />
                    <span className="font-inter text-xs font-600 text-dark-brown/70">{item.rating}</span>
                    <span className="font-inter text-xs text-dark-brown/40">({item.reviews})</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
