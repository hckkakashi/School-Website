import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, Accordion, AccordionItem } from '@heroui/react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import HeroSection from '../components/hero-section';
import SectionTitle from '../components/section-title';

const AdmissionsPage: React.FC = () => {
  const admissionSteps = [
    {
      icon: "lucide:file-text",
      title: "Submit Application",
      description: "Complete our online application form with basic student and family information."
    },
    {
      icon: "lucide:clipboard-check",
      title: "Provide Records",
      description: "Submit academic records, recommendation letters, and other required documents."
    },
    {
      icon: "lucide:users",
      title: "Interview",
      description: "Schedule an interview with our admissions team and take any required assessments."
    },
    {
      icon: "lucide:mail",
      title: "Admission Decision",
      description: "Receive an admission decision within 2-4 weeks of completing all requirements."
    }
  ];

  const faqs = [
    {
      question: "What are the application deadlines?",
      answer: "Our priority application deadline is January 15 for the following academic year. We accept applications on a rolling basis after this date as space permits."
    },
    {
      question: "Are there entrance exams?",
      answer: "Yes, applicants are required to take age-appropriate assessments as part of the admissions process. These help us understand each student's academic strengths and needs."
    },
    {
      question: "Do you offer financial aid?",
      answer: "Yes, Academia is committed to making our education accessible. We offer need-based financial aid to qualifying families. The financial aid application process is separate from admissions."
    },
    {
      question: "Is there a waitlist?",
      answer: "When classes reach capacity, qualified applicants may be placed on a waitlist. Waitlisted students will be notified if a space becomes available."
    },
    {
      question: "Do you accept international students?",
      answer: "Yes, we welcome international students and have resources to support their transition. International applicants must meet additional requirements related to English proficiency and visa status."
    },
    {
      question: "What is your transfer student policy?",
      answer: "We accept transfer students throughout the year based on space availability. Transfer students follow the same application process with additional consideration of their previous academic records."
    }
  ];

  return (
    <>
      <HeroSection
        title="Admissions"
        subtitle="Join our vibrant learning community. Discover the admissions process, requirements, and everything you need to know about becoming part of Academia."
        imagePath="https://img.heroui.chat/image/education?w=800&h=600&u=school3"
      />

      {/* Admissions Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-3xl font-semibold mb-6">Welcome to Academia Admissions</h2>
              <p className="text-default-600 mb-4">
                We're delighted that you're considering Academia for your child's education. Our admissions process is designed to be thorough yet supportive, helping us get to know each applicant while giving families the opportunity to learn about our community.
              </p>
              <p className="text-default-600 mb-6">
                We seek students who will thrive in our nurturing academic environment and contribute to our diverse community. Our holistic review considers academic potential, character, interests, and the unique perspective each student brings.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  color="primary"
                  endContent={<Icon icon="lucide:arrow-right" width={16} />}
                >
                  Apply Now
                </Button>
                <Button 
                  as={Link}
                  to="/contact"
                  variant="flat" 
                  color="primary"
                >
                  Contact Admissions
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-content2 p-6 rounded-lg border border-default-200"
            >
              <h3 className="text-xl font-medium mb-4">Key Dates</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-primary-50">
                    <Icon icon="lucide:calendar" className="text-primary" width={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">January 15</h4>
                    <p className="text-default-600 text-sm">Priority Application Deadline</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-primary-50">
                    <Icon icon="lucide:calendar" className="text-primary" width={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">February 1-28</h4>
                    <p className="text-default-600 text-sm">Admissions Interviews & Assessments</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-primary-50">
                    <Icon icon="lucide:calendar" className="text-primary" width={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">March 15</h4>
                    <p className="text-default-600 text-sm">Admission Decisions Released</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-primary-50">
                    <Icon icon="lucide:calendar" className="text-primary" width={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">April 15</h4>
                    <p className="text-default-600 text-sm">Enrollment Deadline</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Admissions Process */}
      <section className="py-16 bg-content2">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Admissions Process" 
            subtitle="Our admissions process is designed to be clear and straightforward. Follow these steps to apply to Academia."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white p-6 rounded-lg shadow-xs border border-default-200"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-primary-50">
                    <Icon icon={step.icon} className="text-primary" width={24} height={24} />
                  </div>
                  <span className="text-primary font-medium">Step {index + 1}</span>
                </div>
                <h3 className="text-lg font-medium mb-2">{step.title}</h3>
                <p className="text-default-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Grade Levels */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Grade Levels & Programs" 
            subtitle="Academia offers comprehensive educational programs from kindergarten through middle school."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Elementary School (K-5)",
                description: "Our elementary program builds a strong foundation in core subjects while nurturing curiosity and creativity.",
                features: ["Foundational literacy and numeracy", "Project-based learning", "Arts integration", "Character development"],
                image: "https://img.heroui.chat/image/education?w=400&h=300&u=elementary"
              },
              {
                title: "Middle School (6-8)",
                description: "Middle school students explore a broader curriculum while developing critical thinking and independence.",
                features: ["Core academic subjects", "Elective options", "Advisory program", "Leadership opportunities"],
                image: "https://img.heroui.chat/image/education?w=400&h=300&u=middle"
              }
            ].map((level, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <Card className="border border-default-200 shadow-xs h-full">
                  <CardBody className="p-0">
                    <img 
                      src={level.image} 
                      alt={level.title} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-5">
                      <h3 className="text-lg font-medium mb-2">{level.title}</h3>
                      <p className="text-default-600 text-sm mb-4">{level.description}</p>
                      <ul className="space-y-2">
                        {level.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <Icon icon="lucide:check" className="text-primary" width={16} />
                            <span className="text-default-600 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tuition & Financial Aid */}
      <section className="py-16 bg-content2">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Tuition & Financial Aid" 
            subtitle="We are committed to making Academia accessible to qualified students from diverse backgrounds."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <Card className="border border-default-200 shadow-xs">
                <CardBody>
                  <h3 className="text-xl font-medium mb-4">Tuition</h3>
                  <p className="text-default-600 text-sm mb-6">
                    Tuition at Academia includes comprehensive academic programs, materials, technology resources, and most extracurricular activities. Additional fees may apply for specialized programs, trips, or activities.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-2 border-b border-default-200">
                      <span className="font-medium">Elementary School (K-5)</span>
                      <span className="text-primary font-medium">$18,500/year</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-default-200">
                      <span className="font-medium">Middle School (6-8)</span>
                      <span className="text-primary font-medium">$20,750/year</span>
                    </div>
                  </div>
                  
                  <p className="text-default-500 text-xs mt-4">
                    * Payment plans are available, including monthly, quarterly, and annual options.
                  </p>
                </CardBody>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <Card className="border border-default-200 shadow-xs">
                <CardBody>
                  <h3 className="text-xl font-medium mb-4">Financial Aid</h3>
                  <p className="text-default-600 text-sm mb-4">
                    Academia is committed to socioeconomic diversity and offers need-based financial aid to qualifying families. Our financial aid program supports families who demonstrate financial need through a confidential application process.
                  </p>
                  
                  <h4 className="font-medium mb-2">Financial Aid Process:</h4>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <Icon icon="lucide:check-circle" className="text-primary mt-0.5" width={16} />
                      <span className="text-default-600 text-sm">Complete the financial aid application through our online portal</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon icon="lucide:check-circle" className="text-primary mt-0.5" width={16} />
                      <span className="text-default-600 text-sm">Submit required financial documentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon icon="lucide:check-circle" className="text-primary mt-0.5" width={16} />
                      <span className="text-default-600 text-sm">Financial aid decisions are made separately from admission decisions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon icon="lucide:check-circle" className="text-primary mt-0.5" width={16} />
                      <span className="text-default-600 text-sm">Aid packages are tailored to each family's demonstrated need</span>
                    </li>
                  </ul>
                  
                  <Button 
                    color="primary" 
                    variant="flat"
                    endContent={<Icon icon="lucide:arrow-right" width={16} />}
                  >
                    Learn More About Financial Aid
                  </Button>
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Frequently Asked Questions" 
            subtitle="Find answers to common questions about our admissions process."
          />
          
          <div className="max-w-3xl mx-auto">
            <Accordion variant="bordered">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} title={faq.question}>
                  <p className="text-default-600">{faq.answer}</p>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-default-600 mb-4">
              Don't see your question? Contact our admissions team for more information.
            </p>
            <Button 
              as={Link}
              to="/contact"
              color="primary"
              endContent={<Icon icon="lucide:mail" width={16} />}
            >
              Contact Admissions
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">Ready to Apply?</h2>
            <p className="text-default-600 mb-8">
              Start your journey with Academia today. Our admissions team is here to guide you through every step of the process.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                color="primary" 
                size="lg"
                endContent={<Icon icon="lucide:arrow-right" width={16} />}
              >
                Begin Application
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

export default AdmissionsPage;