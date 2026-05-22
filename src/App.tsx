import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import HowToOrder from "./components/HowToOrder";
import Testimonials from "./components/Testimonials";
import Promo from "./components/Promo";
import Location from "./components/Location";
import Footer from "./components/Footer";
import FloatingOrderButton from "./components/FloatingOrderButton";

export default function App() {
  return (
    <div className="font-inter antialiased">
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
      <Menu />
      <Gallery />
      <HowToOrder />
      <Testimonials />
      <Location />
      <Footer />
      <FloatingOrderButton />
    </div>
  );
}
