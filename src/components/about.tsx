import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { skills } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function About() {
  return (
    <section id="about" className="w-full py-12 md:py-16">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">About Me</h2>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I&apos;m a passionate and creative full-stack developer with a knack for building beautiful, functional, and user-centric web applications. With a strong foundation in modern web technologies, I love turning complex problems into simple, elegant solutions.
          </p>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            When I&apos;m not coding, you can find me exploring the latest tech trends, contributing to open-source projects, or enjoying a good cup of coffee.
          </p>
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
