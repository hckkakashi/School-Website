import React from 'react';
import { Card, CardBody } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <Card className="border border-default-200 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <CardBody className="gap-4">
          <div className="p-3 rounded-md bg-gradient-to-br from-primary-500 to-primary-600 w-fit">
            <Icon icon={icon} className="text-white" width={24} height={24} />
          </div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-default-600 text-sm">{description}</p>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export default FeatureCard;