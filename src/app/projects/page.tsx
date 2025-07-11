import Projects from '@/components/projects';
import { motion } from 'framer-motion';

export default function ProjectsPage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 md:px-6 py-8 md:py-12"
    >
      <Projects />
    </motion.div>
  );
}
