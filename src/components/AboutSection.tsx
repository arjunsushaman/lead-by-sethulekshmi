import React from "react";
import { motion } from "framer-motion";
import { BookHeart, Heart, Users } from "lucide-react";

const AboutSection = () => {
  const qualifications = [
    { icon: BookHeart, text: "Psychologist & Mental Health Practitioner" },
    { icon: Heart, text: "4+ Years Experience" },
    { icon: Users, text: "200+ Clients Helped" },
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
            About Sethulekshmi S M
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
                src="/sethulekshmi.webp"
                alt="SETHULEKSHMI S.M"
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
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg"
                >
                  <qual.icon className="text-primary" size={24} />
                  <span className="font-medium text-foreground">
                    {qual.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p>
                Sethulekshmi S M is a professionally trained counsellor committed
                to supporting individuals across all stages of life — including
                children, adolescents, adults, and couples — as they navigate
                emotional, behavioral, and personal challenges.
              </p>

              <p>
                Holding an M.Sc. in Psychology and a Postgraduate Diploma in
                School Counselling, she brings academic expertise with real-world
                experience. Her client-centered approach is rooted in empathy,
                patience, and a commitment to creating a safe, supportive space.
              </p>

              <p>
                She empowers individuals with practical tools and emotional
                insight, guiding them toward clarity, healing, and personal
                growth at their own pace.
              </p>
            </div>

            <div className="bg-gradient-to-r from-primary/5 to-green-50 p-6 rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">
                Specialized in:{" "}
              </h3>
              <p className="text-muted-foreground">
                Child &amp; Adolescent Mental Health, Family and Relationship
                Counselling
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
