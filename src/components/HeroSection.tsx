import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "@/assets/restaurant-interior.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Kritunga Restaurant Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="font-heading text-lg md:text-xl tracking-[0.4em] uppercase text-gold-light mb-4">
            Est. 2004 · Hyderabad
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 tracking-wide"
        >
          KRITUNGA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="font-heading text-xl md:text-2xl lg:text-3xl text-gold-light italic tracking-wide mb-10"
        >
          The Rayalaseema Cuisine
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/menu"
            className="bg-primary text-primary-foreground px-8 py-3.5 font-body text-sm font-bold tracking-[0.2em] uppercase hover:bg-maroon-dark transition-colors"
          >
            Explore Menu
          </Link>
          <a
            href="#locations"
            className="border-2 border-gold-light text-gold-light px-8 py-3.5 font-body text-sm font-bold tracking-[0.2em] uppercase hover:bg-gold-light/10 transition-colors"
          >
            Find Us
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gold-light/50 rounded-full flex items-start justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-gold-light rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
