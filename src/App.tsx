import { useEffect } from 'react';
import { ThemeProvider } from '@/hooks/useTheme';
import { Navbar } from '@/sections/Navbar';
import { Hero } from '@/sections/Hero';
import { Skills } from '@/sections/Skills';
import { Experience } from '@/sections/Experience';
import { Education } from '@/sections/Education';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';
import { GradientMesh } from '@/components/GradientMesh';
import { GlowingOrbs } from '@/components/GlowingOrbs';
import { FloatingShapes } from '@/components/FloatingShapes';
import { MouseSpotlight } from '@/components/MouseSpotlight';
import './App.css';

function App() {
  // Update scroll progress bar
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      
      const progressBar = document.getElementById('scroll-progress');
      if (progressBar) {
        progressBar.style.width = `${progress}%`;
      }
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300 relative">
        {/* Animated Background Layers */}
        <GradientMesh />
        <GlowingOrbs />
        <FloatingShapes />
        <MouseSpotlight />
        
        {/* Scroll Progress Bar */}
        <div className="fixed top-0 left-0 right-0 h-1 z-[60] bg-transparent">
          <div
            id="scroll-progress"
            className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-100"
            style={{ width: '0%' }}
          />
        </div>

        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="relative z-10">
          <Hero />
          <section id="about">
            <Skills />
          </section>
          <Experience />
          <Education />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
