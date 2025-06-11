
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, Users } from 'lucide-react';

const AboutSection = () => {
  const qualifications = [
    { icon: Award, text: "Licensed Clinical Psychologist" },
    { icon: Heart, text: "10+ Years Experience" },
    { icon: Users, text: "500+ Clients Helped" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Dr. Sarah Johnson
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dedicated to helping individuals and couples achieve emotional wellness and personal growth
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=600&fit=crop"
                alt="Dr. Sarah Johnson"
                className="rounded-2xl shadow-lg w-full max-w-md mx-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-2xl"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 gap-4">
              {qualifications.map((qual, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg">
                  <qual.icon className="text-primary" size={24} />
                  <span className="font-medium text-foreground">{qual.text}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p>
                Dr. Sarah Johnson brings over a decade of experience in clinical psychology, 
                specializing in anxiety disorders, depression, and relationship counseling. 
                She holds a Ph.D. in Clinical Psychology from Stanford University.
              </p>
              
              <p>
                Her therapeutic approach combines evidence-based practices with a warm, 
                empathetic style that helps clients feel safe and understood. Dr. Johnson 
                believes in the power of the therapeutic relationship to foster healing and growth.
              </p>
              
              <p>
                She is passionate about helping individuals overcome challenges, develop 
                coping strategies, and build resilience for a more fulfilling life.
              </p>
            </div>

            <div className="bg-gradient-to-r from-primary/5 to-green-50 p-6 rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">Therapeutic Approach</h3>
              <p className="text-muted-foreground">
                Integrative approach using Cognitive Behavioral Therapy (CBT), 
                Mindfulness-Based interventions, and Person-Centered therapy techniques.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
