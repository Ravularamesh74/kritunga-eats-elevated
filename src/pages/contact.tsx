import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-background text-foreground">

      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-4"
        >
          Contact Us
        </motion.h1>

        <p className="text-muted-foreground max-w-xl mx-auto">
          We would love to hear from you. Book a table, ask a question,
          or visit our restaurant for an authentic Rayalaseema experience.
        </p>
      </section>

      {/* Contact Cards */}
      <section className="container mx-auto px-6 grid md:grid-cols-4 gap-8 pb-20">

        <motion.div
          whileHover={{ y: -5 }}
          className="p-6 rounded-xl bg-card shadow-lg text-center"
        >
          <MapPin className="mx-auto text-primary mb-3" size={28} />
          <h3 className="font-semibold mb-2">Address</h3>
          <p className="text-sm text-muted-foreground">
            Padmarao Nagar, Secunderabad, Hyderabad
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          className="p-6 rounded-xl bg-card shadow-lg text-center"
        >
          <Phone className="mx-auto text-primary mb-3" size={28} />
          <h3 className="font-semibold mb-2">Phone</h3>
          <p className="text-sm text-muted-foreground">
            +91 96400 59577
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          className="p-6 rounded-xl bg-card shadow-lg text-center"
        >
          <Mail className="mx-auto text-primary mb-3" size={28} />
          <h3 className="font-semibold mb-2">Email</h3>
          <p className="text-sm text-muted-foreground">
            info@kritunga.com
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          className="p-6 rounded-xl bg-card shadow-lg text-center"
        >
          <Clock className="mx-auto text-primary mb-3" size={28} />
          <h3 className="font-semibold mb-2">Opening Hours</h3>
          <p className="text-sm text-muted-foreground">
            Mon - Sun: 11 AM - 11 PM
          </p>
        </motion.div>

      </section>

      {/* Contact Form + Map */}
      <section className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 pb-24">

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-card p-8 rounded-xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-6">
            Send a Message
          </h2>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-lg px-4 py-3"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-lg px-4 py-3"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border rounded-lg px-4 py-3"
            />

            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full border rounded-lg px-4 py-3"
            />

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90"
            >
              Send Message
            </button>

          </form>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          className="rounded-xl overflow-hidden shadow-lg"
        >
          <iframe
            title="map"
            src="https://www.google.com/maps?q=Padmarao%20Nagar%20Hyderabad&output=embed"
            width="100%"
            height="450"
            loading="lazy"
            className="border-0"
          />
        </motion.div>

      </section>

    </div>
  );
}