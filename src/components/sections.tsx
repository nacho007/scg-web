import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Projects } from '@/components/sections/projects';
import { Gallery } from '@/components/sections/gallery';
import { Contact } from '@/components/sections/contact';

interface SectionsProps {
  scrollY: number;
}

export function Sections({ scrollY }: SectionsProps) {
  const sectionsRef = useRef<HTMLDivElement>(null);

  // Helper function to determine if an element is in view
  const isInView = (element: HTMLElement, offset = 0) => {
    if (!element) return false;
    
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    return (
      rect.top <= windowHeight - offset &&
      rect.bottom >= 0 + offset
    );
  };

  return (
    <div ref={sectionsRef} className="flex flex-col">
      <Hero />
      <About scrollY={scrollY} />
      <Projects />
      <Gallery />
      <Contact />
    </div>
  );
}