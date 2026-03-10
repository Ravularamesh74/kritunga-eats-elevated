import { motion } from "framer-motion";
import interior1 from "@/assets/image copy 21.png"; // Main dining
import interior2 from "@/assets/image copy 16.png"; // Waiting/Logo
import interior3 from "@/assets/image copy 15.png"; // Wall Art
import interior4 from "@/assets/image copy 20.png"; // Corner Logo
import interior5 from "@/assets/image copy 18.png"; // Detail Plates
import interior6 from "@/assets/restaurant-interior.png"; // Entrance

const galleryItems = [
    { img: interior1, title: "Main Dining Hall", size: "lg" },
    { img: interior2, title: "Traditional Decor", size: "sm" },
    { img: interior3, title: "Heritage Art", size: "sm" },
    { img: interior4, title: "Authentic Vibe", size: "sm" },
    { img: interior5, title: "Palegar Hospitality", size: "sm" },
    { img: interior6, title: "Grand Entrance", size: "md" },
];

const AmbienceSection = () => {
    return (
        <section id="ambience" className="py-24 bg-kritunga-beige relative overflow-hidden">
            {/* Decorative texture background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url('/hero-bg.png')`, backgroundSize: '400px' }}></div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold tracking-[0.3em] uppercase mb-4"
                    >
                        The Atmosphere
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl lg:text-6xl font-bold font-serif mb-6 text-kritunga-darkGray"
                    >
                        A Journey into <span className="text-primary">Rayalaseema</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-700 text-lg leading-relaxed"
                    >
                        Immerse yourself in a setting that breathes life into tradition. From our hand-painted murals to the warm earthen tones, every corner of Kritunga is designed to transport you to the heart of Andhra Pradesh.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px] lg:auto-rows-[300px]">
                    {galleryItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative rounded-3xl overflow-hidden group shadow-xl ${item.size === 'lg' ? 'md:col-span-2 md:row-span-2' :
                                item.size === 'md' ? 'md:col-span-2' : ''
                                }`}
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                <p className="text-white font-serif italic text-2xl tracking-wide">{item.title}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 flex flex-col lg:flex-row gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <h3 className="text-3xl font-bold mb-6 font-serif">Heritage Meets Fine Dine</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our interors are carefully curated to reflect the "Palegar" (Warrior Chiefs) heritage of Rayalaseema. The use of reclaimed wood, traditional lanterns, and the iconic carriage wheels represent the strength and rustic beauty of the land.
                        </p>
                        <div className="flex gap-8">
                            <div>
                                <span className="text-4xl font-bold text-primary block">350+</span>
                                <span className="text-sm text-gray-600 uppercase tracking-widest">Guest Capacity</span>
                            </div>
                            <div>
                                <span className="text-4xl font-bold text-primary block">Private</span>
                                <span className="text-sm text-gray-600 uppercase tracking-widest">Dining Areas</span>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 bg-white p-8 rounded-[3rem] shadow-2xl border border-primary/10"
                    >
                        <blockquote className="text-2xl font-serif italic text-kritunga-darkGray mb-6">
                            "The vibe here is exactly what the food is: bold, authentic, and unforgettable. The attention to cultural detail in the interior makes the dining experience truly immersive."
                        </blockquote>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">R</div>
                            <div>
                                <p className="font-bold">Rahul Verma</p>
                                <p className="text-sm text-gray-600">Food Critic & Regular</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AmbienceSection;
