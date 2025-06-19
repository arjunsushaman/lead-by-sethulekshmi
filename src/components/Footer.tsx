import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center md:items-start mb-4">
              <img src="/logo.png" alt="Lead by Sethulekshmi - leadbysethulekshmi logo" className="h-20 w-20 object-contain mb-2" />
              <h3 className="text-2xl font-bold">Lead by Sethulekshmi</h3>
              <p className="text-gray-400">(also known as leadbysethulekshmi)</p>
            </div>
            <p className="text-gray-300 mb-6">
              Professional mental health services in a warm, supportive environment. 
              Your journey to wellness starts here.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', id: 'hero' },
                { name: 'About', id: 'about' },
                { name: 'Services', id: 'services' },
                { name: 'Gallery', id: 'gallery' },
                { name: 'Reviews', id: 'reviews' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Child Counseling</li>
              <li>Adolescent Counseling</li>
              <li>Adult Counseling</li>
              <li>Couples Counseling</li>
              <li>Pregnancy Support</li>
              <li>Postpartum Care</li>
              <li>Return-to-Work Assistance</li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-4">
              <a
                href="tel:+91 8075818137"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <Phone size={18} />
                +91 8075818137
              </a>
              <a
                href="mailto:leadbysethulekshmi@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <Mail size={18} />
                leadbysethulekshmi@gmail.com
              </a>
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <div>
                  Nila Building<br />
                  Eanikkara, Karakulam,<br />
                  Thiruvananthapuram,
                  695564
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400">
            © 2024 Lead by Sethulekshmi. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
