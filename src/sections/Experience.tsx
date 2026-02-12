import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { 
  ChevronDown, 
  ExternalLink, 
  Calendar, 
  Building2,
  Cloud,
  Box,
  LineChart,
  Bot
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Project {
  name: string;
  tech: string[];
  description: string[];
  icon: React.ElementType;
  link?: string;
}

const projects: Project[] = [
  {
    name: 'TrustyX – NFT Web Application',
    tech: ['Angular', 'Node.js', 'PostgreSQL', 'Docker', 'AWS EC2', 'Tatum Blockchain APIs'],
    description: [
      'Built a scalable NFT marketplace bridging Web2 and Web3 functionalities',
      'Developed backend services with Express and Knex.js for improved performance',
      'Containerized using Docker and deployed on AWS EC2 with nginx',
      'Configured custom domain with SSL/TLS certificates',
      'Integrated Tatum blockchain APIs for Web3 interactions',
      'Mentored junior developers on best practices',
    ],
    icon: Box,
  },
  {
    name: 'InterviewIA – SaaS Web Application',
    tech: ['Angular', 'Node.js', 'Express', 'Docker', 'AWS'],
    description: [
      'Led front-end development with responsive, user-centric interfaces',
      'Improved stability through code refactoring',
      'Deployed with Docker on AWS EC2',
      'Integrated third-party APIs for rapid feature delivery',
    ],
    icon: Cloud,
  },
  {
    name: 'KAPSARC – Data Visualization Platform',
    tech: ['Angular', 'amCharts', 'Python', 'PostgreSQL', 'Supabase', 'AWS'],
    description: [
      'Designed interactive simulators with amCharts',
      'Implemented PDF export with Oracle storage via Python',
      'Tools: Energy Balance, PV Calculator, CCE Index, NetZeroGam, Gas Stations',
      'Secure auth with Supabase',
      'Deployed on AWS with Docker',
    ],
    icon: LineChart,
  },
  {
    name: 'Agent LinkedIn',
    tech: ['Angular', 'Node.js', 'n8n', 'Supabase', 'Python'],
    description: [
      'AI platform for business interactions automation',
      'n8n workflow automation, reducing manual ops by 50%',
      'Supabase for data management',
      'Python scripts for backend automation',
    ],
    icon: Bot,
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const Icon = project.icon;

  return (
    <div
      ref={ref}
      className={`rounded-2xl glass-card overflow-hidden transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Header - Always visible */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-6 flex items-start gap-4 text-left hover:bg-muted/50 transition-colors"
      >
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white shadow-lg flex-shrink-0">
          <Icon className="h-6 w-6" />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-lg font-semibold truncate">{project.name}</h3>
            <ChevronDown 
              className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                isExpanded ? 'rotate-180' : ''
              }`} 
            />
          </div>
          
          <div className="flex flex-wrap gap-2 mt-3">
            {project.tech.slice(0, 4).map((tech, i) => (
              <Badge key={i} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
            {project.tech.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{project.tech.length - 4}
              </Badge>
            )}
          </div>
        </div>
      </button>

      {/* Expandable Content */}
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 pt-2 border-t border-border">
          {/* Full Tech Stack */}
          <div className="mb-4">
            <h4 className="text-sm font-medium text-muted-foreground mb-2">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <Badge key={i} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Description Points */}
          <ul className="space-y-2">
            {project.description.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {/* Action Button */}
          {project.link && (
            <div className="mt-4">
              <Button variant="outline" size="sm" className="rounded-full group" asChild>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function Experience() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: companyRef, isVisible: companyVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="experience" className="py-20 md:py-28 lg:py-32 relative">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Career
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the projects I've contributed to
          </p>
        </div>

        {/* Company Info */}
        <div
          ref={companyRef}
          className={`mb-12 transition-all duration-700 ${
            companyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="glass-card rounded-2xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                  <Building2 className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Ajapro AI Technologies Pvt. Ltd.</h3>
                  <p className="text-muted-foreground">Angular Full Stack Developer</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground md:text-right">
                <Calendar className="h-4 w-4" />
                <span>Feb 2021 – Present</span>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
