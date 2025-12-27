import { Mail, Linkedin, Github, Twitter, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const socials = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/henilgandhi08', color: 'hover:text-blue-400' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/HENILGANDHI/', color: 'hover:text-foreground' },
  { icon: Twitter, label: 'Twitter', href: 'https://x.com/hsghenil', color: 'hover:text-sky-400' },
  { icon: Mail, label: 'Email', href: 'mailto:gandhihenil08@gmail.com', color: 'hover:text-primary' },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    window.location.href = `mailto:gandhihenil08@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}`;
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="terminal-text text-sm mb-2 font-mono">{'// CONTACT'}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In <span className="text-gradient-cyber">Touch</span>
          </h2>
          <div className="section-divider max-w-xs mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="fade-in-up">
            <div className="cyber-card p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Let's Connect
              </h3>
              <p className="text-muted-foreground mb-8">
                I'm always open to discussing new opportunities, cybersecurity challenges, 
                or potential collaborations. Feel free to reach out!
              </p>
              
              <div className="flex items-center gap-3 mb-6 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Chicago, IL, USA</span>
              </div>

              <div className="flex gap-4">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground transition-all duration-300 hover:cyber-glow-sm ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="fade-in-up delay-200">
            <form onSubmit={handleSubmit} className="cyber-card p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground resize-none"
                  placeholder="Your message..."
                  required
                />
              </div>
              <button
                type="submit"
                className="btn-cyber w-full flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
