import React from 'react';
import { Button, Card, CardBody, Input, Textarea, Checkbox } from '@heroui/react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import HeroSection from '../components/hero-section';
import SectionTitle from '../components/section-title';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    subscribe: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (isSelected: boolean) => {
    setFormData(prev => ({ ...prev, subscribe: isSelected }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      subscribe: false
    });
  };

  return (
    <>
      <HeroSection
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out with questions, schedule a visit, or learn more about EPES."
        imagePath="https://img.heroui.chat/image/education?w=800&h=600&u=school5"
      />

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
              <p className="text-default-600 mb-8">
                Have a question or want to learn more about EPES? Fill out the form below and a member of our team will get back to you as soon as possible.
              </p>
              
              <Card className="border border-default-200 shadow-xs">
                <CardBody>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        label="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        isRequired
                      />
                      <Input
                        label="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        isRequired
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        isRequired
                      />
                      <Input
                        label="Phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <Input
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      isRequired
                    />
                    
                    <Textarea
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      minRows={4}
                      isRequired
                    />
                    
                    <Checkbox
                      isSelected={formData.subscribe}
                      onValueChange={handleCheckboxChange}
                    >
                      Subscribe to our newsletter for updates and events
                    </Checkbox>
                    
                    <Button 
                      type="submit" 
                      color="primary"
                      className="w-full md:w-auto ml-2"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardBody>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-3xl font-semibold mb-6">Contact Information</h2>
              <p className="text-default-600 mb-8">
                You can reach us through the contact form, by phone, or by visiting our campus during office hours.
              </p>
              
              <Card className="border border-default-200 shadow-xs p-8 mb-10">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-md bg-primary-50">
                      <Icon icon="lucide:map-pin" className="text-primary" width={24} />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Address</h3>
                      <p className="text-default-600">123 Education Ave</p>
                      <p className="text-default-600">Learning City, LC 12345</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-md bg-primary-50">
                      <Icon icon="lucide:phone" className="text-primary" width={24} />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Phone</h3>
                      <p className="text-default-600">(123) 456-7890</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-md bg-primary-50">
                      <Icon icon="lucide:mail" className="text-primary" width={24} />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <p className="text-default-600">info@EPES.edu</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-md bg-primary-50">
                      <Icon icon="lucide:clock" className="text-primary" width={24} />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Office Hours</h3>
                      <p className="text-default-600">Monday - Friday: 8:00 AM - 4:30 PM</p>
                      <p className="text-default-600">Saturday: 9:00 AM - 12:00 PM</p>
                      <p className="text-default-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </Card>
              
              <div className="h-64 rounded-lg overflow-hidden border border-default-200">
                {/* This would typically be a Google Maps embed */}
                <div className="w-full h-full bg-content2 flex items-center justify-center">
                  <div className="text-center">
                    <Icon icon="lucide:map" className="text-primary mx-auto mb-2" width={32} />
                    <p className="text-default-600">Interactive Map Would Be Displayed Here</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-content2">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Frequently Asked Questions" 
            subtitle="Find quick answers to common questions."
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "How can I schedule a campus tour?",
                  answer: "You can schedule a campus tour by filling out the contact form above, calling our main office at (123) 456-7890, or emailing info@EPES.edu. Tours are available Monday through Friday during school hours and select Saturday mornings."
                },
                {
                  question: "Where can I find information about tuition and financial aid?",
                  answer: "Detailed information about tuition and financial aid can be found on our Admissions page. For specific questions, please contact our main office."
                },
                {
                  question: "How do I apply for admission?",
                  answer: "The application process is outlined on our Admissions page. You can start by submitting an online application through our admissions portal. For assistance, contact our main office."
                },
                {
                  question: "What extracurricular activities are available?",
                  answer: "EPES offers a wide range of extracurricular activities including sports, arts programs, academic clubs, and community service opportunities. Visit our Student Life page for more information about specific programs."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white p-6 rounded-lg shadow-xs"
                >
                  <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
                  <p className="text-default-600">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">Ready to Join Our Community?</h2>
            <p className="text-default-600 mb-8">
              Take the first step toward an exceptional educational experience. Apply now or schedule a campus tour to learn more.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                color="primary" 
                size="lg"
              >
                Apply Now
              </Button>
              <Button 
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

export default ContactPage;