import React from 'react';
import { Tabs, Tab, Card, CardBody, Button } from '@heroui/react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import HeroSection from '../components/hero-section';
import SectionTitle from '../components/section-title';

const StudentLifePage: React.FC = () => {
  const clubs = [
    {
      name: "Robotics Club",
      description: "Design, build, and program robots for competitions and exhibitions.",
      icon: "lucide:cpu"
    },
    {
      name: "Environmental Club",
      description: "Work on sustainability initiatives and environmental awareness projects.",
      icon: "lucide:leaf"
    },
    {
      name: "Debate Team",
      description: "Develop public speaking skills and compete in regional and national tournaments.",
      icon: "lucide:message-square"
    },
    {
      name: "Art Collective",
      description: "Express creativity through various visual arts mediums and collaborative projects.",
      icon: "lucide:palette"
    },
    {
      name: "Model United Nations",
      description: "Simulate UN committees and develop diplomatic and research skills.",
      icon: "lucide:globe"
    },
    {
      name: "Chess Club",
      description: "Learn strategy and compete in chess tournaments at various levels.",
      icon: "lucide:chess-knight"
    }
  ];

  const sports = [
    {
      name: "Basketball",
      seasons: ["Winter"],
      levels: ["Varsity", "Junior Varsity", "Middle School"],
      icon: "lucide:circle"
    },
    {
      name: "Soccer",
      seasons: ["Fall", "Spring"],
      levels: ["Varsity", "Junior Varsity", "Middle School"],
      icon: "lucide:circle"
    },
    {
      name: "Track & Field",
      seasons: ["Spring"],
      levels: ["Varsity", "Middle School"],
      icon: "lucide:circle"
    },
    {
      name: "Swimming",
      seasons: ["Winter"],
      levels: ["Varsity", "Middle School"],
      icon: "lucide:circle"
    },
    {
      name: "Tennis",
      seasons: ["Fall"],
      levels: ["Varsity", "Junior Varsity"],
      icon: "lucide:circle"
    },
    {
      name: "Cross Country",
      seasons: ["Fall"],
      levels: ["Varsity", "Middle School"],
      icon: "lucide:circle"
    }
  ];

  const events = [
    {
      name: "Fall Festival",
      description: "Annual community celebration with games, food, and activities for all ages.",
      date: "October",
      image: "https://img.heroui.chat/image/education?w=400&h=300&u=event1"
    },
    {
      name: "Winter Concert",
      description: "Showcase of musical talent featuring our band, orchestra, and choir.",
      date: "December",
      image: "https://img.heroui.chat/image/education?w=400&h=300&u=event2"
    },
    {
      name: "Science Fair",
      description: "Exhibition of student research projects and scientific investigations.",
      date: "February",
      image: "https://img.heroui.chat/image/education?w=400&h=300&u=event3"
    },
    {
      name: "International Day",
      description: "Celebration of cultural diversity with food, performances, and exhibits.",
      date: "April",
      image: "https://img.heroui.chat/image/education?w=400&h=300&u=event4"
    }
  ];

  return (
    <>
      <HeroSection
        title="Student Life"
        subtitle="Discover the vibrant community and diverse opportunities that make the EPES experience special beyond academics."
        imagePath="https://img.heroui.chat/image/education?w=800&h=600&u=school4"
      />

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Life at EPES" 
            subtitle="At EPES, education extends beyond the classroom. Our students develop as whole individuals through a rich array of extracurricular activities, community service, and special events."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "lucide:users",
                title: "Community",
                description: "Our close-knit community fosters meaningful relationships between students, faculty, and families."
              },
              {
                icon: "lucide:heart",
                title: "Character",
                description: "We emphasize values such as integrity, respect, responsibility, and compassion in all aspects of school life."
              },
              {
                icon: "lucide:star",
                title: "Excellence",
                description: "Students are encouraged to pursue their passions and strive for excellence in their chosen activities."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-center"
              >
                <div className="mx-auto p-3 rounded-full bg-primary-50 w-fit mb-4">
                  <Icon icon={item.icon} className="text-primary" width={24} height={24} />
                </div>
                <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                <p className="text-default-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clubs & Activities */}
      <section className="py-16 bg-content2">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Clubs & Activities" 
            subtitle="Students can explore their interests and develop new skills through our diverse range of clubs and activities."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clubs.map((club, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <Card className="border border-default-200 shadow-xs">
                  <CardBody className="gap-4">
                    <div className="p-3 rounded-full bg-primary-50 w-fit">
                      <Icon icon={club.icon} className="text-primary" width={24} height={24} />
                    </div>
                    <h3 className="text-lg font-medium">{club.name}</h3>
                    <p className="text-default-600 text-sm">{club.description}</p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button 
              color="primary" 
              variant="flat"
              endContent={<Icon icon="lucide:arrow-right" width={16} />}
            >
              View All Clubs & Activities
            </Button>
          </div>
        </div>
      </section>

      {/* Athletics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Athletics" 
            subtitle="Our athletics program promotes teamwork, sportsmanship, and physical fitness while developing competitive skills."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sports.map((sport, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-primary-50">
                      <Icon icon={sport.icon} className="text-primary" width={16} />
                    </div>
                    <div>
                      <h4 className="font-medium">{sport.name}</h4>
                      <p className="text-default-500 text-xs">
                        {sport.seasons.join(", ")} | {sport.levels.join(", ")}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div>
                <Button 
                  color="primary" 
                  variant="flat"
                  endContent={<Icon icon="lucide:arrow-right" width={16} />}
                >
                  View Athletics Calendar
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-[400px] rounded-xl overflow-hidden"
            >
              <img 
                src="https://img.heroui.chat/image/sports?w=600&h=400&u=basketball" 
                alt="Athletics" 
                className="w-full h-full object-cover rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Arts */}
      <section className="py-16 bg-content2">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Arts" 
            subtitle="Our comprehensive arts program encourages creative expression and artistic development."
          />
          
          <Tabs aria-label="Arts Programs" color="primary" variant="underlined" className="max-w-4xl mx-auto">
            <Tab key="visual" title="Visual Arts">
              <Card className="border border-default-200 shadow-xs">
                <CardBody>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-medium mb-3">Visual Arts Program</h3>
                      <p className="text-default-600 text-sm mb-4">
                        Our visual arts program provides students with opportunities to explore various mediums and techniques while developing their creative vision and technical skills.
                      </p>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:check" className="text-primary" width={16} />
                          <span className="text-default-600 text-sm">Drawing and painting</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:check" className="text-primary" width={16} />
                          <span className="text-default-600 text-sm">Sculpture and ceramics</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:check" className="text-primary" width={16} />
                          <span className="text-default-600 text-sm">Photography and digital arts</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:check" className="text-primary" width={16} />
                          <span className="text-default-600 text-sm">Annual student art exhibitions</span>
                        </li>
                      </ul>
                      <Button 
                        color="primary" 
                        variant="flat"
                        size="sm"
                        endContent={<Icon icon="lucide:arrow-right" width={16} />}
                      >
                        View Student Gallery
                      </Button>
                    </div>
                    <div className="h-64 rounded-lg overflow-hidden">
                      <img 
                        src="https://img.heroui.chat/image/education?w=600&h=400&u=visualarts" 
                        alt="Visual Arts" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Tab>
            <Tab key="music" title="Music">
              <Card className="border border-default-200 shadow-xs">
                <CardBody>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-medium mb-3">Music Program</h3>
                      <p className="text-default-600 text-sm mb-4">
                        Our music program nurtures students' musical talents through instruction, practice, and performance opportunities in various ensembles and styles.
                      </p>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:check" className="text-primary" width={16} />
                          <span className="text-default-600 text-sm">Concert band and jazz ensemble</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:check" className="text-primary" width={16} />
                          <span className="text-default-600 text-sm">Orchestra and string ensemble</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:check" className="text-primary" width={16} />
                          <span className="text-default-600 text-sm">Choir and vocal groups</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:check" className="text-primary" width={16} />
                          <span className="text-default-600 text-sm">Music theory and composition</span>
                        </li>
                      </ul>
                      <Button 
                        color="primary" 
                        variant="flat"
                        size="sm"
                        endContent={<Icon icon="lucide:arrow-right" width={16} />}
                      >
                        View Concert Schedule
                      </Button>
                    </div>
                    <div className="h-64 rounded-lg overflow-hidden">
                      <img 
                        src="https://img.heroui.chat/image/education?w=600&h=400&u=music" 
                        alt="Music Program" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Tab>
            <Tab key="theater" title="Theater">
              <Card className="border border-default-200 shadow-xs">
                <CardBody>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-medium mb-3">Theater Program</h3>
                      <p className="text-default-600 text-sm mb-4">
                        Our theater program develops students' performance skills, technical theater knowledge, and appreciation for dramatic arts through productions and classes.
                      </p>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:check" className="text-primary" width={16} />
                          <span className="text-default-600 text-sm">Fall and spring productions</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:check" className="text-primary" width={16} />
                          <span className="text-default-600 text-sm">Acting and directing workshops</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:check" className="text-primary" width={16} />
                          <span className="text-default-600 text-sm">Technical theater training</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:check" className="text-primary" width={16} />
                          <span className="text-default-600 text-sm">One-act play festival</span>
                        </li>
                      </ul>
                      <Button 
                        color="primary" 
                        variant="flat"
                        size="sm"
                        endContent={<Icon icon="lucide:arrow-right" width={16} />}
                      >
                        View Production Calendar
                      </Button>
                    </div>
                    <div className="h-64 rounded-lg overflow-hidden">
                      <img 
                        src="https://img.heroui.chat/image/education?w=600&h=400&u=theater" 
                        alt="Theater Program" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Tab>
            <Tab key="dance" title="Dance">
              <Card className="border border-default-200 shadow-xs">
                <CardBody>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-medium mb-3">Dance Program</h3>
                      <p className="text-default-600 text-sm mb-4">
                        Our dance program offers training in various styles and techniques, providing opportunities for creative expression and performance.
                      </p>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:check" className="text-primary" width={16} />
                          <span className="text-default-600 text-sm">Ballet, jazz, and contemporary</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:check" className="text-primary" width={16} />
                          <span className="text-default-600 text-sm">Hip-hop and cultural dance forms</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:check" className="text-primary" width={16} />
                          <span className="text-default-600 text-sm">Choreography workshops</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:check" className="text-primary" width={16} />
                          <span className="text-default-600 text-sm">Winter and spring showcases</span>
                        </li>
                      </ul>
                      <Button 
                        color="primary" 
                        variant="flat"
                        size="sm"
                        endContent={<Icon icon="lucide:arrow-right" width={16} />}
                      >
                        View Performance Schedule
                      </Button>
                    </div>
                    <div className="h-64 rounded-lg overflow-hidden">
                      <img 
                        src="https://img.heroui.chat/image/education?w=600&h=400&u=dance" 
                        alt="Dance Program" 
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

      {/* Community Service */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Community Service" 
            subtitle="We believe in the importance of giving back and developing a sense of social responsibility."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-[400px] rounded-xl overflow-hidden"
            >
              <img 
                src="https://img.heroui.chat/image/education?w=600&h=400&u=service" 
                alt="Community Service" 
                className="w-full h-full object-cover rounded-xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="text-xl font-medium mb-4">Making a Difference</h3>
              <p className="text-default-600 mb-6">
                Community service is an integral part of the EPES experience. Students engage in meaningful service projects that address real community needs while developing empathy, leadership, and civic responsibility.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-primary-50">
                    <Icon icon="lucide:heart" className="text-primary" width={16} />
                  </div>
                  <div>
                    <h4 className="font-medium">Service Learning</h4>
                    <p className="text-default-600 text-sm">Curriculum-integrated projects that combine academic learning with community service.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-primary-50">
                    <Icon icon="lucide:calendar" className="text-primary" width={16} />
                  </div>
                  <div>
                    <h4 className="font-medium">Annual Service Days</h4>
                    <p className="text-default-600 text-sm">School-wide events where students, faculty, and families volunteer together.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-primary-50">
                    <Icon icon="lucide:globe" className="text-primary" width={16} />
                  </div>
                  <div>
                    <h4 className="font-medium">Global Initiatives</h4>
                    <p className="text-default-600 text-sm">Projects that connect our students with communities around the world.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-primary-50">
                    <Icon icon="lucide:users" className="text-primary" width={16} />
                  </div>
                  <div>
                    <h4 className="font-medium">Student-Led Projects</h4>
                    <p className="text-default-600 text-sm">Opportunities for students to identify needs and develop their own service initiatives.</p>
                  </div>
                </div>
              </div>
              
              <Button 
                color="primary"
                endContent={<Icon icon="lucide:arrow-right" width={16} />}
              >
                Learn More About Our Service Program
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Events & Traditions */}
      <section className="py-16 bg-content2">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Events & Traditions" 
            subtitle="Special events and cherished traditions create lasting memories and strengthen our community bonds."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <Card className="border border-default-200 shadow-xs">
                  <CardBody className="p-0">
                    <img 
                      src={event.image} 
                      alt={event.name} 
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <div className="flex items-center gap-2 text-default-500 text-xs mb-2">
                        <Icon icon="lucide:calendar" width={14} />
                        <span>{event.date}</span>
                      </div>
                      <h3 className="text-lg font-medium mb-2">{event.name}</h3>
                      <p className="text-default-600 text-sm">{event.description}</p>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button 
              color="primary" 
              variant="flat"
              endContent={<Icon icon="lucide:arrow-right" width={16} />}
            >
              View School Calendar
            </Button>
          </div>
        </div>
      </section>

      {/* Student Support */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Student Support" 
            subtitle="We are committed to supporting the academic, social, and emotional well-being of every student."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "lucide:book-open",
                title: "Academic Support",
                description: "Our learning specialists and tutoring programs provide additional help for students who need academic assistance or enrichment.",
                features: ["Learning center resources", "Peer tutoring program", "Study skills workshops", "Academic coaching"]
              },
              {
                icon: "lucide:heart-pulse",
                title: "Health & Wellness",
                description: "Our health services and counseling team support students' physical and mental well-being throughout their academic journey.",
                features: ["School counselors", "Health education", "Wellness programs", "Stress management resources"]
              },
              {
                icon: "lucide:compass",
                title: "College Counseling",
                description: "Our college counseling program guides students through the college selection and application process with personalized support.",
                features: ["College planning", "Application guidance", "Financial aid information", "College visits and fairs"]
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <Card className="border border-default-200 shadow-xs h-full">
                  <CardBody className="gap-4">
                    <div className="p-3 rounded-full bg-primary-50 w-fit">
                      <Icon icon={item.icon} className="text-primary" width={24} height={24} />
                    </div>
                    <h3 className="text-lg font-medium">{item.title}</h3>
                    <p className="text-default-600 text-sm">{item.description}</p>
                    <ul className="space-y-2">
                      {item.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Icon icon="lucide:check" className="text-primary" width={16} />
                          <span className="text-default-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentLifePage;