import { Button } from '@/components/ui/button';
import { ScrollReveal } from './ScrollReveal';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-hero-gradient" />
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-accent/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-primary-glow/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <ScrollReveal>
          <h1 className="text-hero mb-6 font-sans">
            Victorious Tiwo
          </h1>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <p className="text-xl md:text-2xl text-foreground/80 mb-4 font-light">
            Product & Visual Designer
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={400}>
          <p className="text-serif-accent text-2xl md:text-3xl mb-12">
            creating meaningful digital experiences
          </p>
        </ScrollReveal>

        <ScrollReveal delay={600}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="btn-primary-glow group"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="transition-transform group-hover:scale-105">
                Explore Work
              </span>
            </Button>
            
<a 
  href="https://drive.google.com/file/d/1rSrT1D0pvIAYe7-Gx6HIs3zS5YsWEZ_7/view?usp=sharing" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <Button 
    variant="outline" 
    size="lg" 
    className="btn-glass"
  >
    View Resume
  </Button>
</a>

          </div>
        </ScrollReveal>

        <ScrollReveal delay={800}>
          <div className="mt-16">
            <p className="text-muted-foreground text-sm mb-4">Scroll to discover</p>
            <div className="mx-auto w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};