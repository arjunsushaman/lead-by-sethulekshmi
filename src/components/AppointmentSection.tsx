import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Send, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
import AppointmentForm from './AppointmentForm';
import { services as serviceOptions } from './ServicesSection';

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
        to_name: 'Lead by Sethulekshmi',
      };

      await emailjs.send(
        'service_yylng55', 
        'template_9ko2upv', 
        templateParams,
        'G7laWd0KdD90Wz9wT' 
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
            Schedule Your Consultation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to take the first step? Book your consultation now or give us a call.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch min-h-[70vh]">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col h-full justify-start"
          >
            <AppointmentForm services={serviceOptions} />
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 h-full justify-center"
          >
            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl flex-shrink-0">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Prefer to Call?
              </h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+1-555-123-4567"
                  className="flex-1 flex items-center gap-4 p-4 bg-white rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors group justify-center"
                >
                  <Phone className="text-primary group-hover:text-primary-foreground" size={24} />
                  <div>
                    <p className="font-semibold">Call Now</p>
                    <p className="text-sm opacity-80">+91 8075818137</p>
                  </div>
                </a>
                <a
                  href="mailto:leadbysethulekshmi@gmail.com"
                  className="flex-1 flex items-center gap-4 p-4 bg-white rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors group justify-center"
                >
                  <Mail className="text-primary group-hover:text-primary-foreground" size={24} />
                  <div>
                    <p className="font-semibold">Email Us</p>
                    <p className="text-sm opacity-80">leadbysethulekshmi@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>
            {/* Office Hours & Session Details Combined Card */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg flex-shrink-0">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="text-primary" size={24} />
                <h3 className="text-xl font-semibold text-foreground">Office Hours</h3>
              </div>
              <div className="space-y-2 text-muted-foreground mb-6">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
              <hr className="my-6 border-gray-200" />
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span role="img" aria-label="info">ℹ️</span> Session Details
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-muted-foreground text-base">
                  <li className="flex items-center gap-2">
                    <span role="img" aria-label="clock">⏰</span>
                    <span>Session Time: <span className="font-medium text-foreground">45–60 mins</span></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span role="img" aria-label="platform">💻</span>
                    <span>Platform: <span className="font-medium text-foreground">Google Meet</span></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span role="img" aria-label="languages">🗣️</span>
                    <span>Languages: <span className="font-medium text-foreground">English & Malayalam</span></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span role="img" aria-label="confidential">🔒</span>
                    <span>Confidential & Safe</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
