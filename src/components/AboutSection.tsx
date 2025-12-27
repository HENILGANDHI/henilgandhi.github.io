import { Swords, ShieldCheck, AlertTriangle, FlaskConical } from 'lucide-react';

const highlights = [
  { icon: Swords, label: 'Offensive Security', description: 'Web & API Security' },
  { icon: ShieldCheck, label: 'Defensive Security', description: 'SOC • SIEM • Threat Detection' },
  { icon: AlertTriangle, label: 'Incident Response', description: 'Detection to Containment' },
  { icon: FlaskConical, label: 'Security Research & CTFs', description: 'Hands-On Attack & Defense Scenarios' },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="terminal-text text-sm mb-2 font-mono">{'// ABOUT ME'}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Who Am <span className="text-gradient-cyber">I?</span>
          </h2>
          <div className="section-divider max-w-xs mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="fade-in-up">
            <div className="cyber-card p-8">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Hello! I'm Henil Gandhi, a passionate <span className="text-primary font-medium">Master's student in Cyber Forensics & Security</span> at the Illinois Institute of Technology. With a strong foundation in both offensive and defensive cybersecurity, enabling effective contribution across the full security lifecycle—from vulnerability identification to threat detection, analysis, and incident response.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With a strong foundation in <span className="text-primary font-medium">Vulnerability Assessment & Penetration Testing (VAPT)</span>, I specialize in uncovering weaknesses in web and API-based applications using industry-standard tools such as <span className="text-primary">Burp Suite, Nmap, Metasploit, Wireshark</span>, and Kali Linux. I enjoy thinking like an attacker to understand real-world exploitation paths and risk exposure.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Equally, I am deeply invested in <span className="text-accent font-medium">Blue Team operations</span>, including SIEM analysis, threat detection, and incident response. I actively build hands-on experience with <span className="text-primary">Microsoft Defender XDR</span> and SOC workflows, strengthening my ability to investigate alerts, correlate signals, and respond to security incidents efficiently.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.label}
                className={`fade-in-up delay-${(index + 1) * 100} cyber-card p-6 text-center group`}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{item.label}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
