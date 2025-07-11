import { experiences } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Experience() {
  return (
    <section id="experience" className="w-full">
      <div className="space-y-4 text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
          Experience
        </h2>
      </div>
      <div className="relative mt-12 grid gap-8 before:absolute before:inset-0 before:left-6 before:w-px before:bg-border md:before:left-1/2 md:before:-translate-x-1/2">
        {experiences.map((item, index) => (
          <div key={index} className="relative md:grid md:grid-cols-2 md:gap-8">
            <div className={`flex items-center gap-4 ${index % 2 === 0 ? 'md:col-start-2 md:flex-row-reverse' : ''}`}>
              <div className="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <item.icon />
              </div>
              <div className={`w-full rounded-lg bg-card text-card-foreground shadow-sm ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                <CardHeader className="p-4">
                  <p className="font-semibold">{item.role}</p>
                  <p className="text-sm text-muted-foreground">{item.company} | {item.period}</p>
                </CardHeader>
              </div>
            </div>
            <div className={`p-4 ${index % 2 === 0 ? 'md:col-start-1 md:row-start-1' : 'md:col-start-2'}`}>
                <p className="text-muted-foreground">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
