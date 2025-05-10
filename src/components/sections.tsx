import { useRef } from 'react';
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