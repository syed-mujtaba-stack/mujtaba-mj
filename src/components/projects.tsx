'use client';

import { useState } from 'react';
import { projects, projectCategories } from '@/lib/data';
import ProjectCard from './project-card';
import { Button } from './ui/button';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="w-full">
      <div className="space-y-4 text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
          My Projects
        </h2>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed">
          Here are some of the projects I&apos;ve worked on. Feel free to explore
          them.
        </p>
      </div>

      <div className="flex justify-center flex-wrap gap-2 my-8">
        {projectCategories.map((category) => (
          <Button
            key={category}
            variant={activeFilter === category ? 'default' : 'secondary'}
            onClick={() => setActiveFilter(category)}
            className="rounded-full"
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
