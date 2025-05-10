import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export function Contact() {
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

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-24 bg-neutral-100 dark:bg-neutral-900"
    >
      <div className="container px-4">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold tracking-tight mb-4 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            Start Your Transformation
          </h2>
          <p className={cn(
            "text-lg text-muted-foreground transition-all duration-700 delay-100",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            Schedule a consultation to discuss how we can help your organization achieve its strategic objectives.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <form className="space-y-6">
            <div className={cn(
              "transition-all duration-700 delay-100",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              <Label htmlFor="name">Company Name</Label>
              <Input id="name" placeholder="Your company name" className="mt-1.5" />
            </div>
            
            <div className={cn(
              "transition-all duration-700 delay-200",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              <Label htmlFor="email">Business Email</Label>
              <Input id="email" type="email" placeholder="Your business email" className="mt-1.5" />
            </div>
            
            <div className={cn(
              "transition-all duration-700 delay-300",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              <Label htmlFor="message">Project Details</Label>
              <Textarea 
                id="message" 
                placeholder="Tell us about your business challenges" 
                className="mt-1.5 min-h-32"
              />
            </div>
            
            <div className={cn(
              "transition-all duration-700 delay-400",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              <Button className="w-full">Schedule Consultation</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}