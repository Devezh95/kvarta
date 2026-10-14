import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import CoffeeSection from "./components/sections/CoffeeSection";
import ContactSection from "./components/sections/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f0e8] text-[#35271f]">
      <Header />
      <HeroSection />
      <AboutSection />
      <CoffeeSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
