import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6 py-6 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} SYED MUJTABA ABBAS ZAIDI. All rights reserved.
        </p>
        <div className="flex gap-1 mt-4 sm:mt-0">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/syed-mujtaba-stack" target="_blank" rel="noopener noreferrer" aria-label="Github">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.instagram.com/m.j_syed" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
