
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Calendar, Instagram } from 'lucide-react';

const HeroSection = () => {
  const scrollToAppointment = () => {
    const element = document.getElementById('appointment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-16 md:pt-20 min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Your Journey, 
                <span className="text-primary block">Our Support</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              Professional psychology services in a warm, supportive environment. 
              Take the first step towards better mental health and emotional wellbeing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start flex-wrap max-w-xl lg:max-w-none">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToAppointment}
                className="bg-primary text-primary-foreground px-5 py-3 rounded-full text-base font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2 justify-center whitespace-nowrap flex-1 min-w-[160px] sm:flex-initial"
              >
                <Calendar size={20} />
                Book an Appointment
              </motion.button>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+91 8075818137"
                className="border-2 border-primary text-primary px-5 py-3 rounded-full text-base font-semibold hover:bg-primary hover:text-primary-foreground transition-colors flex items-center gap-2 justify-center whitespace-nowrap flex-1 min-w-[160px] sm:flex-initial"
              >
                <Phone size={20} />
                Call Now
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.instagram.com/lead_by_sethulekshmi?igsh=MWxqN2d2ZTN4dWQ4YQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-pink-500 text-pink-500 px-5 py-3 rounded-full text-base font-semibold hover:bg-pink-500 hover:text-white transition-colors flex items-center gap-2 justify-center whitespace-nowrap flex-1 min-w-[160px] sm:flex-initial"
              >
                <Instagram size={20} />
                Follow Us
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop"
                alt="Peaceful therapy environment"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium shadow-lg"
            >
              ✨ Safe Space
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              className="absolute -bottom-4 -left-4 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium shadow-lg"
            >
              🌱 Growth
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
