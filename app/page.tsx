"use client";

import { useEffect, useState, useRef } from "react";
import NextImage from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  Phone,
  MapPin,
  Clock,
  ChefHat,
  Fish,
  UtensilsCrossed,
  Star,
  ArrowRight,
  Calendar,
  Users,
  Heart,
  Award,
  Menu,
  X,
} from "lucide-react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
};

const floatAnimation = {
  y: [0, -10, 0],
  transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
};

// Menu items
const menuItems = [
  { name: "Grilled Lobster", price: "Rs. 3,500", desc: "Fresh lobster with garlic butter", category: "Seafood" },
  { name: "Prawn Curry", price: "Rs. 1,800", desc: "Spicy Sri Lankan style curry", category: "Seafood" },
  { name: "Crab Masala", price: "Rs. 2,200", desc: "Blue swimmer crab in aromatic masala", category: "Seafood" },
  { name: "Fish Tikka", price: "Rs. 1,200", desc: "Tandoori spiced fish fillets", category: "Indian" },
  { name: "Butter Chicken", price: "Rs. 1,600", desc: "Creamy tomato curry with naan", category: "Indian" },
  { name: "Seafood Platter", price: "Rs. 4,500", desc: "Mixed seafood grill for two", category: "Special" },
];

// Features
const features = [
  { icon: Fish, title: "Fresh Catch", desc: "Daily fresh seafood from local fishermen" },
  { icon: ChefHat, title: "Expert Chefs", desc: "Masters of Indian & Sri Lankan cuisine" },
  { icon: Award, title: "Family Favorite", desc: "Serving families since 2015" },
];

// Testimonials
const testimonials = [
  { name: "Priya Fernando", text: "Best seafood in Panadura! The crab curry is absolutely divine.", rating: 5 },
  { name: "Rohan Silva", text: "Perfect place for family dinners. Great ambiance and food.", rating: 5 },
  { name: "Anjali Perera", text: "The butter chicken reminds me of my grandmother's cooking.", rating: 5 },
];

// Navigation Component
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "glass py-3" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <motion.a
              href="#home"
              className="font-display text-2xl sm:text-3xl font-bold text-[#c9a962] tracking-wide"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              NAVRO
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-sm uppercase tracking-wider text-white/80 hover:text-[#c9a962] link-underline transition-colors"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="tel:0382247447"
                className="flex items-center gap-2 px-5 py-2.5 bg-[#c9a962] text-black font-medium rounded-full btn-glow"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(201, 169, 98, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden ${
          isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1 }}
              className="text-2xl font-display text-white hover:text-[#c9a962] transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="tel:0382247447"
            onClick={() => setIsMobileMenuOpen(false)}
            initial={{ opacity: 0, y: 20 }}
            animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-2 px-8 py-3 bg-[#c9a962] text-black font-medium rounded-full mt-4"
          >
            <Phone className="w-5 h-5" />
            <span>0382 247 447</span>
          </motion.a>
        </div>
      </motion.div>
    </>
  );
}

