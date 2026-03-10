import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Clock, Phone, Star } from "lucide-react";

const locations = [
  {
    city: "Madhapur",
    address: "Main Road, Madhapur, Hyderabad",
    phone: "+91 99080 93970",
    hours: "12:30 PM – 11:00 PM",
    rating: 3.6,
    priceForTwo: "₹1,000",
  },
  {
    city: "Panjagutta",
    address: "Near Model House, Erramanzil, Panjagutta, Hyderabad",
    phone: "+91 40 6682 2550",
    hours: "7:00 PM – 11:00 PM",
    rating: 4.1,
    priceForTwo: "₹700",
  },
  {
    city: "Kukatpally",
    address: "3rd Floor, PNR Empire, KPHB Main Road, Kukatpally, Hyderabad",
    phone: "+91 40 6682 2555",
    hours: "11:30 AM – 11:00 PM",
    rating: 3.8,
    priceForTwo: "₹800",
  },
  {
    city: "Kismatpur",
    address: "SY NO.104-106, Kismatpur Rd, beside Vaishnavi Oasis, Hyderabad",
    phone: "+91 40 6682 2560",
    hours: "11:30 AM – 11:00 PM",
    rating: 4.0,
    priceForTwo: "₹860",
  },
  {
    city: "Gachibowli",
    address: "DLF Cyber City, Gachibowli, Hyderabad",
    phone: "+91 40 6682 2565",
    hours: "12:00 PM – 11:00 PM",
    rating: 3.9,
    priceForTwo: "₹900",
  },
  {
    city: "Bangalore",
    address: "Koramangala, Bangalore, Karnataka",
    phone: "+91 80 4567 8900",
    hours: "12:00 PM – 11:00 PM",
    rating: 4.0,
    priceForTwo: "₹950",
  },
];

const LocationsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="locations" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-heading text-lg tracking-[0.3em] uppercase text-accent mb-3">Find Us</p>
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-4">Our Locations</h2>
          <div className="w-20 h-0.5 bg-accent mx-auto mb-4" />
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            There's always a Kritunga near you. The biggest Telugu restaurant brand in the world — 
            spread across Telangana, Andhra Pradesh, Karnataka, USA, and Australia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.city}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border p-6 hover:shadow-[var(--shadow-card)] transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {loc.city}
                </h3>
                <div className="flex items-center gap-1 bg-accent/15 px-2 py-1 rounded-sm">
                  <Star className="w-3.5 h-3.5 text-accent fill-accent" />
                  <span className="font-body text-sm font-bold text-accent">{loc.rating}</span>
                </div>
              </div>

              <div className="space-y-3 text-sm font-body text-muted-foreground">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{loc.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary shrink-0" />
                  <span>{loc.hours}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  <span>{loc.phone}</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                <span className="font-body text-xs text-muted-foreground tracking-wider uppercase">For Two</span>
                <span className="font-display text-lg font-bold text-primary">{loc.priceForTwo}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
