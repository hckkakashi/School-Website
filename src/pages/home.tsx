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
      description: "Our curriculum is designed to challenge and inspire students to reach their full potential."
    },
    {
      icon: "lucide:users",
      title: "Dedicated Faculty",
      description: "Learn from experienced educators who are passionate about student success."
    },
    {
      icon: "lucide:globe",
      title: "Global Perspective",
      description: "Prepare for a connected world with our international programs and diverse community."
    },
    {
      icon: "lucide:palette",
      title: "Arts & Creativity",
      description: "Express yourself through our comprehensive arts programs and creative opportunities."
    }
  ];

  const stats = [
    { value: "94%", label: "Graduation Rate" },
    { value: "30+", label: "Extracurricular Activities" },
    { value: "100%", label: "College Acceptance" }
  ];

  return (
    <>
      <HeroSection
        title="Inspiring Minds, Shaping Futures"
        subtitle="EPES offers a transformative educational experience that prepares students for success in college and beyond."
        imagePath="src\assets\imgepes.jpg"
      />

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Why Choose EPES" 
            subtitle="We provide a supportive environment where students can discover their passions and develop the skills needed for lifelong success."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-content2">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-default-600 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="News & Events" 
            subtitle="Stay updated with the latest happenings at EPES."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[1, 2, 3].map((item, index) => (
        <Card key={item} className="border border-default-200 shadow-xs">
          <CardBody className="p-0">
            <img
              src={images[index]}
              alt={`Event ${item}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <div className="flex items-center gap-2 text-default-500 text-xs mb-2">
                <Icon icon="lucide:calendar" width={14} />
                <span>May {10 + item}, 2024</span>
              </div>
              <h3 className="text-lg font-medium mb-2">
                {item === 1
                  ? "Annual Sports Week"
                  : item === 2
                  ? "Science Exebition"
                  : "EPES Dance Competition"}
              </h3>
              <p className="text-default-600 text-sm mb-4">
                {item === 1
                  ? "Registration is now open for our popular sports week. Programs available for all age groups and skill levels."
                  : item === 2
                  ? "Congratulations to all participants in this year's Science Fair. The projects showcased incredible innovation and creativity."
                  : "Dance Competition Showcase your talent"}
              </p>
              <Button
                size="sm"
                variant="light"
                color="primary"
                endContent={<Icon icon="lucide:arrow-right" width={16} />}
              >
                Read More
              </Button>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
          
          <div className="text-center mt-10">
            <Button 
              color="primary" 
              variant="flat"
              endContent={<Icon icon="lucide:arrow-right" width={16} />}
            >
              View All News & Events
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-16">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <h2 className="text-4xl font-bold text-center text-black mb-12">What Our Students & Parents Say</h2>
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      
      {/* <!-- Testimonial 1 --> */}
      <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center mb-4">
          <img className="w-12 h-12 rounded-full mr-4" src="https://i.pravatar.cc/100?img=4" alt="Student 1"/>
          <div>
            <p className="font-semibold text-black">Anjali Sharma</p>
            <p className="text-black-600 text-sm">Grade 10 Student</p>
          </div>
        </div>
        <p className="text-black-800">"I love how interactive and fun the classNamees are! Teachers always make learning exciting and easy to understand."</p>
      </div>
      
      {/* <!-- Testimonial 2 --> */}
      <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center mb-4">
          <img className="w-12 h-12 rounded-full mr-4" src="https://i.pravatar.cc/100?img=5" alt="Parent 1"/>
          <div>
            <p className="font-semibold text-black">Ramesh Koirala</p>
            <p className="text-black-600 text-sm">Parent</p>
          </div>
        </div>
        <p className="text-black-800">"The school provides excellent guidance and support for my child. The teachers are caring and attentive."</p>
      </div>
      
      {/* <!-- Testimonial 3 --> */}
      <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center mb-4">
          <img className="w-12 h-12 rounded-full mr-4" src="https://i.pravatar.cc/100?img=6" alt="Student 2"/>
          <div>
            <p className="font-semibold text-black">Sita Gurung</p>
            <p className="text-black-600 text-sm">Grade 8 Student</p>
          </div>
        </div>
        <p className="text-black-800">"I enjoy participating in school activities and competitions. The environment is so friendly and motivating!"</p>
      </div>
      
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="py-16 bg-primary-0">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">Ready to Join Our Community?</h2>
            <p className="text-default-600 mb-8">
              Take the first step toward an exceptional educational experience. Apply now or schedule a campus tour to learn more.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                as={Link}
                to="/admissions"
                color="primary" 
                size="lg"
              >
                Apply Now
              </Button>
              <Button 
                as={Link}
                to="/contact"
                variant="flat" 
                color="primary" 
                size="lg"
              >
                Schedule a Tour
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;