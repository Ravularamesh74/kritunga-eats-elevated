import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import krishnaTunga from "@/assets/krishna-tungabhadra.png";

const SpecialBanner = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div ref={ref} className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="font-heading text-lg tracking-[0.3em] uppercase text-gold-light mb-3">The Name</p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground mb-6 leading-tight">
              Krishna + Tungabhadra
              <br />
              <span className="text-gold-light italic font-heading font-normal text-2xl">= Kritunga</span>
            </h2>
            <p className="font-body text-primary-foreground/80 leading-relaxed mb-6">
              Our name is a tribute to the two sacred rivers of Rayalaseema — Krishna and Tungabhadra — 
              whose confluence nourishes the land that inspired our cuisine. Just as these rivers bring 
              life to the region, our food brings the authentic taste of Rayalaseema to every plate.
            </p>
            <p className="font-body text-primary-foreground/80 leading-relaxed">
              Every spice, every recipe, every tradition we serve has been passed down through generations 
              of Rayalaseema families, preserving the fierce and bold flavors that define this cuisine.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <img
              src={krishnaTunga}
              alt="Krishna Tungabhadra"
              className="max-w-[350px] w-full opacity-90"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SpecialBanner;
