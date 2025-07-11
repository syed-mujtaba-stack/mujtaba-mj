'use client';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { projects, skills } from '@/lib/data';
import ProjectCard from '@/components/project-card';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 md:px-6 py-8 md:py-12"
    >
      <section className="text-center space-y-6 py-16 md:py-24">
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
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </motion.div>
      </section>

      <section id="featured-projects" className="py-16 md:py-24">
        <div className="space-y-4 text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Featured Projects
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed">
            A glimpse into what I can do.
            </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
         <div className="text-center mt-12">
            <Button asChild>
                <Link href="/projects">View All Projects <ArrowRight className="ml-2" /></Link>
            </Button>
        </div>
      </section>

      <section id="skills-overview" className="py-16 md:py-24">
         <div className="space-y-4 text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            My Skillset
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed">
            Technologies I'm proficient in.
            </p>
        </div>
         <Card className="w-full max-w-4xl mx-auto">
            <CardContent className="p-6 md:p-10">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 text-center">
                    {skills.map((skill) => (
                        <div key={skill.name} className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-secondary/30 transition-transform hover:scale-105">
                            <skill.icon className="w-10 h-10 text-accent" />
                            <span className="text-sm font-medium">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
      </section>
      
      <section id="cta" className="py-16 md:py-24 text-center bg-secondary/50 rounded-lg">
         <div className="space-y-4 mb-8">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Let's Build Something Amazing
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed">
            Have a project in mind or want to collaborate? I'd love to hear from you.
            </p>
        </div>
        <Button asChild size="lg">
            <Link href="/contact">
            Get in Touch <ArrowRight className="ml-2" />
            </Link>
        </Button>
      </section>
    </motion.div>
  );
}
