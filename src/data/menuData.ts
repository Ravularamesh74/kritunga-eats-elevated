import chickenImg from "@/assets/chicken-curry.jpg";
import muttonImg from "@/assets/mutton-biryani.jpg";
import seafoodImg from "@/assets/seafood-prawns.jpg";
import vegImg from "@/assets/veg-paneer.jpg";
import chicken65Img from "@/assets/chicken-65.png";
import butterChickenImg from "@/assets/butter-chicken.png";
import gonguraChickenImg from "@/assets/Gongura-chicken.png";
import rayalaseemaMuttonImg from "@/assets/Rayalaseema Mutton Curry.png";
import muttonPepperFryImg from "@/assets/Mutton-pepper-fry.png";
import royyalaIguruImg from "@/assets/Royyala-Iguru.png";
import fishCurryImg from "@/assets/Fish-Curry.png";
import paneerButterImg from "@/assets/Paneer-Butter-Masala.png";
import guttiVankayaImg from "@/assets/Gutti-Vanakaya-Curry.png";
import chickenBiryaniImg from "@/assets/chicken-Biryani.png";
import muttonBiryaniImg from "@/assets/Mutton-Biryani.png";
import prawnBiryaniImg from "@/assets/Prawn-Biryani.png";
import doubleKaMeethaImg from "@/assets/Double-ka-Meetha.png";
import gulabJamunImg from "@/assets/Gulab_jamun.png";
import buttermilkImg from "@/assets/Buttermilk.png";
import sweetLassiImg from "@/assets/Sweet-Lassi.png";
import ApolloFishImg from "@/assets/Apolla-Fish.png";
import dessertsImg from "@/assets/desserts.jpg";
import beveragesImg from "@/assets/beverages.jpg";
import startersImg from "@/assets/starters-platter.jpg";
import thaliImg from "@/assets/thali-meals.jpg";
import breadsImg from "@/assets/breads.jpg";

// High-quality image URLs for specific dishes
const imgUrls = {
    avakayaChickenBiryani: "https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?q=80&w=800&auto=format&fit=crop",
    avakayaVegBiryani: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=800&auto=format&fit=crop",
    chickenDumBiryani: "https://images.unsplash.com/photo-1631515233349-291f5601d4e6?q=80&w=800&auto=format&fit=crop",
    chickenFryBiryani: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?q=80&w=800&auto=format&fit=crop",
    eggBiryani: "https://images.unsplash.com/photo-1589302168068-964664d93dc9?q=80&w=800&auto=format&fit=crop",
    fishBiryani: "https://images.unsplash.com/photo-1512132411229-c30391241dd8?q=80&w=800&auto=format&fit=crop",
    gonguraBiryani: "https://images.unsplash.com/photo-1543362906-acfc16c67564?q=80&w=800&auto=format&fit=crop",
    kajuBiryani: "https://images.unsplash.com/photo-1662120811446-2ae137021758?q=80&w=800&auto=format&fit=crop",
    muttonBiryani: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop",
    natukodiBiryani: "https://images.unsplash.com/photo-1512132411229-c30391241dd8?q=80&w=800&auto=format&fit=crop",
    paneerBiryani: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800&auto=format&fit=crop",
    prawnBiryani: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop",
    vegBiryani: "https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?q=80&w=800&auto=format&fit=crop",
    chickenCurry: "https://images.unsplash.com/photo-1588166524941-3bf61a7c21df?q=80&w=800&auto=format&fit=crop",
    muttonCurry: "https://images.unsplash.com/photo-1601050690597-df056fb1d745?q=80&w=800&auto=format&fit=crop",
    fishCurry: "https://images.unsplash.com/photo-1626509653297-fc513a30745b?q=80&w=800&auto=format&fit=crop",
    paneerButterMasala: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800&auto=format&fit=crop",
    gulabJamun: "https://images.unsplash.com/photo-1601314167099-232775b3d6fd?q=80&w=800&auto=format&fit=crop",
    prawnIguru: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop",
    ragiMudda: "https://images.unsplash.com/photo-1621213176373-d14175c9e472?q=80&w=800&auto=format&fit=crop",
    chicken65: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?q=80&w=800&auto=format&fit=crop",
    chickenMajestic: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?q=80&w=800&auto=format&fit=crop",
    apricotDelight: "https://images.unsplash.com/photo-1589112773104-8169b646e2fc?q=80&w=800&auto=format&fit=crop",
    falooda: "https://images.unsplash.com/photo-1563848607154-121db6f0ca1d?q=80&w=800&auto=format&fit=crop",
    tomatoSoup: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop",
    mushroomBiryani: "https://images.unsplash.com/photo-1543362906-acfc16c67564?q=80&w=800&auto=format&fit=crop",
    greenSalad: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop",
    dal: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop",
    noodles: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=800&auto=format&fit=crop",
    friedRice: "https://images.unsplash.com/photo-1603133872878-684f20ea10db?q=80&w=800&auto=format&fit=crop",
};

