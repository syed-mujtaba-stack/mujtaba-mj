'use client';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 md:px-6 py-8 md:py-12 flex items-center justify-center min-h-[calc(100vh-10rem)]"
    >
      <div className="text-center space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-primary"
          >
            Syed Mujtaba Abbas Zaidi
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-[700px] mx-auto text-muted-foreground md:text-xl"
          >
            Full-Stack Developer | AI Tools Builder | Creative Technologist
          </motion.p>
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
              <Button asChild size="lg">
                  <Link href="/projects">
                    View My Work <ArrowRight className="ml-2" />
                  </Link>
              </Button>
               <Button asChild variant="secondary" size="lg">
                  <Link href="/contact">
                    Get in Touch
                  </Link>
              </Button>
          </motion.div>
      </div>
    </motion.div>
  );
}
