'use client';
import Certifications from '@/components/certifications';
import { motion } from 'framer-motion';

export default function CertificationsPage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 md:px-6 py-8 md:py-12"
    >
      <Certifications />
    </motion.div>
  );
}
