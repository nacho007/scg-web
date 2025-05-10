import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { AspectRatio } from '@/components/ui/aspect-ratio';

export function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
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

  const images = [
    {
      url: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Team collaboration",
      ratio: 16/9,
    },
    {
      url: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Strategic planning session",
      ratio: 1/1,
    },
    {
      url: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Client meeting",
      ratio: 3/4,
    },
    {
      url: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Data analysis",
      ratio: 4/3,
    },
    {
      url: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Workshop facilitation",
      ratio: 16/9,
    },
    {
      url: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Executive presentation",
      ratio: 1/1,
    },
  ];

  return (
    <section 
      id="gallery" 
      ref={sectionRef}
      className="py-24 bg-background"
    >
      <div className="container px-4">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold tracking-tight mb-4 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            Our Work Environment
          </h2>
          <p className={cn(
            "text-lg text-muted-foreground transition-all duration-700 delay-100",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            Experience the collaborative and innovative atmosphere where we create transformative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div 
              key={index}
              className={cn(
                "transition-all duration-700 overflow-hidden rounded-lg bg-muted cursor-pointer group",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
                isInView ? `delay-${(index + 1) * 50}` : ""
              )}
            >
              <AspectRatio ratio={image.ratio}>
                <img 
                  src={image.url} 
                  alt={image.alt} 
                  className="object-cover w-full h-full transition-all duration-500 group-hover:scale-105"
                />
              </AspectRatio>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}