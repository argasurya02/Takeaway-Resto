import { useRef, useEffect } from 'react';
import { CheckCircle2, Award, Users, Clock } from 'lucide-react';

const highlights = [
  'Premium quality ingredients sourced daily',
  'Hygienic kitchen prepared by professional chefs',
  'Eco-friendly packaging for every order',
  'Delivered warm and fresh to your door',
];

const stats = [
  { icon: Users, value: '5K+', label: 'Happy Customers' },
  { icon: Award, value: '8+', label: 'Years Experience' },
  { icon: Clock, value: '25 min', label: 'Avg Delivery' },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-cream relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-sage/8 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/8 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <div className="reveal-left relative">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our kitchen"
                className="w-full rounded-3xl object-cover h-[440px] shadow-2xl shadow-dark-brown/15"
              />
              {/* Overlapping accent image */}
              <div className="absolute -bottom-8 -right-6 w-52 h-52 rounded-2xl overflow-hidden border-4 border-cream shadow-xl shadow-dark-brown/20">
                <img
                  src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Fresh ingredients"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Years badge */}
              <div className="absolute -top-5 -left-4 glass-light rounded-2xl p-4 shadow-xl shadow-dark-brown/10">
                <div className="font-montserrat font-900 text-3xl text-gradient leading-none">8+</div>
                <div className="font-inter text-xs text-dark-brown/70 mt-0.5 leading-tight">Years of<br />Excellence</div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="pb-8 lg:pb-0">
            <div className="reveal">
              <span className="inline-flex items-center gap-2 bg-sage/10 text-sage-dark px-4 py-1.5 rounded-full font-inter text-xs font-600 tracking-wider uppercase mb-5">
                Our Story
              </span>
              <h2 className="font-montserrat font-800 text-3xl sm:text-4xl lg:text-5xl text-dark-brown leading-[1.15] mb-5">
                Bringing <span className="text-gradient-green">Premium Taste</span> To Your Door
              </h2>
              <p className="font-inter text-base text-dark-brown/65 leading-[1.8] mb-6">
                We started Takeway Resto with a simple mission: to make gourmet food accessible to everyone. Every dish is crafted by our experienced chefs using fresh, locally-sourced ingredients — no shortcuts, no compromises.
              </p>
              <p className="font-inter text-base text-dark-brown/65 leading-[1.8] mb-8">
                From our hygienic, state-of-the-art kitchen to your table in under 30 minutes — we take pride in every detail of your dining experience.
              </p>
            </div>

            <ul className="space-y-3 mb-10">
              {highlights.map((item, i) => (
                <li
                  key={item}
                  className="reveal flex items-start gap-3"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <CheckCircle2 size={20} className="text-sage mt-0.5 flex-shrink-0" />
                  <span className="font-inter text-sm text-dark-brown/75">{item}</span>
                </li>
              ))}
            </ul>

            {/* Stats row */}
            <div className="reveal flex flex-wrap gap-6">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-sage/12 flex items-center justify-center">
                    <Icon size={20} className="text-sage" />
                  </div>
                  <div>
                    <div className="font-montserrat font-800 text-xl text-dark-brown leading-none">{value}</div>
                    <div className="font-inter text-xs text-dark-brown/55 mt-0.5">{label}</div>
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
