import { useScrollReveal } from '@/hooks/useScrollReveal';
import { TiltCard } from '@/components/TiltCard';
import { 
  Code2, 
  Server, 
  Database, 
  Cloud, 
  Wrench, 
  Users,
  CheckCircle2
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Code2,
    color: 'from-blue-500 to-cyan-500',
    skills: ['Angular', 'React', 'HTML5', 'CSS3', 'Bootstrap', 'JavaScript (ES6+)', 'Responsive Design', 'UI/UX Development'],
  },
  {
    title: 'Backend Development',
    icon: Server,
    color: 'from-green-500 to-emerald-500',
    skills: ['Node.js', 'Express.js', 'Python', 'REST APIs', 'Microservices Architecture', 'Authentication & Authorization'],
  },
  {
    title: 'Database & Data',
    icon: Database,
    color: 'from-purple-500 to-violet-500',
    skills: ['PostgreSQL', 'Supabase', 'Oracle Database', 'Data Visualization (amCharts)', 'PDF Generation', 'Python Scripting'],
  },
  {
    title: 'DevOps & Cloud',
    icon: Cloud,
    color: 'from-orange-500 to-amber-500',
    skills: ['Docker', 'AWS (EC2, Route 53, RDS, S3)', 'nginx', 'DNS Configuration', 'SSL Certificates', 'Git & GitHub'],
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    color: 'from-pink-500 to-rose-500',
    skills: ['Supabase', 'n8n (Workflow Automation)', 'Figma'],
  },
  {
    title: 'Soft Skills',
    icon: Users,
    color: 'from-teal-500 to-cyan-500',
    skills: ['Communication', 'Team Coordination', 'Adaptability', 'Time Management', 'Problem Solving', 'Deadline Management'],
  },
];

function SkillCard({ category, index }: { category: typeof skillCategories[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const Icon = category.icon;

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <TiltCard tiltAmount={5} glareEnabled={true}>
        <div className="group relative rounded-2xl glass-card p-6 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 border border-white/5 hover:border-primary/20">
          {/* Header */}
          <div className="flex items-center gap-4 mb-5">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold group-hover:text-gradient transition-all">{category.title}</h3>
          </div>

          {/* Skills Grid */}
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm bg-muted/50 hover:bg-primary/10 hover:text-primary transition-all cursor-default border border-transparent hover:border-primary/20"
                style={{ animationDelay: `${skillIndex * 50}ms` }}
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-secondary" />
                {skill}
              </span>
            ))}
          </div>

          {/* Hover Glow Effect */}
          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10 blur-xl`} />
          
          {/* Corner accent */}
          <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 rounded-tr-2xl rounded-bl-full transition-opacity duration-500`} />
        </div>
      </TiltCard>
    </div>
  );
}

export function Skills() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="skills" className="py-20 md:py-28 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to build scalable, performant applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
