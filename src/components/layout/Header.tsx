
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Navigation items
  const navItems = [
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-midnight-blue/90 backdrop-blur-md shadow-sm py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/c265baf8-202a-4e9b-b2d1-37e882956787.png" 
              alt="Vortex Solution Logo" 
              className="h-10 md:h-12"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-medium text-sm text-white hover:text-electric-blue transition-colors duration-200 link-hover"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              className="bg-gradient-to-r from-electric-blue to-neon-purple hover:opacity-90 text-white font-medium rounded-md px-6 py-2.5 transition-all duration-300 shadow-md hover:shadow-neon-purple/30"
              onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center p-2 rounded-md text-white hover:text-electric-blue hover:bg-white/10"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-midnight-blue/95 shadow-lg animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10 hover:text-electric-blue"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-3">
                <Button
                  className="w-full bg-gradient-to-r from-electric-blue to-neon-purple hover:opacity-90 text-white font-medium rounded-md px-4 py-2 transition-all duration-300"
                  onClick={() => {
                    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                    setMobileMenuOpen(false);
                  }}
                >
                  Get a Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
