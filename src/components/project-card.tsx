import Image from 'next/image';
import type { Project } from '@/lib/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from './ui/button';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
      <CardHeader>
        <div className="relative aspect-video w-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover rounded-t-lg"
            data-ai-hint={project.aiHint}
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardTitle className="font-headline text-xl mb-2">{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex-col items-start gap-4">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
        {project.link && (
          <Button variant="outline" size="sm" asChild>
              <Link href={project.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Project
              </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
