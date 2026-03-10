import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import chickenImg from "@/assets/chicken-curry.jpg";
import muttonImg from "@/assets/mutton-biryani.jpg";
import seafoodImg from "@/assets/seafood-prawns.jpg";
import vegImg from "@/assets/veg-paneer.jpg";

const categories = ["Chicken", "Mutton", "Seafood", "Vegetarian"] as const;
type Category = typeof categories[number];

interface MenuItem {
  name: string;
  description: string;
  price: string;
  spicy?: boolean;
  bestseller?: boolean;
}

const menuData: Record<Category, { image: string; items: MenuItem[] }> = {
  Chicken: {
    image: chickenImg,
    items: [
      { name: "Kritunga Chicken Curry", description: "Signature spicy Rayalaseema-style chicken curry with special masala", price: "₹350", spicy: true, bestseller: true },
      { name: "Chicken Biryani", description: "Aromatic long-grain rice layered with tender chicken and saffron", price: "₹320", bestseller: true },
      { name: "Gongura Chicken", description: "Tangy sorrel leaves cooked with bone-in chicken pieces", price: "₹380", spicy: true },
      { name: "Chicken 65", description: "Crispy deep-fried chicken with curry leaves and red chilies", price: "₹280" },
      { name: "Butter Chicken", description: "Creamy tomato-based gravy with tender tandoori chicken", price: "₹340" },
      { name: "Chicken Roast (Half)", description: "Whole chicken marinated in special spices and slow-roasted", price: "₹450", bestseller: true },
    ],
  },
  Mutton: {
    image: muttonImg,
    items: [
      { name: "Rayalaseema Mutton Curry", description: "Fiery mutton curry cooked in traditional Rayalaseema style", price: "₹480", spicy: true, bestseller: true },
      { name: "Mutton Biryani", description: "Rich Hyderabadi-style dum biryani with succulent mutton", price: "₹420", bestseller: true },
      { name: "Natu Kodi Pulusu", description: "Country chicken cooked in tangy tamarind gravy", price: "₹390", spicy: true },
      { name: "Mutton Pepper Fry", description: "Tender mutton tossed with crushed pepper and spices", price: "₹440" },
      { name: "Mutton Rogan Josh", description: "Aromatic Kashmiri-style mutton curry with whole spices", price: "₹460" },
      { name: "Keema Balls Curry", description: "Spiced minced mutton balls in rich onion gravy", price: "₹380" },
    ],
  },
  Seafood: {
    image: seafoodImg,
    items: [
      { name: "Royyala Iguru", description: "Prawns cooked in thick Andhra-style spicy masala", price: "₹520", spicy: true, bestseller: true },
      { name: "Fish Pulusu", description: "Fresh fish simmered in tangy tamarind gravy with mustard", price: "₹380" },
      { name: "Chepala Vepudu", description: "Crispy fried fish marinated in red chili and turmeric", price: "₹360", spicy: true },
      { name: "Prawns Biryani", description: "Fragrant basmati rice with succulent prawns and aromatics", price: "₹480", bestseller: true },
      { name: "Crab Masala", description: "Fresh crab cooked in Andhra-style spicy onion masala", price: "₹550", spicy: true },
      { name: "Fish Fry (Apollo Style)", description: "Deep-fried fish fillets with Apollo restaurant-style seasoning", price: "₹420" },
    ],
  },
  Vegetarian: {
    image: vegImg,
    items: [
      { name: "Paneer Butter Masala", description: "Cottage cheese cubes in rich buttery tomato gravy", price: "₹280", bestseller: true },
      { name: "Gongura Pappu", description: "Sorrel leaves dal — a Rayalaseema staple", price: "₹180", spicy: true },
      { name: "Gutti Vankaya Curry", description: "Stuffed brinjal curry with peanut and sesame filling", price: "₹220", bestseller: true },
      { name: "Veg Biryani", description: "Fragrant rice with mixed vegetables and whole spices", price: "₹240" },
      { name: "Beerakaya Pappu", description: "Ridge gourd dal cooked in traditional Andhra style", price: "₹170" },
      { name: "Paneer Tikka", description: "Tandoor-grilled paneer cubes with bell peppers and onions", price: "₹300" },
    ],
  },
};

const MenuSection = () => {
  const [active, setActive] = useState<Category>("Chicken");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const current = menuData[active];

  return (
    <section id="menu" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-heading text-lg tracking-[0.3em] uppercase text-accent mb-3">Taste the Tradition</p>
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-4">Our Menu</h2>
          <div className="w-20 h-0.5 bg-accent mx-auto mb-8" />

          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-2 lg:gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-6 py-2.5 font-heading text-base lg:text-lg tracking-widest uppercase transition-all duration-300 ${
                  active === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-transparent text-muted-foreground border border-border hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Menu content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <motion.div
            key={active + "-img"}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative hidden lg:block"
          >
            <img
              src={current.image}
              alt={active + " platter"}
              className="w-full h-[500px] object-cover rounded-sm shadow-[var(--shadow-card)]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
          </motion.div>

          {/* Items */}
          <motion.div
            key={active + "-list"}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-1"
          >
            {current.items.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start justify-between gap-4 py-5 border-b border-border/50 group hover:bg-background/50 px-3 -mx-3 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-heading text-lg lg:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.name}
                    </h4>
                    {item.bestseller && (
                      <span className="text-[10px] font-body font-bold tracking-wider uppercase bg-accent/20 text-accent px-2 py-0.5">
                        Bestseller
                      </span>
                    )}
                    {item.spicy && <span className="text-sm" title="Spicy">🌶️</span>}
                  </div>
                  <p className="font-body text-sm text-muted-foreground">{item.description}</p>
                </div>
                <span className="font-display text-lg font-bold text-primary whitespace-nowrap">{item.price}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
