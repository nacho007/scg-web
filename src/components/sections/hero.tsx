import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 to-neutral-800">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)]"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 text-center">
        <div className={cn(
          "transition-all duration-1000 transform",
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        )}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 text-white">
            Transform Your <span className="text-neutral-300">Business</span> Vision
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mb-8">
            Strategic consulting services that drive innovation, optimize operations, 
            and deliver measurable results for forward-thinking organizations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button 
              size="lg" 
              className="bg-white text-neutral-900 hover:bg-neutral-200 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              Schedule Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white text-neutral-900 hover:bg-neutral-200 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              Our Services
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={cn(
        "absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000",
        isLoaded ? "opacity-100" : "opacity-0"
      )}>
        <a 
          href="#about" 
          className="flex flex-col items-center text-white/80 hover:text-white transition-colors"
        >
          <span className="text-sm mb-2">Discover Our Expertise</span>
          <ChevronDown className="animate-bounce" size={24} />
        </a>
      </div>
    </section>
  );
}