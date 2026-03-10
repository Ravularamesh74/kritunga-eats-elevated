import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import heroBg from "@/assets/image copy 24.png";

const stats = [
  { num: "50+", label: "Outlets Worldwide" },
  { num: "5", label: "Countries" },
  { num: "200+", label: "Authentic Dishes" },
  { num: "20+", label: "Years Legacy" },
];

const locations = [
  "Hyderabad",
  "Secunderabad",
  "Vijayawada",
  "Visakhapatnam",
  "Bangalore",
  "United States",
  "Australia",
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">

        <div
          ref={ref}
          className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center"
        >
          
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img
                src={heroBg}
                alt="Kritunga Padmarao Nagar Restaurant"
                className="w-full h-[420px] lg:h-[520px] object-cover"
              />
            </div>

            {/* Highlight Badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-8 py-5 rounded-lg shadow-xl text-center">
              <span className="text-3xl font-bold block">20+</span>
              <span className="text-xs tracking-[0.2em] uppercase">
                Years Legacy
              </span>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <p className="uppercase text-accent tracking-[0.35em] text-sm mb-4">
              Featured Location
            </p>

            <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
              Kritunga
              <br />
              <span className="text-primary">
                Padmarao Nagar, Secunderabad
              </span>
            </h2>

            <div className="w-24 h-[2px] bg-accent mb-8"></div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Located in the vibrant neighborhood of Padmarao Nagar,
              Kritunga stands as one of the most iconic destinations for
              authentic Rayalaseema cuisine in Hyderabad. Known for its bold
              spices, rich flavors, and traditional cooking techniques,
              this restaurant has become a landmark for food lovers seeking
              the true taste of Andhra cuisine.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              From fiery Rayalaseema chicken curries to aromatic biryanis and
              authentic Telugu delicacies, every dish at Kritunga reflects
              generations of culinary heritage. The warm hospitality,
              vibrant atmosphere, and carefully crafted menu create an
              unforgettable dining experience for families and food
              enthusiasts alike.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-10">
              While the Padmarao Nagar branch remains one of the most loved
              locations, Kritunga has grown into a globally recognized
              Telugu restaurant brand with dozens of outlets across India
              and internationally.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <span className="text-3xl font-bold text-primary block">
                    {stat.num}
                  </span>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Locations */}
            <div>
              <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">
                Other Locations
              </h3>

              <div className="flex flex-wrap gap-3">
                {locations.map((loc) => (
                  <span
                    key={loc}
                    className="px-4 py-2 border rounded-full text-sm text-muted-foreground hover:bg-primary hover:text-white transition"
                  >
                    {loc}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;