// Additional unique images for variety
import img2 from "@/assets/image copy 2.png";
import img3 from "@/assets/image copy 3.png";
import img4 from "@/assets/image copy 4.png";
import img6 from "@/assets/image copy 6.png";
import img7 from "@/assets/image copy 7.png";
import img8 from "@/assets/image copy 8.png";
import img9 from "@/assets/image copy 9.png";
import img10 from "@/assets/image copy 10.png";
import img11 from "@/assets/image copy 11.png";
import img12 from "@/assets/image copy 12.png";
import img13 from "@/assets/image copy 13.png";
import img17 from "@/assets/image copy 17.png";
import img19 from "@/assets/image copy 19.png";
import img22 from "@/assets/image copy 22.png";
import img23 from "@/assets/image copy 23.png";
import img25 from "@/assets/image copy 25.png";
import img26 from "@/assets/image copy 26.png";
const biryaniImg = chickenBiryaniImg;

export interface MenuItem {
    name: string;
    description: string;
    price: string;
    image?: string;
    spicy?: boolean;
    bestseller?: boolean;
    isVeg?: boolean;
}

export interface MenuCategory {
    id: string;
    name: string;
    image: string;
    items: MenuItem[];
}

export const fullMenu: MenuCategory[] = [
    {
        id: "biryanis",
        name: "Biryanis",
        image: chickenBiryaniImg,
        items: [
            { name: "Avakaya Chicken Biryani", description: "Flavored rice dish made with authentic Andhra/Telangana spices and slow-cooked to perfection with tangy Avakaya.", price: "₹400", spicy: true, image: imgUrls.avakayaChickenBiryani },
            { name: "Avakaya Veg Biryani", description: "Vegetarian version of the tangy Avakaya biryani.", price: "₹319", isVeg: true, spicy: true, image: imgUrls.avakayaVegBiryani },
            { name: "Biryani Rice Veg Without Masala", description: "Plain aromatic biryani rice without heavy spices.", price: "₹249", isVeg: true, image: imgUrls.vegBiryani },
            { name: "Chicken Dum Biryani", description: "[Serves 1–2] Rice layered with chicken cooked with aromatic spices in traditional dum style.", price: "₹399", bestseller: true, image: imgUrls.chickenDumBiryani },
            { name: "Chicken Fry Piece Biryani Bone", description: "A crispy and spicy Telangana-style fry served with aromatic biryani rice.", price: "₹385", spicy: true, image: imgUrls.chickenFryBiryani },
            { name: "Chicken Lollipop Biryani", description: "Biryani rice served with spicy and crispy chicken lollipops.", price: "₹420", image: imgUrls.chickenFryBiryani },
            { name: "Chicken Roast Biryani Bone", description: "Flavorful biryani rice served with tradition roast chicken.", price: "₹395", image: imgUrls.chickenDumBiryani },
            { name: "Egg Biryani (2 Eggs)", description: "Wholesome one pot meal made by cooking together fragrant long grain basmati rice and spiced hard boiled eggs.", price: "₹299", image: imgUrls.eggBiryani },
            { name: "Fish Biryani Boneless", description: "Flavored rice dish made with authentic Andhra/Telangana spices and slow-cooked to perfection with boneless fish.", price: "₹410", image: imgUrls.fishBiryani },
            { name: "Gongura Chicken Biryani Bless", description: "Serve it for 1-2 Persons with Fresh Raita, Mirchi Salan & Dessert. Made with tangy gongura.", price: "₹435", spicy: true, image: imgUrls.gonguraBiryani },
            { name: "Gongura Mushroom Biryani", description: "Tangy gongura flavored mushroom biryani.", price: "₹309", isVeg: true, image: imgUrls.mushroomBiryani },
            { name: "Gongura Mutton Biryani", description: "Fiery flavours of spicy gongura and tender mutton, cooked to perfection in fragrant rice.", price: "₹499", spicy: true, bestseller: true, image: imgUrls.gonguraBiryani },
            { name: "Gongura Prawns Biryani", description: "A traditional Andhra favorite made with tangy gongura (sorrel) leaves, offering a sour-spicy punch.", price: "₹450", spicy: true, image: imgUrls.prawnBiryani },
            { name: "Gongura Veg Biryani", description: "Tangy gongura flavored mixed vegetable biryani.", price: "₹295", isVeg: true, image: imgUrls.gonguraBiryani },
            { name: "Kaju Biryani", description: "Rich and nutty biryani with roasted cashews and mild spices.", price: "₹369", isVeg: true, image: imgUrls.kajuBiryani },
            { name: "Kaju Paneer Biriyani", description: "Rich biryani with both cashews and cottage cheese cubes.", price: "₹420", isVeg: true, image: imgUrls.kajuBiryani },
            { name: "Mushroom Biryani", description: "Earthy flavored biryani with fresh button mushrooms.", price: "₹310", isVeg: true, image: imgUrls.mushroomBiryani },
            { name: "Mutton Biryani", description: "(serves 1-2 Person)is made by layering fragrant basmati rice over goat meat marinated in a rich, delicious mix of kritunga spices.", price: "₹500", bestseller: true, image: imgUrls.muttonBiryani },
            { name: "Mutton Kheema Biryani", description: "Minced meat preparation cooked with onions, chilies, and local Andhra spices for a flavorful bite.", price: "₹520", image: imgUrls.muttonBiryani },
            { name: "Nallighost Mutton Biryani", description: "Premium mutton biryani with tender bone marrow pieces.", price: "₹589", bestseller: true, image: imgUrls.muttonBiryani },
            { name: "Natukodi Biryani Country Chicken", description: "Rustic country chicken slow-cooked with authentic Telangana/Andhra spices for deep, hearty flavor.", price: "₹410", spicy: true, image: imgUrls.natukodiBiryani },
            { name: "Paneer Biryani", description: "Soft and spiced cottage cheese cubes layered with fragrant rice.", price: "₹300", isVeg: true, image: imgUrls.paneerBiryani },
            { name: "Prawns Biryani", description: "[Serves 1–2] Rice layered with prawns cooked with aromatic spices.", price: "₹470", image: imgUrls.prawnBiryani },
            { name: "Veg Biryani", description: "Fragrant aromatic rice cooked with seasonal garden vegetables.", price: "₹290", isVeg: true, image: imgUrls.vegBiryani },
            { name: "Mutton Pot Biryani", description: "Slow-cooked mutton biryani in an earthen pot for authentic flavor.", price: "₹530", image: imgUrls.muttonBiryani },
            { name: "Pot Chicken Biryani Bone", description: "Slow-cooked chicken biryani in an earthen pot for authentic flavor.", price: "₹380", image: imgUrls.chickenDumBiryani },
        ]
    },
    {
        id: "mini-biryani",
        name: "Mini Biryani",
        image: chickenBiryaniImg,
        items: [
            { name: "Mini Chicken Biryani", description: "Personal sized chicken biryani.", price: "₹249", image: imgUrls.chickenDumBiryani },
            { name: "Mini Egg Biryani (1pcs)", description: "Personal sized egg biryani.", price: "₹209", image: imgUrls.eggBiryani },
            { name: "Mini Mushroom Biryani", description: "Personal sized mushroom biryani.", price: "₹229", isVeg: true, image: imgUrls.mushroomBiryani },
            { name: "Mini Paneer Biryani", description: "Personal sized paneer biryani.", price: "₹219", isVeg: true, image: imgUrls.paneerBiryani },
            { name: "Mini Veg Biryani", description: "Personal sized veg biryani.", price: "₹199", isVeg: true, image: imgUrls.vegBiryani },
        ]
    },
    {
        id: "family-packs",
        name: "Family Pack Biryani",
        image: imgUrls.chickenDumBiryani,
        items: [
            { name: "Chicken Dum Biryani Family", description: "Large pack serves 3-4, traditional dum style.", price: "₹729", image: imgUrls.chickenDumBiryani },
            { name: "Chicken Fry Piece Biryani Family Bone", description: "Large pack serves 3-4, fry piece style.", price: "₹830", spicy: true, image: imgUrls.chickenFryBiryani },
            { name: "Chicken Roast Biryani Family Bone", description: "Large pack serves 3-4, roast style.", price: "₹700", image: imgUrls.chickenDumBiryani },
            { name: "Fish Biryani Family Bone Less", description: "Large pack serves 3-4, boneless fish.", price: "₹810", image: imgUrls.fishBiryani },
            { name: "Gongura Chicken Biryani Family Boneless", description: "Large pack serves 3-4, tangy gongura style.", price: "₹810", spicy: true, image: imgUrls.gonguraBiryani },
            { name: "Gongura Mutton Biryani Family", description: "Large pack serves 3-4, tangy gongura mutton.", price: "₹989", spicy: true, image: imgUrls.gonguraBiryani },
            { name: "Mushroom Biryani Family", description: "Large pack serves 3-4, mushroom.", price: "₹669", isVeg: true, image: imgUrls.gonguraBiryani },
            { name: "Mutton Biryani Family", description: "(serves 3-4 Person) layering fragrant basmati rice over marinated goat meat.", price: "₹999", image: imgUrls.muttonBiryani },
            { name: "Mutton Kheema Biryani Family", description: "Large pack serves 3-4, minced mutton.", price: "₹995", image: imgUrls.muttonBiryani },
            { name: "Natukodi Biryani Family", description: "[Serves 3-4] Country chicken layered with rice.", price: "₹850", spicy: true, image: imgUrls.natukodiBiryani },
            { name: "Paneer Biryani Family", description: "Large pack serves 3-4, paneer.", price: "₹659", isVeg: true, image: imgUrls.paneerBiryani },
            { name: "Prawns Biryani Family", description: "Large pack serves 3-4, prawns.", price: "₹899", image: imgUrls.prawnBiryani },
            { name: "Veg Biryani Family", description: "Large pack serves 3-4, veg.", price: "₹549", isVeg: true, image: imgUrls.vegBiryani },
            { name: "Pot Chicken Biryani Family", description: "Large pack serves 3-4, pot style.", price: "₹760", image: imgUrls.chickenDumBiryani },
        ]
    },
    {
        id: "pulaos",
        name: "Pulaos",
        image: imgUrls.chickenFryBiryani,
        items: [
            { name: "Chicken Pulao", description: "[Serves 1–2] Rice layered with chicken cooked in pulao style with spices.", price: "₹325", image: imgUrls.chickenCurry },
            { name: "Egg Pulao", description: "A mildly spiced rice dish made in traditional regional style.", price: "₹299", image: imgUrls.eggBiryani },
            { name: "Kaju Pulao", description: "Fragrant rice cooked with aromatic spices and cashews.", price: "₹349", isVeg: true, image: imgUrls.kajuBiryani },
            { name: "Mutton Kheema Pulao", description: "Spiced minced mutton cooked with fragrant basmati rice.", price: "₹499", image: imgUrls.muttonCurry },
            { name: "Mutton Pulao", description: "[Serves 1–2] Rice layered with mutton cooked in pulao style with aromatic spices.", price: "₹439", image: imgUrls.muttonCurry },
            { name: "Natukodi Pulao", description: "(serves 1-2 Person)made with fragrant Basmati rice and tender natukodi pieces.", price: "₹345", spicy: true, image: imgUrls.natukodiBiryani },
            { name: "Paneer Pulao", description: "Mildly spiced rice dish with soft paneer cubes.", price: "₹329", isVeg: true, image: imgUrls.paneerButterMasala },
            { name: "Veg Puloa", description: "Garden fresh vegetables cooked with fragrant basmati rice.", price: "₹269", isVeg: true, image: imgUrls.vegBiryani },
        ]
    },
    {
        id: "rice",
        name: "Rice Items",
        image: thaliImg,
        items: [
            { name: "Mixed Fried Rice With Egg & Chicken", description: "Wok-tossed rice with savory chicken and eggs.", price: "₹249", image: imgUrls.friedRice },
            { name: "Curd Rice", description: "Traditional South Indian tempered yogurt rice.", price: "₹179", isVeg: true, image: imgUrls.vegBiryani },
            { name: "Egg Fried Rice", description: "Stir fried rice mixed with eggs and vegetables.", price: "₹219", image: imgUrls.friedRice },
            { name: "Ghee Rice", description: "Aromatic basmati rice cooked in pure ghee.", price: "₹259", isVeg: true, image: imgUrls.vegBiryani },
            { name: "Jeera Rice", description: "Basmati rice tempered with cumin seeds.", price: "₹269", isVeg: true, image: imgUrls.vegBiryani },
            { name: "Mixed Non -Veg Fried Rice", description: "Fried rice with egg, chicken, mutton and prawns.", price: "₹359", image: imgUrls.friedRice },
            { name: "Mixed Fried Rice Egg", description: "Fried rice with extra eggs.", price: "₹229", image: imgUrls.friedRice },
            { name: "Sambar Rice", description: "Classic comforts - rice mixed with hot lentil sambar.", price: "₹279", isVeg: true, image: imgUrls.vegBiryani },
            { name: "Steam Rice", description: "Plain steamed high-quality basmati rice.", price: "₹149", isVeg: true, image: imgUrls.vegBiryani },
            { name: "Veg Fried Rice", description: "Wok-tossed rice with fresh seasonal vegetables.", price: "₹189", isVeg: true, image: imgUrls.friedRice },
        ]
    },
    {
        id: "sankati",
        name: "Sankati & Mudda",
        image: thaliImg,
        items: [
            { name: "Chicken Sankati", description: "Authentic Ragi Mudda served with spicy chicken curry.", price: "₹349", spicy: true, bestseller: true, image: img23 },
            { name: "Mutton Kheema Sankati", description: "Ragi Mudda served with flavorful mutton minced curry.", price: "₹489", spicy: true, bestseller: true, image: img25 },
            { name: "Ragi Mudda", description: "Traditional healthy finger millet balls.", price: "₹179", isVeg: true, image: img26 },
            { name: "Veg Sankati", description: "Ragi Mudda served with a traditional vegetable or dal accompaniment.", price: "₹249", isVeg: true, image: img26 },
        ]
    },
    {
        id: "starters-veg",
        name: "Veg Starters",
        image: imgUrls.vegBiryani,
        items: [
            { name: "Gobi Pakodi", description: "Crispy cauliflower florets coated in spiced batter.", price: "₹279", isVeg: true, image: imgUrls.vegBiryani },
            { name: "Gongura Paneer Fry", description: "Paneer cubes tossed with tangy gongura leaves.", price: "₹289", isVeg: true, spicy: true, image: imgUrls.paneerButterMasala },
            { name: "Kaju Pakodi", description: "Crunchy deep fried cashews with local spices.", price: "₹349", isVeg: true, image: imgUrls.kajuBiryani },
            { name: "Miryala Paneer Fry", description: "Paneer cubes tossed with black pepper.", price: "₹289", isVeg: true, spicy: true, image: imgUrls.paneerButterMasala },
            { name: "Mushroom Pakodi", description: "Crispy button mushrooms in spiced batter.", price: "₹289", isVeg: true, image: imgUrls.gonguraBiryani },
            { name: "Pachimirchi Paneer Fry", description: "Paneer fried with spicy green chilies.", price: "₹289", isVeg: true, spicy: true, image: imgUrls.paneerButterMasala },
            { name: "Paneer Pakodi", description: "Crispy deep fried cottage cheese fritters.", price: "₹289", isVeg: true, image: imgUrls.paneerBiryani },
            { name: "Aloo 65", description: "Spicy potato cubes tossed in signature 65 masala.", price: "₹259", isVeg: true, spicy: true, image: imgUrls.chicken65 },
            { name: "Babycorn 65", description: "Crispy baby corn in 65 style seasoning.", price: "₹279", isVeg: true, image: imgUrls.chicken65 },
            { name: "Babycorn Majestic", description: "Hyderabad special stir-fried baby corn.", price: "₹279", isVeg: true, image: imgUrls.chicken65 },
            { name: "Babycorn Manchurian", description: "Baby corn in tangy Indo-Chinese sauce.", price: "₹279", isVeg: true, image: imgUrls.chicken65 },
            { name: "Chilly Babycorn", description: "Baby corn tossed with green chilies and peppers.", price: "₹279", isVeg: true, spicy: true, image: imgUrls.chicken65 },
            { name: "Crispy Baby Corn", description: "Deep fried crunchy baby corn appetizers.", price: "₹279", isVeg: true, image: imgUrls.chicken65 },
            { name: "Crispy Corn", description: "All-time favorite crispy fried sweet corn kernels.", price: "₹279", isVeg: true, image: imgUrls.chicken65 },
            { name: "Gobi 65", description: "Spicy cauliflower florets in 65 style.", price: "₹279", isVeg: true, spicy: true, image: imgUrls.chicken65 },
            { name: "Gobi Chilli", description: "Cauliflower tossed in spicy chilli sauce.", price: "₹279", isVeg: true, spicy: true, image: imgUrls.chicken65 },
            { name: "Gobi Manchuria", description: "Deep fried cauliflower in manchurian sauce.", price: "₹279", isVeg: true, bestseller: true, image: imgUrls.chicken65 },
            { name: "Mushroom 65", description: "Spicy fried mushrooms in 65 style.", price: "₹299", isVeg: true, image: imgUrls.chicken65 },
            { name: "Mushroom Chilli", description: "Mushrooms tossed with chilies and soy sauce.", price: "₹299", isVeg: true, spicy: true, image: imgUrls.chicken65 },
            { name: "Paneer 65", description: "Spicy fried paneer chunks in 65 style.", price: "₹299", isVeg: true, spicy: true, image: imgUrls.chicken65 },
            { name: "Paneer Chilli", description: "Cottage cheese cubes in spicy chilli gravy/dry.", price: "₹299", isVeg: true, spicy: true, image: imgUrls.chicken65 },
            { name: "Paneer Majestic", description: "Spicy stir-fried paneer with yogurt and spices.", price: "₹299", isVeg: true, image: imgUrls.chicken65 },
            { name: "Paneer Manchurian", description: "Deep fried paneer in manchurian sauce.", price: "₹299", isVeg: true, image: imgUrls.chicken65 },
            { name: "Veg Manchurian", description: "Mixed vegetable balls in tangy manchurian sauce.", price: "₹279", isVeg: true, image: imgUrls.chicken65 },
        ]
    },
    {
        id: "starters-non-veg",
        name: "Non-Veg Starters",
        image: imgUrls.chicken65,
        items: [
            { name: "Chicken 65", description: "World famous crispy chicken bites with curry leaves.", price: "₹319", spicy: true, bestseller: true, image: chicken65Img },
            { name: "Chicken Chilli", description: "Chicken tossed with onions, capsicum and spiced sauce.", price: "₹319", spicy: true, image: imgUrls.chicken65 },
            { name: "Chicken Lollipop (6pcs)", description: "Crispy chicken drumettes served with spicy dipping sauce.", price: "₹339", image: imgUrls.chicken65 },
            { name: "Chicken Majestic", description: "Hyderabad special stir-fried chicken with a yogurt base.", price: "₹339", bestseller: true, image: imgUrls.chickenMajestic },
            { name: "Chicken Manchurian", description: "Tender chicken pieces tossed in savory, tangy sauce.", price: "₹319", image: imgUrls.chicken65 },
            { name: "Barbeque Chicken (8 Pieces)", description: "Tender chicken pieces coated in smoky BBQ sauce.", price: "₹459", image: imgUrls.chickenCurry },
            { name: "Egg Chilli", description: "Boiled eggs stir-fried with green chilies and onions.", price: "₹249", spicy: true, image: imgUrls.chicken65 },
            { name: "Egg Fry", description: "A crispy and spicy Telangana-style fry made with eggs.", price: "₹249", spicy: true, image: imgUrls.chicken65 },
            { name: "Egg Manchuria", description: "Egg fritters cooked in a spicy Manchurian sauce.", price: "₹249", image: imgUrls.chicken65 },
            { name: "Fish 65", description: "South Indian-style spicy fish chunks deep-fried.", price: "₹359", spicy: true, image: ApolloFishImg },
            { name: "Fish Apollo", description: "Crispy fish cubes tossed with onion, chilies, and special spices.", price: "₹359", bestseller: true, image: ApolloFishImg },
            { name: "Fish Crispy", description: "Lightly battered fish deep-fried for a crunchy texture.", price: "₹359", image: ApolloFishImg },
            { name: "Fish Garlic Fry", description: "Crispy fish roasted with intense garlic flavor.", price: "₹369", image: ApolloFishImg },
            { name: "Fish Manchuria", description: "Fried fish in tangy manchurian sauce.", price: "₹359", image: ApolloFishImg },
            { name: "Loose Prawns", description: "Prawns coated in spiced batter and deep fried to a crisp.", price: "₹379", spicy: true, image: royyalaIguruImg },
            { name: "Prawn 65", description: "Spicy fried prawns in signature 65 masala.", price: "₹379", spicy: true, image: imgUrls.prawnIguru },
            { name: "Prawn Chilli", description: "Crisp fried prawns in spicy hot and sweet chilli sauce.", price: "₹379", spicy: true, image: imgUrls.prawnIguru },
            { name: "Prawn Manchuria", description: "Fried prawns in tangy manchurian sauce.", price: "₹379", image: imgUrls.prawnIguru },
        ]
    },
    {
        id: "chicken-roast",
        name: "Chicken Fry & Roast",
        image: imgUrls.chickenCurry,
        items: [
            { name: "Chicken Pakodi", description: "Crispy fried street style chicken snack.", price: "₹349", image: imgUrls.chicken65 },
            { name: "Chicken Roast", description: "Delicious tender chicken marinated in spices and roasted.", price: "₹359", bestseller: true, image: imgUrls.chickenCurry },
            { name: "Gongura Chicken Fry", description: "Chicken roasted with tangy sorrel leaf masala.", price: "₹359", spicy: true, image: imgUrls.gonguraBiryani },
            { name: "Konaseema Kodi Vepudu", description: "Andhra specialty spicy chicken fry from Konaseema.", price: "₹359", spicy: true, image: imgUrls.chickenCurry },
            { name: "Kurnool Fried Wings Bone", description: "Spicy, crunchy chicken wings in Kurnool-style seasoning.", price: "₹359", spicy: true, image: imgUrls.chicken65 },
            { name: "Miriyala Natukodi Vepudu", description: "Rustic country chicken slow-cooked with fresh black pepper.", price: "₹369", spicy: true, image: imgUrls.natukodiBiryani },
            { name: "Miryala Kodi Vepudu", description: "Regular chicken fry with a bold black pepper kick.", price: "₹369", spicy: true, image: imgUrls.chickenCurry },
            { name: "Natukodi Fry", description: "[Serves 1–2] Hearty country chicken fried with spices.", price: "₹369", spicy: true, image: imgUrls.natukodiBiryani },
            { name: "Natukodi Ghee Roast", description: "Country chicken roasted in rich ghee.", price: "₹369", image: imgUrls.natukodiBiryani },
            { name: "Natukodi Iguru Semi Gravy", description: "Succulent country chicken in a thick semi-gravy masala.", price: "₹369", image: imgUrls.natukodiBiryani },
            { name: "Pachimirchi Kodi Vepudu", description: "Chicken fried with a spicy green chili paste.", price: "₹359", spicy: true, image: imgUrls.natukodiBiryani },
            { name: "Rayalaseema Chicken Fry", description: "Bold and signature spicy delicacy from Rayalaseema.", price: "₹410", spicy: true, bestseller: true, image: imgUrls.chickenCurry },
        ]
    },
    {
        id: "mutton",
        name: "Mutton Specialties",
        image: imgUrls.muttonCurry,
        items: [
            { name: "Gongura Mutton Fry", description: "Tender mutton cooked with tangy gongura leaves.", price: "₹479", spicy: true, image: imgUrls.gonguraBiryani },
            { name: "Kheema Balls", description: "Small, flavorful meatballs made from minced meat and spices.", price: "₹479", bestseller: true, image: imgUrls.muttonCurry },
            { name: "Mutton Igguru", description: "Signature thick masala mutton curry.", price: "₹489", image: imgUrls.muttonCurry },
            { name: "Mutton Kheema Fry", description: "Minced mutton stir fired with Telangana regional masalas.", price: "₹485", spicy: true, image: imgUrls.muttonCurry },
            { name: "Mutton Pepper Fry", description: "Succulent mutton pieces with bold black pepper flavor.", price: "₹475", spicy: true, bestseller: true, image: muttonPepperFryImg },
            { name: "Mutton Roast", description: "Delicious rich mutton roasted in ghee and spices.", price: "₹485", image: imgUrls.muttonCurry },
            { name: "Pachimirchi Mutton Fry", description: "Tender mutton cooked with fresh green chilies.", price: "₹488", spicy: true, image: imgUrls.muttonCurry },
            { name: "Rayalaseema Mutton Fry", description: "Signature fiery mutton fry from Rayalaseema.", price: "₹479", spicy: true, image: rayalaseemaMuttonImg },
        ]
    },
    {
        id: "sea-food",
        name: "Seafood Favorites",
        image: imgUrls.fishCurry,
        items: [
            { name: "Fish Pakodi", description: "Crispy and spicy deep fried fish fritters.", price: "₹399", image: ApolloFishImg },
            { name: "Gongura Prawn Fry", description: "Prawns roasted with tangy sorrel leaves.", price: "₹399", spicy: true, image: royyalaIguruImg },
            { name: "Prawn Pakodi", description: "Spiced deep fried prawn fritters.", price: "₹399", image: royyalaIguruImg },
            { name: "Rayalaseema Fish Fry", description: "Fiery fish fry from the Heartland of Andhra.", price: "₹399", spicy: true, image: ApolloFishImg },
            { name: "Rayalaseema Prawn Fry", description: "Signature Rayalaseema style spicy prawns.", price: "₹399", spicy: true, image: royyalaIguruImg },
            { name: "Velluli Fish Fry", description: "Pan fried fish with an intense hit of roasted garlic.", price: "₹399", image: ApolloFishImg },
            { name: "Velluli Prawn Fry", description: "Crispy prawns roasted with garlic and spices.", price: "₹399", image: royyalaIguruImg },
        ]
    },
    {
        id: "tandoori",
        name: "Tandoori & Kebabs",
        image: imgUrls.chickenCurry,
        items: [
            { name: "Chicken Banjara Kebab", description: "Aromatic chicken kababs from the nomadic kitchen.", price: "₹399", image: imgUrls.chickenCurry },
            { name: "Chicken Cheekulu", description: "Skewered and slow-grilled chicken in exclusive spices.", price: "₹399", bestseller: true, image: imgUrls.chickenCurry },
            { name: "Chicken Tandoori", description: "Authentic whole chicken marinated and roasted in clay oven.", price: "₹329", bestseller: true, image: imgUrls.chickenCurry },
            { name: "Chicken Tangadi Kebab", description: "Grilled marinated chicken drumsticks for smoky flavor.", price: "₹249", image: imgUrls.chickenCurry },
            { name: "Chicken Tikka", description: "[8 Pieces] Classic boneless roasted chicken chunks.", price: "₹399", image: imgUrls.chickenCurry },
            { name: "Fish Tikka", description: "Fish marinated in spices and grilled to perfection.", price: "₹399", image: imgUrls.fishCurry },
            { name: "Mutton Seek Kebab", description: "Traditional spiced minced meat skewers.", price: "₹439", image: imgUrls.muttonCurry },
            { name: "Paneer Tikka", description: "Tandoor grilled cottage cheese cubes.", price: "₹349", isVeg: true, image: imgUrls.paneerButterMasala },
            { name: "Tandoori Non-Veg Platter", description: "Assorted platter of kebabs, tandoori chicken and fish.", price: "₹999", bestseller: true, image: startersImg },
            { name: "Village Wings", description: "Signature spice wings grilled to juicy perfection.", price: "₹399", image: imgUrls.chickenCurry },
        ]
    },
    {
        id: "chinese",
        name: "Indo-Chinese",
        image: imgUrls.noodles,
        items: [
            { name: "Chicken Noodles", description: "Wok stir-fried noodles with chicken and vegetables.", price: "₹279", image: imgUrls.noodles },
            { name: "Egg Noodles", description: "Noodles tossed with scrambled eggs and colorful veggies.", price: "₹249", image: imgUrls.noodles },
            { name: "Schezwan Chicken Noodles", description: "Spicy wok-fried noodles in schezwan sauce.", price: "₹289", spicy: true, image: imgUrls.noodles },
            { name: "Veg Noodles", description: "Classic stir-fried noodles with crisp vegetables.", price: "₹239", isVeg: true, image: imgUrls.noodles },
        ]
    },
    {
        id: "curries-classic",
        name: "Classic Curries",
        image: imgUrls.chickenCurry,
        items: [
            { name: "Chicken Butter Masala", description: "Creamy tomato based gravy with tender chicken.", price: "₹359", bestseller: true, image: imgUrls.chickenCurry },
            { name: "Chicken Tikka Masala", description: "Grilled chicken chunks in a rich and spicy gravy.", price: "₹375", image: imgUrls.chickenCurry },
            { name: "Mutton Butter Masala", description: "Rich buttery and creamy tomato based mutton gravy.", price: "₹430", image: imgUrls.muttonCurry },
            { name: "Mutton Rogan Gosh", description: "Aromatic Kashmiri style mutton curry.", price: "₹510", bestseller: true, image: imgUrls.muttonCurry },
            { name: "Paneer Butter Masala", description: "Classic cottage cheese curry in creamy red gravy.", price: "₹309", isVeg: true, bestseller: true, image: imgUrls.paneerButterMasala },
            { name: "Veg Kadai", description: "Mixed vegetables cooked with freshly ground kadai masala.", price: "₹280", isVeg: true, image: imgUrls.vegBiryani },
        ]
    },
    {
        id: "curries-andhra",
        name: "Andhra Curries",
        image: imgUrls.fishCurry,
        items: [
            { name: "Nellore Fish Pulusu", description: "Signature tangy tamarind fish curry from Nellore.", price: "₹379", spicy: true, bestseller: true, image: imgUrls.fishCurry },
            { name: "Natukodi Pulusu", description: "Traditional country chicken curry in spicy gravy.", price: "₹359", spicy: true, image: imgUrls.natukodiBiryani },
            { name: "Rayalaseema Chicken Curry", description: "Authentic fiery chicken curry from Rayalaseema.", price: "₹339", spicy: true, image: imgUrls.chickenCurry },
            { name: "Rayalaseema Mutton Curry", description: "Signature bold and spicy mutton delicacy.", price: "₹449", spicy: true, image: rayalaseemaMuttonImg },
            { name: "Gutti Vankaya", description: "Stuffed brinjal curry with peanut and spice filling.", price: "₹279", isVeg: true, bestseller: true, image: guttiVankayaImg },
            { name: "Gongura Pappu", description: "Andhra style lentils cooked with tangy sorrel leaves.", price: "₹199", isVeg: true, image: imgUrls.dal },
            { name: "Paya Curry", description: "Traditional goat trotter soup cooked with local spices.", price: "₹339", bestseller: true, image: imgUrls.muttonCurry },
        ]
    },
    {
        id: "rotis-breads",
        name: "Rotis & Breads",
        image: breadsImg,
        items: [
            { name: "Butter Naan", description: "Soft white flour bread baked in a clay oven and glazed with butter.", price: "₹65", isVeg: true, image: breadsImg },
            { name: "Butter Roti", description: "Whole wheat bread glazed with butter.", price: "₹45", isVeg: true, image: breadsImg },
            { name: "Garlic Naan", description: "White flour bread flavored with garlic and cilantro.", price: "₹75", isVeg: true, image: breadsImg },
            { name: "Mixed Basket", description: "Assorted selection of our best rotis and naans.", price: "₹249", isVeg: true, image: breadsImg },
            { name: "Phulka (2pcs)", description: "Soft, puffed whole wheat flatbreads cooked over an open flame.", price: "₹40", isVeg: true, image: breadsImg },
            { name: "Plain Naan", description: "Soft white flour bread baked in a clay oven.", price: "₹55", isVeg: true, image: breadsImg },
            { name: "Plain Roti", description: "Traditional whole wheat bread.", price: "₹35", isVeg: true, image: breadsImg },
        ]
    },
    {
        id: "desserts",
        name: "Desserts",
        image: dessertsImg,
        items: [
            { name: "Apricot Delight", description: "Rich and creamy dessert made with stewardship dried apricots.", price: "₹199", bestseller: true, image: imgUrls.apricotDelight },
            { name: "Gulab Jamun (2 Pieces)", description: "Classic milk dumplings in sugar syrup.", price: "₹129", image: imgUrls.gulabJamun },
            { name: "Gulab Jamun With Ice Cream", description: "Warm dumplings served with chilled vanilla ice cream.", price: "₹189", bestseller: true, image: imgUrls.gulabJamun },
        ]
    },
    {
        id: "beverages",
        name: "Drinks & Beverages",
        image: beveragesImg,
        items: [
            { name: "Butter Milk", description: "Refreshing traditional spiced buttermilk.", price: "₹103", bestseller: true, image: buttermilkImg },
            { name: "Sweet Lassi", description: "Creamy and rich sweetened yogurt drink.", price: "₹113", bestseller: true, image: sweetLassiImg },
            { name: "Salted Lassi", description: "Chilled savory yogurt drink with cumin.", price: "₹100", image: sweetLassiImg },
            { name: "Badam Milk", description: "Rich and nutty milk with roasted almonds.", price: "₹120", image: beveragesImg },
            { name: "Rose Milk", description: "Refreshing chilled milk with rose syrup.", price: "₹95", image: beveragesImg },
            { name: "Masala Tea (Chai)", description: "Traditional Indian spiced tea.", price: "₹50", bestseller: true, image: beveragesImg },
            { name: "Filter Coffee", description: "Authentic South Indian filter coffee.", price: "₹60", bestseller: true, image: beveragesImg },
            { name: "Fresh Mango Juice", description: "Seasonal pure mango pulp juice.", price: "₹130", image: beveragesImg },
            { name: "Falooda", description: "Royal dessert drink with ice cream and vermicelli.", price: "₹180", bestseller: true, image: imgUrls.falooda },
            { name: "Oreo Milkshake", description: "Crunchy Oreo cookies blended with milk.", price: "₹170", bestseller: true, image: beveragesImg },
            { name: "Cold Coffee", description: "Blended chilled coffee with a hint of chocolate.", price: "₹140", image: beveragesImg },
            { name: "Coke/Thumbs Up/ Sprite -250 ML", description: "Chilled soft drinks selections.", price: "₹30", image: beveragesImg },
            { name: "Goli Soda", description: "Classic street-style lemon soda.", price: "₹119", image: beveragesImg },
            { name: "Water Bottle", description: "Packaged drinking water.", price: "₹35", image: beveragesImg },
        ]
    },
    {
        id: "soups",
        name: "Soups",
        image: imgUrls.chicken65,
        items: [
            { name: "Chicken Hot N Sour", description: "Spicy and tangy soup with chicken.", price: "₹219", spicy: true, image: imgUrls.chickenCurry },
            { name: "Chicken Monchow Soup", description: "Classic Indo-Chinese soup with fried noodles.", price: "₹219", image: imgUrls.chickenCurry },
            { name: "Mutton Bone Soup", description: "Healthy soup made with mutton bones.", price: "₹269", bestseller: true, image: imgUrls.muttonCurry },
            { name: "Paya Soup", description: "Rich slow-cooked goat trotter soup.", price: "₹249", bestseller: true, image: imgUrls.muttonCurry },
            { name: "Tomato Soup", description: "Creamy and comforting tomato soup.", price: "₹165", isVeg: true, image: imgUrls.tomatoSoup },
            { name: "Veg Monchow Soup", description: "Indo-Chinese style vegetable soup.", price: "₹165", isVeg: true, image: imgUrls.tomatoSoup },
        ]
    },
    {
        id: "salads",
        name: "Salads & Sides",
        image: imgUrls.greenSalad,
        items: [
            { name: "Green Salad Mixed", description: "Fresh garden vegetables.", price: "₹112.44", isVeg: true, image: imgUrls.greenSalad },
            { name: "Masala Papad", description: "Crispy papad with spicy toppings.", price: "₹81.13", isVeg: true, spicy: true, image: imgUrls.vegBiryani },
        ]
    },
];