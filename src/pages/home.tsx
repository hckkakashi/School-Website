import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody } from '@heroui/react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import HeroSection from '../components/hero-section';
import SectionTitle from '../components/section-title';
import FeatureCard from '../components/feature-card';
import event1 from "../assets/sfsfsfs.jpg";
import event2 from "../assets/fsfs.jpg";
import event3 from "../assets/fsfsf.jpg";

const images = [event1, event2, event3];

const HomePage: React.FC = () => {
  const features = [
    {
      icon: "lucide:book",
      title: "Academic Excellence",
      description: "Our curriculum challenges and inspires students to reach their full potential."
    },
    {
      icon: "lucide:users",
      title: "Dedicated Faculty",
      description: "Learn from experienced educators who are passionate about your success."
    },
    {
      icon: "lucide:globe",
      title: "Global Perspective",
      description: "Prepare for a connected world with our international programs."
    },
    {
      icon: "lucide:palette",
      title: "Arts & Creativity",
      description: "Express yourself through our diverse arts and creative programs."
    }
  ];

  const stats = [
    { value: "94%", label: "Graduation Rate" },
    { value: "30+", label: "Clubs & Activities" },
    { value: "100%", label: "College Acceptance" }
  ];

  return (
    <>
      {/* HERO */}
      <HeroSection
        title="Inspiring Minds, Shaping Futures"
        subtitle="EPES offers a transformative educational experience that prepares students for success in college and beyond."
        imagePath="src/assets/imgepes.jpg"
      />

      {/* FEATURES */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-6">
          <SectionTitle
            title="Why Choose EPES"
            subtitle="A supportive environment where students discover passions and develop lifelong skills."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  delay={index}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-gradient-to-r from-indigo-50 via-blue-100 to-indigo-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-all"
              >
                <p className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS & EVENTS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle
            title="News & Events"
            subtitle="Stay updated with the latest happenings at EPES."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {[1, 2, 3].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border-0 bg-gradient-to-b from-white to-gray-50">
                  <CardBody className="p-0">
                    <img
                      src={images[index]}
                      alt={`Event ${item}`}
                      className="w-full h-52 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                        <Icon icon="lucide:calendar" width={16} />
                        <span>May {10 + item}, 2024</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-gray-800">
                        {item === 1
                          ? "Annual Sports Week"
                          : item === 2
                          ? "Science Exhibition"
                          : "EPES Dance Competition"}
                      </h3>
                      <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                        {item === 1
                          ? "Join our Sports Week with activities for all age groups and skill levels."
                          : item === 2
                          ? "The Science Fair celebrated student innovation and creativity."
                          : "Showcase your moves in our grand Dance Competition!"}
                      </p>
                      <Button
                        size="sm"
                        variant="flat"
                        color="primary"
                        endContent={<Icon icon="lucide:arrow-right" width={16} />}
                      >
                        Read More
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              color="primary"
              variant="shadow"
              size="md"
              endContent={<Icon icon="lucide:arrow-right" width={16} />}
            >
              View All News & Events
            </Button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-14">
            What Our Students & Parents Say
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Anjali Sharma",
                role: "Grade 10 Student",
                img: "https://i.pravatar.cc/100?img=4",
                text: "I love how interactive and fun the classes are! Teachers make learning exciting."
              },
              {
                name: "Ramesh Koirala",
                role: "Parent",
                img: "https://i.pravatar.cc/100?img=5",
                text: "The school provides excellent guidance and support. Teachers are truly caring."
              },
              {
                name: "Sita Gurung",
                role: "Grade 8 Student",
                img: "https://i.pravatar.cc/100?img=6",
                text: "The environment here is so friendly and motivating. I love participating in events!"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <img className="w-12 h-12 rounded-full mr-4" src={testimonial.img} alt={testimonial.name} />
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">“{testimonial.text}”</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-500 text-white text-center">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold mb-6"
          >
            Ready to Join Our School?
          </motion.h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-10">
            Take the first step toward an exceptional educational experience. Apply now or schedule a school tour to learn more.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
  {/* Apply Now Button - white bg, blue text */}
  <Button
    as={Link}
    to="/admissions"
    size="lg"
    className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl 
               hover:bg-blue-600 hover:text-white transition-all duration-300 
               shadow-md hover:shadow-lg"
  >
    Apply Now
  </Button>

  {/* Schedule a Tour Button - blue bg, white text */}
  <Button
    as={Link}
    to="/contact"
    size="lg"
    className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl 
               hover:bg-white hover:text-blue-600 transition-all duration-300 
               shadow-md hover:shadow-lg"
  >
    Schedule a Tour
  </Button>
</div>

        </div>
      </section>
    </>
  );
};

export default HomePage;
