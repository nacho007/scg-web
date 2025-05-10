import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface AboutProps {
  scrollY: number;
}

export function About({ scrollY }: AboutProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const checkIfInView = () => {
      if (!sectionRef.current) return;
      
      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      setIsInView(sectionTop < windowHeight * 0.8);
    };
    
    checkIfInView();
    window.addEventListener('scroll', checkIfInView);
    
    return () => window.removeEventListener('scroll', checkIfInView);
  }, [scrollY]);

  const features = [
    {
      title: "Strategic Planning",
      description: "Develop comprehensive strategies aligned with your business objectives and market opportunities."
    },
    {
      title: "Operational Excellence",
      description: "Optimize processes and systems to enhance efficiency and drive sustainable growth."
    },
    {
      title: "Digital Transformation",
      description: "Navigate the digital landscape with innovative solutions and technology integration."
    },
    {
      title: "Change Management",
      description: "Guide organizations through transitions with proven methodologies and expert support."
    }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="min-h-screen flex items-center py-24 bg-background"
    >
      <div className="container px-4">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold tracking-tight mb-4 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            Our Consulting Approach
          </h2>
          <p className={cn(
            "text-lg text-muted-foreground transition-all duration-700 delay-100",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            We combine industry expertise with innovative methodologies to deliver 
            transformative solutions that create lasting value for our clients. 
            Our collaborative approach ensures strategies are not just developed, 
            but successfully implemented.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className={cn(
                "bg-muted/50 rounded-lg p-6 transition-all duration-700",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                isInView ? `delay-${(index + 2) * 100}` : ""
              )}
            >
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}