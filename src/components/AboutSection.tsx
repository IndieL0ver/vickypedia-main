import { ScrollReveal } from './ScrollReveal';

export const AboutSection = () => {
  const aboutCards = [
    {
      title: "Philosophy",
      content: "I believe design should be invisible, so intuitive that users focus on their goals, not the interface. Every pixel serves a purpose, every interaction tells a story."
    },
    {
      title: "Process",
      content: "Research-driven design thinking meets rapid prototyping. I validate ideas early, iterate often, and always keep the user at the center of every decision."
    },
    {
      title: "Passion",
      content: "Beyond pixels and wireframes, I'm passionate about creating inclusive experiences that make technology accessible and delightful for everyone."
    }
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-section-title mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A passionate designer with 3+ years of experience transforming complex problems 
              into beautiful, user-centered solutions.
            </p>
          </div>
        </ScrollReveal>

        {/* Horizontal scroll cards */}
        <div className="relative overflow-hidden">
          <div className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide">
            {aboutCards.map((card, index) => (
              <ScrollReveal key={card.title} delay={index * 200}>
                <div className="glass-card-hover min-w-[350px] p-8 flex-shrink-0">
                  <h3 className="text-card-title mb-4 text-primary">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {card.content}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Stats section */}
        <ScrollReveal delay={600}>
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "3", label: "Years Experience" },
              { number: "4+", label: "Platforms Mastered" },
              { number: "100%", label: "Client Retention Rate" }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};