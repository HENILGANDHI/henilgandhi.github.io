import { Trophy, Star } from 'lucide-react';

const honors = [
  {
    title: 'Microsoft Hall of Fame',
    date: 'May 2024',
    image: 'https://henilgandhi.com/images/msrc.jpg',
    highlight: true,
  },
  {
    title: 'Apple Hall of Fame',
    date: 'Dec 2022',
    image: 'https://henilgandhi.com/images/apple.jpg',
    highlight: true,
  },
  {
    title: 'Acknowledgement by Indian Government',
    date: 'Nov 2022',
    image: 'https://henilgandhi.com/images/nciipc.jpeg',
    highlight: true,
  },
  {
    title: 'Certificate of Appreciation - Lenovo',
    date: 'Oct 2022',
    image: 'https://henilgandhi.com/images/lenovo.png',
    highlight: false,
  },
  {
    title: 'Letter of Appreciation - LG',
    date: 'Oct 2022',
    image: 'https://henilgandhi.com/images/lg.png',
    highlight: false,
  },
  {
    title: 'Winner of IISF CTF Competition',
    date: 'Mar 2022',
    image: 'https://henilgandhi.com/images/iisf.jpeg',
    highlight: true,
  },
];

const HonorsSection = () => {
  return (
    <section id="honors" className="relative py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="terminal-text text-sm mb-2 font-mono">{'// HONORS & ACHIEVEMENTS'}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Recognition <span className="text-gradient-cyber">& Awards</span>
          </h2>
          <div className="section-divider max-w-xs mx-auto" />
        </div>

        {/* Honors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {honors.map((honor, index) => (
            <div
              key={honor.title}
              className={`fade-in-up delay-${(index + 1) * 100} cyber-card p-6 group relative ${
                honor.highlight ? 'ring-1 ring-primary/30' : ''
              }`}
            >
              {honor.highlight && (
                <div className="absolute -top-2 -right-2">
                  <Star className="w-6 h-6 text-accent fill-accent" />
                </div>
              )}
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-secondary">
                  <img
                    src={honor.image}
                    alt={honor.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <Trophy className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-xs text-muted-foreground">{honor.date}</span>
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {honor.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HonorsSection;
