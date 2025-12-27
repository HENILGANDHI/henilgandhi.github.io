import { ChevronDown, FileText, Mail } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]" />
      
      <div className="container relative z-10 mx-auto px-6 text-center">
        {/* Profile Image */}
        <div className="fade-in-up mb-8">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-cyber rounded-full blur-lg opacity-50 animate-pulse" />
            <img
              src="https://henilgandhi.com/images/profile.jpg"
              alt="Henil Gandhi"
              className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-primary/50 cyber-glow"
            />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
              <span className="text-xs font-bold text-accent-foreground">✓</span>
            </div>
          </div>
        </div>

        {/* Name */}
        <h1 className="fade-in-up delay-100 text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
          <span className="text-foreground">Hello, I'm </span>
          <span className="text-primary">
            Henil Gandhi
          </span>
        </h1>

        {/* Role with terminal style */}
        <div className="fade-in-up delay-200 mb-8">
          <p className="text-lg md:text-xl text-muted-foreground font-mono">
            <span className="text-primary">&gt;</span>{' '}
            <span className="typing-cursor">
              Cybersecurity Engineer | Ethical Hacker | Risk Management
            </span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="fade-in-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 mb-32">
          <a href="#contact" className="btn-cyber flex items-center gap-2">
            <Mail className="w-5 h-5" />
            Get in Touch
          </a>
          <a
            href="https://drive.google.com/file/d/1bxbBWMhaCpyUH5RrkK-1Mfw9A1Ez5EAg/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cyber-outline flex items-center gap-2"
          >
            <FileText className="w-5 h-5" />
            Resume
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="fade-in-up delay-500 absolute bottom-8 left-0 right-0 flex justify-center">
          <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
