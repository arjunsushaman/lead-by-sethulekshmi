
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Mahesh J S",
      rating: 5,
      text: "Child counselling sessions with Sethulekshmi have truly helped my son express his emotions better. The playful, safe approach made a big difference.",
      date: "2 weeks ago"
    },
    {
      name: "Bhagyalekshmi",
      rating: 5,
      text: "The adolescent therapy sessions helped my daughter manage her exam stress and feel more confident in school. Highly supportive environment!",
      date: "1 month ago"
    },
    {
      name: "Anagha Jewel",
      rating: 5,
      text: "I was struggling with anxiety and overthinking. The adult counselling sessions with Sethulekshmi S M gave me clarity and practical tools to manage my emotions better.",
      date: "3 weeks ago"
    },
    {
      name: "Vindhya Padmakumar",
      rating: 5,
      text: "Our Adolescent Counselling experience was transformative. We learned to communicate openly and reconnect on a deeper level. Thank you, Sethulekshmi!",
      date: "2 months ago"
    }
  ];
  
  
  

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real testimonials from people who have found healing and growth through our services
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start gap-4 mb-4">
                <Quote className="text-primary/30 flex-shrink-0 mt-1" size={24} />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex gap-1">
                      {renderStars(review.rating)}
                    </div>
                    <span className="text-sm text-muted-foreground">• {review.date}</span>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    "{review.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-green-100 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold">
                        {review.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{review.name}</p>
                      <p className="text-sm text-muted-foreground">Verified Client</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 inline-block">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex gap-1">
                {renderStars(5)}
              </div>
              <span className="text-2xl font-bold text-foreground">4.9/5</span>
            </div>
            <p className="text-muted-foreground">
              Based on 100+ reviews from our valued clients
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection;
