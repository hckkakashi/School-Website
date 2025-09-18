import React from 'react';
import { Tabs, Tab, Card, CardBody } from '@heroui/react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import HeroSection from '../components/hero-section';
import SectionTitle from '../components/section-title';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: "lucide:heart",
      title: "Compassion",
      description: "We foster an environment of care and understanding, where every individual is valued and respected."
    },
    {
      icon: "lucide:lightbulb",
      title: "Innovation",
      description: "We embrace new ideas and approaches to education, preparing students for a rapidly changing world."
    },
    {
      icon: "lucide:award",
      title: "Excellence",
      description: "We strive for the highest standards in all aspects of education and student development."
    },
    {
      icon: "lucide:users",
      title: "Community",
      description: "We build strong relationships among students, faculty, families, and the broader community."
    }
  ];

  const leadershipTeam = [
    {
      name: "Dr. Sarah Johnson",
      title: "Principal",
      bio: "Dr. Johnson has over 20 years of experience in education and is dedicated to creating an environment where students can thrive academically and personally.",
      image: "https://img.heroui.chat/image/avatar?w=300&h=300&u=principal"
    },
    {
      name: "Michael Chen",
      title: "Vice Principal",
      bio: "With a background in curriculum development, Mr. Chen works closely with faculty to ensure our academic programs meet the highest standards.",
      image: "https://img.heroui.chat/image/avatar?w=300&h=300&u=viceprincipal"
    },
    {
      name: "Dr. Emily Rodriguez",
      title: "Dean of Students",
      bio: "Dr. Rodriguez focuses on student well-being and development, creating programs that support the whole student.",
      image: "https://img.heroui.chat/image/avatar?w=300&h=300&u=dean"
    }
  ];

  return (
    <>
      <HeroSection
        title="About Academia"
        subtitle="Learn about our history, mission, values, and the dedicated team that makes Academia an exceptional place to learn and grow."
        imagePath="https://img.heroui.chat/image/education?w=800&h=600&u=school2"
      />

      {/* Mission & History */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
              <p className="text-default-600 mb-4">
                At Academia, our mission is to provide a transformative educational experience that empowers students to become thoughtful, creative, and engaged citizens who contribute positively to society.
              </p>
              <p className="text-default-600 mb-4">
                We believe in nurturing the whole student—intellectually, socially, emotionally, and physically—through a comprehensive curriculum and supportive community.
              </p>
              <p className="text-default-600">
                Our approach combines academic rigor with creativity, critical thinking, and character development, preparing students not just for college, but for lifelong success and fulfillment.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-3xl font-semibold mb-6">Our History</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-16 text-center">
                    <span className="text-primary font-semibold">1985</span>
                  </div>
                  <div>
                    <p className="text-default-600">Academia was founded with a vision to create a learning environment that balances academic excellence with personal growth.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-16 text-center">
                    <span className="text-primary font-semibold">1995</span>
                  </div>
                  <div>
                    <p className="text-default-600">Expanded campus and introduced innovative STEM and arts programs that have become hallmarks of our curriculum.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-16 text-center">
                    <span className="text-primary font-semibold">2010</span>
                  </div>
                  <div>
                    <p className="text-default-600">Established the Center for Innovation, providing students with cutting-edge resources for research and project-based learning.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-16 text-center">
                    <span className="text-primary font-semibold">Today</span>
                  </div>
                  <div>
                    <p className="text-default-600">Academia continues to evolve while staying true to our founding principles, preparing students for the challenges and opportunities of the 21st century.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-content2">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Core Values" 
            subtitle="These principles guide everything we do at Academia, from classroom instruction to community engagement."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white p-6 rounded-lg shadow-xs border border-default-200 text-center"
              >
                <div className="mx-auto p-3 rounded-full bg-primary-50 w-fit mb-4">
                  <Icon icon={value.icon} className="text-primary" width={24} height={24} />
                </div>
                <h3 className="text-lg font-medium mb-2">{value.title}</h3>
                <p className="text-default-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Leadership" 
            subtitle="Meet the dedicated professionals who guide our school community."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadershipTeam.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <Card className="border border-default-200 shadow-xs">
                  <CardBody className="gap-4">
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto">
                      <img 
                        src={leader.image} 
                        alt={leader.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-lg font-medium">{leader.name}</h3>
                      <p className="text-primary text-sm mb-3">{leader.title}</p>
                      <p className="text-default-600 text-sm">{leader.bio}</p>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus & Facilities */}
      <section className="py-16 bg-content2">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Campus & Facilities" 
            subtitle="Our modern campus provides students with the resources they need to excel."
          />
          
          <Tabs aria-label="Campus Facilities" color="primary" variant="underlined" className="max-w-4xl mx-auto">
            <Tab key="classrooms" title="Classrooms">
              <Card className="border border-default-200 shadow-xs">
                <CardBody>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-medium mb-3">Modern Learning Spaces</h3>
                      <p className="text-default-600 text-sm mb-4">
                        Our classrooms are designed to facilitate collaborative learning and engagement. Each space is equipped with the latest technology, flexible seating arrangements, and natural lighting to create an optimal learning environment.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:check" className="text-primary" width={16} />
                          <span className="text-default-600 text-sm">Interactive smartboards</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:check" className="text-primary" width={16} />
                          <span className="text-default-600 text-sm">Flexible seating options</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:check" className="text-primary" width={16} />
                          <span className="text-default-600 text-sm">Integrated technology</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:check" className="text-primary" width={16} />
                          <span className="text-default-600 text-sm">Natural lighting design</span>
                        </li>
                      </ul>
                    </div>
                    <div className="h-64 rounded-lg overflow-hidden">
                      <img 
                        src="https://img.heroui.chat/image/education?w=600&h=400&u=classroom" 
                        alt="Modern Classroom" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Tab>
            <Tab key="library" title="Library">
              <Card className="border border-default-200 shadow-xs">
                <CardBody>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-medium mb-3">State-of-the-Art Library</h3>
                      <p className="text-default-600 text-sm mb-4">
                        Our library serves as the intellectual heart of the campus, offering extensive print and digital resources, comfortable study spaces, and expert librarians to assist with research and information literacy.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:check" className="text-primary" width={16} />
                          <span className="text-default-600 text-sm">Extensive book collection</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:check" className="text-primary" width={16} />
                          <span className="text-default-600 text-sm">Digital research databases</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:check" className="text-primary" width={16} />
                          <span className="text-default-600 text-sm">Quiet study areas</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:check" className="text-primary" width={16} />
                          <span className="text-default-600 text-sm">Collaborative workspaces</span>
                        </li>
                      </ul>
                    </div>
                    <div className="h-64 rounded-lg overflow-hidden">
                      <img 
                        src="https://img.heroui.chat/image/education?w=600&h=400&u=library" 
                        alt="School Library" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Tab>
            <Tab key="athletics" title="Athletics">
              <Card className="border border-default-200 shadow-xs">
                <CardBody>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-medium mb-3">Athletic Facilities</h3>
                      <p className="text-default-600 text-sm mb-4">
                        Our comprehensive athletic facilities support physical education, competitive sports, and recreational activities, promoting health, teamwork, and sportsmanship.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:check" className="text-primary" width={16} />
                          <span className="text-default-600 text-sm">Multi-purpose gymnasium</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:check" className="text-primary" width={16} />
                          <span className="text-default-600 text-sm">Outdoor sports fields</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:check" className="text-primary" width={16} />
                          <span className="text-default-600 text-sm">Swimming pool</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:check" className="text-primary" width={16} />
                          <span className="text-default-600 text-sm">Fitness center</span>
                        </li>
                      </ul>
                    </div>
                    <div className="h-64 rounded-lg overflow-hidden">
                      <img 
                        src="https://img.heroui.chat/image/sports?w=600&h=400&u=gym" 
                        alt="Athletic Facilities" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Tab>
            <Tab key="arts" title="Arts Center">
              <Card className="border border-default-200 shadow-xs">
                <CardBody>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-medium mb-3">Arts Center</h3>
                      <p className="text-default-600 text-sm mb-4">
                        Our dedicated arts center provides spaces for visual arts, music, theater, and dance, allowing students to explore their creativity and develop their artistic talents.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:check" className="text-primary" width={16} />
                          <span className="text-default-600 text-sm">Art studios</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:check" className="text-primary" width={16} />
                          <span className="text-default-600 text-sm">Music rehearsal rooms</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:check" className="text-primary" width={16} />
                          <span className="text-default-600 text-sm">Theater with professional lighting</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:check" className="text-primary" width={16} />
                          <span className="text-default-600 text-sm">Dance studio</span>
                        </li>
                      </ul>
                    </div>
                    <div className="h-64 rounded-lg overflow-hidden">
                      <img 
                        src="https://img.heroui.chat/image/education?w=600&h=400&u=artcenter" 
                        alt="Arts Center" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default AboutPage;