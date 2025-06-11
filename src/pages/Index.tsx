
import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import AppointmentSection from '@/components/AppointmentSection';
import ReviewsSection from '@/components/ReviewsSection';
import GallerySection from '@/components/GallerySection';
import LocationSection from '@/components/LocationSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        <Helmet>
          <title>MindWell Psychology - Professional Mental Health Services</title>
          <meta name="description" content="Expert psychology services providing individual therapy, anxiety treatment, and couples counseling. Book your consultation today." />
          <meta name="keywords" content="psychology, therapy, mental health, counseling, anxiety, depression, couples therapy" />
          <meta property="og:title" content="MindWell Psychology - Professional Mental Health Services" />
          <meta property="og:description" content="Expert psychology services providing individual therapy, anxiety treatment, and couples counseling." />
          <meta property="og:type" content="website" />
        </Helmet>
        
        <Header />
        
        <main>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <HeroSection />
          </motion.div>
          
          <AboutSection />
          <ServicesSection />
          <AppointmentSection />
          <ReviewsSection />
          <GallerySection />
          <LocationSection />
        </main>
        
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Index;
