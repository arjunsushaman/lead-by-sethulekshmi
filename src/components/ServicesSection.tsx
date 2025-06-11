
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Heart, Users, Shield, Zap, MessageCircle } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Brain,
      title: "Individual Therapy",
      description: "One-on-one sessions for anxiety, depression, trauma, and personal growth",
      features: ["Anxiety & Depression", "Trauma Recovery", "Life Transitions", "Self-Esteem"]
    },
    {
      icon: Heart,
      title: "Couples Therapy",
      description: "Strengthen your relationship with evidence-based couples counseling",
      features: ["Communication", "Conflict Resolution", "Intimacy", "Trust Building"]
    },
    {
      icon: Users,
      title: "Family Therapy",
      description: "Improve family dynamics and resolve conflicts in a supportive environment",
      features: ["Parent-Child Issues", "Sibling Conflicts", "Blended Families", "Communication"]
    },
    {
      icon: Shield,
      title: "Anxiety Treatment",
      description: "Specialized treatment for anxiety disorders and panic attacks",
      features: ["Panic Disorder", "Social Anxiety", "Generalized Anxiety", "Phobias"]
    },
    {
      icon: Zap,
      title: "Stress Management",
      description: "Learn effective coping strategies for work and life stress",
      features: ["Work Stress", "Burnout", "Time Management", "Relaxation Techniques"]
    },
    {
      icon: MessageCircle,
      title: "Online Therapy",
      description: "Convenient and secure video sessions from the comfort of your home",
      features: ["Video Sessions", "Flexible Scheduling", "Secure Platform", "Same Quality Care"]
    }
  ];

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
