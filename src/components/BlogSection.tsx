import { ArrowRight, BookOpen } from 'lucide-react';

const blogs = [
  {
    title: 'Landing My First Cybersecurity Internship in USA',
    description: 'From rejections to results - my journey to landing my first cybersecurity internship.',
    image: 'https://henilgandhi.com/images/writeup.png',
    link: 'https://medium.com/@hsghacking/from-rejections-to-results-landing-my-first-cybersecurity-internship-in-usa-285eea628a9a',
    platform: 'Medium',
  },
  {
    title: 'Home SOC & EDR Automation Lab',
    description: 'Designing a real-world SOC & EDR automation using Wazuh, Shuffle SOAR, and Iris.',
    image: 'https://henilgandhi.com/images/home_soc_lab.png',
    link: 'https://medium.com/@hsghacking/designing-a-real-world-soc-edr-automation-using-wazuh-shuffle-soar-and-iris-part-1-cbb7beda7451',
    platform: 'Medium',
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="relative py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="terminal-text text-sm mb-2 font-mono">{'// BLOG'}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Latest <span className="text-gradient-cyber">Articles</span>
          </h2>
          <div className="section-divider max-w-xs mx-auto" />
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {blogs.map((blog, index) => (
            <a
              key={blog.title}
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`fade-in-up delay-${(index + 1) * 100} cyber-card group block overflow-hidden`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium backdrop-blur-sm">
                    {blog.platform}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    Article
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {blog.description}
                </p>
                <div className="flex items-center gap-2 text-primary font-medium">
                  Read More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
