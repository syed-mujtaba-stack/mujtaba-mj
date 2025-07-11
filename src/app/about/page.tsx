'use client';
import About from '@/components/about';
import { motion } from 'framer-motion';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about Syed Mujtaba Abbas Zaidi, his skills, career objectives, and what drives him as a developer.',
};

export default function AboutPage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 md:px-6 py-8 md:py-12"
    >
      <About />
    </motion.div>
  );
}
