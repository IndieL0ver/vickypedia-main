import { ScrollReveal } from './ScrollReveal';
import { Button } from '@/components/ui/button';

export const ContactSection = () => {
  const contactMethods = [
    {
      platform: "Email",
      handle: "tiwovictorious@gmail.com",
      action: "Send a message",
      icon: "✉️",
      gradient: "from-primary/20 to-accent/30",
      link: "mailto:tiwovictorious@gmail.com"
    },
    {
      platform: "Substack",
      handle: "@kiki510264",
      action: "Read my thoughts",
      icon: "✍️",
      gradient: "from-secondary-warm/30 to-accent-warm/20",
      link: "https://substack.com/@kiki510264"
    }
  ];

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-section-title mb-6">Let's Create Something Beautiful</h2>
          <p className="text-lg text-muted-foreground mb-4">
            Whether you have a project in mind or just want to chat about design
          </p>
          <p className="text-serif-accent text-xl mb-16">
            I'd love to hear from you
          </p>
        </ScrollReveal>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <ScrollReveal key={method.platform} delay={index * 150}>
              <div className="glass-card-hover group text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${method.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{method.icon}</span>
                </div>

                <h3 className="text-card-title mb-2 group-hover:text-primary transition-colors">
                  {method.platform}
                </h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {method.handle}
                </p>

                {method.link ? (
                  <a 
                    href={method.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-glow transition-colors text-sm"
                  >
                    {method.action} →
                  </a>
                ) : (
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-primary hover:text-primary-glow transition-colors"
                  >
                    {method.action} →
                  </Button>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA Section */}
        <ScrollReveal delay={600}>
          <div className="glass-card p-12 bg-gradient-to-br from-primary/5 to-accent/10">
            <h3 className="text-2xl font-semibold mb-4 text-primary">
              Ready to start your next project?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm currently available for new opportunities and would love to discuss 
              how we can bring your vision to life through thoughtful design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-primary-glow">
                Start a Project
              </Button>
              <Button variant="outline" className="btn-glass">
                Schedule a Call
              </Button>
            </div>
          </div>
        </ScrollReveal>

        {/* Footer */}
        <ScrollReveal delay={800}>
          <div className="mt-16 pt-8 border-t border-border/30">
            <p className="text-muted-foreground text-sm">
              © 2025 Tiwo Victorious. Designed with ♡ and crafted with care.
            </p>
            <p className="text-xs text-muted-foreground/70 mt-2">
              This portfolio itself is a case study in modern web design
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
