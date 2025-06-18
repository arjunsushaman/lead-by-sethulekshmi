import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Heart, Users, Shield, Zap, MessageCircle } from 'lucide-react';

export const services = [
  {
    icon: Users,
    title: "Child Counseling",
    description: "Support for children facing emotional or behavioral challenges, using engaging and age-appropriate methods.",
    features: ["Emotional & Behavioral Support", "Safe, Child-Friendly Environment", "Includes Parent Sessions"]
  },
  {
    icon: Users,
    title: "Adolescent Counseling",
    description: "Therapy designed for teens dealing with stress, emotions, relationships, and identity, in a respectful and relatable way.",
    features: ["Exam & Academic Stress", "Friendship & Social Issues", "Confidence & Emotional Balance", "Optional Parent Guidance"]
  },
  {
    icon: Brain,
    title: "Adult Counseling",
    description: "Private, one-on-one sessions to manage anxiety, low mood, overthinking, and life transitions.",
    features: ["Anxiety & Overthinking", "Depression & Low Mood", "Major Life Changes", "Focus on Clarity & Emotional Wellness"]
  },
  {
    icon: Heart,
    title: "Couples Counseling",
    description: "Strengthen your bond with partner-focused sessions that support communication and healing.",
    features: ["Better Understanding", "Improved Communication", "Relationship Healing", "Pre-Marital & Marital Support"]
  },
  {
    icon: Shield,
    title: "Pregnancy Support",
    description: "Gentle emotional support and tools to manage stress and mindfulness during pregnancy.",
    features: ["Prenatal Counseling", "Stress Management", "Mindfulness Practices", "Emotional Preparation for Parenthood"]
  },
  {
    icon: Shield,
    title: "Postpartum Care",
    description: "Helping new mothers navigate emotional changes after childbirth with care and understanding.",
    features: ["Anxiety & Depression Support", "Emotional Adjustment", "Compassionate Counseling", "Post-Birth Transition"]
  },
  {
    icon: Shield,
    title: "Return-to-Work Assistance",
    description: "Support for parents transitioning back to work after parental leave, focusing on emotional well-being.",
    features: ["Confidence Building", "Emotional Readiness", "Work-Life Balance", "Smooth Return to Workplace"]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive mental health services tailored to your unique needs and goals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gradient-to-br from-primary/10 to-green-100 p-3 rounded-full">
                  <service.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
              </div>
              
              <p className="text-muted-foreground mb-4">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
