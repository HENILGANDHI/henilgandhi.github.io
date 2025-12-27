import { Shield, Code, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Core Skills',
    icon: Shield,
    skills: [
      'Ethical Hacking',
      'VAPT',
      'SIEM & SOC Analysis',
      'Web & API Security',
      'OWASP Top 10',
      'Incident Response',
      'Threat Detection & Log Analysis',
      'Risk Management',
      'IDS/IPS',
      'NIST',
    ],
  },
  {
    title: 'Programming Languages',
    icon: Code,
    skills: ['Python', 'Bash / Shell Scripting', 'SQL', 'C/C++'],
  },
  {
    title: 'Tools & Frameworks',
    icon: Wrench,
    skills: [
      'Burp Suite',
      'Nmap',
      'Metasploit',
      'Splunk',
      'Microsoft Defender XDR',
      'SentinelOne',
      'CrowdStrike Falcon',
      'Wireshark',
      'Snort',
      'GitHub',
      'JIRA',
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="terminal-text text-sm mb-2 font-mono">{'// SKILLS'}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technical <span className="text-gradient-cyber">Arsenal</span>
          </h2>
          <div className="section-divider max-w-xs mx-auto" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`fade-in-up delay-${(categoryIndex + 1) * 100} cyber-card p-6`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
