'use client';

import { motion } from 'framer-motion';
import {
  slideInFromTop,
  slideInFromLeft,
  slideInFromRight,
} from '@/lib/motion';
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card';
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  CloudIcon,
  CogIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    icon: ComputerDesktopIcon,
    title: 'Web Development',
    description:
      'Custom websites and web applications built with modern technologies like React, Next.js, and Node.js',
    features: [
      'Responsive Design',
      'SEO Optimized',
      'Fast Loading',
      'Cross-browser Compatible',
    ],
    price: 'Starting from $2,500',
  },
  {
    icon: DevicePhoneMobileIcon,
    title: 'Mobile App Development',
    description:
      'Native and cross-platform mobile applications for iOS and Android using Flutter and React Native',
    features: [
      'iOS & Android',
      'Cross-platform',
      'App Store Ready',
      'Push Notifications',
    ],
    price: 'Starting from $5,000',
  },
  {
    icon: CloudIcon,
    title: 'Backend Development',
    description:
      'Scalable server-side solutions, APIs, and database design for your applications',
    features: [
      'RESTful APIs',
      'Database Design',
      'Cloud Deployment',
      'Security',
    ],
    price: 'Starting from $3,000',
  },
  {
    icon: CogIcon,
    title: 'Custom Software',
    description:
      'Tailored software solutions for your specific business needs and workflows',
    features: ['Custom Logic', 'Integration', 'Automation', 'Maintenance'],
    price: 'Starting from $4,000',
  },
  {
    icon: ChartBarIcon,
    title: 'Consulting',
    description:
      'Technical consulting and code reviews to help optimize your existing projects',
    features: ['Code Review', 'Architecture', 'Performance', 'Best Practices'],
    price: '$150/hour',
  },
];

export const Services = () => {
  return (
    <section
      id="services"
      className="flex flex-col items-center justify-center py-20 px-10"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col items-center justify-center w-full max-w-7xl"
      >
        {/* Header */}
        <motion.div
          variants={slideInFromTop}
          className="flex flex-col items-center text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
            My Services
          </h2>
          <p className="text-[18px] font-medium text-gray-300 max-w-2xl tracking-wide">
            I provide comprehensive development services to bring your ideas to
            life. From concept to deployment, I&apos;m here to help you succeed.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={
                index % 2 === 0 ? slideInFromLeft(0.5) : slideInFromRight(0.5)
              }
            >
              <CardContainer className="w-full h-full">
                <CardBody>
                  <CardItem translateZ={50} className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {service.title}
                    </h3>
                  </CardItem>

                  <CardItem
                    translateZ={60}
                    as="p"
                    className="text-gray-400 mb-4 text-sm leading-relaxed"
                  >
                    {service.description}
                  </CardItem>

                  <CardItem translateZ={40} className="space-y-2 mb-6">
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm text-gray-300"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardItem>

                  <CardItem
                    translateZ={80}
                    className="flex items-center justify-end"
                  >
                    <motion.a
                      href="#contact"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300"
                    >
                      Get Quote
                    </motion.a>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
