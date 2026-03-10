import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/kritunga-logo.png";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Kritunga" className="h-12 w-12 object-contain" />
              <div>
                <h3 className="font-display text-xl font-bold">KRITUNGA</h3>
                <p className="text-xs font-heading tracking-[0.2em] opacity-70">The Rayalaseema Cuisine</p>
              </div>
            </div>
            <p className="font-body text-sm opacity-70 leading-relaxed">
              The biggest Telugu restaurant brand in the world, serving authentic Rayalaseema cuisine since 2004.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 tracking-wider">Quick Links</h4>
            <div className="space-y-2">
              {["Home", "About", "Menu", "Locations"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block font-body text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  {link}
                </a>
              ))}
              <a href="https://kritunga.in" target="_blank" rel="noopener noreferrer" className="block font-body text-sm opacity-70 hover:opacity-100 transition-opacity">
                Franchise
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 tracking-wider">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm font-body opacity-70">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Madhapur, Hyderabad, Telangana</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-body opacity-70">
                <Phone className="w-4 h-4 shrink-0" />
                <span>+91 99080 93970</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-body opacity-70">
                <Mail className="w-4 h-4 shrink-0" />
                <span>info@kritunga.in</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 tracking-wider">Hours</h4>
            <div className="space-y-2 font-body text-sm opacity-70">
              <p>Monday – Sunday</p>
              <p className="text-lg font-display font-bold opacity-100">11:30 AM – 11:00 PM</p>
              <p className="mt-4 text-xs">Hours may vary by location</p>
            </div>
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-9 h-9 border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="font-body text-xs opacity-50">© 2024 Kritunga. All rights reserved.</p>
          <p className="font-body text-xs opacity-50">Andhra · Mughlai · Seafood · Biryani · Chinese</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
