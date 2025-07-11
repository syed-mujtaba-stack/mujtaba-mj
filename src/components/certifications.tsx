import { certifications } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Certifications() {
  return (
    <section id="certifications" className="w-full py-12 md:py-16">
      <div className="space-y-4 text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
          Certifications
        </h2>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index) => (
            <Card key={index} className="flex flex-col items-center justify-center text-center p-6 bg-secondary/30">
                <cert.icon className="w-10 h-10 mb-4 text-accent"/>
                <CardHeader>
                    <CardTitle className="text-lg font-semibold">{cert.name}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </CardContent>
            </Card>
        ))}
      </div>
    </section>
  );
}
