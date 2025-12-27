import { ExternalLink, Github, FileText } from 'lucide-react';

const projects = [
  {
    title: 'Designing a Real-World SOC & EDR Lab',
    description: 'Hands-on guide to architecting a production-grade Security Operations Center with Wazuh SIEM, Shuffle SOAR automation, and TheHive/IRIS for incident response.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
    link: 'https://medium.com/@hsghacking/designing-a-real-world-soc-edr-automation-using-wazuh-shuffle-soar-and-iris-part-1-cbb7beda7451',
    type: 'blog',
    tags: ['SOC', 'SIEM', 'SOAR', 'EDR'],
  },
  {
    title: 'CyberHunt',
    description: 'Comprehensive penetration testing project with vulnerability assessments and exploitation techniques.',
    image: 'https://henilgandhi.com/images/cyberhunt.png',
    link: 'https://github.com/HENILGANDHI/CyberHunt',
    type: 'github',
    tags: ['Pentesting', 'Security', 'Tools'],
  },
  {
    title: 'Web App Security in Web 2.0',
    description: 'Beginner-friendly research paper on web application vulnerabilities and security best practices.',
    image: 'https://henilgandhi.com/images/Web%20Application%20Security.png',
    link: 'https://www.ijser.in/archives/v11i7/SE23725232857.pdf',
    type: 'paper',
    tags: ['Web Security', 'OWASP', 'Research'],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="terminal-text text-sm mb-2 font-mono">{'// PROJECTS & PAPERS'}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured <span className="text-gradient-cyber">Work</span>
          </h2>
          <div className="section-divider max-w-xs mx-auto" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`fade-in-up delay-${(index + 1) * 100} cyber-card group overflow-hidden`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  {project.type === 'github' ? (
                    <Github className="w-4 h-4 text-primary" />
                  ) : (
                    <FileText className="w-4 h-4 text-primary" />
                  )}
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    {project.type === 'github' ? 'Project' : 'Research Paper'}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium"
                >
                  View {project.type === 'github' ? 'on GitHub' : project.type === 'blog' ? 'Article' : 'Paper'}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
