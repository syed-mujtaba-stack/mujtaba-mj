'use client';
import Contact from '@/components/contact';
import { motion } from 'framer-motion';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Syed Mujtaba Abbas Zaidi for project collaborations, inquiries, or just to say hello.',
};

export default function ContactPage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 md:px-6 py-8 md:py-12"
    >
      <Contact />
    </motion.div>
  );
}
