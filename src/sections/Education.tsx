import { useScrollReveal } from '@/hooks/useScrollReveal';
import { GraduationCap, Calendar, Award, MapPin } from 'lucide-react';

const educationData = [
  {
    degree: 'MCA',
    institution: 'S V College of Engineering',
    location: 'Tirupathi',
    score: '91%',
    period: '2017 - 2020',
    icon: '🎓',
  },
  {
    degree: 'B.Sc. Computers',
    institution: 'Balayesu Degree College',
    location: 'Hindupur',
    score: '9.1/10',
    period: '2014 - 2017',
    icon: '📚',
  },
];

function EducationCard({ 
  education, 
  index 
}: { 
  education: typeof educationData[0]; 
  index: number;
}) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`group relative rounded-2xl glass-card p-6 md:p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Icon */}
      <div className="absolute -top-4 left-6 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
        {education.icon}
      </div>

      {/* Content */}
      <div className="pt-6">
        {/* Degree */}
        <h3 className="text-xl font-semibold mb-2">{education.degree}</h3>
        
        {/* Institution */}
        <div className="flex items-center gap-2 text-muted-foreground mb-4">
          <GraduationCap className="h-4 w-4" />
          <span>{education.institution}</span>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Location */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            <span>{education.location}</span>
          </div>

          {/* Period */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 text-secondary" />
            <span>{education.period}</span>
          </div>

          {/* Score */}
          <div className="col-span-2 flex items-center gap-2">
            <Award className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">
              Score: <span className="text-primary">{education.score}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}

export function Education() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="education" className="py-20 md:py-28 lg:py-32 relative">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/4 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Learning
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic background and qualifications
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {educationData.map((education, index) => (
            <EducationCard key={education.degree} education={education} index={index} />
          ))}
        </div>

        {/* Timeline Connector - Desktop Only */}
        <div className="hidden md:block relative mt-12">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-primary to-transparent" />
          <div className="absolute left-1/2 -translate-x-1/2 top-16 w-3 h-3 rounded-full bg-primary" />
        </div>
      </div>
    </section>
  );
}
