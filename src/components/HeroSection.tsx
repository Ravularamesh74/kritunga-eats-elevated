import { motion, useMotionValue, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "@/assets/restaurant-interior.png";
import { useRef } from "react";

const HeroSection = () => {
  const ref = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      id="home"
      className="relative h-screen min-h-[650px] flex items-center justify-center overflow-hidden"
      style={{ perspective: 1200 }}
    >
      {/* Background */}
      <motion.div
        style={{
          rotateX,
          rotateY,
        }}
        className="absolute inset-0 will-change-transform"
      >
        <img
          src={heroImage}
          alt="Kritunga Restaurant Interior"
          className="w-full h-full object-cover scale-110"
        />

        {/* gradient overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
      </motion.div>

      {/* Floating lighting effect */}
      <motion.div
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg md:text-xl tracking-[0.4em] uppercase text-gold-light mb-4"
        >
          Est. 2004 · Hyderabad
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 tracking-wide"
        >
          KRITUNGA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4 }}
          className="text-xl md:text-2xl lg:text-3xl text-gold-light italic tracking-[0.15em] mb-10 font-serif"
        >
          The Palegar's Cuisine
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/menu"
            className="bg-primary text-primary-foreground px-8 py-3.5 text-sm font-bold tracking-[0.2em] uppercase hover:bg-maroon-dark transition-all"
          >
            Explore Menu
          </Link>

          <a
            href="#locations"
            className="border-2 border-gold-light text-gold-light px-8 py-3.5 text-sm font-bold tracking-[0.2em] uppercase hover:bg-gold-light/10 transition-all"
          >
            Find Us
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
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