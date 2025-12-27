import { Terminal, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-primary" />
            <span className="text-gradient-cyber font-semibold">Henil Gandhi</span>
          </div>
          
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} Made with <Heart className="w-4 h-4 text-destructive fill-destructive" /> by Henil Gandhi
          </p>

          <div className="text-sm text-muted-foreground font-mono">
            <span className="text-primary">{'>'}</span> Securing the digital world
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
