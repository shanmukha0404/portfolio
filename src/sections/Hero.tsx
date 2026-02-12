import { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail, ChevronRight } from 'lucide-react';
import { TypewriterText } from '@/components/TypewriterText';
import { TiltCard } from '@/components/TiltCard';

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [titleComplete, setTitleComplete] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Greeting Badge */}
            <div 
              className={`transition-all duration-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Hello, I'm
              </span>
            </div>

            {/* Name with Typewriter Effect */}
            <div 
              className={`transition-all duration-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight mb-2">
                <span className="text-gradient">
                  <TypewriterText 
                    text="Shanmukha" 
                    speed={80}
                    onComplete={() => setTitleComplete(true)}
                  />
                </span>
              </h1>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight mb-4">
                <span className="text-foreground">
                  {titleComplete && (
                    <TypewriterText text="Kumar" speed={80} delay={300} />
                  )}
                </span>
              </h1>
            </div>

            {/* Title */}
            <div 
              className={`transition-all duration-700 ${
                titleComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <p className="text-xl sm:text-2xl text-muted-foreground font-medium mb-6 flex items-center gap-2 justify-center lg:justify-start">
                <span className="w-8 h-[2px] bg-gradient-to-r from-primary to-secondary" />
                Angular Full Stack Developer
              </p>
            </div>

            {/* Description */}
            <div 
              className={`transition-all duration-700 ${
                titleComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                Full Stack Developer with{' '}
                <span className="relative inline-block">
                  <span className="text-primary font-semibold">5+ years</span>
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary" />
                </span>{' '}
                of experience building scalable and user-friendly web applications using Angular, Node.js, Express, and PostgreSQL.
              </p>
            </div>

            {/* CTA Buttons */}
            <div 
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 transition-all duration-700 ${
                titleComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              <Button
                size="lg"
                className="rounded-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25 group relative overflow-hidden"
                onClick={() => scrollToSection('#experience')}
              >
                <span className="relative z-10 flex items-center">
                  View My Work
                  <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-2 hover:bg-muted/50 transition-all hover:scale-105 group"
                onClick={() => scrollToSection('#contact')}
              >
                Contact Me
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Stats */}
            <div 
              className={`flex flex-wrap gap-6 justify-center lg:justify-start text-sm transition-all duration-700 ${
                titleComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '800ms' }}
            >
              {[
                { value: '5+', label: 'Years Experience', color: 'bg-primary' },
                { value: '10+', label: 'Projects', color: 'bg-secondary' },
                { value: 'Full Stack', label: 'Expert', color: 'bg-primary' },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <div className={`w-10 h-10 rounded-lg ${stat.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <div className={`w-2 h-2 rounded-full ${stat.color}`} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div 
              className={`flex gap-3 justify-center lg:justify-start mt-8 transition-all duration-700 ${
                titleComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '1000ms' }}
            >
              {[
                { icon: Github, href: 'https://github.com', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:shanmukha.shanu.hm@gmail.com', label: 'Email' },
              ].map((social, i) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-muted/50 border border-border/50 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all hover:scale-110 hover:shadow-lg hover:shadow-primary/25 group"
                  aria-label={social.label}
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <social.icon className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Hero Image with Tilt Effect */}
          <div 
            className={`relative order-1 lg:order-2 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <TiltCard className="relative" tiltAmount={8}>
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 rounded-3xl blur-2xl opacity-60 animate-pulse-slow" />
              
              {/* Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="/hero-abstract.jpg"
                  alt="Abstract 3D geometric shapes"
                  className="w-full h-auto object-cover"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-gradient-to-r from-primary/50 to-secondary/50 opacity-50" />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 px-4 py-3 rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-lg shadow-primary/30 animate-float backdrop-blur-sm">
                <span className="text-2xl font-bold">5+</span>
                <span className="text-xs block opacity-80">Years</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 px-4 py-3 rounded-xl glass-card shadow-lg animate-float-delayed border border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-medium">Available for work</span>
                </div>
              </div>

              {/* Tech stack badges */}
              <div className="absolute bottom-6 right-6 flex flex-col gap-2">
                {['Angular', 'Node.js', 'React'].map((tech, i) => (
                  <span 
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-background/80 backdrop-blur-sm text-xs font-medium border border-border/50 animate-slide-in-right"
                    style={{ animationDelay: `${i * 200 + 1000}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </TiltCard>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 transition-all duration-700 ${
          titleComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ transitionDelay: '1200ms' }}
      >
        <span className="text-xs text-muted-foreground">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-muted-foreground/50 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
