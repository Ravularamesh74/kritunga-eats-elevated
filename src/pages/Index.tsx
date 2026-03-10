import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AmbienceSection from "@/components/AmbienceSection";
import MenuSection from "@/components/MenuSection";
import SpecialBanner from "@/components/SpecialBanner";
import LocationsSection from "@/components/LocationsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <AmbienceSection />
      <MenuSection />
      <SpecialBanner />
      <LocationsSection />
      <Footer />
    </div>
  );
};

export default Index;
