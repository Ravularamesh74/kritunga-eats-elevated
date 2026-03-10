import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import krishnaTunga from "@/assets/krishna-tungabhadra.png";

const SpecialBanner = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 bg-primary overflow-hidden">

      {/* background glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-gold-light/10 rounded-full blur-[120px]" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-white/5 rounded-full blur-[140px]" />

      {/* pattern */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div
        ref={ref}
        className="container mx-auto px-4 lg:px-8 relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="tracking-[0.4em] uppercase text-gold-light mb-4">
              The Name
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Krishna + Tungabhadra
            </h2>

            {/* divider */}
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: 120 } : {}}
              transition={{ duration: 0.7 }}
              className="h-[2px] bg-gold-light mb-6"
            />

            <h3 className="text-2xl italic text-gold-light mb-6">
              = Kritunga
            </h3>

            <p className="text-white/80 leading-relaxed mb-6">
              Our name is a tribute to the sacred rivers of Rayalaseema —
              Krishna and Tungabhadra — whose confluence nourishes the
              land that inspired our cuisine.
            </p>

            <p className="text-white/80 leading-relaxed">
              Just as these rivers bring life to the region, Kritunga
              brings the authentic taste of Rayalaseema to every plate.
              Every recipe carries generations of culinary heritage.
            </p>
          </motion.div>

          {/* image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9 }}
            className="relative flex justify-center"
          >
            {/* floating animation */}
            <motion.img
              src={krishnaTunga}
              alt="Krishna Tungabhadra Rivers"
              animate={{ y: [0, -12, 0] }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut",
              }}
              className="max-w-[420px] w-full drop-shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
            />

            {/* glow */}
            <div className="absolute w-[300px] h-[300px] bg-gold-light/20 blur-[100px] rounded-full" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SpecialBanner;