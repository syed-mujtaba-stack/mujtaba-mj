'use client';
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Button } from './ui/button';
import { Download } from 'lucide-react';
import { skills, languages, experiences, education, certifications } from '@/lib/data';

const ResumeContent = React.forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div ref={ref} className="p-8 bg-background text-foreground font-sans text-sm">
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold text-primary font-headline">SYED MUJTABA ABBAS ZAIDI</h1>
                <p className="text-lg text-muted-foreground">Full-Stack Developer | AI Tools Builder | Creative Technologist</p>
                <div className="flex justify-center gap-4 mt-2 text-xs">
                    <span>Karachi, Pakistan</span>|
                    <span>+92-3460630802</span>|
                    <span>abbasmujtaba125@gmail.com</span>|
                    <a href="https://github.com/syed-mujtaba-stack" className="text-primary hover:underline">GitHub</a>|
                    <a href="https://www.instagram.com/m.j_syed" className="text-primary hover:underline">Instagram</a>
                </div>
            </header>

            <section className="mb-6">
                <h2 className="text-2xl font-bold border-b-2 border-primary pb-1 mb-2 font-headline">Career Objective</h2>
                <p>A self-driven Full-Stack Developer with a strong passion for building intelligent, scalable web apps and AI-powered tools. I love solving real-world problems through clean UI, optimized backend, and smart APIs.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold border-b-2 border-primary pb-1 mb-2 font-headline">Technical Skills</h2>
                 <div className="grid grid-cols-3 gap-4">
                    <div><h3 className="font-bold">Languages</h3><ul><li>JavaScript</li><li>TypeScript</li><li>Python</li><li>HTML</li><li>CSS</li></ul></div>
                    <div><h3 className="font-bold">Frameworks & Libraries</h3><ul><li>React.js</li><li>Next.js</li><li>Tailwind CSS</li><li>Express.js</li></ul></div>
                    <div><h3 className="font-bold">AI & APIs</h3><ul><li>OpenRouter API</li><li>Gemini API</li><li>Langchain</li></ul></div>
                    <div><h3 className="font-bold">Databases</h3><ul><li>MongoDB</li><li>Sanity.io</li><li>MySQL</li></ul></div>
                    <div><h3 className="font-bold">Tools</h3><ul><li>Git</li><li>GitHub</li><li>Firebase</li><li>VS Code</li><li>Postman</li></ul></div>
                </div>
            </section>

             <section className="mb-6">
                <h2 className="text-2xl font-bold border-b-2 border-primary pb-1 mb-2 font-headline">Experience</h2>
                {experiences.map((exp, i) => (
                    <div key={i} className="mb-4">
                        <h3 className="font-bold text-lg">{exp.role}</h3>
                        <p className="font-semibold text-muted-foreground">{exp.company} | {exp.period}</p>
                        <p className="mt-1">{exp.description}</p>
                    </div>
                ))}
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold border-b-2 border-primary pb-1 mb-2 font-headline">Projects</h2>
                 <div className="space-y-4">
                    <div>
                        <h3 className="font-bold">Code Mento AI</h3>
                        <p>AI-based programming mentor providing code help, debugging tips, and developer guidance.</p>
                        <a href="https://update-code-mentor-ai-2i5m.vercel.app/" className="text-primary hover:underline text-xs">view project</a>
                    </div>
                     <div>
                        <h3 className="font-bold">FastCV</h3>
                        <p>A sleek resume builder that helps users instantly generate and download resumes.</p>
                        <a href="https://fastcv-beta.vercel.app" className="text-primary hover:underline text-xs">view project</a>
                    </div>
                </div>
            </section>


            <section className="mb-6">
                <h2 className="text-2xl font-bold border-b-2 border-primary pb-1 mb-2 font-headline">Education</h2>
                {education.map((edu, i) => (
                    <div key={i}>
                        <h3 className="font-bold text-lg">{edu.degree}</h3>
                        <p className="font-semibold text-muted-foreground">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground">{edu.period}</p>
                    </div>
                ))}
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold border-b-2 border-primary pb-1 mb-2 font-headline">Certifications</h2>
                <ul className="list-disc list-inside">
                    {certifications.map((cert, i) => <li key={i}>{cert.name} – {cert.issuer}</li>)}
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-bold border-b-2 border-primary pb-1 mb-2 font-headline">Languages</h2>
                 <ul className="list-disc list-inside">
                    {languages.map((lang, i) => <li key={i}>{lang.name}</li>)}
                </ul>
            </section>
        </div>
    );
});
ResumeContent.displayName = 'ResumeContent';

export default function Resume() {
    const componentRef = useRef<HTMLDivElement>(null);
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'Syed-Mujtaba-Abbas-Zaidi-Resume',
    });

    return (
        <section id="resume-builder" className="w-full">
            <div className="space-y-4 text-center">
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                    Resume Builder
                </h2>
                <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed">
                    Preview your resume below. You can download it as a PDF.
                </p>
                <div style={{ display: 'inline-block' }}>
                    <Button onClick={handlePrint}>
                        <Download className="mr-2" />
                        Download PDF
                    </Button>
                </div>
            </div>

            <div className="mt-12 border rounded-lg shadow-lg max-w-4xl mx-auto">
                <ResumeContent ref={componentRef} />
            </div>
        </section>
    );
}
