import { useState, useRef, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah Mitchell',
    role: 'Food Blogger',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: "Takeway Resto has completely changed how I experience takeaway. The truffle pasta was absolutely divine — restaurant quality at home. I'm obsessed!",
  },
  {
    name: 'James Thornton',
    role: 'Regular Customer',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: "The grilled salmon bowl is hands down the best thing I've eaten from any takeaway. Fresh, beautifully presented, and delivered piping hot. 10/10!",
  },
  {
    name: 'Priya Sharma',
    role: 'Nutritionist',
    avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: "As someone who pays close attention to what I eat, Takeway Resto impresses me every time. The ingredients are genuinely fresh and the portions are generous.",
  },
  {
    name: 'Marcus Chen',
    role: 'Chef',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: "Coming from a culinary background, I'm very critical of food. Takeway Resto gets it right — technique, seasoning, presentation. These guys are serious.",
  },
  {
    name: 'Emma Lawson',
    role: 'Office Manager',
    avatar: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: "We order for office lunches every week and the team always loves it. Consistent quality, always on time, and the packaging keeps everything fresh.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const navigate = (dir: 'prev' | 'next') => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent(prev =>
        dir === 'next' ? (prev + 1) % reviews.length : (prev - 1 + reviews.length) % reviews.length
      );
      setIsAnimating(false);
    }, 200);
  };

  useEffect(() => {
    const timer = setInterval(() => navigate('next'), 5000);
    return () => clearInterval(timer);
  }, []);

  const getIndex = (offset: number) => (current + offset + reviews.length) % reviews.length;

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #2B2623 0%, #1F1F1F 60%, #2B2623 100%)' }}
    >
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-gold/6 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-sage/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-flex items-center gap-2 border border-gold/30 text-gold px-4 py-1.5 rounded-full font-inter text-xs font-600 tracking-wider uppercase mb-5">
            Testimonials
          </span>
          <h2 className="font-montserrat font-800 text-3xl sm:text-4xl lg:text-5xl text-beige-light leading-[1.15]">
            What Our{' '}
            <span className="text-gradient">Customers Say</span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="reveal relative">
          {/* Side cards (desktop) */}
          <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-72 opacity-40 scale-90 transition-all duration-500">
            <ReviewCard review={reviews[getIndex(-1)]} />
          </div>
          <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-72 opacity-40 scale-90 transition-all duration-500">
            <ReviewCard review={reviews[getIndex(1)]} />
          </div>

          {/* Main card */}
          <div className="max-w-2xl mx-auto lg:px-20">
            <div
              className={`transition-all duration-300 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
            >
              <ReviewCard review={reviews[current]} featured />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={() => navigate('prev')}
              className="w-11 h-11 rounded-full glass-dark flex items-center justify-center text-beige-sand hover:text-gold hover:border-gold/40 transition-all duration-200"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === current
                      ? 'w-6 h-2 bg-gold'
                      : 'w-2 h-2 bg-beige-sand/30 hover:bg-beige-sand/60'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => navigate('next')}
              className="w-11 h-11 rounded-full glass-dark flex items-center justify-center text-beige-sand hover:text-gold hover:border-gold/40 transition-all duration-200"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review, featured = false }: { review: typeof reviews[0]; featured?: boolean }) {
  return (
    <div className={`glass-dark rounded-3xl p-7 ${featured ? 'shadow-2xl shadow-black/30' : ''}`}>
      <Quote size={28} className="text-gold/30 mb-4" />
      <p className="font-inter text-beige-sand/80 leading-[1.8] text-sm mb-6 italic">{review.text}</p>
      <div className="flex items-center gap-3">
        <img
          src={review.avatar}
          alt={review.name}
          className="w-11 h-11 rounded-full object-cover border-2 border-gold/30"
        />
        <div className="flex-1">
          <div className="font-poppins font-700 text-beige-light text-sm">{review.name}</div>
          <div className="font-inter text-xs text-beige-sand/50">{review.role}</div>
        </div>
        <div className="flex gap-0.5">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} size={13} fill="#C8A96B" className="text-gold" />
          ))}
        </div>
      </div>
    </div>
  );
}