// Hero Section
function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#141414] to-[#0a0a0a]">
        <motion.div
          style={{ y: y1 }}
          className="absolute inset-0 opacity-30"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(201,169,98,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(201,169,98,0.1),transparent_40%)]" />
        </motion.div>
      </div>

      {/* Floating decorative elements */}
      <motion.div style={{ y: y2 }} className="absolute top-20 right-10 w-72 h-72 rounded-full bg-[#c9a962]/5 blur-3xl" />
      <motion.div style={{ y: y1 }} className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-[#c9a962]/5 blur-3xl" />

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="space-y-8"
        >
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 mb-6">
            <Star className="w-5 h-5 text-[#c9a962] fill-[#c9a962]" />
            <span className="text-[#c9a962] uppercase tracking-[0.3em] text-sm font-medium">
              Seafood Family Restaurant
            </span>
            <Star className="w-5 h-5 text-[#c9a962] fill-[#c9a962]" />
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight"
          >
            <span className="block">Experience the</span>
            <span className="block text-gradient">Taste of Ocean</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="max-w-2xl mx-auto text-lg sm:text-xl text-white/70 leading-relaxed"
          >
            Authentic Indian and Sri Lankan seafood cuisine in the heart of Panadura. 
            Fresh catches, aromatic spices, and family traditions since 2015.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <motion.a
              href="#menu"
              className="group flex items-center gap-2 px-8 py-4 bg-[#c9a962] text-black font-semibold rounded-full btn-glow"
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(201, 169, 98, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <UtensilsCrossed className="w-5 h-5" />
              <span>View Menu</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="tel:0382247447"
              className="flex items-center gap-2 px-8 py-4 border border-[#c9a962]/30 text-white font-medium rounded-full hover:bg-[#c9a962]/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              <span>0382 247 447</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-[#c9a962]/50 flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-[#c9a962] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// About Section
function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative py-24 sm:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInLeft}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden img-zoom">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
              <NextImage
                src="/foodimg.jpg"
                alt="Navro Restaurant"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInRight}
            className="space-y-8"
          >
            <div>
              <motion.span variants={fadeInUp} className="text-[#c9a962] uppercase tracking-[0.2em] text-sm font-medium">
                Our Story
              </motion.span>
              <motion.h2 variants={fadeInUp} className="font-display text-4xl sm:text-5xl font-bold text-white mt-4">
                A Legacy of Flavor
              </motion.h2>
            </div>

            <motion.p variants={fadeInUp} className="text-white/70 text-lg leading-relaxed">
              Nestled in the coastal town of Panadura, Navro Seafood Family Restaurant has been 
              serving the finest Indian and Sri Lankan seafood since 2015. Our journey began with 
              a simple mission: to bring the authentic taste of the ocean to every table.
            </motion.p>

            <motion.p variants={fadeInUp} className="text-white/70 text-lg leading-relaxed">
              We source our seafood daily from local fishermen, ensuring that every dish we serve 
              is prepared with the freshest catch. Our chefs combine traditional recipes with 
              modern techniques, creating an unforgettable dining experience for the whole family.
            </motion.p>

            <motion.div variants={staggerContainer} className="grid grid-cols-3 gap-6 pt-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={scaleIn}
                  className="text-center group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-[#1a1a1a] flex items-center justify-center group-hover:bg-[#c9a962]/10 transition-colors">
                    <feature.icon className="w-8 h-8 text-[#c9a962]" />
                  </div>
                  <h3 className="font-medium text-white text-sm">{feature.title}</h3>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Menu Section
function MenuSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Seafood", "Indian", "Special"];
  const filteredItems = activeCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" ref={ref} className="relative py-24 sm:py-32 bg-[#0a0a0a] noise-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span variants={fadeInUp} className="text-[#c9a962] uppercase tracking-[0.2em] text-sm font-medium">
            Our Menu
          </motion.span>
          <motion.h2 variants={fadeInUp} className="font-display text-4xl sm:text-5xl font-bold text-white mt-4">
            Signature Dishes
          </motion.h2>
          <motion.p variants={fadeInUp} className="max-w-2xl mx-auto text-white/60 mt-4">
            Discover our carefully curated selection of seafood and Indian specialties
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-[#c9a962] text-black"
                  : "bg-[#1a1a1a] text-white/70 hover:bg-[#2a2a2a]"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Menu Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-[#141414] rounded-2xl p-6 card-hover border border-white/5"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-[#c9a962]/10 flex items-center justify-center">
                  <Fish className="w-6 h-6 text-[#c9a962]" />
                </div>
                <span className="text-[#c9a962] font-display text-xl font-semibold">{item.price}</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-white mb-2 group-hover:text-[#c9a962] transition-colors">
                {item.name}
              </h3>
              <p className="text-white/60 text-sm">{item.desc}</p>
              <span className="inline-block mt-4 px-3 py-1 bg-[#1a1a1a] rounded-full text-xs text-white/50">
                {item.category}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 sm:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span variants={fadeInUp} className="text-[#c9a962] uppercase tracking-[0.2em] text-sm font-medium">
            Testimonials
          </motion.span>
          <motion.h2 variants={fadeInUp} className="font-display text-4xl sm:text-5xl font-bold text-white mt-4">
            What Our Guests Say
          </motion.h2>
        </motion.div>

        <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={fadeInUp}
              className="bg-[#141414] rounded-2xl p-8 card-hover border border-white/5 relative"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#c9a962] fill-[#c9a962]" />
                ))}
              </div>
              <p className="text-white/70 mb-6 leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#c9a962]/20 flex items-center justify-center">
                  <span className="text-[#c9a962] font-semibold">{testimonial.name[0]}</span>
                </div>
                <span className="text-white font-medium">{testimonial.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="relative py-24 sm:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInLeft}
          >
            <span className="text-[#c9a962] uppercase tracking-[0.2em] text-sm font-medium">
              Get in Touch
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-4 mb-8">
              Visit Us Today
            </h2>
            <p className="text-white/70 text-lg mb-8">
              We&apos;d love to welcome you to Navro Seafood Family Restaurant. Whether it&apos;s a family dinner, 
              special occasion, or casual lunch, we promise an unforgettable dining experience.
            </p>

            <div className="space-y-6">
              <motion.a
                href="tel:0382247447"
                className="flex items-center gap-4 group"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-[#1a1a1a] flex items-center justify-center group-hover:bg-[#c9a962]/10 transition-colors">
                  <Phone className="w-6 h-6 text-[#c9a962]" />
                </div>
                <div>
                  <span className="text-white/50 text-sm">Call us at</span>
                  <p className="text-white font-medium text-lg">0382 247 447</p>
                </div>
              </motion.a>

              <motion.div
                className="flex items-center gap-4"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-[#1a1a1a] flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#c9a962]" />
                </div>
                <div>
                  <span className="text-white/50 text-sm">Location</span>
                  <p className="text-white font-medium text-lg">Panadura, Sri Lanka</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-[#1a1a1a] flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[#c9a962]" />
                </div>
                <div>
                  <span className="text-white/50 text-sm">Opening Hours</span>
                  <p className="text-white font-medium text-lg">10:00 AM - 10:00 PM Daily</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInRight}
            className="relative"
          >
            <div className="bg-[#141414] rounded-3xl p-8 border border-white/5">
              <div className="aspect-video rounded-2xl overflow-hidden mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.0523456789!2d79.9087654321!3d6.7123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDInNDQuNCJOIDc5wrA1NCczMS42IkU!5e0!3m2!1sen!2slk!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
              <a
                href="https://maps.app.goo.gl/okDhHAbM3ac4UFbb8"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 mb-6 bg-[#c9a962]/10 hover:bg-[#c9a962]/20 text-[#c9a962] rounded-xl transition-colors"
              >
                <MapPin className="w-4 h-4 inline-block mr-2" />
                Open in Google Maps
              </a>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#1a1a1a] rounded-xl p-4 text-center">
                  <Calendar className="w-6 h-6 text-[#c9a962] mx-auto mb-2" />
                  <span className="text-white/60 text-sm">Reservations</span>
                </div>
                <div className="bg-[#1a1a1a] rounded-xl p-4 text-center">
                  <Users className="w-6 h-6 text-[#c9a962] mx-auto mb-2" />
                  <span className="text-white/60 text-sm">Family Friendly</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl font-bold text-[#c9a962] mb-2">NAVRO</h3>
            <p className="text-white/50 text-sm">Seafood Family Restaurant</p>
          </div>
          <div className="flex items-center gap-6">
            <motion.a
              href="tel:0382247447"
              className="flex items-center gap-2 text-white/70 hover:text-[#c9a962] transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <Phone className="w-4 h-4" />
              <span>0382 247 447</span>
            </motion.a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/5 text-center text-white/40 text-sm">
          <p>&copy; 2024 Navro Seafood Family Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// Main Page Component
export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
