import { skills, languages } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="w-full py-12 md:py-16">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-6">
          <div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">About Me</h2>
            <p className="mt-4 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A self-driven Full-Stack Developer with a strong passion for building intelligent, scalable web apps and AI-powered tools. I love solving real-world problems through clean UI, optimized backend, and smart APIs.
            </p>
          </div>
          <div className="space-y-2">
             <h3 className="font-headline text-xl font-semibold text-primary">Contact Details</h3>
              <ul className="space-y-1 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span>Karachi, Pakistan</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-accent" />
                  <span>+92-3460630802</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-accent" />
                  <span>abbasmujtaba125@gmail.com</span>
                </li>
              </ul>
          </div>
           <div className="space-y-4">
            <h3 className="font-headline text-xl font-semibold text-primary">Languages</h3>
             <div className="flex flex-wrap gap-4">
              {languages.map((lang) => (
                <div key={lang.name} className="flex items-center gap-2">
                  <lang.icon className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium">{lang.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center items-start">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">My Skills</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {skills.map((skill) => (
                            <div key={skill.name} className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-secondary/50 transition-transform hover:scale-105">
                                <skill.icon className="w-8 h-8 text-accent" />
                                <span className="text-sm font-medium text-center">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
