import { Award, Calendar } from 'lucide-react';

const certifications = [
  {
    title: 'Microsoft SC-200',
    issuer: 'Microsoft',
    date: 'Jan 2026',
    image: 'https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg',
  },
  {
    title: 'CompTIA Security+',
    issuer: 'CompTIA',
    date: 'Aug 2025',
    image: 'https://henilgandhi.com/images/comptia.png',
  },
  {
    title: 'Certified Appsec Practitioner',
    issuer: 'Secops Group',
    date: 'Jan 2024',
    image: 'https://henilgandhi.com/images/secops.png',
  },
  {
    title: 'IBM Cyber Security Analyst',
    issuer: 'IBM',
    date: 'Mar 2022',
    image: 'https://henilgandhi.com/images/ibm.png',
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="relative py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="terminal-text text-sm mb-2 font-mono">{'// CERTIFICATIONS'}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional <span className="text-gradient-cyber">Credentials</span>
          </h2>
          <div className="section-divider max-w-xs mx-auto" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className={`fade-in-up delay-${(index + 1) * 100} cyber-card p-6 text-center group`}
            >
              <div className="relative w-24 h-24 mx-auto mb-6">
                <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl group-hover:bg-primary/30 transition-colors" />
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="relative w-full h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-xs text-muted-foreground uppercase tracking-wider">
                  {cert.issuer}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                {cert.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
