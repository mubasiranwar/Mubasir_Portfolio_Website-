import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Research from '@/components/Research';
import Certificates from '@/components/Certificates';
import Services from '@/components/Services';
import WorkProcess from '@/components/WorkProcess';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Research />
        <Certificates />
        <Services />
        <WorkProcess />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
