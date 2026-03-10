import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Flame, Star, Search, ChevronDown } from "lucide-react";
import logo from "@/assets/kritunga-logo.png";
import { fullMenu } from "@/data/menuData";
import Footer from "@/components/Footer";

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState(fullMenu[0].id);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredMenu = fullMenu.map(category => ({
    ...category,
    items: category.items.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.items.length > 0);

  const activeCategoryData = fullMenu.find(c => c.id === activeCategory) || fullMenu[0];

  return (
    <div className="min-h-screen bg-kritunga-beige flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-kritunga-red text-white py-4 px-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <img src={logo} alt="Kritunga" className="h-10 md:h-12 brightness-0 invert" />
          <div className="w-10"></div> {/* Spacer for alignment */}
        </div>
      </header>

      {/* Hero & Search */}
      <section className="bg-kritunga-red text-white pb-12 pt-8 px-4 rounded-b-[3rem] shadow-xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-white/20 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-white/20 blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6 font-serif tracking-tight"
          >
            Our Menu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/80 mb-8 max-w-2xl mx-auto text-lg"
          >
            Authentic Rayalaseema flavors crafted with traditional spice blends and slow-cooking techniques.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative max-w-xl mx-auto flex items-center"
          >
            <div className="absolute left-4 text-white/60 pointer-events-none">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              placeholder="Search for your favorite dish..."
              className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all shadow-inner"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto w-full px-4 -mt-6 pb-20 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Categories Sidebar */}
        <div className="lg:col-span-1 hidden lg:block sticky top-28 self-start bg-white rounded-3xl p-6 shadow-xl border border-kritunga-terracotta/10">
          <h2 className="text-xl font-bold mb-6 text-kritunga-red font-serif">Categories</h2>
          <div className="space-y-2 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
            {fullMenu.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`w-full text-left px-5 py-4 rounded-2xl transition-all duration-300 flex items-center justify-between group ${activeCategory === category.id
                  ? "bg-kritunga-red text-white shadow-lg translate-x-1"
                  : "text-gray-600 hover:bg-kritunga-beige hover:text-kritunga-red hover:translate-x-1"
                  }`}
              >
                <span className="font-semibold text-sm tracking-wide uppercase">{category.name}</span>
                <span className={`text-[10px] py-0.5 px-2 rounded-full font-bold ${activeCategory === category.id ? "bg-white/20" : "bg-gray-100 group-hover:bg-kritunga-red/10"
                  }`}>
                  {category.items.length}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Categories Mobile Dropdown */}
        <div className="lg:hidden sticky top-[4.5rem] z-40">
          <button
            onClick={() => setIsCategoryMenuOpen(!isCategoryMenuOpen)}
            className="w-full bg-white shadow-xl rounded-2xl p-4 flex items-center justify-between border border-kritunga-terracotta/10"
          >
            <span className="font-bold text-kritunga-red uppercase tracking-wider">{activeCategoryData.name}</span>
            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isCategoryMenuOpen ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {isCategoryMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 w-full bg-white mt-2 rounded-2xl shadow-2xl border border-kritunga-terracotta/10 overflow-hidden max-h-[60vh] overflow-y-auto"
              >
                {fullMenu.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveCategory(category.id);
                      setIsCategoryMenuOpen(false);
                    }}
                    className={`w-full text-left px-6 py-4 transition-colors ${activeCategory === category.id
                      ? "bg-kritunga-red text-white"
                      : "text-gray-600 hover:bg-kritunga-beige"
                      }`}
                  >
                    {category.name}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Menu Items Grid */}
        <div className="lg:col-span-3 pt-6">
          <div className="mb-10 lg:pl-4">
            <h2 className="text-3xl font-bold text-kritunga-darkGray font-serif flex items-center gap-3">
              {searchQuery ? "Search Results" : activeCategoryData.name}
              <span className="text-sm font-sans font-normal text-gray-600 bg-gray-100 px-3 py-1 rounded-full border border-gray-200 uppercase tracking-widest whitespace-nowrap">
                {searchQuery ? filteredMenu.reduce((acc, cat) => acc + cat.items.length, 0) : activeCategoryData.items.length} Items
              </span>
            </h2>
          </div>

          <div className="space-y-12">
            {(searchQuery ? filteredMenu : [activeCategoryData]).map((category) => (
              <div key={category.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                {searchQuery && (
                  <h3 className="text-xl font-bold mb-6 text-kritunga-red/60 uppercase tracking-widest font-serif pl-4 border-l-4 border-kritunga-red">
                    {category.name}
                  </h3>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 lg:pl-4">
                  {category.items.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="group bg-white rounded-[2rem] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-2xl hover:shadow-kritunga-red/5 transition-all duration-500 border border-kritunga-terracotta/5 flex gap-4 h-full transform hover:-translate-y-1"
                    >
                      <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl overflow-hidden flex-shrink-0 relative shadow-inner group-hover:scale-105 transition-transform duration-500 ring-4 ring-kritunga-beige/50">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {item.spicy && (
                          <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm p-1.5 rounded-xl shadow-lg">
                            <Flame className="w-3.5 h-3.5 text-kritunga-red animate-pulse" />
                          </div>
                        )}
                        {item.bestseller && (
                          <div className="absolute -bottom-1 -left-1 bg-yellow-400 p-1.5 rounded-tr-xl rounded-bl-[1.5rem] shadow-lg">
                            <Star className="w-3.5 h-3.5 text-white fill-white" />
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col flex-grow min-w-0 py-1">
                        <div className="flex justify-between items-start mb-2 gap-2">
                          <h4 className="font-bold text-lg text-kritunga-darkGray group-hover:text-kritunga-red transition-colors duration-300 leading-tight">
                            {item.name}
                          </h4>
                          <span className="font-bold text-kritunga-red bg-kritunga-red/5 px-3 py-1 rounded-xl text-sm whitespace-nowrap shadow-sm border border-kritunga-red/10">
                            {item.price}
                          </span>
                        </div>
                        <p className="text-gray-700 text-sm line-clamp-3 leading-relaxed mb-auto group-hover:text-gray-800 transition-colors">
                          {item.description}
                        </p>
                        <div className="flex items-center gap-3 mt-4">
                          {item.isVeg && (
                            <span className="text-[10px] border border-green-500 text-green-500 px-2 py-0.5 rounded-full font-bold uppercase tracking-widest bg-green-50">Veg</span>
                          )}
                          {!item.isVeg && (
                            <span className="text-[10px] border border-red-500 text-red-500 px-2 py-0.5 rounded-full font-bold uppercase tracking-widest bg-red-50">Non-Veg</span>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MenuPage;
