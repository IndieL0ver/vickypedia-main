import { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      name: "eCountant",
      role: "Lead UI/UX Designer",
      tools: ["Figma", "Photoshop", "Adobe XD"],
      description: "A fintech mobile app that simplifies personal finance management",
      image: "https://i.imgur.com/GxVMAvO.jpg",
      gradient: "from-primary/20 to-accent/30",
      url: "https://www.behance.net/gallery/229228891/Bookly-Mobile-App-Readers-Diary"
      
    },
    {
      id: 2,
      name: "MediConnect",
      role: "Senior UX Designer",
      tools: ["Sketch", "InVision", "Framer"],
      description: "Healthcare platform connecting patients with specialists",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop&auto=format",
      gradient: "from-accent/20 to-primary-glow/30"
    },
    {
      id: 3,
      name: "EcoTrack",
      role: "Product Designer",
      tools: ["Figma", "ProtoPie", "Lottie"],
      description: "Sustainability tracking app for eco-conscious consumers",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop&auto=format",
      gradient: "from-secondary-warm/30 to-accent-warm/20"
    },
    {
      id: 4,
      name: "LearnSpace",
      role: "UX/UI Designer",
      tools: ["Adobe XD", "Maze", "Hotjar"],
      description: "Educational platform for remote learning experiences",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop&auto=format",
      gradient: "from-primary-soft/30 to-secondary/20"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-section-title mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of projects where thoughtful design meets real-world impact
            </p>
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 100}>
              <div 
                className="group glass-card-hover tilt-hover cursor-pointer relative overflow-hidden"
                onClick={() => setSelectedProject(project.id)}
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden rounded-t-2xl">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`} />
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <a 
  href={project.url} 
  target="_blank" 
  rel="noopener noreferrer"
  className="text-card-title group-hover:text-primary transition-colors underline-offset-4 hover:underline"
>
  {project.name}
</a>

                    <a 
  href={project.url}
  target="_blank"
  rel="noopener noreferrer"
  className="opacity-0 group-hover:opacity-100 transition-opacity text-sm text-primary hover:underline"
>
  View Case Study →
</a>

                  </div>

                  <p className="text-sm text-primary/70 mb-2">{project.role}</p>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <Badge 
                        key={tool} 
                        variant="secondary" 
                        className="text-xs bg-secondary-warm/50 hover:bg-secondary-warm/70 transition-colors"
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Case Study Preview */}
        {selectedProject && (
          <ScrollReveal>
            <div className="glass-card p-8 mt-12">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-semibold text-primary">
                  {projects.find(p => p.id === selectedProject)?.name} Case Study
                </h3>
                <Button 
                  variant="ghost" 
                  onClick={() => setSelectedProject(null)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  ✕
                </Button>
              </div>
              
              <div className="grid md:grid-cols-5 gap-8">
                {["Problem", "Process", "Wireframes", "Prototype", "Final UI"].map((section, index) => (
                  <div key={section} className="text-center group cursor-pointer">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                      <span className="text-primary font-semibold">{index + 1}</span>
                    </div>
                    <p className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                      {section}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <Button className="btn-primary-glow">
                  View Full Case Study
                </Button>
              </div>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
};