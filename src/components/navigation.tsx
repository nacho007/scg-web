import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '@/components/theme-provider';

interface NavigationProps {
  isTransparent: boolean;
}

export function Navigation({ isTransparent }: NavigationProps) {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Animation only after initial mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out',
        isTransparent 
          ? 'bg-transparent' 
          : 'bg-background/80 backdrop-blur-md shadow-sm'
      )}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a 
          href="#home" 
          className={cn(
            'text-2xl font-medium tracking-tight transition-colors',
            isTransparent ? 'text-white' : 'text-foreground'
          )}
        >
          SCG Partners
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                isTransparent ? 'text-white/90 hover:text-white' : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {link.name}
            </a>
          ))}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className={cn(
              'rounded-full',
              isTransparent ? 'text-white/90 hover:text-white hover:bg-white/10' : ''
            )}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            'md:hidden',
            isTransparent ? 'text-white/90 hover:text-white hover:bg-white/10' : ''
          )}
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'fixed inset-0 bg-background z-40 md:hidden pt-16 transition-all duration-300 ease-in-out',
          isMounted ? (isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none') : 'opacity-0 pointer-events-none'
        )}
      >
        <nav className="container mx-auto px-4 py-8 flex flex-col space-y-6">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button
            variant="outline"
            className="w-full justify-between"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
        </nav>
      </div>
    </header>
  );
}