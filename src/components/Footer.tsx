import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import logo from "@/assets/kritunga-logo.png";

const whatsappNumber = "919640059577";
const whatsappMessage =
  "Hello Kritunga, I would like to reserve a table.";

const Counter = ({ value, label }) => {

  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {

    if (!inView) return;

    let start = 0;
    const end = parseInt(value);
    const duration = 1500;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {

      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }

    }, 16);

    return () => clearInterval(counter);

  }, [inView, value]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-3xl font-display font-bold text-primary">
        {count}+
      </p>

      <p className="text-xs tracking-widest uppercase opacity-70 mt-1">
        {label}
      </p>
    </div>
  );
};

export default function Footer() {

  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <footer
      id="contact"
      className="relative bg-foreground text-primary-foreground overflow-hidden"
    >

      {/* animated glow background */}
      <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-primary via-orange-500 to-red-500 blur-3xl animate-pulse"></div>

      {/* Stats */}
      <div className="border-b border-primary-foreground/10 relative">

        <div className="container mx-auto px-4 lg:px-8 py-14">

          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-10"
          >

            <Counter value="50" label="Global Outlets" />
            <Counter value="5" label="Countries" />
            <Counter value="200" label="Authentic Dishes" />
            <Counter value="20" label="Years Legacy" />

          </motion.div>

        </div>

      </div>

      {/* Main footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16 relative">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >

            <div className="flex items-center gap-3 mb-4">

              <motion.img
                whileHover={{ rotate: 10, scale: 1.1 }}
                src={logo}
                alt="Kritunga"
                className="h-12 w-12"
              />

              <div>
                <h3 className="font-display text-xl font-bold">
                  KRITUNGA
                </h3>

                <p className="text-xs tracking-[0.2em] opacity-70">
                  The Rayalaseema Cuisine
                </p>
              </div>

            </div>

            <p className="text-sm opacity-70 leading-relaxed">
              The biggest Telugu restaurant brand in the world,
              serving authentic Rayalaseema cuisine since 2004.
            </p>

          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >

            <h4 className="text-lg font-semibold mb-4">
              Quick Links
            </h4>

            <div className="space-y-3 text-sm opacity-70">

              {["Home", "About", "Menu", "Locations"].map((link) => (

                <motion.a
                  whileHover={{ x: 6 }}
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block"
                >
                  {link}
                </motion.a>

              ))}

            </div>

          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >

            <h4 className="text-lg font-semibold mb-4">
              Contact
            </h4>

            <div className="space-y-4 text-sm opacity-70">

              <div className="flex gap-3">
                <MapPin className="w-4 h-4 mt-1" />
                <span>
                  Padmarao Nagar, Secunderabad, Hyderabad
                </span>
              </div>

              <div className="flex gap-3">
                <Phone className="w-4 h-4" />
                <span>+91 9640059577</span>
              </div>

              <div className="flex gap-3">
                <Mail className="w-4 h-4" />
                <span>info@kritunga.in</span>
              </div>

            </div>

          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
          >

            <h4 className="text-lg font-semibold mb-4">
              Follow Us
            </h4>

            <div className="flex gap-4">

              <motion.a
                whileHover={{
                  scale: 1.2,
                  rotate: 5,
                  backgroundColor: "#E1306C",
                }}
                className="w-10 h-10 border flex items-center justify-center"
              >
                <Instagram size={16} />
              </motion.a>

              <motion.a
                whileHover={{
                  scale: 1.2,
                  rotate: -5,
                  backgroundColor: "#1877F2",
                }}
                className="w-10 h-10 border flex items-center justify-center"
              >
                <Facebook size={16} />
              </motion.a>

            </div>

          </motion.div>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-primary-foreground/10 text-center py-5 text-xs opacity-50">
        © 2026 Kritunga. All rights reserved.
      </div>

      {/* Floating WhatsApp Reservation */}
      <motion.a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          whatsappMessage
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.15 }}
        className="fixed bottom-6 right-6 bg-green-500 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-xl z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12.04 2C6.52 2 2 6.49 2 12.02c0 1.94.5 3.78 1.46 5.41L2 22l4.74-1.43a10.01 10.01 0 005.3 1.46h.01c5.52 0 10.01-4.49 10.01-10.02C22.06 6.49 17.57 2 12.04 2zm5.79 14.52c-.24.67-1.41 1.25-1.95 1.33-.5.07-1.13.1-1.82-.13-.42-.14-.96-.31-1.66-.61-2.92-1.26-4.82-4.2-4.97-4.41-.15-.21-1.18-1.56-1.18-2.98 0-1.42.75-2.12 1.01-2.41.26-.28.56-.35.75-.35h.54c.17 0 .39-.06.61.46.24.57.83 1.96.9 2.1.07.14.12.31.02.5-.1.19-.15.31-.3.48-.15.17-.32.38-.45.51-.15.15-.31.31-.13.61.18.3.8 1.32 1.72 2.13 1.18 1.05 2.18 1.37 2.49 1.52.31.15.49.13.67-.08.18-.21.78-.91.99-1.22.21-.31.42-.26.7-.15.28.1 1.76.83 2.06.98.3.15.5.23.57.36.07.13.07.76-.17 1.43z" />
        </svg>
      </motion.a>

    </footer>
  );
}