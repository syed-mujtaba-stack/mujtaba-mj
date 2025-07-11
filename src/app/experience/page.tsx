'use client';
import Experience from '@/components/experience';
import { motion } from 'framer-motion';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Discover the professional experience of Syed Mujtaba Abbas Zaidi, including his roles, responsibilities, and achievements.',
};

export default function ExperiencePage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 md:px-6 py-8 md:py-12"
    >
      <Experience />
    </motion.div>
  );
}
