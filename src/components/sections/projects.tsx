import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const projects = [
    {
      title: "Global Tech Transformation",
      description: "Led digital transformation for a Fortune 500 company, resulting in 40% operational efficiency improvement.",
      image: "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "#"
    },
    {
      title: "Supply Chain Optimization",
      description: "Redesigned supply chain strategy for manufacturing client, reducing costs by 25% and improving delivery times.",
      image: "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "#"
    },
    {
      title: "Market Expansion Strategy",
      description: "Developed and executed market entry strategy for emerging markets, achieving 150% growth in first year.",
      image: "https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "#"
    }
  ];

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="min-h-screen flex items-center py-24 bg-neutral-100 dark:bg-neutral-900"
    >
      <div className="container px-4">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold tracking-tight mb-4 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            Case Studies
          </h2>
          <p className={cn(
            "text-lg text-muted-foreground transition-all duration-700 delay-100",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            Explore how we've helped leading organizations overcome challenges and achieve exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className={cn(
                "overflow-hidden transition-all duration-700 border-neutral-200 dark:border-neutral-800 hover:shadow-lg",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
                isInView ? `delay-${(index + 2) * 100}` : ""
              )}
            >
              <div className="aspect-video w-full overflow-hidden bg-neutral-200 dark:bg-neutral-800">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="outline" className="w-full group">
                  View Case Study
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}