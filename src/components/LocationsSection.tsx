import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";

const location = {
  name: "Kritunga Padmarao Nagar",
  address: "Padmarao Nagar, Secunderabad, Hyderabad, Telangana",
  phone: "+91 40 6682 2552",
  hours: "12:00 PM – 11:00 PM",
  priceForTwo: "₹900",
  mapEmbed:
    "https://www.google.com/maps?q=kritunga+padmarao+nagar&output=embed",
};

const LocationsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="locations" className="py-24 lg:py-32 bg-kritunga-beige">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <p className="tracking-[0.35em] uppercase text-accent mb-3">
            Visit Us
          </p>

          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Kritunga Padmarao Nagar
          </h2>

          <div className="w-20 h-[2px] bg-accent mx-auto mb-6" />

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the authentic taste of Rayalaseema cuisine at our
            Padmarao Nagar branch in Secunderabad. Enjoy bold flavors,
            traditional recipes, and a premium dining atmosphere.
          </p>
        </motion.div>

        {/* Location Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="rounded-xl overflow-hidden shadow-xl border"
          >
            <iframe
              src={location.mapEmbed}
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0"
            />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="bg-card border border-border rounded-xl p-10 shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6">
              Restaurant Details
            </h3>

            <div className="space-y-5 text-muted-foreground">

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Address</p>
                  <p>{location.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Opening Hours</p>
                  <p>{location.hours}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Contact</p>
                  <p>{location.phone}</p>
                </div>
              </div>

            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">

              <a
                href={`tel:${location.phone}`}
                className="bg-primary text-white px-6 py-3 rounded-md text-sm font-semibold hover:opacity-90"
              >
                Call Now
              </a>

              <a
                href={`https://www.google.com/maps/search/${location.name}`}
                target="_blank"
                className="border border-border px-6 py-3 rounded-md text-sm flex items-center gap-2 hover:bg-muted"
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </a>

            </div>

            {/* Price */}
            <div className="mt-8 pt-6 border-t flex justify-between items-center">
              <span className="text-sm uppercase text-muted-foreground">
                Average Cost
              </span>

              <span className="text-2xl font-bold text-primary">
                {location.priceForTwo}
                <span className="text-sm ml-1 text-muted-foreground">
                  for two
                </span>
              </span>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default LocationsSection;