import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fullMenu } from "@/data/menuData";
import heroBgImg from "@/assets/hero-bg.png";

type Category =
  | "Starters"
  | "Chicken"
  | "Mutton"
  | "Seafood"
  | "Vegetarian"
  | "Biryani"
  | "Desserts"
  | "Beverages";

const categories: Category[] = [
  "Starters",
  "Chicken",
  "Mutton",
  "Seafood",
  "Vegetarian",
  "Biryani",
  "Desserts",
  "Beverages",
];

const menuData: Record<Category, any[]> = {
  Starters: [
    ...(fullMenu.find((c) => c.id === "starters-veg")?.items || []),
    ...(fullMenu.find((c) => c.id === "starters-nonveg")?.items || []),
  ],
  Chicken: fullMenu.find((c) => c.id === "chicken-roast")?.items || [],
  Mutton: fullMenu.find((c) => c.id === "mutton")?.items || [],
  Seafood: fullMenu.find((c) => c.id === "sea-food")?.items || [],
  Vegetarian: [
    ...(fullMenu.find((c) => c.id === "andhra-curries")?.items.filter(i => i.isVeg) || []),
    ...(fullMenu.find((c) => c.id === "curries")?.items.filter(i => i.isVeg) || []),
  ],
  Biryani: fullMenu.find((c) => c.id === "biryanis")?.items || [],
  Desserts: fullMenu.find((c) => c.id === "desserts")?.items || [],
  Beverages: fullMenu.find((c) => c.id === "beverages")?.items || [],
};


export default function MenuSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const [active, setActive] = useState<Category>("Starters");

  const [search, setSearch] = useState("");

  const [filters, setFilters] = useState({
    veg: false,
    nonVeg: false,
    spicy: false,
    bestseller: false,
  });

  const toggleFilter = (key: keyof typeof filters) => {
    setFilters((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const filteredMenu = menuData[active]
    .filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((item) => {
      if (filters.veg && !item.isVeg) return false;
      if (filters.nonVeg && item.isVeg) return false;
      if (filters.spicy && !item.spicy) return false;
      if (filters.bestseller && !item.bestseller) return false;
      return true;
    });

  return (
    <section id="menu" className="py-24 bg-card relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: `url(${heroBgImg})`, backgroundSize: '400px' }}
      ></div>
      <div className="container mx-auto px-4 lg:px-8">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Our Menu</h2>

          <p className="text-muted-foreground mb-6">
            Discover the authentic flavors of Rayalaseema cuisine
          </p>

          {/* Search */}
          <input
            type="text"
            placeholder="Search dishes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-border px-4 py-2 rounded-md w-full max-w-md mx-auto mb-6"
          />

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-6 py-2 text-sm uppercase tracking-widest transition-all ${active === cat
                  ? "bg-primary text-white"
                  : "border border-border hover:border-primary"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3">

            <button
              onClick={() => toggleFilter("veg")}
              className={`px-4 py-2 rounded-full border ${filters.veg ? "bg-green-600 text-white" : ""
                }`}
            >
              🟢 Veg
            </button>

            <button
              onClick={() => toggleFilter("nonVeg")}
              className={`px-4 py-2 rounded-full border ${filters.nonVeg ? "bg-red-600 text-white" : ""
                }`}
            >
              🔴 Non-Veg
            </button>

            <button
              onClick={() => toggleFilter("spicy")}
              className={`px-4 py-2 rounded-full border ${filters.spicy ? "bg-orange-500 text-white" : ""
                }`}
            >
              🌶 Spicy
            </button>

            <button
              onClick={() => toggleFilter("bestseller")}
              className={`px-4 py-2 rounded-full border ${filters.bestseller ? "bg-yellow-500 text-white" : ""
                }`}
            >
              ⭐ Bestseller
            </button>

          </div>
        </motion.div>

        {/* Menu Cards */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredMenu.length === 0 && (
            <p className="text-center col-span-full text-muted-foreground">
              No dishes found.
            </p>
          )}

          {filteredMenu.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-background border border-border rounded-lg overflow-hidden hover:shadow-xl transition group"
            >

              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="h-52 w-full object-cover group-hover:scale-105 transition duration-500"
                />
              )}

              <div className="p-5">
                <div className="flex justify-between mb-2">
                  <h4 className="font-semibold text-lg">
                    {item.name}
                  </h4>

                  <span className="font-bold text-primary">
                    {item.price}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground mb-3">
                  {item.description}
                </p>

                <div className="flex gap-2 flex-wrap">

                  {item.isVeg && (
                    <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">
                      Veg
                    </span>
                  )}

                  {!item.isVeg && (
                    <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">
                      Non-Veg
                    </span>
                  )}

                  {item.spicy && (
                    <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded">
                      🌶 Spicy
                    </span>
                  )}

                  {item.bestseller && (
                    <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">
                      ⭐ Bestseller
                    </span>
                  )}

                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}