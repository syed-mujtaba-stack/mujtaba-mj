'use client';
import Education from '@/components/education';
import { motion } from 'framer-motion';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Education',
  description: 'View the educational background and qualifications of Syed Mujtaba Abbas Zaidi.',
};

export default function EducationPage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 md:px-6 py-8 md:py-12"
    >
      <Education />
    </motion.div>
  );
}
