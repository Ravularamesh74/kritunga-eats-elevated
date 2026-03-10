import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import heroBg from "@/assets/hero-bg.png";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="ornate-border p-3">
              <img
                src={heroBg}
                alt="Kritunga Restaurant Ambiance"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-6 py-4 font-display text-center">
              <span className="text-3xl font-bold">20+</span>
              <p className="text-xs tracking-[0.2em] uppercase mt-1">Years of Legacy</p>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-heading text-lg tracking-[0.3em] uppercase text-accent mb-3">Our Story</p>
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              A Legacy of <br />
              <span className="text-primary">Rayalaseema Flavors</span>
            </h2>
            <div className="w-20 h-0.5 bg-accent mb-8" />
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              Born in the heartland of Rayalaseema, Kritunga brings the authentic, fiery, and bold flavors
              of Andhra Pradesh to your table. Named after the confluence of rivers Krishna and Tungabhadra,
              our cuisine is a celebration of the region's rich culinary heritage.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              From our humble beginnings in Hyderabad to becoming the biggest Telugu restaurant brand
              in the world — spread across Telangana, Andhra Pradesh, Karnataka, USA, and Australia —
              every dish carries the soul of Rayalaseema.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {[
                { num: "50+", label: "Outlets" },
                { num: "5", label: "Countries" },
                { num: "200+", label: "Dishes" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <span className="font-display text-2xl lg:text-3xl font-bold text-primary">{stat.num}</span>
                  <p className="font-heading text-sm tracking-widest uppercase text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
