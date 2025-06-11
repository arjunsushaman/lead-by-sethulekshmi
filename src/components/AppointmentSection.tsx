
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Send, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const AppointmentSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration - you'll need to set up your template ID and public key
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        to_name: 'MindWell Psychology',
      };

      await emailjs.send(
        'service_yizcgfx', // Your service ID
        'YOUR_TEMPLATE_ID', // You need to create a template in EmailJS and replace this
        templateParams,
        'YOUR_PUBLIC_KEY' // You need to get your public key from EmailJS and replace this
      );

      toast({
        title: "Appointment Request Sent!",
        description: "We'll contact you within 24 hours to confirm your appointment.",
      });
      
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Error",
        description: "Failed to send appointment request. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="appointment" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Book Your Appointment
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to take the first step? Schedule your consultation today or call us directly
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Your full name"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="(555) 123-4567"
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your needs or preferences for scheduling..."
                  disabled={isSubmitting}
                ></textarea>
              </div>
              
              <motion.button
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground px-6 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={20} />
                {isSubmitting ? 'Sending...' : 'Send Appointment Request'}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Prefer to Call?
              </h3>
              
              <div className="space-y-4">
                <a
                  href="tel:+1-555-123-4567"
                  className="flex items-center gap-4 p-4 bg-white rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors group"
                >
                  <Phone className="text-primary group-hover:text-primary-foreground" size={24} />
                  <div>
                    <p className="font-semibold">Call Now</p>
                    <p className="text-sm opacity-80">(555) 123-4567</p>
                  </div>
                </a>
                
                <a
                  href="mailto:info@mindwellpsychology.com"
                  className="flex items-center gap-4 p-4 bg-white rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors group"
                >
                  <Mail className="text-primary group-hover:text-primary-foreground" size={24} />
                  <div>
                    <p className="font-semibold">Email Us</p>
                    <p className="text-sm opacity-80">info@mindwellpsychology.com</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="text-primary" size={24} />
                <h3 className="text-xl font-semibold text-foreground">Office Hours</h3>
              </div>
              
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <p className="text-sm text-green-800">
                  ✨ Same-day emergency appointments available
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
