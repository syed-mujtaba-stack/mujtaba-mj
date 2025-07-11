import Header from '@/components/header';
import About from '@/components/about';
import Projects from '@/components/projects';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import Experience from '@/components/experience';
import Education from '@/components/education';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 md:px-6 py-8 md:py-12 space-y-20 md:space-y-32">
          <About />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
