import { useState, useEffect } from 'react';
import { Sections } from '@/components/sections';
import { Navigation } from '@/components/navigation';
import { ThemeProvider } from '@/components/theme-provider';
import { Footer } from '@/components/footer';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isNavTransparent, setIsNavTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsNavTransparent(window.scrollY < 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider defaultTheme="light" storageKey="ui-theme">
      <div className="min-h-screen bg-background font-sans">
        <Navigation isTransparent={isNavTransparent} />
        <Sections scrollY={scrollY} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;