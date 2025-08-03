import { ScrollReveal } from './ScrollReveal';
import { Badge } from '@/components/ui/badge';

export const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      name: "eCountant",
      role: "Lead UI/UX Designer",
      tools: ["Figma", "Photoshop", "Adobe XD"],
      description: "A fintech mobile app that simplifies personal finance management",
      image: "https://i.imgur.com/GxVMAvO.jpg",
      gradient: "from-primary/20 to-accent/30",
      url: "https://www.behance.net/gallery/219470233/eCountant-Rethinking-How-We-Relate-to-Money",
      ctaText: "View Case Study →"
    },
    {
      id: 2,
      name: "Pregnancy Journal",
      role: "Product Designer & Creative Director",
      tools: ["Photoshop", "Adobe Illustrator", "Adobe Indesign"],
      description: "A guided journal for expectant mothers",
      image: "https://i.imgur.com/1wg06yj.jpeg",
      gradient: "from-accent/20 to-primary-glow/30",
      url: "https://a.co/d/fzqwUfy",
      ctaText: "View Book on Amazon →"
    },
    {
      id: 3,
      name: "Interior Digest",
      role: "Product Designer",
      tools: ["Figma", "Photoshop"],
      description: "A platform for discovering interior styles, designers, and curated spaces.",
      image: "https://i.imgur.com/sMsCJ67.jpeg",
      gradient: "from-secondary-warm/30 to-accent-warm/20",
      url: "https://www.behance.net/gallery/231731895/Interior-Digest",
      ctaText: "View on Behance →"
    },
    {
      id: 4,
      name: "UplitED",
      role: "UI/UX Designer",
      tools: ["Adobe XD", "Notion"],
      description: "Designed for adult learners to learn on their own terms",
      image: "https://i.imgur.com/DxxCGcb.jpeg",
      gradient: "from-primary-soft/30 to-secondary/20",
      url: "https://example.com/learnspace",
      ctaText: "Coming Soon... →"
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
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 100}>
              <div 
                className="group glass-card-hover tilt-hover cursor-pointer relative overflow-hidden"
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
                      {project.ctaText || "View Case Study →"}
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

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
