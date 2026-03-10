import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Flame, Star, Search, ChevronDown } from "lucide-react";
import logo from "@/assets/kritunga-logo.png";
import chickenImg from "@/assets/chicken-curry.jpg";
import muttonImg from "@/assets/mutton-biryani.jpg";
import seafoodImg from "@/assets/seafood-prawns.jpg";
import vegImg from "@/assets/veg-paneer.jpg";
import biryaniImg from "@/assets/chicken-biryani.jpg";
import startersImg from "@/assets/starters-platter.jpg";
import thaliImg from "@/assets/thali-meals.jpg";
import dessertsImg from "@/assets/desserts.jpg";
import breadsImg from "@/assets/breads.jpg";
import beveragesImg from "@/assets/beverages.jpg";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  halfPrice?: string;
  spicy?: boolean;
  bestseller?: boolean;
  isVeg?: boolean;
}

interface MenuCategory {
  id: string;
  name: string;
  image: string;
  items: MenuItem[];
}

const fullMenu: MenuCategory[] = [
  {
    id: "starters",
    name: "Starters",
    image: startersImg,
    items: [
      { name: "Chicken 65", description: "Crispy deep-fried chicken with curry leaves, red chilies & yogurt", price: "₹280", spicy: true, bestseller: true },
      { name: "Chicken Majestic", description: "Boneless chicken tossed with onions, capsicum & special masala", price: "₹300", spicy: true },
      { name: "Chilli Chicken", description: "Indo-Chinese style chicken with bell peppers & spring onions", price: "₹290" },
      { name: "Apollo Fish", description: "Deep-fried fish fillets with Hyderabadi Apollo seasoning", price: "₹350", bestseller: true },
      { name: "Prawns Fry", description: "Crispy fried prawns marinated in Andhra spices", price: "₹420", spicy: true },
      { name: "Mutton Seekh Kebab", description: "Minced mutton skewers grilled in tandoor with aromatic spices", price: "₹380" },
      { name: "Paneer Tikka", description: "Tandoor-grilled cottage cheese with bell peppers & onions", price: "₹260", isVeg: true },
      { name: "Gobi 65", description: "Crispy cauliflower florets tossed in spicy batter", price: "₹200", isVeg: true, spicy: true },
      { name: "Mushroom Pepper Fry", description: "Button mushrooms sautéed with crushed pepper & curry leaves", price: "₹220", isVeg: true },
      { name: "Chicken Lollipop", description: "Frenched chicken wings deep-fried with spicy coating", price: "₹300" },
      { name: "Fish Fingers", description: "Crumb-fried fish sticks served with mint chutney", price: "₹320" },
      { name: "Kebab Platter", description: "Assorted kebabs — seekh, reshmi, malai tikka", price: "₹520", bestseller: true },
    ],
  },
  {
    id: "chicken",
    name: "Chicken Curries",
    image: chickenImg,
    items: [
      { name: "Kritunga Chicken Curry", description: "Signature spicy Rayalaseema-style chicken curry with special masala", price: "₹350", spicy: true, bestseller: true },
      { name: "Gongura Chicken", description: "Tangy sorrel leaves cooked with bone-in chicken pieces", price: "₹380", spicy: true, bestseller: true },
      { name: "Butter Chicken", description: "Creamy tomato-based gravy with tender tandoori chicken", price: "₹340" },
      { name: "Chicken Chettinad", description: "South Indian style chicken with freshly ground spices", price: "₹360", spicy: true },
      { name: "Chicken Roast (Full)", description: "Whole chicken marinated in special spices and slow-roasted", price: "₹750", bestseller: true },
      { name: "Chicken Roast (Half)", description: "Half chicken marinated in special spices and slow-roasted", price: "₹450" },
      { name: "Natu Kodi Pulusu", description: "Country chicken cooked in tangy tamarind gravy", price: "₹420", spicy: true },
      { name: "Chicken Fry Curry", description: "Fried chicken pieces simmered in onion-tomato gravy", price: "₹340" },
      { name: "Kadai Chicken", description: "Chicken cooked in wok with capsicum, onions & kadai masala", price: "₹350" },
      { name: "Chicken Pepper Fry", description: "Dry chicken preparation with crushed pepper & spices", price: "₹320" },
    ],
  },
  {
    id: "mutton",
    name: "Mutton Curries",
    image: muttonImg,
    items: [
      { name: "Rayalaseema Mutton Curry", description: "Fiery mutton curry cooked in traditional Rayalaseema style", price: "₹480", spicy: true, bestseller: true },
      { name: "Mutton Pepper Fry", description: "Tender mutton tossed with crushed pepper and spices", price: "₹440" },
      { name: "Mutton Rogan Josh", description: "Aromatic Kashmiri-style mutton curry with whole spices", price: "₹460" },
      { name: "Keema Balls Curry", description: "Spiced minced mutton balls in rich onion gravy", price: "₹380" },
      { name: "Nalli Nihari", description: "Slow-cooked mutton shanks in rich Hyderabadi gravy", price: "₹550", bestseller: true },
      { name: "Mutton Do Pyaza", description: "Mutton cooked with generous amount of onions & spices", price: "₹460" },
      { name: "Mutton Dalcha", description: "Hyderabadi mutton and lentil stew with tamarind", price: "₹420", spicy: true },
      { name: "Paya Curry", description: "Traditional mutton trotters soup — a Hyderabadi delicacy", price: "₹350", bestseller: true },
      { name: "Mutton Keema Fry", description: "Dry minced mutton preparation with green chilies & spices", price: "₹400", spicy: true },
    ],
  },
  {
    id: "seafood",
    name: "Seafood",
    image: seafoodImg,
    items: [
      { name: "Royyala Iguru", description: "Prawns cooked in thick Andhra-style spicy masala", price: "₹520", spicy: true, bestseller: true },
      { name: "Fish Pulusu", description: "Fresh fish simmered in tangy tamarind gravy with mustard", price: "₹380" },
      { name: "Chepala Vepudu", description: "Crispy fried fish marinated in red chili and turmeric", price: "₹360", spicy: true },
      { name: "Prawns Biryani", description: "Fragrant basmati rice with succulent prawns and aromatics", price: "₹480", bestseller: true },
      { name: "Crab Masala", description: "Fresh crab cooked in Andhra-style spicy onion masala", price: "₹550", spicy: true },
      { name: "Fish Fry (Apollo Style)", description: "Deep-fried fish fillets with Apollo restaurant-style seasoning", price: "₹420" },
      { name: "Prawns Curry", description: "Coastal-style prawns in coconut-based gravy", price: "₹480" },
      { name: "Fish Tikka", description: "Tandoor-grilled fish marinated in yogurt & spices", price: "₹400" },
      { name: "Prawns Pepper Fry", description: "Dry prawns tossed with crushed black pepper & curry leaves", price: "₹500", spicy: true },
    ],
  },
  {
    id: "biryani",
    name: "Biryani & Rice",
    image: biryaniImg,
    items: [
      { name: "Chicken Biryani", description: "Aromatic long-grain rice layered with tender chicken and saffron", price: "₹320", bestseller: true },
      { name: "Mutton Biryani", description: "Rich Hyderabadi-style dum biryani with succulent mutton", price: "₹420", bestseller: true },
      { name: "Prawns Biryani", description: "Fragrant biryani with fresh prawns and aromatic spices", price: "₹480" },
      { name: "Egg Biryani", description: "Biryani rice layered with spiced boiled eggs", price: "₹250" },
      { name: "Veg Biryani", description: "Fragrant rice with mixed vegetables and whole spices", price: "₹240", isVeg: true },
      { name: "Chicken Fried Rice", description: "Indo-Chinese wok-fried rice with chicken & vegetables", price: "₹260" },
      { name: "Egg Fried Rice", description: "Wok-tossed rice with scrambled eggs & spring onions", price: "₹200" },
      { name: "Jeera Rice", description: "Basmati rice tempered with cumin seeds & ghee", price: "₹150", isVeg: true },
      { name: "Curd Rice", description: "Comfort food — rice mixed with yogurt & tempered", price: "₹120", isVeg: true },
      { name: "Plain Rice", description: "Steamed basmati rice", price: "₹100", isVeg: true },
    ],
  },
  {
    id: "vegetarian",
    name: "Vegetarian",
    image: vegImg,
    items: [
      { name: "Paneer Butter Masala", description: "Cottage cheese cubes in rich buttery tomato gravy", price: "₹280", isVeg: true, bestseller: true },
      { name: "Gutti Vankaya Curry", description: "Stuffed brinjal curry with peanut and sesame filling", price: "₹220", isVeg: true, bestseller: true },
      { name: "Gongura Pappu", description: "Sorrel leaves dal — a Rayalaseema staple", price: "₹180", isVeg: true, spicy: true },
      { name: "Beerakaya Pappu", description: "Ridge gourd dal cooked in traditional Andhra style", price: "₹170", isVeg: true },
      { name: "Dal Tadka", description: "Yellow lentils tempered with cumin, garlic & red chilies", price: "₹160", isVeg: true },
      { name: "Palak Paneer", description: "Cottage cheese in creamy spinach gravy", price: "₹260", isVeg: true },
      { name: "Aloo Gobi", description: "Potato and cauliflower dry curry with turmeric & cumin", price: "₹180", isVeg: true },
      { name: "Mixed Veg Curry", description: "Seasonal vegetables in aromatic onion-tomato gravy", price: "₹200", isVeg: true },
      { name: "Paneer Tikka Masala", description: "Grilled paneer in spicy tikka masala sauce", price: "₹300", isVeg: true },
      { name: "Mushroom Masala", description: "Button mushrooms in spicy Andhra-style gravy", price: "₹240", isVeg: true },
    ],
  },
  {
    id: "meals",
    name: "Thali Meals",
    image: thaliImg,
    items: [
      { name: "Chicken Thali", description: "Rice, chicken curry, dal, sambar, rasam, curd, pickle, papad, sweet", price: "₹450", bestseller: true },
      { name: "Mutton Thali", description: "Rice, mutton curry, dal, sambar, rasam, curd, pickle, papad, sweet", price: "₹550", bestseller: true },
      { name: "Fish Thali", description: "Rice, fish curry, fish fry, dal, sambar, rasam, curd, pickle, papad", price: "₹500" },
      { name: "Veg Thali", description: "Rice, 2 veg curries, dal, sambar, rasam, curd, pickle, papad, sweet", price: "₹300", isVeg: true },
      { name: "Special Non-Veg Thali", description: "Rice, chicken, mutton & fish curries, biryani, dal, rasam, dessert", price: "₹750", bestseller: true },
      { name: "Rayalaseema Special Meals", description: "Authentic Rayalaseema-style full meals with ragi mudda, natukodi", price: "₹650", spicy: true },
    ],
  },
  {
    id: "breads",
    name: "Breads",
    image: breadsImg,
    items: [
      { name: "Butter Naan", description: "Soft tandoor-baked bread brushed with butter", price: "₹60", isVeg: true },
      { name: "Garlic Naan", description: "Naan topped with garlic and coriander", price: "₹70", isVeg: true },
      { name: "Cheese Naan", description: "Naan stuffed with melted cheese", price: "₹90", isVeg: true },
      { name: "Tandoori Roti", description: "Whole wheat bread baked in tandoor", price: "₹40", isVeg: true },
      { name: "Rumali Roti", description: "Thin, soft handkerchief bread", price: "₹50", isVeg: true },
      { name: "Paratha", description: "Flaky layered whole wheat bread", price: "₹50", isVeg: true },
      { name: "Aloo Paratha", description: "Paratha stuffed with spiced potato filling", price: "₹80", isVeg: true },
      { name: "Puri (2 pcs)", description: "Deep-fried puffed bread", price: "₹60", isVeg: true },
      { name: "Kulcha", description: "Leavened bread baked in tandoor", price: "₹60", isVeg: true },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    image: dessertsImg,
    items: [
      { name: "Double Ka Meetha", description: "Hyderabadi bread pudding soaked in saffron milk, topped with nuts", price: "₹150", isVeg: true, bestseller: true },
      { name: "Qubani Ka Meetha", description: "Stewed apricots with cream — a Hyderabadi specialty", price: "₹160", isVeg: true, bestseller: true },
      { name: "Gulab Jamun (2 pcs)", description: "Deep-fried milk dumplings soaked in cardamom sugar syrup", price: "₹100", isVeg: true },
      { name: "Phirni", description: "Creamy ground rice pudding with saffron & cardamom", price: "₹120", isVeg: true },
      { name: "Ice Cream", description: "Choice of vanilla, mango, butterscotch, or chocolate", price: "₹100", isVeg: true },
      { name: "Ras Malai", description: "Soft cottage cheese dumplings in sweetened saffron milk", price: "₹140", isVeg: true },
    ],
  },
  {
    id: "beverages",
    name: "Beverages",
    image: beveragesImg,
    items: [
      { name: "Mango Lassi", description: "Creamy yogurt smoothie with fresh mango pulp", price: "₹120", isVeg: true, bestseller: true },
      { name: "Sweet Lassi", description: "Traditional sweetened yogurt drink", price: "₹90", isVeg: true },
      { name: "Masala Chaas", description: "Spiced buttermilk with cumin and mint", price: "₹70", isVeg: true },
      { name: "Fresh Lime Soda", description: "Sweet or salt — refreshing lime with soda", price: "₹80", isVeg: true },
      { name: "Mango Juice", description: "Fresh mango juice — seasonal", price: "₹100", isVeg: true },
      { name: "Mineral Water", description: "Packaged drinking water (1L)", price: "₹30", isVeg: true },
      { name: "Soft Drinks", description: "Coke, Sprite, Fanta, Thumbs Up", price: "₹50", isVeg: true },
      { name: "Masala Chai", description: "Indian spiced tea with ginger & cardamom", price: "₹50", isVeg: true },
      { name: "Filter Coffee", description: "South Indian filter coffee served in traditional tumbler", price: "₹60", isVeg: true },
    ],
  },
];

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState("starters");
  const [searchQuery, setSearchQuery] = useState("");
  const [showVegOnly, setShowVegOnly] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const activeMenu = fullMenu.find((c) => c.id === activeCategory)!;

  const filteredItems = activeMenu.items.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesVeg = showVegOnly ? item.isVeg : true;
    return matchesSearch && matchesVeg;
  });

  const totalItems = fullMenu.reduce((sum, cat) => sum + cat.items.length, 0);

  return (
    <div className="min-h-screen bg-background">
      {/* Top Header */}
      <header className="bg-primary text-primary-foreground sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <ArrowLeft className="w-5 h-5" />
              <img src={logo} alt="Kritunga" className="h-10 w-10 object-contain" />
              <div>
                <span className="font-display text-lg font-bold tracking-wide">KRITUNGA</span>
                <p className="text-[9px] font-heading tracking-[0.25em] uppercase opacity-70">Full Menu</p>
              </div>
            </Link>
            <div className="hidden md:flex items-center gap-4 text-sm font-body">
              <span className="opacity-70">{fullMenu.length} Categories</span>
              <span className="opacity-40">•</span>
              <span className="opacity-70">{totalItems}+ Dishes</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img src={activeMenu.image} alt={activeMenu.name} className="w-full h-full object-cover transition-all duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/30 to-transparent" />
        <div className="absolute bottom-6 left-0 right-0 text-center">
          <motion.h1
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl font-bold text-primary-foreground"
          >
            {activeMenu.name}
          </motion.h1>
          <p className="font-heading text-primary-foreground/70 text-lg mt-1">{filteredItems.length} items</p>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="sticky top-16 z-40 bg-background border-b border-border shadow-sm">
        <div className="container mx-auto px-4 lg:px-8 py-3">
          <div className="flex items-center gap-3">
            {/* Mobile category toggle */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden flex items-center gap-1 bg-card px-3 py-2 text-sm font-body border border-border rounded-sm"
            >
              {activeMenu.name} <ChevronDown className="w-4 h-4" />
            </button>

            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-card border border-border rounded-sm text-sm font-body focus:outline-none focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground"
              />
            </div>

            <button
              onClick={() => setShowVegOnly(!showVegOnly)}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-body border rounded-sm transition-colors ${
                showVegOnly
                  ? "bg-green-700 text-primary-foreground border-green-700"
                  : "bg-card text-foreground border-border hover:border-green-600"
              }`}
            >
              <span className={`w-3 h-3 border-2 rounded-sm ${showVegOnly ? "border-primary-foreground bg-primary-foreground" : "border-green-600"}`} />
              Veg
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar - Categories */}
          <aside className={`
            lg:w-64 lg:shrink-0 lg:block
            ${sidebarOpen ? "fixed inset-0 z-50 bg-foreground/50 lg:relative lg:bg-transparent" : "hidden"}
          `}>
            {sidebarOpen && (
              <div className="fixed inset-0 lg:hidden" onClick={() => setSidebarOpen(false)} />
            )}
            <div className={`
              bg-background lg:bg-transparent lg:sticky lg:top-36
              ${sidebarOpen ? "fixed left-0 top-0 bottom-0 w-72 z-50 shadow-lg p-4 pt-6 overflow-y-auto" : ""}
            `}>
              {sidebarOpen && (
                <div className="flex items-center justify-between mb-4 lg:hidden">
                  <h3 className="font-display text-lg font-bold text-foreground">Categories</h3>
                  <button onClick={() => setSidebarOpen(false)} className="text-muted-foreground">✕</button>
                </div>
              )}
              <nav className="space-y-1">
                {fullMenu.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setSearchQuery("");
                      setSidebarOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 font-heading text-base tracking-wide transition-all flex items-center justify-between group ${
                      activeCategory === cat.id
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-card"
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span className={`text-xs font-body ${activeCategory === cat.id ? "opacity-70" : "text-muted-foreground"}`}>
                      {cat.items.length}
                    </span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Menu Items */}
          <main ref={contentRef} className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory + searchQuery + showVegOnly}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {filteredItems.length === 0 ? (
                  <div className="text-center py-20">
                    <p className="font-heading text-xl text-muted-foreground">No dishes found</p>
                    <p className="font-body text-sm text-muted-foreground mt-2">Try adjusting your search or filters</p>
                  </div>
                ) : (
                  <div className="grid sm:grid-cols-2 gap-4">
                    {filteredItems.map((item, i) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.04 }}
                        className="bg-card border border-border p-5 hover:shadow-[var(--shadow-card)] transition-all duration-300 group relative"
                      >
                        {/* Veg/Non-veg indicator */}
                        <div className={`absolute top-4 right-4 w-4 h-4 border-2 rounded-sm flex items-center justify-center ${
                          item.isVeg ? "border-green-600" : "border-red-600"
                        }`}>
                          <div className={`w-2 h-2 rounded-full ${item.isVeg ? "bg-green-600" : "bg-red-600"}`} />
                        </div>

                        <div className="pr-8">
                          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                            <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                              {item.name}
                            </h3>
                            {item.bestseller && (
                              <span className="flex items-center gap-0.5 text-[10px] font-body font-bold tracking-wider uppercase bg-accent/20 text-accent px-2 py-0.5">
                                <Star className="w-2.5 h-2.5 fill-current" /> Best
                              </span>
                            )}
                            {item.spicy && (
                              <span className="flex items-center gap-0.5 text-[10px] font-body font-bold tracking-wider uppercase bg-red-100 text-red-600 px-2 py-0.5">
                                <Flame className="w-2.5 h-2.5" /> Spicy
                              </span>
                            )}
                          </div>
                          <p className="font-body text-sm text-muted-foreground mb-3 line-clamp-2">{item.description}</p>
                          <div className="flex items-center gap-3">
                            <span className="font-display text-xl font-bold text-primary">{item.price}</span>
                            {item.halfPrice && (
                              <span className="font-body text-xs text-muted-foreground">Half: {item.halfPrice}</span>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-primary text-primary-foreground py-12 text-center">
        <p className="font-heading text-lg tracking-wider mb-2">Craving something special?</p>
        <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">Reserve Your Table Today</h3>
        <a
          href="tel:+919908093970"
          className="inline-block border-2 border-gold-light text-gold-light px-8 py-3 font-body text-sm font-bold tracking-[0.2em] uppercase hover:bg-gold-light/10 transition-colors"
        >
          Call +91 99080 93970
        </a>
      </div>
    </div>
  );
};

export default MenuPage;
